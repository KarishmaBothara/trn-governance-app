import {useCallback, useEffect, useState} from 'react';
import { NavigationItem } from '@/app/page';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { toast } from 'sonner';
// import { useUser } from '../UserContext';
import { ConnectWalletButton } from '../ConnectWalletButton';
import { useAuth } from "@futureverse/auth-react";
import { useTrnApi} from "@futureverse/transact-react";
import { BN, BN_ZERO } from '@polkadot/util';
import { blake2AsHex } from '@polkadot/util-crypto';
import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { TypeDef } from '@polkadot/types/types';
import { getTypeDef, TypeRegistry} from '@polkadot/types/create';
import { createValue } from "@/components/pages/values";
import { isUndefined } from '@polkadot/util';
import { truncateAddress } from "@/lib/utils";
import { stringToU8a } from '@polkadot/util';
import { useCustomExtrinsicBuilder } from "@/hooks/useCustomExtrinsicBuilder";
import { useSigner } from "@/hooks/useSigner";
import LoadingComponent from "@/components/ui/loading";
import {ProposalStatus, ProposalType} from "../../../generated/prisma";

interface SubmitProposalProps {
  onNavigate: (page: NavigationItem) => void;
}
const registry = new TypeRegistry();
type ProposalStep = 'setup' | 'details' | 'review';
const proposalTypes = {
  [ProposalType.Democracy]: {
    label: 'Democracy',
    description: 'Democracy proposal can be created by any user',
    tracks: {
      'FPass': { label: 'FPass', description: 'Use futurepass address' },
      'EOA': { label: 'EOA', description: 'Use eoa address' },
    },
    deposit: '200 ROOT'
  },
  [ProposalType.CouncilMotion]: {
    label: 'Council Propose Motion',
    description: 'Council proposal motion can be created by council members only',
    tracks: {
      'FPass': { label: 'FPass', description: 'Use futurepass address' },
      'EOA': { label: 'EOA', description: 'Use eoa address' },
    },
    deposit: '0 ROOT'
  },
  [ProposalType.CouncilExternalMotion]: {
    label: 'Council External Propose Motion',
    description: 'Council proposal external motion can be created by council members only',
    tracks: {
      'FPass': { label: 'FPass', description: 'Use futurepass address' },
      'EOA': { label: 'EOA', description: 'Use eoa address' },
    },
    deposit: '0 ROOT'
  },
};

interface ProposalData {
  type: keyof typeof proposalTypes;
  title: string;
  summary: string;
  details: string;
  discussionLink: string;
  track: string;
  // timing: string;
  threshold: string;
  builderMode: 'simple' | 'advanced';
  sectionName: string;
  methodName: string;
  rawCallData: string;
  params: any;
}

interface StepIndicatorProps {
  currentStep: ProposalStep;
}

function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { key: 'setup', number: 1, title: 'Setup', isActive: currentStep === 'setup' },
    { key: 'details', number: 2, title: 'Details', isActive: currentStep === 'details' },
    { key: 'review', number: 3, title: 'Review', isActive: currentStep === 'review' },
  ];

  return (
      <div className="flex items-center justify-center gap-2 md:gap-8 mb-8 md:mb-12">
        {steps.map((step, index) => (
            <div key={step.key} className="flex items-center">
              <div className="flex items-center gap-2 md:gap-3">
                <div
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                        step.isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                    }`}
                >
                  {step.number}
                </div>
                <span
                    className={`text-xs md:text-sm font-medium ${
                        step.isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                >
              {step.title}
            </span>
              </div>
              {index < steps.length - 1 && (
                  <div className="w-4 md:w-16 h-px bg-border mx-2 md:mx-6" />
              )}
            </div>
        ))}
      </div>
  );
}

interface HashState {
  encodedHash: string;
  encodedLength: BN | null;
  storageFee: BN | null;
}

export type RawParamValue = unknown;

export interface RawParam {
  isValid: boolean;
  value: RawParamValue;
}

interface ParamDef {
  name: string;
  type: TypeDef;
}

interface CallState {
  extrinsic: {
    fn: SubmittableExtrinsicFunction<'promise'>;
    params: ParamDef[];
  },
  values: RawParam[];
}

const ZERO_HASH = blake2AsHex('');


function getCallState (fn: SubmittableExtrinsicFunction<'promise'>, values: RawParam[] = []): CallState | any {
  if (!fn) return {extrinsic: null, values: []};
  // console.log("*******************");
  // console.log('values::',values);
  // console.log('fn::',fn);
  return {
    extrinsic: {
      fn,
      params: getParams(fn)
    },
    values
  };
}

function getParams ({ meta }: SubmittableExtrinsicFunction<'promise'>): ParamDef[] {
  return meta.args.map(({ name, type, typeName }): { name: string; type: TypeDef } => ({
    name: name.toString(),
    type: {
      ...getTypeDef(type.toString()),
      ...(typeName.isSome
              ? { typeName: typeName.unwrap().toString() }
              : {}
      )
    }
  }));
}

function isValuesValid (params: ParamDef[], values: RawParam[]): boolean {
  return values.reduce((isValid, value): boolean =>
      isValid &&
      !isUndefined(value) &&
      !isUndefined(value.value) &&
      params.length === values.length
  );
}

export function SubmitProposal({ onNavigate }: SubmitProposalProps) {
  // const { isLoggedIn } = useUser();
  const { userSession } = useAuth();
  const signer = useSigner();
  const { trnApi } = useTrnApi();
  const builder = useCustomExtrinsicBuilder({
    signer,
    walletAddress: userSession?.eoa ?? "",
    trnApi,
  });
  const [currentStep, setCurrentStep] = useState<ProposalStep>('setup');
  const [proposalData, setProposalData] = useState<ProposalData>({
    type: 'Democracy',
    title: '',
    summary: '',
    details: '',
    discussionLink: '',
    track: '',
    // timing: '',
    threshold: '0',
    builderMode: 'simple',
    sectionName: '',
    methodName: '',
    rawCallData: '',
    params: []
  });
  const [areaOptions, setAreaOptions] = useState<{label: string, value: string}[]>([]);
  const [methodOptions, setMethodOptions] = useState<{label: string, value: string}[]>([]);
  const [paramOptions, setParamsOptions] = useState<{name: string, type: string, typeName: string, value: RawParam}[]>([]);
  const [methodFn, setMethodFn] = useState<SubmittableExtrinsicFunction<'promise'>>(null);
  const [{ proposalExt, encodedHash, encodedLength, storageFee }, setHash] = useState<HashState>({ proposalExt: null, encodedHash: ZERO_HASH, encodedLength: '', storageFee: null });
  const [{ extrinsic, values }, setDisplay] = useState<CallState>(() => getCallState(methodFn, []));
  const [error, setError] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  // const _setValues = useCallback(
  //     (values: RawParam[]) => {
  //       console.log("Inside set values::");
  //       console.log(values);
  //       setDisplay(({extrinsic}) => ({extrinsic, values}))
  //     },
  //     []
  // );

  useEffect((): void => {
    const values = proposalData.params;
    console.log('proposalData.params::',values);
    if (values.length) {
      console.log('proposalData.params::',values);
      try {
        const section = trnApi.tx[proposalData.sectionName];
        const method = section[proposalData.methodName];
        const params = getParams(method);
        const isValid = isValuesValid(params, values);
        if (!isValid) {
          setError(true);
        } else {
          setError(false);
        }
      } catch (e) {

      }
    }

    // setDisplay(({extrinsic}) => ({extrinsic, values}))
  }, [proposalData.params, proposalData.sectionName, proposalData.methodName]);

  useEffect((): void => {
    if (trnApi?.isReady && proposalData.sectionName && proposalData.methodName && proposalData.params.length) {
      const section = trnApi.tx[proposalData.sectionName];
      const methodFn = section[proposalData.methodName];
      const values = proposalData.params;
      try {
      const { extrinsic } = getCallState(methodFn, values);

      // const proposalExt = extrinsic.fn(...values.map(({ value }) => value));
      const method = extrinsic.fn(...values.map(( value, index ) => {
        const validValue = trnApi.registry.createType(paramOptions[index].type.type, value);
        console.log('validValue:',validValue);
        return validValue;
      }));
      const encodedProposal = method.method.toHex() || '';
      const callHash = method.method.hash.toHex()

      const encodedLength = Math.ceil((encodedProposal.length - 2) / 2);
      const encodedHash = blake2AsHex(encodedProposal);
      console.log('encodedHash::',encodedHash);
      const notePreimageTx = trnApi.tx.preimage.notePreimage(encodedProposal);

      // we currently don't have a constant exposed, however match to Substrate
      const storageFee = ((trnApi.consts.preimage?.baseDeposit || BN_ZERO) as unknown as BN).add(
          ((trnApi.consts.preimage?.byteDeposit || BN_ZERO) as unknown as BN).muln(encodedLength)
      );

      // we currently don't have a constant exposed, however match to Substrate

      setHash({proposalExt: method, encodedHash: encodedHash, encodedLength, storageFee});
      } catch (e) {
        setError(true);
      }
    }
  }, [trnApi, proposalData.sectionName, proposalData.methodName, proposalData.params, paramOptions]);

  const stepContent = {
    setup: {
      title: 'Choose Your Type',
      description: 'Select from General, Financial, or Technical proposals. We\'ll guide you through the appropriate governance track and setup.',
    },
    details: {
      title: 'Add Details',
      description: 'Provide a clear title, summary, and discussion link. Help others understand what you\'re proposing and why.',
    },
    review: {
      title: 'Review & Submit',
      description: 'Double-check everything looks good, then submit your proposal to the network for community voting.',
    },
  };

  const proposalTypes = {
    Democracy: {
      label: 'Democracy',
      description: 'Democracy proposal can be created by any user',
      tracks: {
        'FPass': { label: 'FPass', description: 'Use futurepass address' },
        'EOA': { label: 'EOA', description: 'Use eoa address' },
      },
      deposit: '100 ROOT'
    },
    CouncilMotion: {
      label: 'Council Propose Motion',
      description: 'Council proposal motion can be created by council members only',
      tracks: {
        'FPass': { label: 'FPass', description: 'Use futurepass address' },
        'EOA': { label: 'EOA', description: 'Use eoa address' },
      },
      deposit: '0 ROOT'
    },
    CouncilExternalMotion: {
      label: 'Council External Propose Motion',
      description: 'Council proposal external motion can be created by council members only',
      tracks: {
        'FPass': { label: 'FPass', description: 'Use futurepass address' },
        'EOA': { label: 'EOA', description: 'Use eoa address' },
      },
      deposit: '0 ROOT'
    },
  };

  const timingOptions = {
    'immediate': { label: '0 blocks (immediate)', description: 'Takes effect immediately' },
    '3-hours': { label: '3 hours (recommended delay)', description: 'Standard delay for most proposals' },
    '28800-blocks': { label: '28800 blocks (recommended delay)', description: 'Standard delay for critical changes' },
    'custom': { label: 'Custom', description: 'Set your own timing' },
  };

  useEffect(() => {
    if (trnApi?.isReady && areaOptions.length == 0) {
      const options = Object
          .keys(trnApi.tx)
          .filter((s) => !s.startsWith('$'))
          .sort()
          .filter((n) => Object.keys(trnApi.tx[n]).length)
          .map((value) => ({
            label: value,
            value
          }));
      setAreaOptions(options);
    }
  }, [trnApi, areaOptions]);

  useEffect(() => {
    if (trnApi?.isReady && proposalData.sectionName) {
      const section = trnApi.tx[proposalData.sectionName];
      const actionOptions = Object
          .keys(section)
          .filter((s) => !s.startsWith('$'))
          .sort()
          .map((value) => ({
            label: value,
            value
          }));
      setMethodOptions(actionOptions);
    }
  }, [proposalData.sectionName, trnApi]);

  useEffect(() => {
    if (trnApi?.isReady && proposalData.sectionName && proposalData.methodName) {
      const section = trnApi.tx[proposalData.sectionName];
      const method = section[proposalData.methodName];
      const params = getParams(method);
      // const isValid = isValuesValid(extrinsic.params, values);
      let paramsWithValue;
      // if (isValid) {
        try {
          paramsWithValue = params.map(p => ({...p, value: createValue(registry, p)}));
          console.log('params::', paramsWithValue);
          setParamsOptions(paramsWithValue);
        } catch (e) {

        }
      // }
    }
  }, [proposalData.sectionName, proposalData.methodName, trnApi]);

  //{
  //

  const handleContinue = async () => {
    if (currentStep === 'setup' && proposalData.type) {
      setCurrentStep('details');
    } else if (currentStep === 'details') {
      setCurrentStep('review');
    } else if (currentStep === 'review') {
      // Handle submission
      console.log('Submitting proposal:', proposalData);
      if (!signer || !userSession || !trnApi || !builder) return;
      setIsLoading(true);
      const param = trnApi.registry.createType('FrameSupportPreimagesBounded', {hash_: encodedHash, len: encodedLength}, 2);
      let extrinsic = "";
      if (proposalData.type === "Democracy") {
        extrinsic = trnApi.tx.democracy.propose(param, 100000000);
      } else if (proposalData.type === "CouncilMotion") {
        extrinsic = trnApi.tx.council.propose(proposalData.threshold, proposalExt, encodedLength);
      } else if (proposalData.type === "CouncilExternalMotion") {
        const call = trnApi.tx.democracy.externalProposeMajority(param);
        extrinsic = trnApi.tx.council.propose(proposalData.threshold, call, call.encodedLength );
      }

      const tx = proposalData.track === 'FPass' ? await builder
          .fromExtrinsic(extrinsic)
          .addFuturePass(userSession.futurepass) : await builder.fromExtrinsic(extrinsic);

      const res = await tx.signAndSend({
        onSign: () => {
          toast.info('Signing', {
            description: `Your ${selectedProposalType?.label.toLowerCase()} proposal "${proposalData.title}" has been submitted to the ${JSON.stringify(selectedTrack)} track for community voting.`,
            duration: 5000,
          });
        },
        onSend: async () => {
        }
      });
      console.log("Extrinsic Result::",res);
      const { extrinsicId, transactionHash, result } = res;
      const event = result?.events.find((event) => {
        // if (!("event" in event)) return event.name === "democracy.Proposed";
          switch(proposalData.type) {
              case 'Democracy': return event.event.section === "democracy" && event.event.method === "Proposed";
              case "CouncilMotion":
              case "CouncilExternalMotion":
                return event.event.section === "council" && event.event.method === "Proposed";
          }
      });
      const index = proposalData.type === ProposalType.Democracy ? event?.event.data[0].toNumber() : event?.event.data[1].toNumber();
      console.log("Event1::", event.event.data[0].toString());
      console.log("Event2::", event.event.data[1].toString());
      const hash = proposalData.type === ProposalType.CouncilExternalMotion ? event.event.data[2].toString() : encodedHash;
      if (index) {
        try {
          const {title, discussionLink, summary, details} = proposalData;
          const response = await fetch('/api/proposals', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idx: index,
              extrinsicId,
              title,
              link: discussionLink,
              summary,
              description: details,
              preimage: encodedHash,
              successful: true,
              deposit: proposalTypes[proposalData.type].deposit,
              proposer: proposalData.track === 'FPass' ? userSession.futurepass : userSession.eoa,
              hash: hash,
              proposalType: proposalData.type,
              status: ProposalStatus.Processing,
              section: proposalData.sectionName,
              threshold: parseInt(proposalData.threshold),
              method: proposalData.methodName,
              args: proposalData.params,
              ayePercentage: 0,
              nayPercentage: 100,
              totalVotes: 0
            }),
          });

          const data = await response.json();
          console.log("Data:::", data);

          if (data.success) {
            // Show success toast
            toast.success('Proposal submitted successfully!', {
              description: `Your ${selectedProposalType?.label.toLowerCase()} proposal "${proposalData.title}" has been submitted to the ${JSON.stringify(selectedTrack)} track for community voting.`,
              duration: 5000,
            });
          } else {
            // setError(data.error || 'Something went wrong');
          }
        } catch (error) {
        } finally {
          // Navigate back to proposals page
          setTimeout(() => {
            if (proposalData.type === ProposalType.Democracy) {
              onNavigate('proposals');
            } else {
              onNavigate('council');
            }
          }, 1000);
        }
      }
    }
  };

  const handleBack = () => {
    if (currentStep === 'details') {
      setCurrentStep('setup');
    } else if (currentStep === 'review') {
      setCurrentStep('details');
    } else {
      onNavigate('proposals');
    }
  };

  const canContinue = () => {
    switch (currentStep) {
      case 'setup':
         if (proposalData.type === ProposalType.Democracy)  {
           return !!(proposalData.type && proposalData.track)
         } else {
           return !!(proposalData.type && proposalData.track && proposalData.timing)
         }
      case 'details':
        return !!(proposalData.title && proposalData.summary);
      case 'review':
        return true;
      default:
        return false;
    }
  };

  const selectedProposalType = proposalData.type ? proposalTypes[proposalData.type as keyof typeof proposalTypes] : null;
  const selectedTrack = selectedProposalType && proposalData.track ?
      selectedProposalType.tracks[proposalData.track as keyof typeof selectedProposalType.tracks] : null;

  const getDefaultTiming = () => {
    if (proposalData.type === 'technical') {
      return '3-hours';
    }
    return '28800-blocks';
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'setup':
        return (
            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-2">Setup Your Proposal</h2>
                <div className="w-full h-px bg-border mb-6" />
                <p className="text-muted-foreground">
                  {'Start by choosing what type of proposal you want to make. We\'ll help guide you through the right settings and requirements.'}
                </p>
              </div>

              {/* Proposal Type Selection */}
              <div className="space-y-3">
                <label className="text-sm text-foreground">
                  What type of proposal are you making?
                </label>
                <Select
                    value={proposalData.type}
                    onValueChange={(value) => {
                      setProposalData({
                        ...proposalData,
                    type: value as keyof typeof proposalTypes,
                        track: '',
                        timing: getDefaultTiming()
                      });
                    }}
                >
                  <SelectTrigger className="bg-input-background border-border text-foreground">
                    <SelectValue placeholder="Choose proposal type">
                      {proposalData.type ? proposalTypes[proposalData.type]?.label : null}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(proposalTypes).map(([key, type]) => (
                        <SelectItem key={key} value={key}>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </div>
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Governance Track Selection */}
              {proposalData.type && (
                  <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                  >
                    <label className="text-sm text-foreground">
                      Select account to create your proposal?
                    </label>
                    <Select
                        value={proposalData.track}
                        onValueChange={(value) => setProposalData({...proposalData, track: value})}
                    >
                      <SelectTrigger className={`bg-input-background border text-foreground ${
                          proposalData.track ? 'border-blue-500' : 'border-border'
                      }`}>
                        <SelectValue placeholder="Choose account">
                      {proposalData.track && selectedProposalType &&
                      proposalData.track in selectedProposalType.tracks
                          ? (selectedProposalType.tracks as any)[proposalData.track]?.label
                          : null}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {selectedProposalType && Object.entries(selectedProposalType.tracks).map(([key, track]) => (
                            <SelectItem key={key} value={key}>
                              <div>
                                <div className="font-medium">{track.label}</div>
                                <div className="text-xs text-muted-foreground">{track.description}</div>
                              </div>
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
              )}

              {/* Timing Selection */}
              {proposalData.type !== 'Democracy' && (
                  <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <label className="text-sm text-foreground">
                      Enter threshold
                    </label>
                    {/*<div className="flex gap-3">*/}
                    {/*  <Select*/}
                    {/*      value={proposalData.timing}*/}
                    {/*      onValueChange={(value) => setProposalData({...proposalData, timing: value})}*/}
                    {/*  >*/}
                    {/*    <SelectTrigger className="bg-input-background border-border text-foreground flex-1">*/}
                    {/*      <SelectValue placeholder="Choose timing">*/}
                    {/*    {proposalData.timing && proposalData.timing in timingOptions*/}
                    {/*        ? timingOptions[proposalData.timing as keyof typeof timingOptions]?.label*/}
                    {/*        : null}*/}
                    {/*      </SelectValue>*/}
                    {/*    </SelectTrigger>*/}
                    {/*    <SelectContent>*/}
                    {/*      {Object.entries(timingOptions).map(([key, timing]) => (*/}
                    {/*          <SelectItem key={key} value={key}>*/}
                    {/*            <div>*/}
                    {/*              <div className="font-medium">{timing.label}</div>*/}
                    {/*              <div className="text-xs text-muted-foreground">{timing.description}</div>*/}
                    {/*            </div>*/}
                    {/*          </SelectItem>*/}
                    {/*      ))}*/}
                    {/*    </SelectContent>*/}
                    {/*  </Select>*/}
                    {/*  <Button variant="outline" className="px-6">*/}
                    {/*    Customize*/}
                    {/*  </Button>*/}
                    {/*</div>*/}
                    {/*{proposalData.timing === 'custom' && (*/}
                        <Input
                            value={proposalData.threshold}
                            onChange={(e) => setProposalData({...proposalData, threshold: e.target.value})}
                            placeholder="0"
                            className="bg-input-background border-border text-foreground"
                        />
                    {/*)}*/}
                  </motion.div>
              )}

              {/* Builder Mode Selection */}

                  <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <div className="flex gap-2">
                      <Button
                          variant={proposalData.builderMode === 'simple' ? 'default' : 'outline'}
                          onClick={() => setProposalData({...proposalData, builderMode: 'simple'})}
                          className="flex-1"
                      >
                        Simple Builder
                      </Button>
                      <Button
                          variant={proposalData.builderMode === 'advanced' ? 'default' : 'outline'}
                          onClick={() => setProposalData({...proposalData, builderMode: 'advanced'})}
                          className="flex-1"
                      >
                        Advanced Mode
                      </Button>
                    </div>

                    {proposalData.builderMode === 'simple' && (
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                          <p className="text-sm text-muted-foreground">
                            Choose what your proposal will do from the available options below.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm text-foreground">Area of Change</label>
                              <Select
                                  value={proposalData.sectionName}
                                  onValueChange={(value) => setProposalData({...proposalData, sectionName: value, methodName: '', params: []})}
                              >
                                <SelectTrigger className="bg-input-background border-border text-foreground">
                                  <SelectValue placeholder="Select area" />
                                </SelectTrigger>
                                <SelectContent>
                                  {areaOptions.map((area) => (
                                      <SelectItem key={area.value} value={area.value}>{area.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm text-foreground">Specific Action</label>
                              <Select
                                  value={proposalData.methodName}
                                  onValueChange={(value) => setProposalData({...proposalData, methodName: value, params: []})}
                              >
                                <SelectTrigger className="bg-input-background border-border text-foreground">
                                  <SelectValue placeholder="Select action" />
                                </SelectTrigger>
                                <SelectContent>
                                  {methodOptions.map((action) => (
                                      <SelectItem key={action.value} value={action.value}>{action.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-4">
                              <label className="text-sm text-foreground">Add Parameters</label>

                              <div className="space-y-4">
                                {paramOptions.map(({name/*, type*/,value, typeName}, index) => (
                                    // <SelectItem key={action.value} value={action.value}>{action.label}</SelectItem>
                                  <div className="space-y-2" key={name}>
                                    <label className="text-sm text-foreground">{name}</label>
                                    <Input
                                        key={name}
                                        value={proposalData.params[index] ? proposalData.params[index] : value.value ? value.value : ""}
                                        onChange={(e) => {
                                          const newParams = [...proposalData.params];
                                          newParams[index] = e.target.value;
                                          setProposalData({...proposalData, params: newParams})
                                        }}
                                        placeholder={typeName}
                                        className="bg-input-background border-border text-foreground"
                                    />
                                  </div>
                                  ))}
                              </div>
                            </div>


                          </div>
                        </motion.div>
                    )}

                    {proposalData.builderMode === 'advanced' && (
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                          <div>
                            <h4 className="text-foreground mb-2">Advanced: Raw Call Data</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              For experienced users: paste the SCALE-encoded call data directly.
                            </p>
                            <Textarea
                                value={proposalData.rawCallData}
                                onChange={(e) => setProposalData({...proposalData, rawCallData: e.target.value})}
                                placeholder="Paste SCALE-encoded call (no 0x prefix needed)"
                                className="bg-input-background border-border text-foreground font-mono min-h-24"
                            />
                          </div>
                        </motion.div>
                    )}
                  </motion.div>

            </div>
        );

      case 'details':
        return (
            <div className="space-y-6">
              <h2 className="text-foreground">Add Proposal Details</h2>

              <p className="text-muted-foreground">
                Provide comprehensive information about your proposal to help the community
                understand and evaluate it effectively.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-foreground">Proposal Title</label>
                  <Input
                      value={proposalData.title}
                      onChange={(e) => setProposalData({...proposalData, title: e.target.value})}
                      placeholder="Enter a clear, descriptive title"
                      className="bg-input-background border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-foreground">Summary</label>
                  <Textarea
                      value={proposalData.summary}
                      onChange={(e) => setProposalData({...proposalData, summary: e.target.value})}
                      placeholder="Provide a brief summary of your proposal (200-500 characters)"
                      className="bg-input-background border-border text-foreground min-h-24"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-foreground">Detailed Description</label>
                  <Textarea
                      value={proposalData.details}
                      onChange={(e) => setProposalData({...proposalData, details: e.target.value})}
                      placeholder="Provide detailed information about your proposal, including rationale, implementation details, and expected outcomes"
                      className="bg-input-background border-border text-foreground min-h-32"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-foreground">Discussion Link</label>
                  <Input
                      value={proposalData.discussionLink}
                      onChange={(e) => setProposalData({...proposalData, discussionLink: e.target.value})}
                      placeholder="https://forum.rootnetwork.io/..."
                      className="bg-input-background border-border text-foreground"
                  />
                </div>
              </div>
            </div>
        );

      case 'review':
        return (
            <div className="space-y-6">
              <h2 className="text-foreground">Review Your Proposal</h2>

              <p className="text-muted-foreground">
                Please review all details carefully before submitting. Once submitted,
                your proposal will be visible to the community for voting.
              </p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-foreground">Proposal Configuration</h4>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-blue-500/20 text-blue-400 text-[6px] px-1.5 py-0.5">
                      {selectedProposalType?.label}
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-400 text-[6px] px-1.5 py-0.5">
                    {(selectedTrack as any)?.label || 'No'} Track
                    </Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400 text-[6px] px-1.5 py-0.5">
                      {proposalData.builderMode === 'simple' ? 'Simple Builder' : 'Advanced Mode'}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-foreground">Title</h4>
                  <p className="text-foreground">{proposalData.title}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-foreground">Summary</h4>
                  <p className="text-foreground">{proposalData.summary}</p>
                </div>

                {proposalData.details && (
                    <div className="space-y-2">
                      <h4 className="text-foreground">Details</h4>
                      <p className="text-foreground">{proposalData.details}</p>
                    </div>
                )}

                {proposalData.discussionLink && (
                    <div className="space-y-2">
                      <h4 className="text-foreground">Discussion Link</h4>
                      <a
                          href={proposalData.discussionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                      >
                        {proposalData.discussionLink}
                      </a>
                    </div>
                )}

                {proposalData.builderMode === 'advanced' && proposalData.rawCallData && (
                    <div className="space-y-2">
                      <h4 className="text-foreground">Raw Call Data</h4>
                      <div className="bg-muted/30 rounded p-3 font-mono text-sm text-foreground break-all">
                        {proposalData.rawCallData}
                      </div>
                    </div>
                )}
              </div>
            </div>
        );

      default:
        return null;
    }
  };

  const renderCallPreview = () => {
    if (!proposalData.type) {
      return (
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Choose a proposal type to get started
            </p>
          </div>
      );
    }

    return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Estimated weight</p>
              <p className="text-sm text-foreground">2,500,000,000</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Transaction fee</p>
              <p className="text-sm text-foreground">0.01 ROOT</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Deposit required</p>
              <p className="text-sm text-foreground">{selectedProposalType?.deposit || '—'}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Pre-image byte length</p>
              <p className="text-sm text-foreground">{encodedLength || '0'}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Call hash</p>
              <p className="text-sm text-foreground font-mono">${truncateAddress(encodedHash)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Decoded call</p>
              <p className="text-sm text-foreground">{proposalData.sectionName}.{proposalData.methodName}({proposalData.params.join(',')})</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <Badge className="bg-green-500/20 text-green-400 text-[6px] px-1.5 py-0.5">
              {(selectedTrack as any)?.label || 'No Account Selected'}
            </Badge>
          </div>
        </div>
    );
  };

  if (isLoading) {
    return <LoadingComponent />;
  }
  // Show Connect Wallet screen for non-logged-in users
  if (!userSession) {
    return (
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-8">
            <h1 className="text-foreground text-left">Submit a Proposal</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet to submit governance proposals and participate in the community decision-making process.
            </p>
          </div>

          <div className="flex justify-center">
            <ConnectWalletButton className="px-8 py-3" />
          </div>
        </div>
    );
  }

  return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-8">
          <h1 className="text-foreground text-left">Submit a Proposal</h1>

          {/* Step Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(stepContent).map(([key, content]) => (
                <Card
                    key={key}
                    className={`bg-card border transition-colors ${
                        currentStep === key ? 'border-primary/30' : 'border-border'
                    }`}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3 text-left">
                      <h4 className="text-foreground">{content.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed text-left">
                        {content.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {renderStepContent()}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button
                        variant="outline"
                        onClick={handleBack}
                        className="text-muted-foreground hover:text-foreground"
                    >
                      Back
                    </Button>
                    <Button
                        onClick={handleContinue}
                        disabled={!canContinue()}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                    >
                      {currentStep === 'review' ? 'Submit Proposal' : 'Continue'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call Preview Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-foreground">Call Preview</h3>
                  {renderCallPreview()}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
}
