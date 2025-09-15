import { useState, useEffect } from 'react';
import { NavigationItem } from '@/app/page';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
// import { Card, CardContent } from '../ui/card';
// import { Progress } from '../ui/progress';
import { ProposalCard } from '../ProposalCard';
// import { Search, Filter, X, ArrowUpDown, Clock, ArrowUp, ArrowDown, Vote, Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import { Search, Filter, X, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
const leftIcon = "/../../imports/left_icon.png";

interface AllProposalsProps {
  onNavigate: (page: NavigationItem) => void;
  onSelectProposal: (id: string) => void;
  defaultTab?: 'proposals' | 'referendums';
}

// Available filter options
const TRACK_OPTIONS = ['All Tracks', 'Root', 'Treasurer', 'Fellowship', 'OpenGov', 'Staking'];
const STATUS_OPTIONS = ['All Status', 'active', 'passed', 'rejected', 'fast-tracked'];
const REFERENDUM_STATUS_OPTIONS = ['All Status', 'Active', 'Passed', 'Rejected', 'Cancelled', 'Fast-Tracked'];

type TabType = 'proposals' | 'referendums';

interface Referendum {
  id: string;
  title: string;
  status: 'Active' | 'Passed' | 'Rejected' | 'Cancelled' | 'Fast-Tracked';
  track: string;
  proposer: string;
  proposerAvatar: string;
  ayeVotes: number;
  nayVotes: number;
  ayePercentage: number;
  nayPercentage: number;
  conviction: number;
  votingPeriodHours: number;
  enactmentDate: string;
  submittedDate: string;
  bondedAmount: string;
}

// Helper function to get status badge color
const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-blue-500/20 text-blue-400';
    case 'Passed':
      return 'bg-green-500/20 text-green-400';
    case 'Rejected':
      return 'bg-red-500/20 text-red-400';
    case 'Cancelled':
      return 'bg-gray-500/20 text-gray-400';
    case 'Fast-Tracked':
      return 'bg-purple-500/20 text-purple-400';
    default:
      return 'bg-muted/20 text-muted-foreground';
  }
};

// Mock proposal data matching the shared component interface - Updated with 28-day cycles
const allProposals = Array.from({ length: 20 }, (_, i) => {
  // Calculate remaining days until next 28-day scheduling window
  const schedulingCycleDays = 28;
  const daysSinceLastSchedule = Math.floor(Math.random() * schedulingCycleDays);
  const daysUntilNextSchedule = schedulingCycleDays - daysSinceLastSchedule;

  return {
    id: `6354${i + 2}`,
    title: 'Proposal title goes here',
    status: i % 4 === 0 ? 'passed' : i % 4 === 1 ? 'active' : i % 4 === 2 ? 'rejected' : 'fast-tracked' as const,
    track: TRACK_OPTIONS[Math.floor(Math.random() * (TRACK_OPTIONS.length - 1)) + 1], // Exclude 'All Tracks'
    aye: Math.floor(Math.random() * 100),
    nay: Math.floor(Math.random() * 100),
    daysLeft: daysUntilNextSchedule, // Days until next 28-day scheduling cycle
    proposer: 'FV Seona',
    proposerAvatar: leftIcon,
  };
});

// Mock referendum data - Updated with 28-day voting period and cancelled status support
const allReferendums: Referendum[] = Array.from({ length: 15 }, (_, i) => {
  const ayeVotes = Math.floor(Math.random() * 5000000) + 1000000;
  const nayVotes = Math.floor(Math.random() * 3000000) + 500000;
  const totalVotes = ayeVotes + nayVotes;
  const ayePercentage = Math.round((ayeVotes / totalVotes) * 100);
  const nayPercentage = 100 - ayePercentage;

  // Calculate 28-day voting period remaining time
  const submittedDaysAgo = Math.floor(Math.random() * 28); // 0-28 days ago
  const votingPeriodDays = 28; // 28-day voting period
  const daysRemaining = Math.max(0, votingPeriodDays - submittedDaysAgo);
  const hoursRemaining = daysRemaining * 24 + Math.floor(Math.random() * 24);

  // Some referendums might be cancelled by council
  const isCancelled = i === 2 || i === 7; // Mock some cancelled referendums

  return {
    id: `${800 + i}`,
    title: i === 0 ? 'Runtime Upgrade v1.2.0' :
           i === 1 ? 'Treasury Funding for Ecosystem Development' :
           i === 2 ? 'Validator Set Expansion Proposal' :
           i === 3 ? 'Governance Parameter Updates' :
           `Referendum ${i + 1}: System Enhancement`,
    status: isCancelled ? 'Cancelled' :
            hoursRemaining === 0 ? (Math.random() > 0.5 ? 'Passed' : 'Rejected') :
            i % 5 === 0 ? 'Active' : i % 5 === 1 ? 'Passed' : i % 5 === 2 ? 'Rejected' : i % 5 === 3 ? 'Cancelled' : 'Fast-Tracked',
    track: TRACK_OPTIONS[Math.floor(Math.random() * (TRACK_OPTIONS.length - 1)) + 1],
    proposer: i % 3 === 0 ? 'FV Seona' : i % 3 === 1 ? 'Alexander Chen' : 'Maria Rodriguez',
    proposerAvatar: leftIcon,
    ayeVotes,
    nayVotes,
    ayePercentage,
    nayPercentage,
    conviction: Math.floor(Math.random() * 6) + 1,
    votingPeriodHours: isCancelled ? 0 : hoursRemaining, // Cancelled referendums have no remaining time
    enactmentDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(), // 30-day enactment delay
    submittedDate: new Date(Date.now() - submittedDaysAgo * 24 * 60 * 60 * 1000).toLocaleDateString(),
    bondedAmount: `${Math.floor(Math.random() * 50) + 10} ROOT`
  };
});

export function AllProposals({ onNavigate, onSelectProposal, defaultTab = 'proposals' }: AllProposalsProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
  const [searchTerm, setSearchTerm] = useState('');

  // Update active tab when defaultTab prop changes
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);
  const [sortBy, setSortBy] = useState('Popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('All Tracks');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const filteredProposals = allProposals.filter((proposal) => {
    // Search filter
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.id.includes(searchTerm) ||
      proposal.proposer.toLowerCase().includes(searchTerm.toLowerCase());

    // Track filter
    const matchesTrack = selectedTrack === 'All Tracks' || proposal.track === selectedTrack;

    // Status filter
    const matchesStatus = selectedStatus === 'All Status' || proposal.status === selectedStatus;

    return matchesSearch && matchesTrack && matchesStatus;
  });

  const filteredReferendums = allReferendums.filter((referendum) => {
    // Search filter
    const matchesSearch = referendum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referendum.id.includes(searchTerm) ||
      referendum.proposer.toLowerCase().includes(searchTerm.toLowerCase());

    // Track filter
    const matchesTrack = selectedTrack === 'All Tracks' || referendum.track === selectedTrack;

    // Status filter (use referendum-specific statuses)
    const matchesStatus = selectedStatus === 'All Status' || referendum.status === selectedStatus;

    return matchesSearch && matchesTrack && matchesStatus;
  }).sort((a, b) => {
    // Sort to show active referendums first
    if (a.status === 'Active' && b.status !== 'Active') {
      return -1;
    }
    if (b.status === 'Active' && a.status !== 'Active') {
      return 1;
    }
    // For non-active referendums, maintain original order
    return 0;
  });

  const activeData = activeTab === 'proposals' ? filteredProposals : filteredReferendums;
  const activeCount = activeData.length;

  const itemsPerPage = 10;
  const totalPages = Math.ceil(activeCount / itemsPerPage);

  // Reset to first page when filters or tab changes
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [selectedTrack, selectedStatus, searchTerm, currentPage, totalPages, activeTab]);

  const paginatedData = activeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const clearAllFilters = () => {
    setSelectedTrack('All Tracks');
    setSelectedStatus('All Status');
    setSearchTerm('');
  };

  const activeFiltersCount = [
    selectedTrack !== 'All Tracks',
    selectedStatus !== 'All Status',
    searchTerm !== ''
  ].filter(Boolean).length;

  // Helper function to format time remaining
  const formatTimeRemaining = (hours: number) => {
    if (hours < 24) {
      return `${hours}h`;
    }
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return remainingHours > 0 ? `${days}d ${remainingHours}h` : `${days}d`;
  };

  // Get appropriate status options based on active tab
  const getStatusOptions = () => {
    return activeTab === 'proposals' ? STATUS_OPTIONS : REFERENDUM_STATUS_OPTIONS;
  };

  // Referendum Card Component - Consistent with ProposalCard design
  const ReferendumCard = ({ referendum, onSelect }: { referendum: Referendum, onSelect: () => void }) => {
    const getTrackColor = () /*(track: string)*/ => {
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    };

    return (
      <motion.div
        className="bg-card rounded-xl p-5 shadow-elevation-sm border border-border cursor-pointer"
        onClick={onSelect}
        whileHover={{
          scale: 1.005,
          borderColor: 'rgba(255, 255, 255, 0.6)'
        }}
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="space-y-4">
          {/* Header with badges and meta info */}
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getStatusBadgeClass(referendum.status)}`}>
                {referendum.status}
              </Badge>
              {/*<Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getTrackColor(referendum.track)}`}>*/}
              <Badge className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getTrackColor()}`}>
                {referendum.track}
              </Badge>
            </div>
            <div className="hidden sm:block text-xs text-foreground font-medium">
              {referendum.status === 'Active' && referendum.votingPeriodHours > 0 && `${formatTimeRemaining(referendum.votingPeriodHours)} left`}
              {referendum.status === 'Cancelled' && 'Cancelled by Council'}
              {referendum.status !== 'Active' && referendum.status !== 'Cancelled' && ''} | #{referendum.id}
            </div>
          </div>

          {/* Title */}
          <h4 className="text-foreground">{referendum.title}</h4>

          {/* Vote breakdown and proposer - Only show for non-cancelled */}
          {referendum.status !== 'Cancelled' && (
            <div className="flex items-start justify-between">
              <div className="flex gap-1">
                <div className="flex items-center gap-1">
                  <ArrowUp size={16} className="text-green-400" />
                  <span className="text-xs text-foreground font-medium">{referendum.ayePercentage}% Aye</span>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowDown size={16} className="text-red-400" />
                  <span className="text-xs text-foreground font-medium">{referendum.nayPercentage}% Nay</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${referendum.proposerAvatar})` }}
                />
                <span className="text-xs text-foreground font-medium">{referendum.proposer}</span>
              </div>
            </div>
          )}

          {/* Cancelled referendum info */}
          {referendum.status === 'Cancelled' && (
            <div className="bg-gray-500/10 rounded-lg p-3 border border-gray-500/20">
              <p className="text-xs text-gray-400">This referendum was cancelled by council vote</p>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-foreground">Proposals & Referendums</h1>
      </div>

      {/* Tab Navigation - Consistent with Dashboard style */}
      <div className="border-b border-border">
        <div className="flex gap-2 md:gap-8">
          <Button
            variant="ghost"
            onClick={() => setActiveTab('proposals')}
            className={`pb-2 text-xs md:text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent px-2 md:px-4 ${
              activeTab === 'proposals'
                ? 'text-foreground border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            <span className="hidden sm:inline">Proposals ({filteredProposals.length})</span>
            <span className="sm:hidden">Proposals</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab('referendums')}
            className={`pb-2 text-xs md:text-sm font-medium border-b-2 rounded-none transition-colors hover:bg-transparent px-2 md:px-4 ${
              activeTab === 'referendums'
                ? 'text-foreground border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            <span className="hidden sm:inline">Referendums ({filteredReferendums.length})</span>
            <span className="sm:hidden">Referendums</span>
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search size={18} className="text-muted-foreground" />
          </div>
          <Input
            placeholder="Search item"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-input-background border-border pl-10 text-muted-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex gap-2">
          <Button
            variant={showFilters ? "default" : "outline"}
            className={`px-3 py-2 border-0 relative ${showFilters ? 'bg-primary text-primary-foreground' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="flex items-center gap-1">
              <span className="hidden sm:inline">Filters</span>
              <Filter size={14} />
              {activeFiltersCount > 0 && (
                <Badge className="ml-1 h-4 w-4 p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground">
                  {activeFiltersCount}
                </Badge>
              )}
            </span>
          </Button>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-secondary border-0 text-secondary-foreground w-auto">
              <span className="flex items-center gap-1">
                <span className="hidden sm:inline text-secondary-foreground">Sort by:</span>
                <span className="hidden sm:inline text-primary">{sortBy}</span>
                <ArrowUpDown size={14} className="sm:hidden" />
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Popular">Popular</SelectItem>
              <SelectItem value="Recent">Recent</SelectItem>
              <SelectItem value="Oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-card border border-border rounded-xl p-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground font-medium">Filter {activeTab === 'proposals' ? 'Proposals' : 'Referendums'}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(false)}
              className="h-6 w-6 p-0"
            >
              <X size={14} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Track Filter */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Track</label>
              <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                <SelectTrigger className="bg-input-background border-border text-foreground">
                  <SelectValue placeholder="Select track" />
                </SelectTrigger>
                <SelectContent>
                  {TRACK_OPTIONS.map((track) => (
                    <SelectItem key={track} value={track}>
                      {track}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Status</label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="bg-input-background border-border text-foreground">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {getStatusOptions().map((status) => (
                    <SelectItem key={status} value={status}>
                      {status === 'All Status' ? status : status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters and Clear */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {selectedTrack !== 'All Tracks' && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 text-xs bg-secondary/50 text-secondary-foreground"
                  >
                    Track: {selectedTrack}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedTrack('All Tracks')}
                      className="h-3 w-3 p-0 hover:bg-transparent"
                    >
                      <X size={10} />
                    </Button>
                  </Badge>
                )}
                {selectedStatus !== 'All Status' && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 text-xs bg-secondary/50 text-secondary-foreground"
                  >
                    Status: {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedStatus('All Status')}
                      className="h-3 w-3 p-0 hover:bg-transparent"
                    >
                      <X size={10} />
                    </Button>
                  </Badge>
                )}
                {searchTerm !== '' && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 text-xs bg-secondary/50 text-secondary-foreground"
                  >
                    Search: {searchTerm}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchTerm('')}
                      className="h-3 w-3 p-0 hover:bg-transparent"
                    >
                      <X size={10} />
                    </Button>
                  </Badge>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground text-xs"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Content Grid */}
      {activeCount === 0 ? (
        <div className="text-center py-12">
          <div className="space-y-3">
            <div className="mx-auto w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
              <Search size={24} className="text-muted-foreground" />
            </div>
            <h3 className="text-foreground font-medium">No {activeTab} found</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              No {activeTab} match your current filters. Try adjusting your search terms or filters.
            </p>
            {activeFiltersCount > 0 && (
              <Button
                variant="outline"
                onClick={clearAllFilters}
                className="mt-4"
              >
                Clear all filters
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeTab === 'proposals'
            ? paginatedData.map((proposal: any) => (
                <ProposalCard
                  key={proposal.id}
                  proposal={proposal}
                  onSelect={() => {
                    onSelectProposal(proposal.id);
                    onNavigate('proposal-detail');
                  }}
                />
              ))
            : paginatedData.map((referendum: any) => (
                <ReferendumCard
                  key={referendum.id}
                  referendum={referendum}
                  onSelect={() => {
                    onSelectProposal(referendum.id);
                    onNavigate('referendum-detail');
                  }}
                />
              ))
          }
        </div>
      )}

      {/* Pagination */}
      {activeCount > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 pt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 p-0"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path clipRule="evenodd" d="M11.8466 3.90338C12.1761 4.23288 12.1761 4.76712 11.8466 5.09662L7.94329 9L11.8466 12.9034C12.1761 13.2329 12.1761 13.7671 11.8466 14.0966C11.5171 14.4261 10.9829 14.4261 10.6534 14.0966L6.15338 9.59659C5.82388 9.26708 5.82388 8.73293 6.15338 8.40341L10.6534 3.90338C10.9829 3.57388 11.5171 3.57388 11.8466 3.90338Z" fill="currentColor" fillOpacity="0.72" fillRule="evenodd"/>
          </svg>
        </Button>

        <div className="flex gap-1">
          {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 7) {
              pageNum = i + 1;
            } else if (currentPage <= 4) {
              pageNum = i <= 4 ? i + 1 : i === 5 ? '...' : totalPages;
            } else if (currentPage >= totalPages - 3) {
              pageNum = i <= 1 ? i + 1 : i === 2 ? '...' : totalPages - (6 - i);
            } else {
              if (i === 0) pageNum = 1;
              else if (i === 1) pageNum = '...';
              else if (i === 5) pageNum = '...';
              else if (i === 6) pageNum = totalPages;
              else pageNum = currentPage + i - 3;
            }

            if (pageNum === '...') {
              return (
                <Button
                  key={`ellipsis-${i}`}
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0 text-muted-foreground"
                  disabled
                >
                  ...
                </Button>
              );
            }

            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentPage(Number(pageNum))}
                className={`w-8 h-8 p-0 ${
                  currentPage === pageNum 
                    ? '' 
                    : 'text-muted-foreground'
                }`}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-8 h-8 p-0"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path clipRule="evenodd" d="M6.15339 3.90338C5.82388 4.23288 5.82388 4.76712 6.15339 5.09662L10.0567 9L6.15339 12.9034C5.82388 13.2329 5.82388 13.7671 6.15339 14.0966C6.4829 14.4261 7.01705 14.4261 7.34656 14.0966L11.8466 9.59659C12.1761 9.26708 12.1761 8.73293 11.8466 8.40341L7.34656 3.90338C7.01705 3.57388 6.4829 3.57388 6.15339 3.90338Z" fill="currentColor" fillOpacity="0.72" fillRule="evenodd"/>
          </svg>
        </Button>
        </div>
      )}
    </div>
  );
}
