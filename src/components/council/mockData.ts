// import { Motion, CouncilMember, CancellationMotion } from './types';
//
// export const mockMotions: Motion[] = [
//   {
//     id: '1',
//     title: 'Network Parameter Optimization Motion',
//     status: 'proposed',
//     track: 'Technical',
//     daysLeft: 3,
//     proposalNumber: '#63542',
//     ayePercentage: 60,
//     nayPercentage: 20,
//     votedMembers: 3,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 2,
//     proposer: {
//       name: 'FV Seona',
//     },
//     description: 'This motion proposes critical updates to the network parameter configuration to enhance security and performance of the Root Network infrastructure.',
//     details: `This comprehensive motion addresses several key areas of network optimization:
//
// 1. **Security Enhancements**: Implementation of additional validation layers for cross-chain transactions
// 2. **Performance Improvements**: Optimization of consensus mechanisms to reduce block finalization time
// 3. **Resource Management**: Updated fee structure for more efficient network resource allocation
//
// The proposed changes have been thoroughly tested on the testnet environment and have shown significant improvements in transaction throughput while maintaining network security standards.`,
//     hash: '0x742d35cc6ba34c432d34c432d34c432d34c432d34c43',
//     module: 'Council',
//     call: 'propose',
//     submittedDate: '15 July 2025',
//     discordLink: '#motion-discussion-1',
//     timeline: [
//       { event: 'Motion Proposed', date: '15 July 2025', completed: true },
//       { event: 'Seconding Period', date: 'In Progress', completed: false },
//       { event: 'Voting Period', date: 'Pending', completed: false },
//       { event: 'Execution', date: 'Pending', completed: false }
//     ],
//     motionDurationHours: 120, // 5 days maximum
//     remainingTimeMs: 3 * 24 * 60 * 60 * 1000, // 3 days remaining
//     votesNeededToPass: 3, // Majority of 5 council members
//     userVote: null,
//     canCancel: false
//   },
//   {
//     id: '2',
//     title: 'Treasury Budget Allocation Motion',
//     status: 'proposed',
//     track: 'Treasury',
//     daysLeft: 2,
//     proposalNumber: '#63543',
//     ayePercentage: 40,
//     nayPercentage: 40,
//     votedMembers: 2,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 1,
//     proposer: {
//       name: 'Maria Rodriguez',
//     },
//     description: 'Motion to allocate treasury funds for Q4 ecosystem development and community initiatives.',
//     details: `This motion requests approval for the quarterly treasury allocation focusing on:
//
// - **Developer Grants Program**: 500,000 ROOT for incentivizing dApp development
// - **Community Events**: 200,000 ROOT for conferences and meetups
// - **Marketing Initiatives**: 300,000 ROOT for brand awareness campaigns
// - **Infrastructure**: 150,000 ROOT for network infrastructure improvements
//
// Total requested allocation: 1,150,000 ROOT`,
//     hash: '0x8f2e94a7b3d1c5e6f8a9b2c4d7e1f3a6b9c2d5e8f1a4',
//     module: 'Treasury',
//     call: 'spend',
//     submittedDate: '16 July 2025',
//     discordLink: '#treasury-discussion',
//     timeline: [
//       { event: 'Motion Proposed', date: '16 July 2025', completed: true },
//       { event: 'Seconding Period', date: 'In Progress', completed: false },
//       { event: 'Voting Period', date: 'Pending', completed: false },
//       { event: 'Execution', date: 'Pending', completed: false }
//     ],
//     motionDurationHours: 120, // 5 days maximum
//     remainingTimeMs: 2 * 24 * 60 * 60 * 1000, // 2 days remaining
//     votesNeededToPass: 3, // Majority of 5 council members
//     userVote: null,
//     canCancel: true // Can be cancelled by proposer or majority
//   },
//   {
//     id: '3',
//     title: 'Emergency Security Protocol Update',
//     status: 'cancelled',
//     track: 'Emergency',
//     daysLeft: 0,
//     proposalNumber: '#63544',
//     ayePercentage: 20,
//     nayPercentage: 40,
//     votedMembers: 3,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 3,
//     proposer: {
//       name: 'David Kim',
//     },
//     description: 'Emergency motion to update security protocols that was cancelled due to implementation conflicts.',
//     motionDurationHours: 24, // Emergency motions have shorter duration (1 day)
//     remainingTimeMs: 0, // Cancelled, no time remaining
//     votesNeededToPass: 3,
//     userVote: null,
//     canCancel: false
//   },
//   {
//     id: '4',
//     title: 'Community Grant Framework Revision',
//     status: 'voting',
//     track: 'Treasury',
//     daysLeft: 1,
//     proposalNumber: '#63545',
//     ayePercentage: 40,
//     nayPercentage: 20,
//     votedMembers: 3,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 3,
//     proposer: {
//       name: 'Maria Rodriguez',
//     },
//     description: 'Revision of the community grant framework to streamline application and approval processes.',
//     motionDurationHours: 120, // 5 days maximum
//     remainingTimeMs: 1.5 * 24 * 60 * 60 * 1000, // 1.5 days remaining
//     votesNeededToPass: 3,
//     userVote: 'aye',
//     canCancel: false
//   },
//   {
//     id: '5',
//     title: 'Proposal title goes here',
//     status: 'proposed',
//     track: 'Track name',
//     daysLeft: 4,
//     proposalNumber: '#63542',
//     ayePercentage: 9,
//     nayPercentage: 9,
//     votedMembers: 4,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 2,
//     proposer: {
//       name: 'FV Seona',
//     },
//     motionDurationHours: 120, // 5 days maximum
//     remainingTimeMs: 4.5 * 24 * 60 * 60 * 1000, // 4.5 days remaining
//     votesNeededToPass: 3,
//     userVote: null,
//     canCancel: false
//   },
//   {
//     id: '6',
//     title: 'Proposal title goes here',
//     status: 'proposed',
//     track: 'Track name',
//     daysLeft: 2,
//     proposalNumber: '#63542',
//     ayePercentage: 9,
//     nayPercentage: 9,
//     votedMembers: 0,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 0,
//     proposer: {
//       name: 'FV Seona',
//     },
//     motionDurationHours: 120, // 5 days maximum
//     remainingTimeMs: 2.3 * 24 * 60 * 60 * 1000, // 2.3 days remaining
//     votesNeededToPass: 3,
//     userVote: null,
//     canCancel: false
//   },
//   {
//     id: '7',
//     title: 'Proposal title goes here',
//     status: 'proposed',
//     track: 'Track name',
//     daysLeft: 1,
//     proposalNumber: '#63542',
//     ayePercentage: 9,
//     nayPercentage: 9,
//     votedMembers: 2,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 1,
//     proposer: {
//       name: 'FV Seona',
//     },
//     motionDurationHours: 120, // 5 days maximum
//     remainingTimeMs: 18 * 60 * 60 * 1000, // 18 hours remaining
//     votesNeededToPass: 3,
//     userVote: null,
//     canCancel: false
//   },
//   {
//     id: '8',
//     title: 'Proposal title goes here',
//     status: 'proposed',
//     track: 'Track name',
//     daysLeft: 0,
//     proposalNumber: '#63542',
//     ayePercentage: 9,
//     nayPercentage: 9,
//     votedMembers: 3,
//     totalMembers: 5,
//     secondsNeeded: 3,
//     secondsReceived: 1,
//     proposer: {
//       name: 'FV Seona',
//     },
//     motionDurationHours: 120, // 5 days maximum
//     remainingTimeMs: 6 * 60 * 60 * 1000, // 6 hours remaining
//     votesNeededToPass: 3,
//     userVote: null,
//     canCancel: false
//   },
// ];
//
// export const mockCouncilMembers: CouncilMember[] = [
//   {
//     id: '1',
//     name: 'FV Seona',
//     address: '0vndh8..94803',
//     backing: '837K',
//     votes: '200',
//     description: 'Biompatible approach, in which now XC-20s are actual ERC-20 tokens with EVM bytecode, the XCM fee approach was changed to use a we. Active contributor to the Root Network ecosystem with expertise in decentralized governance and technical implementation.',
//     hasDiscord: true,
//     hasTwitter: true,
//     verified: true,
//     stats: {
//       motionsProposed: 12,
//       participation: '95%',
//       termStart: '25 July 2025' // 28-day term, started 25 days ago
//     },
//     votingHistory: [
//       {
//         proposalId: '1',
//         title: 'Treasury Proposal: Marketing Campaign Q4',
//         date: '12 July 2025',
//         vote: 'aye',
//         track: 'Treasury'
//       },
//       {
//         proposalId: '2',
//         title: 'Runtime Upgrade: Staking Module Enhancement',
//         date: '10 July 2025',
//         vote: 'aye',
//         track: 'Tech Committee'
//       },
//       {
//         proposalId: '3',
//         title: 'Governance Parameter Update: Voting Period Extension',
//         date: '8 July 2025',
//         vote: 'nay',
//         track: 'Governance'
//       },
//       {
//         proposalId: '4',
//         title: 'Council Motion: Emergency Security Fix',
//         date: '5 July 2025',
//         vote: 'aye',
//         track: 'Emergency'
//       },
//       {
//         proposalId: '5',
//         title: 'Treasury Proposal: Developer Grants Program',
//         date: '3 July 2025',
//         vote: 'aye',
//         track: 'Treasury'
//       }
//     ],
//     recentMotions: [
//       {
//         id: '1',
//         title: 'Treasury Proposal: Community Events Budget',
//         status: 'voting',
//         date: '14 July 2025',
//         track: 'Treasury'
//       },
//       {
//         id: '2',
//         title: 'Council Motion: Network Parameter Adjustment',
//         status: 'passed',
//         date: '12 July 2025',
//         track: 'Council'
//       },
//       {
//         id: '3',
//         title: 'Emergency Security Protocol Update',
//         status: 'cancelled',
//         date: '10 July 2025',
//         track: 'Emergency'
//       }
//     ]
//   },
//   {
//     id: '2',
//     name: 'Alexander Chen',
//     address: '0x123..45678',
//     backing: '624K',
//     votes: '156',
//     description: 'Technical expert specializing in cross-chain infrastructure and protocol development. Focused on ensuring Root Network maintains its cutting-edge technological capabilities.',
//     hasDiscord: true,
//     hasTwitter: false,
//     verified: true,
//     stats: {
//       motionsProposed: 8,
//       participation: '92%',
//       termStart: '25 July 2025' // 28-day term, same cycle
//     },
//     votingHistory: [
//       {
//         proposalId: '6',
//         title: 'Protocol Upgrade: Cross-Chain Bridge Enhancement',
//         date: '11 July 2025',
//         vote: 'aye',
//         track: 'Tech Committee'
//       },
//       {
//         proposalId: '7',
//         title: 'Treasury Proposal: Developer Relations Program',
//         date: '9 July 2025',
//         vote: 'aye',
//         track: 'Treasury'
//       }
//     ],
//     recentMotions: [
//       {
//         id: '4',
//         title: 'Technical Proposal: Runtime Optimization',
//         status: 'passed',
//         date: '13 July 2025',
//         track: 'Tech Committee'
//       }
//     ]
//   },
//   {
//     id: '3',
//     name: 'Maria Rodriguez',
//     address: '0xabc..def99',
//     backing: '445K',
//     votes: '132',
//     description: 'Community advocate with deep expertise in governance processes and treasury management. Committed to transparent and efficient resource allocation.',
//     hasDiscord: true,
//     hasTwitter: true,
//     verified: true,
//     stats: {
//       motionsProposed: 15,
//       participation: '98%',
//       termStart: '25 July 2025' // 28-day term, same cycle
//     },
//     votingHistory: [
//       {
//         proposalId: '8',
//         title: 'Community Grant: Educational Content Initiative',
//         date: '13 July 2025',
//         vote: 'aye',
//         track: 'Treasury'
//       }
//     ],
//     recentMotions: [
//       {
//         id: '5',
//         title: 'Treasury Motion: Quarterly Budget Review',
//         status: 'voting',
//         date: '15 July 2025',
//         track: 'Treasury'
//       }
//     ]
//   },
//   {
//     id: '4',
//     name: 'David Kim',
//     address: '0x789..abc12',
//     backing: '392K',
//     votes: '98',
//     description: 'Security specialist focusing on network resilience and risk management. Advocates for robust security measures and emergency response protocols.',
//     hasDiscord: false,
//     hasTwitter: true,
//     verified: true,
//     stats: {
//       motionsProposed: 6,
//       participation: '89%',
//       termStart: '25 July 2025' // 28-day term, same cycle
//     },
//     votingHistory: [
//       {
//         proposalId: '9',
//         title: 'Security Audit: Smart Contract Review',
//         date: '12 July 2025',
//         vote: 'aye',
//         track: 'Emergency'
//       }
//     ],
//     recentMotions: [
//       {
//         id: '6',
//         title: 'Security Motion: Incident Response Protocol',
//         status: 'proposed',
//         date: '14 July 2025',
//         track: 'Emergency'
//       }
//     ]
//   },
//   {
//     id: '5',
//     name: 'Sarah Thompson',
//     address: '0xfed..543ba',
//     backing: '318K',
//     votes: '87',
//     description: 'Ecosystem development lead with extensive experience in partnership building and strategic initiatives. Focuses on expanding Root Network adoption.',
//     hasDiscord: true,
//     hasTwitter: true,
//     verified: true,
//     stats: {
//       motionsProposed: 9,
//       participation: '94%',
//       termStart: '25 July 2025' // 28-day term, same cycle
//     },
//     votingHistory: [
//       {
//         proposalId: '10',
//         title: 'Partnership Proposal: Ecosystem Integration',
//         date: '11 July 2025',
//         vote: 'aye',
//         track: 'Partnership'
//       }
//     ],
//     recentMotions: [
//       {
//         id: '7',
//         title: 'Ecosystem Motion: Strategic Partnership Framework',
//         status: 'passed',
//         date: '13 July 2025',
//         track: 'Partnership'
//       }
//     ]
//   }
// ];
//
// // Mock cancellation motions - includes both referendum and proposal cancellations
// export const mockCancellationMotions: CancellationMotion[] = [
//   {
//     id: 'cancel-1',
//     referendumId: '800',
//     referendumTitle: 'Runtime Upgrade v1.2.0',
//     proposer: mockCouncilMembers[0], // FV Seona
//     status: 'active',
//     votesFor: 2,
//     votesAgainst: 1,
//     totalMembers: 5,
//     requiredVotes: Math.ceil((5 * 2) / 3), // 2/3 majority = 4 votes
//     remainingTimeMs: 3 * 24 * 60 * 60 * 1000, // 3 days remaining
//     submittedDate: '15 August 2025'
//   },
//   {
//     id: 'cancel-2',
//     referendumId: '801',
//     referendumTitle: 'Treasury Funding for Ecosystem Development',
//     proposer: mockCouncilMembers[3], // David Kim
//     status: 'active',
//     votesFor: 1,
//     votesAgainst: 0,
//     totalMembers: 5,
//     requiredVotes: Math.ceil((5 * 2) / 3), // 2/3 majority = 4 votes
//     remainingTimeMs: 4.5 * 24 * 60 * 60 * 1000, // 4.5 days remaining
//     submittedDate: '16 August 2025'
//   },
//   // Proposal cancellation motions
//   {
//     id: 'cancel-proposal-1',
//     referendumId: '63542', // This matches the proposal ID pattern
//     referendumTitle: 'Treasury Proposal: Marketing Campaign Q4',
//     proposer: mockCouncilMembers[2], // Maria Rodriguez
//     status: 'active',
//     votesFor: 3,
//     votesAgainst: 1,
//     totalMembers: 5,
//     requiredVotes: Math.ceil((5 * 2) / 3), // 2/3 majority = 4 votes
//     remainingTimeMs: 2 * 24 * 60 * 60 * 1000, // 2 days remaining
//     submittedDate: '17 August 2025'
//   },
//   {
//     id: 'cancel-proposal-2',
//     referendumId: '63543',
//     referendumTitle: 'Community Development Fund Allocation',
//     proposer: mockCouncilMembers[1], // Alexander Chen
//     status: 'failed',
//     votesFor: 2,
//     votesAgainst: 3,
//     totalMembers: 5,
//     requiredVotes: Math.ceil((5 * 2) / 3), // 2/3 majority = 4 votes
//     remainingTimeMs: 0, // Motion completed
//     submittedDate: '14 August 2025'
//   }
// ];
