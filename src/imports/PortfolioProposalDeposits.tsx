import svgPaths from "./svg-matc6ida8g";
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
            <path d={svgPaths.p1e373700} fill="var(--fill-0, #4B4B4B)" />
            <path d={svgPaths.p34b5800} fill="var(--fill-0, #4B4B4B)" />
            <path d={svgPaths.pff97a00} fill="var(--fill-0, #4B4B4B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarItem2() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon2 />
          <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left">
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
            fill="var(--fill-0, #4B4B4B)"
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
            fill="var(--fill-0, black)"
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
      className="bg-[#ffffff] h-10 relative rounded-lg shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12)] shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon5 />
          <div className="basis-0 font-['Open_Sauce_Two:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[13px] text-left">
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
            <p className="block leading-[24px]">Documentation</p>
          </div>
        </div>
      </div>
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
          <SidebarItem7 />
          <SidebarItem8 />
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
      className="absolute bg-[#070707] h-[1087px] left-[15px] rounded-[20px] top-[17px] w-[304px]"
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

function LeftIcon10() {
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
      className="absolute bg-[#8d7aff] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 rounded-[1000px] top-[30px]"
      data-name="top_nav_item"
      style={{ left: "calc(91.667% - 31px)" }}
    >
      <LeftIcon10 />
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
      className="absolute box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 rounded-[1000px] top-[30px]"
      data-name="top_nav_item"
      style={{ left: "calc(75% + 85px)" }}
    >
      <TextWrap1 />
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

function DashboardInfo() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Free Balance</p>
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

function DashboardInfo1() {
  return (
    <div
      className="basis-0 bg-[#111111] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dashboard_info"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative w-full">
          <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Locked Balance
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
        <p className="block leading-[32px] whitespace-pre">183</p>
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
              Total Root balance
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
        <p className="block leading-[32px] whitespace-pre">12</p>
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
            <p className="block leading-[24px] whitespace-pre">Staked Root</p>
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

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <DashboardInfo />
      <DashboardInfo1 />
      <DashboardInfo2 />
      <DashboardInfo3 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function DashboardInfo4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip p-0 rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)] top-[221px] w-[1231px]"
      data-name="dashboard_info"
      style={{ left: "calc(16.667% + 106px)" }}
    >
      <Frame29 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-3 pt-0 px-12 relative w-full">
          <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[32px] text-left text-nowrap">
            <p className="block leading-[32px] whitespace-pre">Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBarHeader() {
  return (
    <div
      className="absolute bottom-[971px] box-border content-stretch flex flex-col items-start justify-start pb-0 pt-10 px-0 w-[1088px]"
      data-name="nav_bar_header"
      style={{ left: "calc(16.667% + 69px)" }}
    >
      <Header1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-3 pt-0 px-12 relative w-full">
          <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap">
            <p className="block leading-[32px] whitespace-pre">Your activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabNavItem() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip pb-2 pt-1 px-0.5 relative shrink-0"
      data-name="tab_nav_item"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Recent Voting Activity
        </p>
      </div>
    </div>
  );
}

function TabNavItem1() {
  return (
    <div className="h-10 relative shrink-0" data-name="tab_nav_item">
      <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip pb-2 pt-1 px-0.5 relative">
        <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">
            Proposal Deposits
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#bbb3ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TabNavItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip pb-2 pt-1 px-0.5 relative shrink-0"
      data-name="tab_nav_item"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Delegation Overview
        </p>
      </div>
    </div>
  );
}

function TabNavItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip pb-2 pt-1 px-0.5 relative shrink-0"
      data-name="tab_nav_item"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Active locks</p>
      </div>
    </div>
  );
}

function TabNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="tab_nav">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-12 py-0 relative w-full">
          <TabNavItem />
          <TabNavItem1 />
          <TabNavItem2 />
          <TabNavItem3 />
        </div>
      </div>
    </div>
  );
}

function NavBarHeader1() {
  return (
    <div
      className="absolute bottom-[664px] box-border content-stretch flex flex-col items-start justify-start pb-0 pt-10 px-0 w-[1268px]"
      data-name="nav_bar_header"
      style={{ left: "calc(16.667% + 69px)" }}
    >
      <Header2 />
      <TabNav />
    </div>
  );
}

function TestWrap1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="test_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7fe76f] text-[11px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Status Badge</p>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div
      className="bg-[rgba(80,223,58,0.18)] box-border content-stretch flex flex-row gap-0.5 h-5 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-md shrink-0"
      data-name="tags"
    >
      <TestWrap1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
      <Tags1 />
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">12 July 2025</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Proposal title goes here
        </p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <Frame38 />
    </div>
  );
}

function TextWrap2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">View Proposal</p>
      </div>
    </div>
  );
}

function TopNavItem2() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row gap-1.5 h-8 items-center justify-center overflow-clip px-0 py-2 relative rounded-[1000px] shrink-0 w-[113px]"
      data-name="top_nav_item"
    >
      <TextWrap2 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <TopNavItem2 />
    </div>
  );
}

function Figures4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="figures"
    >
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function DashboardInfo5() {
  return (
    <div
      className="bg-[#000000] relative rounded-2xl shrink-0 w-[598px]"
      data-name="dashboard_info"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[598px]">
        <Figures4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function TestWrap3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="test_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#f68989] text-[11px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Declined</p>
      </div>
    </div>
  );
}

function Tags3() {
  return (
    <div
      className="bg-[rgba(243,99,99,0.18)] box-border content-stretch flex flex-row gap-0.5 h-5 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-md shrink-0"
      data-name="tags"
    >
      <TestWrap3 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
      <Tags3 />
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">12 July 2025</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Proposal title goes here
        </p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <Frame40 />
    </div>
  );
}

function TextWrap4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">View Proposal</p>
      </div>
    </div>
  );
}

function TopNavItem4() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row gap-1.5 h-8 items-center justify-center overflow-clip px-0 py-2 relative rounded-[1000px] shrink-0 w-[113px]"
      data-name="top_nav_item"
    >
      <TextWrap4 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <TopNavItem4 />
    </div>
  );
}

function Figures6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="figures"
    >
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function DashboardInfo7() {
  return (
    <div
      className="bg-[#000000] relative rounded-2xl shrink-0 w-[598px]"
      data-name="dashboard_info"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[598px]">
        <Figures6 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame4() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-center flex gap-6 items-center justify-start p-0 top-[500px] w-[1220px]"
      style={{ left: "calc(16.667% + 117px)" }}
    >
      {[...Array(2).keys()].map((_, i) => (
        <DashboardInfo5 key={i} />
      ))}
      <DashboardInfo7 />
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
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
            opacity="0.7"
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
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
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
            fillOpacity="0.7"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Change() {
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

function TextWrap5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Legals</p>
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
          <mask
            height="18"
            id="mask0_3_71167"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_3_71167)">
            <path
              d={svgPaths.p8343900}
              fill="var(--fill-0, white)"
              id="arrow_outward"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TopNavItem5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip px-3 py-2 relative rounded-[1000px] shrink-0"
      data-name="top_nav_item"
    >
      <TextWrap5 />
      <RightIcon />
    </div>
  );
}

function Frame52() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Change />
      <TopNavItem5 />
    </div>
  );
}

function Frame53() {
  return (
    <div
      className="absolute bottom-[30px] box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 w-[1220px]"
      style={{ left: "calc(16.667% + 117px)" }}
    >
      <Frame52 />
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic opacity-40 relative shrink-0 text-[#ffffff] text-[8px] text-left w-[1206px]">
        <p className="block leading-[normal]">
          All content on this website is the property of CNZFV Ltd or its
          licensors or associated companies and is protected by copyright, trade
          marks (whether registered or not) and other applicable laws.
          <br aria-hidden="true" />‍<br aria-hidden="true" />
          This website is licensed and operated by CNZFV Ltd on behalf of The
          Root Network community. The contents and opinions of this website do
          not necessarily reflect the opinions of CNZFV Ltd. This website may
          include links to projects, dApps and third-party services etc., and
          CNZFV does not warrant that the information available from these is
          true, correct, complete or up-to-date (or similar) or accept
          responsibility for anything in connection to them. By using or
          accessing this website (or similar) you expressly waive any claim for
          any loss, damage or cost that you may incur from using or accessing
          this website or by using or accessing links to projects, dApps and
          third-party services etc., available on this website.
        </p>
      </div>
    </div>
  );
}

export default function PortfolioProposalDeposits() {
  return (
    <div
      className="bg-[#141414] relative size-full"
      data-name="Portfolio - Proposal deposits"
    >
      <SideBar />
      <TopNavItem />
      <TopNavItem1 />
      <DashboardInfo4 />
      <div
        className="absolute font-['Open_Sauce_Two:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[15px] text-left top-[146px] w-[558px]"
        style={{ left: "calc(16.667% + 117px)" }}
      >
        <p className="block leading-[24px]">{`Overview of your governance participation and token management `}</p>
      </div>
      <NavBarHeader />
      <NavBarHeader1 />
      <Frame4 />
      <Frame53 />
    </div>
  );
}