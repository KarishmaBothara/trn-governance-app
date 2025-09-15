'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { GovernanceHub } from '@/components/pages/GovernanceHub';
import { AllProposals } from '@/components/pages/AllProposals';
import { Delegate } from '@/components/pages/Delegate';
import { SubmitProposal } from '@/components/pages/SubmitProposal';
import { ProposalDetail } from '@/components/pages/ProposalDetail';
import { ReferendumDetail } from '@/components/pages/ReferendumDetail';
import { Council } from '@/components/pages/Council';
import { MotionDetail } from '@/components/pages/MotionDetail';
import { Elections } from '@/components/pages/Elections';
import { Portfolio } from '@/components/pages/Portfolio';
import { Staking } from '@/components/pages/Staking';
import { Documentation } from '@/components/pages/Documentation';
import { Toaster } from '@/components/ui/sonner';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Vote } from 'lucide-react';
import { UserProvider } from '@/components/UserContext';

// Convert Figma asset to public path
const backgroundImage = "/assets/governance-background.png";

export type NavigationItem =
    | 'dashboard'
    | 'proposals'
    | 'proposals-referendums'
    | 'delegate'
    | 'submit-proposal'
    | 'proposal-detail'
    | 'referendum-detail'
    | 'council'
    | 'motion-detail'
    | 'elections'
    | 'portfolio'
    | 'staking'
    | 'documentation';

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 3
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -2
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15
};

export default function GovernancePage() {
  const [currentPage, setCurrentPage] = useState<NavigationItem>('dashboard');
  const [selectedProposalId, setSelectedProposalId] = useState<string | null>(null);
  const [selectedMotionId, setSelectedMotionId] = useState<string | null>(null);
  const [proposalsDefaultTab, setProposalsDefaultTab] = useState<'proposals' | 'referendums'>('proposals');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVotingSectionVisible, setIsVotingSectionVisible] = useState(false);
  const [isMotionActionsVisible, setIsMotionActionsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const motionObserverRef = useRef<IntersectionObserver | null>(null);

  const scrollToVoting = () => {
    const votingSection = document.getElementById('voting-section');
    if (votingSection) {
      votingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToMotionActions = () => {
    const motionActionsSection = document.getElementById('motion-actions-section');
    if (motionActionsSection) {
      motionActionsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Set up intersection observer to detect when voting section is visible
  useEffect(() => {
    if (currentPage === 'proposal-detail') {
      // Add delay to ensure the DOM element is rendered after page transition
      const setupObserver = () => {
        const votingSection = document.getElementById('voting-section');

        if (votingSection) {
          observerRef.current = new IntersectionObserver(
              ([entry]) => {
                setIsVotingSectionVisible(entry.isIntersecting);
              },
              {
                threshold: 0.1, // Button disappears when 10% of voting section is visible
                rootMargin: '0px 0px -50px 0px' // Smaller offset for earlier detection
              }
          );

          observerRef.current.observe(votingSection);
        } else {
          // Retry after another short delay if element not found
          setTimeout(setupObserver, 100);
        }
      };

      // Initial delay to allow for page transition animation
      setTimeout(setupObserver, 200);
    }

    // Cleanup observer when page changes or component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [currentPage]);

  // Set up intersection observer for motion actions section
  useEffect(() => {
    if (currentPage === 'motion-detail') {
      const setupMotionObserver = () => {
        const motionActionsSection = document.getElementById('motion-actions-section');

        if (motionActionsSection) {
          motionObserverRef.current = new IntersectionObserver(
              ([entry]) => {
                setIsMotionActionsVisible(entry.isIntersecting);
              },
              {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              }
          );

          motionObserverRef.current.observe(motionActionsSection);
        } else {
          setTimeout(setupMotionObserver, 100);
        }
      };

      setTimeout(setupMotionObserver, 200);
    }

    return () => {
      if (motionObserverRef.current) {
        motionObserverRef.current.disconnect();
        motionObserverRef.current = null;
      }
    };
  }, [currentPage]);

  // Reset voting section visibility when page changes
  useEffect(() => {
    if (currentPage !== 'proposal-detail') {
      setIsVotingSectionVisible(false);
    }
    if (currentPage !== 'motion-detail') {
      setIsMotionActionsVisible(false);
    }
  }, [currentPage]);

  // const handleNavigateToProposals = (defaultTab: 'proposals' | 'referendums' = 'proposals') => {
  //   setProposalsDefaultTab(defaultTab);
  //   setCurrentPage('proposals');
  // };

  const handleNavigateToProposalsReferendums = () => {
    setProposalsDefaultTab('referendums');
    setCurrentPage('proposals');
  };

  const handleNavigation = (page: NavigationItem) => {
    if (page === 'proposals-referendums') {
      handleNavigateToProposalsReferendums();
    } else {
      setCurrentPage(page);
      if (page === 'proposals') {
        setProposalsDefaultTab('proposals');
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <GovernanceHub onNavigate={handleNavigation} onSelectProposal={setSelectedProposalId} />;
      case 'proposals':
      case 'proposals-referendums':
        return <AllProposals onNavigate={handleNavigation} onSelectProposal={setSelectedProposalId} defaultTab={proposalsDefaultTab} />;
      case 'delegate':
        return <Delegate onNavigate={handleNavigation} onSelectProposal={setSelectedProposalId} />;
      case 'submit-proposal':
        return <SubmitProposal onNavigate={handleNavigation} />;
      case 'proposal-detail':
        return <ProposalDetail proposalId={selectedProposalId} onNavigate={handleNavigation} />;
      case 'referendum-detail':
        return <ReferendumDetail referendumId={selectedProposalId} onNavigate={handleNavigation} />;
      case 'council':
        return <Council onNavigate={handleNavigation} onSelectProposal={setSelectedProposalId} onSelectMotion={setSelectedMotionId} />;
      case 'motion-detail':
        return <MotionDetail motionId={selectedMotionId} onNavigate={handleNavigation} />;
      case 'elections':
        // return <Elections onNavigate={handleNavigation} />;
        return <Elections />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigation} />;
        // return <Portfolio onNavigate={handleNavigation} onSelectProposal={setSelectedProposalId} />;
      case 'staking':
        return <Staking />;
      case 'documentation':
        return <Documentation />;
      default:
        return <GovernanceHub onNavigate={handleNavigation} onSelectProposal={setSelectedProposalId} />;
    }
  };

  return (
      <UserProvider>
        <div className="min-h-screen bg-background relative">
          {/* Fixed Global Background - Gradient */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#081017] to-[#09090b] z-0" />

          {/* Fixed Global Background - Blurred Image */}
          <div
              className="fixed bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] blur-[75px] bottom-0 filter h-[2461px] translate-x-[-50%] w-[4237px] z-0"
              style={{
                left: "calc(54.167% - 11.5px)",
                backgroundImage: `url('${backgroundImage}')`,
              }}
          />

          {/* Fixed Sidebar - Desktop Only */}
          <div className="hidden md:block fixed left-0 top-0 h-full w-64 z-20 p-4 pr-0">
            <div className="h-full w-full bg-black/10 backdrop-blur-[40px] border border-border rounded-xl overflow-hidden">
              <Sidebar currentPage={currentPage} onNavigate={handleNavigation} />
            </div>
          </div>

          {/* Mobile Sidebar Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetContent
                side="left"
                className="w-64 p-0 bg-black/10 backdrop-blur-[40px] border-border overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.10)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                }}
            >
              {/* Accessibility: Hidden title and description for screen readers */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu for TRN Governance application
              </SheetDescription>

              <div className="h-full w-full">
                <Sidebar
                    currentPage={currentPage}
                    onNavigate={(page) => {
                      handleNavigation(page);
                      setIsMobileMenuOpen(false);
                    }}
                />
              </div>
            </SheetContent>
          </Sheet>

          {/* Main Content with responsive offset */}
          <div className="md:ml-64 flex flex-col relative z-10">
            <TopBar
                onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
            />
            <main className="flex-1 p-4 md:p-8 max-w-[1440px] mx-auto w-full min-h-screen">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentPage}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition as any}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>

          {/* Mobile Vote Button - Only show on proposal detail page when voting section is not visible */}
          <AnimatePresence>
            {currentPage === 'proposal-detail' && !isVotingSectionVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      opacity: { duration: 0.2 },
                      y: { duration: 0.3 },
                      scale: { duration: 0.2 }
                    }}
                    className="md:hidden fixed bottom-4 left-4 right-4 z-30"
                >
                  <Button
                      onClick={scrollToVoting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/80 py-4 shadow-lg"
                  >
                    <Vote size={16} className="mr-2" />
                    Vote on Proposal
                  </Button>
                </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Motion Actions Button - Only show on motion detail page when actions section is not visible */}
          <AnimatePresence>
            {currentPage === 'motion-detail' && !isMotionActionsVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      opacity: { duration: 0.2 },
                      y: { duration: 0.3 },
                      scale: { duration: 0.2 }
                    }}
                    className="md:hidden fixed bottom-4 left-4 right-4 z-30"
                >
                  <Button
                      onClick={scrollToMotionActions}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/80 py-4 shadow-lg"
                  >
                    <Vote size={16} className="mr-2" />
                    Council Actions
                  </Button>
                </motion.div>
            )}
          </AnimatePresence>

          {/* Global Toast Container */}
          <Toaster
              position="top-right"
              theme="dark"
              toastOptions={{
                style: {
                  background: 'rgba(255, 255, 255, 0.10)',
                  border: '1px solid rgba(255, 255, 255, 0.10)',
                  color: 'rgba(250, 250, 250, 1.00)',
                  fontFamily: 'Aeonik, sans-serif',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                },
              }}
          />
        </div>
      </UserProvider>
  );
}
