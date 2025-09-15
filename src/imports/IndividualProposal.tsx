import svgPaths from "./svg-oozw14k8do";
const imgLeftIcon = "/figma:asset/6656642556ed2c6d043bfd2bcdc500b820d57ca8.png";

function Slider() {
  return (
    <div
      className="bg-zinc-800 box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative rounded-[9999px] size-full"
      data-name="Slider"
    >
      <div className="relative shrink-0 w-full" data-name="Slider">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pl-0 pr-[150px] py-0 relative w-full">
            <div
              className="box-border content-stretch flex flex-col h-2 items-start justify-start p-0 relative shrink-0 w-full"
              data-name="SliderTrack"
            >
              <div
                className="bg-neutral-50 h-2 rounded-[9999px] shrink-0 w-full"
                data-name="Track"
              />
              <div
                className="absolute bg-zinc-950 right-0 rounded-[9999px] size-5 top-1/2 translate-y-[-50%]"
                data-name="Slider"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-2 border-neutral-50 border-solid inset-0 pointer-events-none rounded-[9999px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <path d={svgPaths.p2c995a80} fill="var(--fill-0, black)" />
            <path d={svgPaths.pde63180} fill="var(--fill-0, black)" />
            <path d={svgPaths.p172da500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2375ce00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarItem1() {
  return (
    <div
      className="bg-[#ffffff] h-10 relative rounded-lg shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12)] shrink-0 w-full"
      data-name="sidebar_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full">
          <LeftIcon1 />
          <div className="basis-0 font-['Open_Sauce_Two:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[13px] text-left">
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
            <path
              d={svgPaths.p1e373700}
              fill="var(--fill-0, white)"
              fillOpacity="0.48"
            />
            <path
              d={svgPaths.p34b5800}
              fill="var(--fill-0, white)"
              fillOpacity="0.48"
            />
            <path
              d={svgPaths.pff97a00}
              fill="var(--fill-0, white)"
              fillOpacity="0.48"
            />
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
      className="absolute bg-[#000000] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 rounded-[1000px] top-[30px]"
      data-name="top_nav_item"
      style={{ left: "calc(75% + 74px)" }}
    >
      <TextWrap1 />
    </div>
  );
}

function LeftIcon12() {
  return (
    <div className="relative shrink-0 size-5" data-name="left_icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 20 20"
      >
        <g id="left_icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p8146a00}
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

function Button() {
  return (
    <div
      className="absolute bg-[#141414] h-12 rounded-[10px] top-[100px]"
      data-name="button"
      style={{ left: "calc(16.667% + 117px)" }}
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 relative">
        <LeftIcon12 />
        <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.72)] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">All Proposals</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
    </div>
  );
}

function LeftIcon13() {
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
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic opacity-60 relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Created by</p>
      </div>
      <LeftIcon13 />
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">FV Seona</p>
      </div>
    </div>
  );
}

function TestWrap1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="test_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#92cbf7] text-[11px] text-left text-nowrap">
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

function Frame16() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">{`12 days left   |   #63542`}</p>
      </div>
      <Tags1 />
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
      <Frame6 />
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-0 pt-6 px-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[0px] text-left">
        <p className="block mb-0 text-[20px]">TL;DR</p>
        <p className="block font-['Open_Sauce_Two:Regular',_sans-serif] mb-0 text-[15px]">
          This proposal updates the values used for the weight trader pallet to
          ensure a fair amount is charged for XCM execution using foreign assets
          in Moonbeam.
        </p>
        <p className="block mb-0 text-[15px]">&nbsp;</p>
        <p className="block mb-0 text-[20px]">Summary</p>
        <p className="block font-['Open_Sauce_Two:Regular',_sans-serif] mb-0 text-[15px]">
          Moonbeam first used the approach of units per second, that directly
          translated units of tokens to seconds of execution for a given XCM
          message.
        </p>
        <p className="block font-['Open_Sauce_Two:Regular',_sans-serif] mb-0 text-[15px]">
          As we moved to a more Ethereum-compatible approach, in which now
          XC-20s are actual ERC-20 tokens with EVM bytecode, the XCM fee
          approach was changed to use a weight trader methodology. In this
          approach, weight is consumed by a foreign asset based in a new
          constant that reflects the relative price of a token with the native
          Moonbeam token.
        </p>
        <p className="block mb-0 text-[32px]">&nbsp;</p>
        <p className="block mb-0 text-[20px]">Details</p>
        <p className="font-['Open_Sauce_Two:Regular',_sans-serif] mb-0 text-[15px]">
          <span>{`The calldata for this proposal was obtained from this `}</span>
          <a
            className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pointer"
            href="https://github.com/Moonsong-Labs/xcm-tools/blob/main/scripts/update-weight-traders.ts"
          >
            {/*<span*/}
            {/*  className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] leading-[24px] text-[#ffffff]"*/}
            {/*  ref="https://github.com/Moonsong-Labs/xcm-tools/blob/main/scripts/update-weight-traders.ts"*/}
            {/*>*/}
              weight trader calculation script
            {/*</span>*/}
          </a>
          . It uses the asset data from a JSON file and the CoinGecko API to
          obtain the price for each asset. Then, it calculates the relative
          price (considering decimals).
        </p>
        <p className="block mb-0 text-[15px]">&nbsp;</p>
        <p className="block font-['Open_Sauce_Two:Regular',_sans-serif] mb-0 text-[15px]">{`For assets that do not have a CoinGecko price feed, we've decided to make the XCM execution fee extremely high, making it not really feasible to pay XCM execution with these assets. We've decided on this approach as generally speaking tokens that are not in CoinGecko are from projects not active, etc.`}</p>
        <p className="block mb-0 text-[15px]">&nbsp;</p>
        <p className="block font-['Open_Sauce_Two:Regular',_sans-serif] text-[15px]">
          The calldata:
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#141414] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative shrink-0">
      <div className="font-['Space_Mono:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left w-[770px]">
        <p className="block leading-[24px]">
          2ee523a2206206994597c13d831ec7000000000020551601c834610300000073010100000000003497ea9312844f00
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative shrink-0"
      data-name="link"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#8d7aff] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Discord link</p>
      </div>
    </div>
  );
}

function DashboardInfo() {
  return (
    <div
      className="absolute bg-[#1b1b1b] rounded-2xl top-[237px] w-[873px]"
      data-name="dashboard_info"
      style={{ left: "calc(16.667% + 117px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[873px]">
        <Frame15 />
        <Frame17 />
        <Frame18 />
        <Link />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between pb-6 pt-3 px-0 relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none"
      />
      <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left">
        <p className="block leading-[24px]">Timeline</p>
      </div>
    </div>
  );
}

function StrengthBar() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-1.5 min-h-px min-w-px rounded-[1000px] shrink-0"
      data-name="strength_bar"
    />
  );
}

function Strength() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-[98px]"
      data-name="strength"
    >
      {[...Array(2).keys()].map((_, i) => (
        <StrengthBar key={i} />
      ))}
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3px] h-[43px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
      <div className="font-['Open_Sauce_Two:Regular',_sans-serif] relative shrink-0 text-[#ffffff] text-[15px] text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Proposal Submitted
        </p>
      </div>
      <div
        className="font-['Open_Sauce_Two:SemiBold',_sans-serif] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[16px]">12 days left</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-[271px]">
      {[...Array(2).keys()].map((_, i) => (
        <Frame19 key={i} />
      ))}
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-end justify-start pb-0 pt-3 px-0 relative shrink-0">
      <div className="flex h-[98px] items-center justify-center relative shrink-0 w-[6px]">
        <div className="flex-none rotate-[90deg]">
          <Strength />
        </div>
      </div>
      <Frame21 />
    </div>
  );
}

function DashboardInfo1() {
  return (
    <div
      className="absolute bg-[#1b1b1b] rounded-2xl top-[1033px] w-[873px]"
      data-name="dashboard_info"
      style={{ left: "calc(16.667% + 117px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[873px]">
        <Frame29 />
        <Frame22 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function TestWrap2() {
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

function Tags2() {
  return (
    <div
      className="bg-[rgba(80,223,58,0.18)] box-border content-stretch flex flex-row gap-0.5 h-5 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-md shrink-0"
      data-name="tags"
    >
      <TestWrap2 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between pb-6 pt-3 px-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left">
        <p className="block leading-[24px]">Votes</p>
      </div>
      <Tags2 />
    </div>
  );
}

function StrengthBar2() {
  return (
    <div
      className="basis-0 bg-[#35c220] grow h-1.5 min-h-px min-w-px rounded-[1000px] shrink-0"
      data-name="strength_bar"
    />
  );
}

function StrengthBar3() {
  return (
    <div
      className="bg-[#d9242b] h-1.5 rounded-[1000px] shrink-0 w-[90px]"
      data-name="strength_bar"
    />
  );
}

function Strength1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="strength"
    >
      <StrengthBar2 />
      <StrengthBar3 />
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
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">91% Aye</p>
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
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">9% Nay</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Change />
      <Change1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-6 pt-0 px-0 relative shrink-0 w-full">
      <Strength1 />
      <Frame3 />
    </div>
  );
}

function TextWrap2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#bbb3ff] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Check votes</p>
      </div>
    </div>
  );
}

function TopNavItem2() {
  return (
    <div
      className="bg-[#141414] h-12 relative rounded-[1000px] shrink-0 w-full"
      data-name="top_nav_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-3 relative w-full">
          <TextWrap2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[1000px]"
      />
    </div>
  );
}

function DashboardInfo2() {
  return (
    <div
      className="absolute bg-[#1b1b1b] rounded-2xl top-[237px] w-[379px]"
      data-name="dashboard_info"
      style={{ left: "calc(75% + 13px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[379px]">
        <Frame30 />
        <Frame25 />
        <TopNavItem2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between px-0 py-3 relative shrink-0 w-full">
      <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left">
        <p className="block leading-[24px]">Cast your vote</p>
      </div>
    </div>
  );
}

function TextWrap3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Aye</p>
      </div>
    </div>
  );
}

function TopNavItem3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-12 min-h-px min-w-px relative rounded-[1000px] shrink-0"
      data-name="top_nav_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-3 relative w-full">
          <TextWrap3 />
        </div>
      </div>
    </div>
  );
}

function TextWrap4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0"
      data-name="text_wrap"
    >
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#bbb3ff] text-[15px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Nay</p>
      </div>
    </div>
  );
}

function TopNavItem4() {
  return (
    <div
      className="basis-0 bg-[#141414] grow h-12 min-h-px min-w-px relative rounded-[1000px] shrink-0"
      data-name="top_nav_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-3 relative w-full">
          <TextWrap4 />
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
    <div className="box-border content-stretch flex flex-row gap-7 items-center justify-start p-0 relative shrink-0 w-[339px]">
      <TopNavItem3 />
      <TopNavItem4 />
    </div>
  );
}

function InputLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="input_label"
    >
      <div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Select Token Amount
        </p>
      </div>
    </div>
  );
}

function Text() {
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

function Field() {
  return (
    <div
      className="bg-[#202020] relative rounded-xl shrink-0 w-full"
      data-name="field"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Text />
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

function InputField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[339px]"
      data-name="input_field"
    >
      <InputLabel />
      <Field />
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
      <div
        className="bg-zinc-800 box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative rounded-[9999px] shrink-0 w-[339px]"
        data-name="Slider"
      >
        <Slider />
      </div>
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

function TextWrap5() {
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

function TopNavItem5() {
  return (
    <div
      className="bg-[#8d7aff] h-12 relative rounded-[1000px] shrink-0 w-full"
      data-name="top_nav_item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-4 py-3 relative w-full">
          <TextWrap5 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]" />
    </div>
  );
}

function DashboardInfo3() {
  return (
    <div
      className="absolute bg-[#1b1b1b] rounded-2xl top-[467px] w-[379px]"
      data-name="dashboard_info"
      style={{ left: "calc(75% + 11px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-5 py-4 relative w-[379px]">
        <Frame31 />
        <Frame24 />
        <InputField />
        <Frame28 />
        <TopNavItem5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between pb-6 pt-3 px-0 relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none"
      />
      <div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left">
        <p className="block leading-[24px]">Metadata (Preimage)</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left text-nowrap">
      <div className="font-['Open_Sauce_Two:Regular',_sans-serif] relative shrink-0 text-[#ffffff] text-[15px]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Hash</p>
      </div>
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          0xc3ff403367d1c16fa3d9adbce94fc37372454e6133cbe1fec5074d3
        </p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-end justify-start p-0 relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full">
      <div className="font-['Open_Sauce_Two:Regular',_sans-serif] relative shrink-0 text-[#ffffff] text-[15px]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Module
        </p>
      </div>
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Utility
        </p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full">
      <div className="font-['Open_Sauce_Two:Regular',_sans-serif] relative shrink-0 text-[#ffffff] text-[15px]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Call</p>
      </div>
      <div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">Batch</p>
      </div>
    </div>
  );
}

function DashboardInfo4() {
  return (
    <div
      className="absolute bg-[#1b1b1b] rounded-2xl top-[1274px] w-[873px]"
      data-name="dashboard_info"
      style={{ left: "calc(16.667% + 117px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[873px]">
        <Frame32 />
        <Frame34 />
        <Frame35 />
        <Frame23 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

export default function IndividualProposal() {
  return (
    <div
      className="bg-[#141414] relative size-full"
      data-name="Individual Proposal"
    >
      <SideBar />
      <TopNavItem />
      <TopNavItem1 />
      <Button />
      <DashboardInfo />
      <div
        className="absolute font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[32px] text-left top-[177px] w-[566px]"
        style={{ left: "calc(16.667% + 123px)" }}
      >
        <p className="block leading-[32px]">Proposal title goes here</p>
      </div>
      <DashboardInfo1 />
      <DashboardInfo2 />
      <DashboardInfo3 />
      <DashboardInfo4 />
    </div>
  );
}
