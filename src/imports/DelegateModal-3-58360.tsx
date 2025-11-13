import svgPaths from "./svg-7ayubftlad";
const imgLeftIcon = "/figma:asset/6656642556ed2c6d043bfd2bcdc500b820d57ca8.png";

function TextGroup() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Open_Sauce_Two:Medium',_sans-serif] grow items-center justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="text_group"
    >
      <div className="relative shrink-0 text-[#ffffff] text-[13px] w-full">
        <p className="block leading-[24px]">The Root Network</p>
      </div>
      <div className="relative shrink-0 text-[12px] text-[rgba(255,255,255,0.48)] w-full">
        <p className="block leading-[16px]">Governance</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="list">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center px-3 py-2 relative w-full">
          <div
            className="h-[38.227px] relative shrink-0 w-[29px]"
            data-name="Union"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 29 39"
            >
              <path
                d={svgPaths.p97f9200}
                fill="var(--fill-0, white)"
                id="Union"
              />
            </svg>
          </div>
          <TextGroup />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}

function Profile() {
  return (
    <div
      className="bg-[#070707] box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative rounded-xl shrink-0 w-full"
      data-name="profile"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <List />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full">
          <Profile />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start pb-0 pt-6 px-6 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Governance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <g id="Vector">
            <path d={svgPaths.p23bb9f00} fill="var(--fill-0, #4B4B4B)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p23bc3140}
              fill="var(--fill-0, #4B4B4B)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarItem() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <g id="Vector">
            <path d={svgPaths.p2c995a80} fill="var(--fill-0, #7E7E7E)" />
            <path d={svgPaths.pde63180} fill="var(--fill-0, #7E7E7E)" />
            <path d={svgPaths.p172da500} fill="var(--fill-0, #7E7E7E)" />
            <path d={svgPaths.p2375ce00} fill="var(--fill-0, #7E7E7E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarItem1() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon1 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">All Proposals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <g id="Vector">
            <path d={svgPaths.p1e373700} fill="var(--fill-0, #070707)" />
            <path d={svgPaths.p34b5800} fill="var(--fill-0, #070707)" />
            <path d={svgPaths.pff97a00} fill="var(--fill-0, #070707)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarItem2() {
  return (
    <div
      className="bg-[#ffffff] h-10 relative rounded-lg shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12)] shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon2 />
          <div className="basis-0 font-['Open_Sauce_Two:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[13px] text-left">
            <p className="block leading-[24px]">Delegate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p9cb7f00}
            fill="var(--fill-0, white)"
            fillOpacity="0.48"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem3() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon3 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">Submit Proposal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarNav() {
  return (
    <div
      className="relative rounded-xl shrink-0 w-full"
      data-name="sidebar_nav"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-2 relative w-full">
          <SidebarItem />
          <SidebarItem1 />
          <SidebarItem2 />
          <SidebarItem3 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="section">
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start pb-0 pt-6 px-6 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">
              ADMINISTRATION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <path
            d={svgPaths.p9a6800}
            fill="var(--fill-0, white)"
            fillOpacity="0.48"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem4() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon4 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">{`Council `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon5() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <path
            clipRule="evenodd"
            d={svgPaths.pc132500}
            fill="var(--fill-0, white)"
            fillOpacity="0.48"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem5() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon5 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">My Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p3c053580}
            fill="var(--fill-0, white)"
            fillOpacity="0.48"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem6() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon6 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">Staking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon7() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <path
            d={svgPaths.p21e9c380}
            fill="var(--fill-0, white)"
            fillOpacity="0.48"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem7() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon7 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">Account details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarNav1() {
  return (
    <div
      className="relative rounded-xl shrink-0 w-full"
      data-name="sidebar_nav"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-2 relative w-full">
          <SidebarItem4 />
          <SidebarItem5 />
          <SidebarItem6 />
          <SidebarItem7 />
        </div>
      </div>
    </div>
  );
}

function Sections() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="sections"
    >
      <Section />
      <SidebarNav />
      <Section1 />
      <SidebarNav1 />
    </div>
  );
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="top"
    >
      <Header />
      <Sections />
    </div>
  );
}

function LeftIcon8() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <g id="Union">
            <path
              d={svgPaths.p1201f880}
              fill="var(--fill-0, white)"
              fillOpacity="0.48"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3415cf00}
              fill="var(--fill-0, white)"
              fillOpacity="0.48"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarItem8() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon8 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">Documentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon9() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="left_icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p4ac0200}
            fill="var(--fill-0, white)"
            fillOpacity="0.48"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TestWrap() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="test_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7fe76f] text-[11px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">All online</p>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div
      className="bg-[rgba(80,223,58,0.18)] box-border content-stretch flex flex-row h-6 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-md shrink-0"
      data-name="tags"
    >
      <TestWrap />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function SidebarItem9() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon9 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
            <p className="block leading-[24px]">Help</p>
          </div>
          <Tags />
        </div>
      </div>
    </div>
  );
}

function SidebarNav2() {
  return (
    <div
      className="relative rounded-xl shrink-0 w-full"
      data-name="sidebar_nav"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pb-4 pt-2 px-3 relative w-full">
          <SidebarItem8 />
          <SidebarItem9 />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="bottom"
    >
      <SidebarNav2 />
    </div>
  );
}

function SideBar() {
  return (
    <div
      className="absolute bg-[#070707] h-[1087px] left-[15px] opacity-20 rounded-[20px] top-[17px] w-[304px]"
      data-name="side_bar"
    >
      <div className="box-border content-stretch flex flex-col h-[1087px] items-start justify-between overflow-clip p-0 relative w-[304px]">
        <Top />
        <Bottom />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_6px_6px_-3px_rgba(0,0,0,0.12),0px_12px_12px_-6px_rgba(0,0,0,0.12),0px_32px_32px_-16px_rgba(0,0,0,0.12),0px_64px_64px_-32px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function LeftIcon11() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[1000px] shrink-0 size-5"
      data-name="left_icon"
      style={{ backgroundImage: `url('${imgLeftIcon}')` }}
    />
  );
}

function TextWrap() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">FV Seona</p>
      </div>
    </div>
  );
}

function TopNavItem() {
  return (
    <div
      className="absolute bg-[#8d7aff] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center opacity-20 overflow-clip px-4 py-3 rounded-[1000px] top-[30px]"
      data-name="top_nav_item"
      style={{ left: "calc(91.667% - 31px)" }}
    >
      <LeftIcon11 />
      <TextWrap />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]" />
    </div>
  );
}

function TextWrap1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">100,000 ROOT</p>
      </div>
    </div>
  );
}

function TopNavItem1() {
  return (
    <div
      className="absolute bg-[#000000] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center opacity-20 overflow-clip px-4 py-3 rounded-[1000px] top-[30px]"
      data-name="top_nav_item"
      style={{ left: "calc(75% + 74px)" }}
    >
      <TextWrap1 />
    </div>
  );
}

function LeftIcon13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="left_icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p2e334500}
            fill="var(--fill-0, white)"
            fillOpacity="0.48"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="text"
    >
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Search Delegates</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div
      className="bg-[#141414] relative rounded-[10px] shrink-0 w-full"
      data-name="field"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-2 relative w-full">
          <LeftIcon13 />
          <Text />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_3px_0px_inset_rgba(0,0,0,0.04)]" />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
    </div>
  );
}

function InputField() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="input_field"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-0 pointer-events-none"
      />
      <Field />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="text"
    >
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function RightIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="right_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="right_icon">
          <path
            d={svgPaths.p246c6200}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Field1() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-3 py-2 relative rounded-[10px] shrink-0"
      data-name="field"
    >
      <Text1 />
      <RightIcon />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function Dropdown() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="dropdown"
    >
      <Field1 />
    </div>
  );
}

function Text2() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Open_Sauce_Two:Medium',_sans-serif] gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[13px] text-left text-nowrap"
      data-name="text"
    >
      <div className="relative shrink-0 text-[#ffffff]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Sort by:
        </p>
      </div>
      <div className="relative shrink-0 text-[#8d7aff]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Popular
        </p>
      </div>
    </div>
  );
}

function RightIcon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="right_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="right_icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p1cd8c500}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Field2() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-3 py-2 relative rounded-[10px] shrink-0"
      data-name="field"
    >
      <Text2 />
      <RightIcon1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function Dropdown1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="dropdown"
    >
      <Field2 />
    </div>
  );
}

function Filters() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="filters"
    >
      <Dropdown />
      <Dropdown1 />
    </div>
  );
}

function DashboardSearch() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 items-center justify-start opacity-20 p-0 top-[574px] w-[1220px]"
      data-name="dashboard_search"
      style={{ left: "calc(16.667% + 113px)" }}
    >
      <InputField />
      <Filters />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#8d7aff] h-12 relative rounded-[10px] shrink-0"
      data-name="button"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 relative">
        <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">
            Become a Delegate
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]" />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[36px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          How to Delegate on Root Network
        </p>
      </div>
      <Button />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-[#000000] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[0px] text-left">
            <p className="leading-[24px]">
              <span className="text-[16px]">
                Step 1 - Browse Delegates
                <br aria-hidden="true" />
              </span>
              <span className="font-['Open_Sauce_Two:Medium',_sans-serif] not-italic text-[12px]">
                Token holders, not a sudo key, decide upgrades and spending.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 bg-[#000000] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[0px] text-left">
            <p className="leading-[24px]">
              <span className="text-[16px]">
                Step 2 - Select Delegate
                <br aria-hidden="true" />
              </span>
              <span className="font-['Open_Sauce_Two:Medium',_sans-serif] not-italic text-[12px]">
                Longer token locks earn more vote weight, favouring committed
                holders.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 bg-[#000000] grow h-[84px] min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[84px] items-start justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[0px] text-left">
            <p className="leading-[24px]">
              <span className="text-[16px]">
                {`Step 3 - Set Root amount & Conviction`}
                <br aria-hidden="true" />
              </span>
              <span className="font-['Open_Sauce_Two:Medium',_sans-serif] not-italic text-[12px]">
                An elected council can speed urgent security upgrades.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame10 />
      <Frame7 />
      <Frame11 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame12 />
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[10px] text-left w-full">
        <p className="block leading-[normal]">
          * You the ability to revoke delegates at any time.
        </p>
      </div>
    </div>
  );
}

function DashboardInfo() {
  return (
    <div
      className="absolute bg-[#1b1b1b] h-[219px] opacity-20 rounded-2xl top-[122px] w-[1231px]"
      data-name="dashboard_info"
      style={{ left: "calc(16.667% + 106px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-6 h-[219px] items-start justify-start overflow-clip p-[20px] relative w-[1231px]">
        <Frame13 />
        <Frame29 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Figures() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end p-0 relative shrink-0"
      data-name="figures"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[26px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">242,008,999</p>
      </div>
    </div>
  );
}

function DashboardInfo1() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Total Supply</p>
          </div>
          <Figures />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Figures1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end p-0 relative shrink-0"
      data-name="figures"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[26px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">837K</p>
      </div>
    </div>
  );
}

function DashboardInfo2() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Delegated tokens
            </p>
          </div>
          <Figures1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Figures2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end p-0 relative shrink-0"
      data-name="figures"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[26px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">387k</p>
      </div>
    </div>
  );
}

function DashboardInfo3() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Total delegated votes
            </p>
          </div>
          <Figures2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Figures3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end p-0 relative shrink-0"
      data-name="figures"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[26px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">183</p>
      </div>
    </div>
  );
}

function DashboardInfo4() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Total delegates
            </p>
          </div>
          <Figures3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Figures4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end p-0 relative shrink-0"
      data-name="figures"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[26px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">12</p>
      </div>
    </div>
  );
}

function DashboardInfo5() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Total delegators
            </p>
          </div>
          <Figures4 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <DashboardInfo1 />
      <DashboardInfo2 />
      <DashboardInfo3 />
      <DashboardInfo4 />
      <DashboardInfo5 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function DashboardInfo6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start opacity-20 overflow-clip p-0 rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)] top-[373px] w-[1231px]"
      data-name="dashboard_info"
      style={{ left: "calc(16.667% + 106px)" }}
    >
      <Frame30 />
    </div>
  );
}

function Shape() {
  return (
    <div className="absolute left-0 size-[17.137px] top-0" data-name="shape">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="shape">
          <path
            d={svgPaths.p2bbcbd80}
            fill="url(#paint0_linear_3_55456)"
            id="Vector"
          />
          <path
            d={svgPaths.p42e5f80}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_3_55456"
            x1="8.56854"
            x2="8.56854"
            y1="0"
            y2="17.1371"
          >
            <stop stopColor="#59B0F3" />
            <stop offset="1" stopColor="#92CBF7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VerificationTick() {
  return (
    <div
      className="absolute right-0 size-[17.137px] top-0"
      data-name="verification_tick"
    >
      <Shape />
    </div>
  );
}

function LeftIcon15() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[2050px] shrink-0 size-[41px]"
      data-name="left_icon"
      style={{ backgroundImage: `url('${imgLeftIcon}')` }}
    >
      <VerificationTick />
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Open_Sauce_Two:SemiBold',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[rgba(255,255,255,0.72)] text-left text-nowrap">
      <div className="relative shrink-0 text-[24px]">
        <p className="block leading-[24.765px] text-nowrap whitespace-pre">
          FV Seona
        </p>
      </div>
      <div className="relative shrink-0 text-[12px]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          0vndh8..94803
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[18.574px] items-start justify-start p-0 relative shrink-0">
      <LeftIcon15 />
      <Frame31 />
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
            fill="var(--fill-0, white)"
            fillOpacity="0.72"
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
            fill="var(--fill-0, white)"
            fillOpacity="0.72"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0">
      <IconDiscord />
      <IconXCom />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between pb-3 pt-0 px-0 relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none"
      />
      <Frame6 />
      <Frame32 />
    </div>
  );
}

function DashboardInfo7() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic pb-[22px] pt-3 px-3 relative text-left text-nowrap w-full">
          <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] mb-[-10px] relative shrink-0 text-[#ffffff] text-[15px]">
            <p className="block leading-[32px] text-nowrap whitespace-pre">
              837K
            </p>
          </div>
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] mb-[-10px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.48)]">
            <p className="block leading-[24px] text-nowrap whitespace-pre">
              Voting power
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function DashboardInfo8() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic pb-[22px] pt-3 px-3 relative text-left text-nowrap w-full">
          <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] mb-[-10px] relative shrink-0 text-[#ffffff] text-[15px]">
            <p className="block leading-[32px] text-nowrap whitespace-pre">
              837K
            </p>
          </div>
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] mb-[-10px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.48)]">
            <p className="block leading-[24px] text-nowrap whitespace-pre">
              Total delegators
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function DashboardInfo9() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic pb-[22px] pt-3 px-3 relative text-left text-nowrap w-full">
          <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] mb-[-10px] relative shrink-0 text-[#ffffff] text-[15px]">
            <p className="block leading-[32px] text-nowrap whitespace-pre">
              837K
            </p>
          </div>
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] mb-[-10px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.48)]">
            <p className="block leading-[24px] text-nowrap whitespace-pre">
              Participation
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <DashboardInfo7 />
      <DashboardInfo8 />
      <DashboardInfo9 />
    </div>
  );
}

function TextWrap2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Delegate</p>
      </div>
    </div>
  );
}

function TopNavItem2() {
  return (
    <div
      className="basis-0 bg-[#8d7aff] grow h-12 min-h-px min-w-px relative rounded-[1000px] shrink-0"
      data-name="top_nav_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-3 relative w-full">
          <TextWrap2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]" />
    </div>
  );
}

function TextWrap3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#bbb3ff] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Overview</p>
      </div>
    </div>
  );
}

function TopNavItem3() {
  return (
    <div
      className="basis-0 bg-[#141414] grow h-12 min-h-px min-w-px relative rounded-[1000px] shrink-0"
      data-name="top_nav_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-3 relative w-full">
          <TextWrap3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[1000px]"
      />
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex flex-row gap-7 items-center justify-start p-0 relative shrink-0 w-full">
      <TopNavItem2 />
      <TopNavItem3 />
    </div>
  );
}

function DashboardInfo10() {
  return (
    <div
      className="bg-[#1b1b1b] relative rounded-2xl shrink-0 w-[598px]"
      data-name="dashboard_info"
    >
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-5 py-4 relative w-[598px]">
        <Frame2 />
        <div className="font-['Open_Sauce_Two:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left w-full">
          <p className="block leading-[24px]">
            Biompatible approach, in which now XC-20s are actual ERC-20 tokens
            with EVM bytecode, the XCM fee approach was changed to use a we.
          </p>
        </div>
        <Frame33 />
        <Frame24 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame34() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-center flex gap-7 items-center justify-start opacity-20 p-0 top-[646px] w-[1224px]"
      style={{ left: "calc(16.667% + 113px)" }}
    >
      {[...Array(4).keys()].map((_, i) => (
        <DashboardInfo10 key={i} />
      ))}
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[15px] top-[17px]">
      <SideBar />
      <TopNavItem />
      <TopNavItem1 />
      <DashboardSearch />
      <DashboardInfo />
      <DashboardInfo6 />
      <div
        className="absolute font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic opacity-20 text-[#ffffff] text-[32px] text-left top-[521px] w-[566px]"
        style={{ left: "calc(16.667% + 113px)" }}
      >
        <p className="block leading-[32px]">Find a delegate</p>
      </div>
      <Frame34 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between pb-6 pt-3 px-0 relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none"
      />
      <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left">
        <p className="block leading-[24px]">Delegate your votes</p>
      </div>
    </div>
  );
}

function InputLabel3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="input_label"
    >
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Delegates address</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="text"
    >
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.32)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          74638829hfueh28282892
        </p>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div
      className="bg-[#202020] relative rounded-xl shrink-0 w-full"
      data-name="field"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Text3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_3px_0px_inset_rgba(0,0,0,0.04)]" />
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}

function InputField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="input_field"
    >
      <InputLabel3 />
      <Field3 />
    </div>
  );
}

function InputLabel4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="input_label"
    >
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Select root amount
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row font-['Open_Sauce_Two:Medium',_sans-serif] grow items-center justify-between leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-[15px] text-left text-nowrap"
      data-name="text"
    >
      <div className="relative shrink-0 text-[rgba(255,255,255,0.32)]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Root Amount
        </p>
      </div>
      <div className="relative shrink-0 text-[#8d7aff]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">200</p>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div
      className="bg-[#202020] relative rounded-xl shrink-0 w-full"
      data-name="field"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Text4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_3px_0px_inset_rgba(0,0,0,0.04)]" />
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}

function InputField2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="input_field"
    >
      <InputLabel4 />
      <Field4 />
    </div>
  );
}

function Track() {
  return (
    <div
      className="bg-neutral-50 h-2 rounded-[9999px] shrink-0 w-full"
      data-name="Track"
    />
  );
}

function Slider() {
  return (
    <div
      className="absolute bg-zinc-950 right-0 rounded-[9999px] size-5 top-1/2 translate-y-[-50%]"
      data-name="Slider"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-neutral-50 border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
    </div>
  );
}

function SliderTrack() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="SliderTrack"
    >
      <Track />
      <Slider />
    </div>
  );
}

function Slider1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pl-0 pr-[150px] py-0 relative w-full">
          <SliderTrack />
        </div>
      </div>
    </div>
  );
}

function Slider2() {
  return (
    <div
      className="bg-zinc-800 box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative rounded-[9999px] shrink-0 w-full"
      data-name="Slider"
    >
      <Slider1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Open_Sauce_Two:Medium',_sans-serif] items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left text-nowrap w-full">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          x2 (2 days)
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          x32 (32 days)
        </p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <Slider2 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Set Conviction</p>
      </div>
      <Frame27 />
    </div>
  );
}

function TextWrap10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Submit 2000 Votes</p>
      </div>
    </div>
  );
}

function TopNavItem10() {
  return (
    <div
      className="bg-[#8d7aff] h-12 relative rounded-[1000px] shrink-0 w-full"
      data-name="top_nav_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-3 relative w-full">
          <TextWrap10 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]" />
    </div>
  );
}

function DashboardInfo23() {
  return (
    <div
      className="absolute bg-[#1b1b1b] rounded-2xl top-1/2 translate-y-[-50%] w-[835px]"
      data-name="dashboard_info"
      style={{ left: "calc(16.667% + 158px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-5 py-4 relative w-[835px]">
        <Frame15 />
        <div className="font-['Open_Sauce_Two:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left w-full">
          <p className="block leading-[24px]">
            Delegate your voting power to a trusted community member for a
            specific governance track
          </p>
        </div>
        <InputField1 />
        <InputField2 />
        <Frame28 />
        <TopNavItem10 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 22 22"
      >
        <g id="icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p26f963c0}
            fill="var(--fill-0, white)"
            fillOpacity="0.72"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="absolute bg-[#070707] rounded-[1000px] size-10 top-[325px]"
      data-name="icon_button"
      style={{ right: "calc(25% + 39px)" }}
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip px-3 py-2 relative size-10">
        <Icon />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

export default function DelegateModal() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Delegate Modal">
      <Group1 />
      <DashboardInfo23 />
      <IconButton />
    </div>
  );
}