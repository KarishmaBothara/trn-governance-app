import svgPaths from "./svg-vn75jqsp87";

function RootIcon() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-primary-foreground" data-name="ROOT ICON">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="ROOT ICON">
          <path d={svgPaths.p1f40e980} fill="currentColor" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMediaAsset() {
  return (
    <div
      className="bg-sidebar-primary box-border content-stretch flex flex-row gap-2 items-center justify-center p-[10px] relative rounded-lg shrink-0 size-8"
      data-name="Sidebar / MediaAsset"
    >
      <RootIcon />
    </div>
  );
}

function FlexVertical() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left text-nowrap text-sidebar-foreground"
      data-name="Flex Vertical"
    >
      <div className="font-['Aeonik:Bold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] w-full">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
          The Root Network
        </p>
      </div>
      <div className="font-['Aeonik:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] w-full">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
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
    <div className="relative shrink-0 w-full" data-name="SidebarHeader">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full">
          <SidebarSidebarMenuButton />
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarGroupLabel() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarGroupLabel"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-8 items-center justify-between px-2 py-0 relative w-full">
          <div className="basis-0 font-['Aeonik:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
              Governance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLayoutDashboard() {
  return (
    <div
      className="relative shrink-0 size-4 text-sidebar-accent-foreground"
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
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p1d76d410}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2f091200}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p39897300}
              stroke="currentColor"
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

function SidebarSidebarMenuButton1() {
  return (
    <div
      className="bg-sidebar-accent h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconLayoutDashboard />
          <div className="basis-0 font-['Aeonik:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sidebar-accent-foreground text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              Dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton1 />
    </div>
  );
}

function IconLayoutGrid() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-foreground" data-name="Icon / LayoutGrid">
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
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2cfdb900}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p17f25d40}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p15fb5e00}
              stroke="currentColor"
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

function SidebarSidebarMenuButton2() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconLayoutGrid />
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              All Proposals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton2 />
    </div>
  );
}

function IconArrowRightLeft() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-foreground" data-name="Icon / ArrowRightLeft">
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
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarSidebarMenuButton3() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconArrowRightLeft />
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              Delegate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton3 />
    </div>
  );
}

function IconSend() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-foreground" data-name="Icon / Send">
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
            stroke="currentColor"
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

function SidebarSidebarMenuButton4() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconSend />
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              Submit Proposal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton4 />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="SidebarMenu"
    >
      <SidebarSidebarMenuItem />
      <SidebarSidebarMenuItem1 />
      <SidebarSidebarMenuItem2 />
      <SidebarSidebarMenuItem3 />
    </div>
  );
}

function SidebarSidebarGroup() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Sidebar / SidebarGroup"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <SidebarSidebarGroupLabel />
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarGroupLabel1() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarGroupLabel"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-8 items-center justify-between px-2 py-0 relative w-full">
          <div className="basis-0 font-['Aeonik:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
              Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSquareTerminal() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-foreground" data-name="Icon / SquareTerminal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / SquareTerminal">
          <path
            d={svgPaths.p27a7a900}
            id="Vector"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarSidebarMenuButton5() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconSquareTerminal />
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              Council
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton5 />
    </div>
  );
}

function IconSquareTerminal1() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-foreground" data-name="Icon / SquareTerminal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / SquareTerminal">
          <path
            d={svgPaths.p27a7a900}
            id="Vector"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarSidebarMenuButton6() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconSquareTerminal1 />
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton6 />
    </div>
  );
}

function IconSquareTerminal2() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-foreground" data-name="Icon / SquareTerminal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / SquareTerminal">
          <path
            d={svgPaths.p27a7a900}
            id="Vector"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarSidebarMenuButton7() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconSquareTerminal2 />
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              Staking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton7 />
    </div>
  );
}

function IconSquareTerminal3() {
  return (
    <div className="relative shrink-0 size-4 text-sidebar-foreground" data-name="Icon / SquareTerminal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon / SquareTerminal">
          <path
            d={svgPaths.p27a7a900}
            id="Vector"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarSidebarMenuButton8() {
  return (
    <div
      className="h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconSquareTerminal3 />
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-sidebar-foreground">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              Documentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Sidebar / SidebarMenuItem"
    >
      <SidebarSidebarMenuButton8 />
    </div>
  );
}

function SidebarMenu1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="SidebarMenu"
    >
      <SidebarSidebarMenuItem4 />
      <SidebarSidebarMenuItem5 />
      <SidebarSidebarMenuItem6 />
      <SidebarSidebarMenuItem7 />
    </div>
  );
}

function SidebarSidebarGroup1() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Sidebar / SidebarGroup"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <SidebarSidebarGroupLabel1 />
          <SidebarMenu1 />
        </div>
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-x-clip overflow-y-auto p-0 relative shrink-0 w-full"
      data-name="SidebarContent"
    >
      <SidebarSidebarGroup />
      <SidebarSidebarGroup1 />
    </div>
  );
}

export default function Sidebar01() {
  return (
    <div
      className="backdrop-blur-2xl backdrop-saturate-150 bg-sidebar/80 border border-sidebar-border relative rounded-xl size-full"
      data-name="Sidebar 01"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <SidebarHeader />
        <SidebarContent />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-sidebar-border/20 border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}