import svgPaths from "./svg-vqm3k8jn5i";
const imgLeftIcon = "/figma:asset/6656642556ed2c6d043bfd2bcdc500b820d57ca8.png";

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
      className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left text-nowrap text-zinc-100"
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
    <div
      className="bg-zinc-900 relative shrink-0 w-full"
      data-name="SidebarHeader"
    >
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
          <div className="basis-0 font-['Aeonik:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-left text-nowrap text-zinc-100">
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
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p1d76d410}
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2f091200}
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p39897300}
              stroke="var(--stroke-0, black)"
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
      className="bg-[#ffffff] h-8 relative rounded-md shrink-0 w-full"
      data-name="Sidebar / SidebarMenuButton"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-[8px] relative w-full">
          <IconLayoutDashboard />
          <div className="basis-0 font-['Aeonik:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
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
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2cfdb900}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p17f25d40}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p15fb5e00}
              stroke="var(--stroke-0, #F4F4F5)"
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
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-zinc-100">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
              All Propsals
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
            stroke="var(--stroke-0, #F4F4F5)"
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
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-zinc-100">
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
            stroke="var(--stroke-0, #F4F4F5)"
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
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-zinc-100">
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
          <div className="basis-0 font-['Aeonik:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-left text-nowrap text-zinc-100">
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
    <div className="relative shrink-0 size-4" data-name="Icon / SquareTerminal">
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
            stroke="var(--stroke-0, #F4F4F5)"
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
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-zinc-100">
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
    <div className="relative shrink-0 size-4" data-name="Icon / SquareTerminal">
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
            stroke="var(--stroke-0, #F4F4F5)"
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
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-zinc-100">
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
    <div className="relative shrink-0 size-4" data-name="Icon / SquareTerminal">
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
            stroke="var(--stroke-0, #F4F4F5)"
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
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-zinc-100">
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
    <div className="relative shrink-0 size-4" data-name="Icon / SquareTerminal">
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
            stroke="var(--stroke-0, #F4F4F5)"
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
          <div className="basis-0 font-['Aeonik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-zinc-100">
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

function Sidebar01() {
  return (
    <div
      className="absolute bg-zinc-900 box-border content-stretch flex flex-col h-[1085px] items-start justify-start left-[15px] overflow-clip p-0 rounded-xl top-[17px] w-64"
      data-name="Sidebar 01"
    >
      <SidebarHeader />
      <SidebarContent />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-neutral-50 box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 rounded-[9999px] top-7"
      data-name="Button"
      style={{ left: "calc(91.667% - 24px)" }}
    >
      <div className="flex flex-col font-['Aeonik:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block leading-[20px] whitespace-pre">Connect Wallet</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start max-w-[720px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Div"
    >
      <div className="font-['Aeonik:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[30px] text-left text-neutral-50 w-full">
        <p className="block leading-none">Governance Dashboard</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-zinc-950 box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-[9999px] shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[9999px]"
      />
      <div className="flex flex-col font-['Aeonik:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          View all proposals
        </p>
      </div>
    </div>
  );
}

function Flex() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Flex"
    >
      <Button2 />
    </div>
  );
}

function Flex1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between overflow-clip p-0 relative shrink-0 w-full"
      data-name="Flex"
    >
      <Div />
      <Flex />
    </div>
  );
}

function TextWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative rounded-md shrink-0"
      data-name="Text Wrapper"
    >
      <div className="font-['Aeonik:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Latest Queued Proposals
        </p>
      </div>
    </div>
  );
}

function ProBlocksTabNavLink() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-1.5 relative shrink-0"
      data-name="Pro Blocks / Tab Nav Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_2px] border-neutral-50 border-solid inset-0 pointer-events-none"
      />
      <TextWrapper />
    </div>
  );
}

function TextWrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative rounded-md shrink-0"
      data-name="Text Wrapper"
    >
      <div className="font-['Aeonik:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-400">
        <p className="block leading-[20px] whitespace-pre">Active Referenda</p>
      </div>
    </div>
  );
}

function ProBlocksTabNavLink1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-1.5 relative shrink-0"
      data-name="Pro Blocks / Tab Nav Link"
    >
      <TextWrapper1 />
    </div>
  );
}

function TextWrapper2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative rounded-md shrink-0"
      data-name="Text Wrapper"
    >
      <div className="font-['Aeonik:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-400">
        <p className="block leading-[20px] whitespace-pre">History</p>
      </div>
    </div>
  );
}

function ProBlocksTabNavLink2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0 py-1.5 relative shrink-0"
      data-name="Pro Blocks / Tab Nav Link"
    >
      <TextWrapper2 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start max-w-[1304px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <ProBlocksTabNavLink />
      <ProBlocksTabNavLink1 />
      <ProBlocksTabNavLink2 />
    </div>
  );
}

function ProBlocksTabNavLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Pro Blocks / Tab Nav Links"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
      />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Flex1 />
      <ProBlocksTabNavLinks />
    </div>
  );
}

function TestWrap() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="test_wrap"
    >
      <div className="font-['Aeonik:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7fe76f] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Status Badge</p>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div
      className="bg-[rgba(80,223,58,0.18)] box-border content-stretch flex flex-row gap-0.5 h-5 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-md shrink-0"
      data-name="tags"
    >
      <TestWrap />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function TestWrap1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="test_wrap"
    >
      <div className="font-['Aeonik:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#92cbf7] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Track name</p>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div
      className="bg-[rgba(89,176,243,0.18)] box-border content-stretch flex flex-row gap-0.5 h-5 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-md shrink-0"
      data-name="tags"
    >
      <TestWrap1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <Tags />
      <Tags1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
      <Frame5 />
      <div className="font-['Aeonik:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">{`12 days left   |   #63542`}</p>
      </div>
    </div>
  );
}

function Change() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="change"
    >
      <div className="h-2.5 relative shrink-0 w-4" data-name="Vector">
        <div
          className="absolute bottom-0 left-[6.81%] right-[6.81%] top-[6.01%]"
          style={
            { "--fill-0": "rgba(127, 231, 111, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 14 10"
          >
            <path
              d={svgPaths.p3da20600}
              fill="var(--fill-0, #7FE76F)"
              id="Vector"
            />
          </svg>
        </div>
      </div>
      <div className="font-['Aeonik:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">9% Aye</p>
      </div>
    </div>
  );
}

function Change1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="change"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-2.5 relative w-4" data-name="Vector">
            <div className="absolute bottom-0 left-[6.81%] right-[6.81%] top-[6.01%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 10"
              >
                <path
                  d={svgPaths.p3da20600}
                  fill="var(--fill-0, #D9242B)"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Aeonik:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">9% Nay</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <Change />
      <Change1 />
    </div>
  );
}

function LeftIcon() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[1000px] shrink-0 size-5"
      data-name="left_icon"
      style={{ backgroundImage: `url('${imgLeftIcon}')` }}
    />
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
      <LeftIcon />
      <div className="font-['Aeonik:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">FV Seona</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Figures() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="figures"
    >
      <div className="font-['Aeonik:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-none whitespace-pre">
          Proposal title goes here
        </p>
      </div>
      <Frame1 />
    </div>
  );
}

function DashboardInfo() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-2xl shrink-0 w-[646px]"
      data-name="dashboard_info"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[646px]">
        <Frame2 />
        <Figures />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[flex-flow:wrap] box-border content-center flex gap-6 items-center justify-start p-0 relative shrink-0 w-full">
      {[...Array(8).keys()].map((_, i) => (
        <DashboardInfo key={i} />
      ))}
    </div>
  );
}

function Frame62() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[23px] items-start justify-start p-0 top-[425px] w-[1320px]"
      style={{ left: "calc(16.667% + 52px)" }}
    >
      <Container1 />
      <Frame4 />
    </div>
  );
}

function GithubMarkWhite1() {
  return (
    <div className="relative shrink-0 size-6" data-name="github-mark-white 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="github-mark-white 1">
          <path
            clipRule="evenodd"
            d={svgPaths.p169e3400}
            fill="var(--fill-0, #FAFAFA)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconDiscord() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon / discord">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icon / discord">
          <path
            clipRule="evenodd"
            d={svgPaths.p26ea3f80}
            fill="var(--fill-0, #FAFAFA)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconXCom() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon / x.com">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icon / x.com">
          <path
            d={svgPaths.p3c3c0680}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Change16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="change"
    >
      <GithubMarkWhite1 />
      <IconDiscord />
      <IconXCom />
    </div>
  );
}

function Figures8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-end justify-between p-0 relative shrink-0 w-full"
      data-name="figures"
    >
      <div className="font-['Aeonik:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Join our Community to discuss, contribute and get regular updates from
          us! View Gallery
        </p>
      </div>
      <Change16 />
    </div>
  );
}

function Frame13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 top-[85px] w-[1316px]"
      style={{ left: "calc(16.667% + 58px)" }}
    >
      <div className="font-['Aeonik:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[48px] text-left text-neutral-50 w-[737px]">
        <p className="block leading-[48px]">
          {`Welcome to `}
          <br aria-hidden="true" />
          The Root Network Governance
        </p>
      </div>
      <Figures8 />
    </div>
  );
}

function IconLayoutDashboard1() {
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
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p1d76d410}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2f091200}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p39897300}
              stroke="var(--stroke-0, #F4F4F5)"
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

function Frame61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[3px] items-start justify-start p-[12px] relative w-full">
          <IconLayoutDashboard1 />
          <div
            className="font-['Aeonik:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[24px]">User-led control</p>
          </div>
          <div
            className="font-['Aeonik:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-none">
              Token holders, not a sudo key, decide upgrades and spending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLayoutDashboard2() {
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
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p1d76d410}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2f091200}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p39897300}
              stroke="var(--stroke-0, #F4F4F5)"
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

function Frame63() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[3px] items-start justify-start p-[12px] relative w-full">
          <IconLayoutDashboard2 />
          <div
            className="font-['Aeonik:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[24px]">Conviction rewards</p>
          </div>
          <div
            className="font-['Aeonik:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-none">
              Token holders, not a sudo key, decide upgrades and spending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLayoutDashboard3() {
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
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p1d76d410}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2f091200}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p39897300}
              stroke="var(--stroke-0, #F4F4F5)"
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

function Frame64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[3px] items-start justify-start p-[12px] relative w-full">
          <IconLayoutDashboard3 />
          <div
            className="font-['Aeonik:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[24px]">Fast-track fixes</p>
          </div>
          <div
            className="font-['Aeonik:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-none">
              Token holders, not a sudo key, decide upgrades and spending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLayoutDashboard4() {
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
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p1d76d410}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2f091200}
              stroke="var(--stroke-0, #F4F4F5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p39897300}
              stroke="var(--stroke-0, #F4F4F5)"
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

function Frame65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[3px] items-start justify-start p-[12px] relative w-full">
          <IconLayoutDashboard4 />
          <div
            className="font-['Aeonik:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[24px]">Full transparency</p>
          </div>
          <div
            className="font-['Aeonik:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-none">
              Token holders, not a sudo key, decide upgrades and spending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[27px] items-center justify-start p-0 top-[278px] w-[1320px]"
      style={{ left: "calc(16.667% + 52px)" }}
    >
      <Frame61 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
    </div>
  );
}

export default function DashboardLoggedOut() {
  return (
    <div
      className="bg-zinc-950 relative size-full"
      data-name="Dashboard - Logged out"
    >
      <Sidebar01 />
      <Button />
      <Frame62 />
      <Frame13 />
      <Frame66 />
    </div>
  );
}