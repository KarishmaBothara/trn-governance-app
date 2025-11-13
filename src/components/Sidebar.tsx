import { NavigationItem } from "@/app/page";
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import svgPaths from '../imports/svg-c1mpyehm7p';
import { UserRoleSelector } from './UserRoleSelector';
import { useUser } from './UserContext';

interface SidebarProps {
  currentPage: NavigationItem;
  onNavigate: (page: NavigationItem) => void;
}

function RootIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="ROOT ICON">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="ROOT ICON">
          <path d={svgPaths.p1f40e980} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMediaAsset() {
  return (
    <div
      className="bg-blue-700 box-border content-stretch flex flex-row gap-2 items-center justify-center p-[10px] relative rounded-lg shrink-0 size-8"
      data-name="Sidebar / MediaAsset"
    >
      <RootIcon />
    </div>
  );
}

function FlexVertical() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-0 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left text-nowrap text-zinc-100"
      data-name="Flex Vertical"
    >
      <div className="font-['Aeonik:Bold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] w-full">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\\' [white-space-collapse:inherit] block leading-none overflow-inherit">
          The Root Network
        </p>
      </div>
      <div className="font-['Aeonik:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] w-full">
        <p className="caption">
          Governance
        </p>
      </div>
    </div>
  );
}

function SidebarSidebarMenuButton() {
  return (
    <div
      className="relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <SidebarMediaAsset />
          <FlexVertical />
        </div>
      </div>
    </div>
  );
}

function SidebarHeader() {
  return (
    <motion.div
      className="relative shrink-0 w-full"
      data-name="SidebarHeader"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, delay: 0.1 }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full">
          <SidebarSidebarMenuButton />
        </div>
      </div>
    </motion.div>
  );
}

function SidebarSidebarGroupLabel({ label }: { label: string }) {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarGroupLabel"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-8 items-center justify-between px-2 py-0 relative w-full">
          <div className="basis-0 font-['Aeonik:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-left text-nowrap text-zinc-100">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLayoutDashboard({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="Icon / LayoutDashboard"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / LayoutDashboard">
          <g id="Vector">
            <path
              d={svgPaths.pff0fc00}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p1d76d410}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2f091200}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p39897300}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLayoutGrid({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / LayoutGrid">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / LayoutGrid">
          <g id="Vector">
            <path
              d={svgPaths.p1cfa1bc0}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2cfdb900}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p17f25d40}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p15fb5e00}
              stroke={isActive ? "#000000" : "#F4F4F5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconArrowRightLeft({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / ArrowRightLeft">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / ArrowRightLeft">
          <path
            d={svgPaths.p330fd980}
            id="Vector"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function IconSend({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / Send">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_3_39787)" id="Icon / Send">
          <path
            d={svgPaths.p2203880}
            id="Vector"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_39787">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// function IconSquareTerminal({ isActive }: { isActive: boolean }) {
//   return (
//     <div className="relative shrink-0 size-4" data-name="Icon / SquareTerminal">
//       <svg
//         className="block size-full"
//         fill="none"
//         preserveAspectRatio="none"
//         viewBox="0 0 16 16"
//       >
//         <g id="Icon / SquareTerminal">
//           <path
//             d={svgPaths.p27a7a900}
//             id="Vector"
//             stroke={isActive ? "#000000" : "#F4F4F5"}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.5"
//           />
//         </g>
//       </svg>
//     </div>
//   );
// }

function IconUsers({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / Users">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / Users">
          <path
            d="M11.3333 14V12.6667C11.3333 11.9594 11.0524 11.2811 10.5523 10.781C10.0522 10.2809 9.37391 10 8.66667 10H3.33333C2.62609 10 1.94781 10.2809 1.44771 10.781C0.947619 11.2811 0.666667 11.9594 0.666667 12.6667V14"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M6 7.33333C7.47276 7.33333 8.66667 6.13943 8.66667 4.66667C8.66667 3.19391 7.47276 2 6 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 6 7.33333Z"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M15.3333 14V12.6667C15.3326 12.0758 15.1358 11.5019 14.7742 11.0349C14.4125 10.5679 13.9077 10.2344 13.3333 10.0867"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M10.6667 2.08667C11.2426 2.23354 11.7488 2.56714 12.1111 3.03488C12.4735 3.50262 12.6703 4.07789 12.6703 4.67C12.6703 5.26211 12.4735 5.83738 12.1111 6.30512C11.7488 6.77286 11.2426 7.10646 10.6667 7.25333"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function IconCheckSquare({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / CheckSquare">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / CheckSquare">
          <path
            d="M3.33333 2H12.6667C13.7712 2 14.6667 2.89543 14.6667 4V12C14.6667 13.1046 13.7712 14 12.6667 14H3.33333C2.22876 14 1.33333 13.1046 1.33333 12V4C1.33333 2.89543 2.22876 2 3.33333 2Z"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M10.6667 6L6.66667 10L4.66667 8"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function IconWallet({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / Wallet">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / Wallet">
          <path
            d="M13.3333 4H2.66667C1.93029 4 1.33333 4.59695 1.33333 5.33333V12.6667C1.33333 13.403 1.93029 14 2.66667 14H13.3333C14.0697 14 14.6667 13.403 14.6667 12.6667V5.33333C14.6667 4.59695 14.0697 4 13.3333 4Z"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M1.33333 6.66667H14.6667"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4 2V4"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 2V4"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function IconTrendingUp({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / TrendingUp">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / TrendingUp">
          <path
            d="M1.33333 10L5.33333 6L8 8.66667L14.6667 2"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M10.6667 2H14.6667V6"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function IconBookOpen({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon / BookOpen">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / BookOpen">
          <path
            d="M8 3.33333C8 3.33333 6.66667 2 4 2C1.33333 2 1.33333 3.33333 1.33333 3.33333V12C1.33333 12 1.33333 13.3333 4 13.3333C6.66667 13.3333 8 12 8 12"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M8 3.33333C8 3.33333 9.33333 2 12 2C14.6667 2 14.6667 3.33333 14.6667 3.33333V12C14.6667 12 14.6667 13.3333 12 13.3333C9.33333 13.3333 8 12 8 12"
            stroke={isActive ? "#000000" : "#F4F4F5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}



function SidebarMenuButton({
  icon: Icon,
  label,
  isActive,
  onClick,
  hasExternalLink = false
}: {
  icon: ({ isActive }: { isActive: boolean }) => React.JSX.Element;
  label: string;
  isActive: boolean;
  onClick: () => void;
  hasExternalLink?: boolean;
}) {
  return (
    <motion.div
      className={`h-8 relative rounded-md shrink-0 w-full cursor-pointer transition-colors duration-200 ${
        !isActive ? 'hover:bg-white/5' : ''
      } ${isActive ? 'bg-[#ffffff]' : ''}`}
      data-name="Sidebar / SidebarMenuButton"
      onClick={onClick}
      whileHover={{ scale: 1.01, x: 1 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Icon isActive={isActive} />
          </motion.div>
          <div className={`basis-0 font-['Aeonik:${isActive ? 'Medium' : 'Regular'}',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap ${
            isActive ? 'text-[#000000]' : 'text-zinc-100'
          }`}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              {label}
            </p>
          </div>
          {hasExternalLink && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="shrink-0"
            >
              <ExternalLink
                className={`w-3 h-3 ${isActive ? 'text-[#000000]/60' : 'text-zinc-100/60'}`}
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SidebarMenuItem({
  icon,
  label,
  isActive,
  onClick,
  hasExternalLink = false
}: {
  icon: ({ isActive }: { isActive: boolean }) => React.JSX.Element;
  label: string;
  isActive: boolean;
  onClick: () => void;
  hasExternalLink?: boolean;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarMenuButton
        icon={icon}
        label={label}
        isActive={isActive}
        onClick={onClick}
        hasExternalLink={hasExternalLink}
      />
    </div>
  );
}

function SidebarMenu({ currentPage, onNavigate }: { currentPage: NavigationItem; onNavigate: (page: NavigationItem) => void }) {
  return (
    <motion.div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="SidebarMenu"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <SidebarMenuItem
        icon={IconLayoutDashboard}
        label="Dashboard"
        isActive={currentPage === 'dashboard'}
        onClick={() => onNavigate('dashboard')}
      />
      <SidebarMenuItem
        icon={IconLayoutGrid}
        label="All Proposals"
        isActive={currentPage === 'proposals'}
        onClick={() => onNavigate('proposals')}
      />
      <SidebarMenuItem
        icon={IconArrowRightLeft}
        label="Delegate"
        isActive={currentPage === 'delegate'}
        onClick={() => onNavigate('delegate')}
      />
      <SidebarMenuItem
        icon={IconSend}
        label="Submit Proposal"
        isActive={currentPage === 'submit-proposal'}
        onClick={() => onNavigate('submit-proposal')}
      />
    </motion.div>
  );
}

function SidebarSidebarGroup({ currentPage, onNavigate }: { currentPage: NavigationItem; onNavigate: (page: NavigationItem) => void }) {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Sidebar / SidebarGroup"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <SidebarSidebarGroupLabel label="Governance" />
          <SidebarMenu currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function SidebarMenu1({ currentPage, onNavigate }: { currentPage: NavigationItem; onNavigate: (page: NavigationItem) => void }) {
  const { isLoggedIn } = useUser();

  return (
    <motion.div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="SidebarMenu"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <SidebarMenuItem
        icon={IconUsers}
        label="Council"
        isActive={currentPage === 'council'}
        onClick={() => onNavigate('council')}
      />
      <SidebarMenuItem
        icon={IconCheckSquare}
        label="Elections"
        isActive={currentPage === 'elections'}
        onClick={() => onNavigate('elections')}
      />
      {isLoggedIn && (
        <SidebarMenuItem
          icon={IconWallet}
          label="Portfolio"
          isActive={currentPage === 'portfolio'}
          onClick={() => onNavigate('portfolio')}
        />
      )}
      <SidebarMenuItem
        icon={IconTrendingUp}
        label="Staking"
        isActive={currentPage === 'staking'}
        onClick={() => onNavigate('staking')}
        hasExternalLink={true}
      />

      <SidebarMenuItem
        icon={IconBookOpen}
        label="Documentation"
        isActive={currentPage === 'documentation'}
        onClick={() => onNavigate('documentation')}
        hasExternalLink={true}
      />
    </motion.div>
  );
}

function SidebarSidebarGroup1({ currentPage, onNavigate }: { currentPage: NavigationItem; onNavigate: (page: NavigationItem) => void }) {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Sidebar / SidebarGroup"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <SidebarSidebarGroupLabel label="Admin" />
          <SidebarMenu1 currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function SidebarContent({ currentPage, onNavigate }: { currentPage: NavigationItem; onNavigate: (page: NavigationItem) => void }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-x-clip overflow-y-auto p-0 relative shrink-0 w-full"
      data-name="SidebarContent"
    >
      <SidebarSidebarGroup currentPage={currentPage} onNavigate={onNavigate} />
      <SidebarSidebarGroup1 currentPage={currentPage} onNavigate={onNavigate} />
    </div>
  );
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <motion.div
      className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.05)] relative rounded-xl size-full"
      data-name="Sidebar 01"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <SidebarHeader />
        <SidebarContent currentPage={currentPage} onNavigate={onNavigate} />
        <UserRoleSelector />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </motion.div>
  );
}
