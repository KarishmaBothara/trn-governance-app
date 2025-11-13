import svgPaths from './svg-p29gyfr1gr'
const imgLeftIcon = "/figma:asset/6656642556ed2c6d043bfd2bcdc500b820d57ca8.png";
interface DashboardSearchProps {
    prop3rdFilter?: boolean;
    prop2ndFilter?: boolean;
    prop1stFilter?: boolean;
    filters?: boolean;
}
function DashboardSearch({ /*prop3rdFilter = false,*/ prop2ndFilter = true, prop1stFilter = true, filters = true }: DashboardSearchProps) {
    return (
        <div
            className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative size-full"
            data-name="dashboard_search"
        >
            {/* Search Input Field */}
            <div
                className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
                data-name="input_field"
            >
                {/* Hidden border - matching your original design */}
                <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />

                <div className="bg-[#141414] relative rounded-[10px] shrink-0 w-full" data-name="field">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-2 relative w-full">

                            {/* Left Icon (Search Icon) - Fixed conditional rendering */}
                            {
                                // showLeftIcon &&
                                (
                                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="left_icon">
                                    <div className="absolute inset-[6.43%_6.26%_6.43%_8.34%]" data-name="Vector">
                                        <div className="absolute bottom-[1.98%] left-0 right-[2.02%] top-0">
                                            <svg
                                                className="block size-full text-white opacity-48"
                                                fill="none"
                                                preserveAspectRatio="none"
                                                role="presentation"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d={svgPaths.p3b204680}
                                                    fill="currentColor"
                                                    fillOpacity="0.48"
                                                    fillRule="evenodd"
                                                    id="Vector"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Text/Input Area - Fixed conditional rendering */}
                            {/*{*/}
                            {/*    showText && */}
                            {/*    (*/}
                            {/*    <div className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="text">*/}
                            {/*        {searchValue === '' && (*/}
                            {/*            <div className="font-['Open_Sauce_Two',sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.48)] text-left text-nowrap pointer-events-none">*/}
                            {/*                <p className="block leading-[24px] whitespace-pre">{placeholder}</p>*/}
                            {/*            </div>*/}
                            {/*        )}*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            value={searchValue}*/}
                            {/*            onChange={handleSearchChange}*/}
                            {/*            className="absolute inset-0 w-full bg-transparent border-none outline-none font-['Open_Sauce_Two',sans-serif] text-[13px] text-white leading-[24px]"*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </div>
                    </div>

                    {/* Shadow and Border Effects */}
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_3px_0px_inset_rgba(0,0,0,0.04)]" />
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
            </div>

            {/* Filters Section - Fixed conditional rendering */}
            {filters && (
                <div
                    className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
                    data-name="filters"
                >
                    {/* First Filter - General Filters */}
                    {prop1stFilter && (
                        <div
                            className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0"
                            data-name="dropdown"
                        >
                            <div className="bg-[#141414] box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-3 py-2 relative rounded-[10px] shrink-0" data-name="field">

                                {/* Filter Text - Fixed conditional rendering */}
                                {(
                                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="text">
                                        <div className="font-['Open_Sauce_Two',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap">
                                            <p className="block leading-[24px] whitespace-pre">Filters</p>
                                        </div>
                                    </div>
                                )}

                                {/* Right Icon - Fixed conditional rendering */}
                                {(
                                    <div className="relative shrink-0 size-[18px]" data-name="right_icon">
                                        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
                                            <svg
                                                className="block size-full text-white"
                                                fill="none"
                                                preserveAspectRatio="none"
                                                role="presentation"
                                                viewBox="0 0 14 11"
                                            >
                                                <path
                                                    d={svgPaths.pe9ea800}
                                                    fill="currentColor"
                                                    id="Vector"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
                            </div>
                        </div>
                    )}

                    {/* Second Filter - Sort By */}
                    {prop2ndFilter && (
                        <div
                            className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0"
                            data-name="dropdown"
                        >
                            <div className="bg-[#141414] box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-3 py-2 relative rounded-[10px] shrink-0" data-name="field">

                                {/* Sort Text - Fixed conditional rendering */}
                                {(
                                    <div className="box-border content-stretch flex flex-row font-['Open_Sauce_Two',sans-serif] gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[13px] text-left text-nowrap" data-name="text">
                                        <div className="relative shrink-0 text-[#ffffff]">
                                            <p className="block leading-[24px] text-nowrap whitespace-pre">Sort by:</p>
                                        </div>
                                        {(
                                            <div className="relative shrink-0 text-[#8d7aff]">
                                                <p className="block leading-[24px] text-nowrap whitespace-pre">Popular</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Right Icon for Sort - Fixed conditional rendering */}
                                {(
                                    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="right_icon">
                                        <div className="absolute inset-[36.98%_20.31%_28.65%_20.31%]" data-name="Vector">
                                            <svg
                                                className="block size-full text-white"
                                                fill="none"
                                                preserveAspectRatio="none"
                                                role="presentation"
                                                viewBox="0 0 11 7"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d={svgPaths.p9bb9980}
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    id="Vector"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
function TextGroup() {
    return <div className="basis-0 box-border content-stretch flex flex-col font-['Open_Sauce_Two:Medium',_sans-serif] grow items-center justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left" data-name="text_group"><div className="relative shrink-0 text-[#ffffff] text-[13px] w-full"><p className="block leading-[24px]">The Root Network</p></div><div className="relative shrink-0 text-[12px] text-[rgba(255,255,255,0.48)] w-full"><p className="block leading-[16px]">Governance</p></div></div>;
}
function List() {
    return <div className="relative rounded-xl shrink-0 w-full" data-name="list"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 items-center justify-center px-3 py-2 relative w-full"><div className="h-[38.227px] relative shrink-0 w-[29px]" data-name="Union"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 39">
    <path d={svgPaths.p97f9200} fill="var(--fill-0, white)" id="Union"/>
    </svg></div><TextGroup /></div></div><div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-xl"/></div>;
}
function Profile() {
    return <div className="bg-[#070707] box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative rounded-xl shrink-0 w-full" data-name="profile"><div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-xl"/><List /><div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]"/></div>;
}
function Header() {
    return <div className="relative shrink-0 w-full" data-name="header"><div className="relative size-full"><div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full"><Profile /></div></div></div>;
}
function Section() {
    return <div className="relative shrink-0 w-full" data-name="section"><div className="flex flex-row items-end relative size-full"><div className="box-border content-stretch flex flex-row gap-2 items-end justify-start pb-0 pt-6 px-6 relative w-full"><div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.48)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">Governance</p></div></div></div></div>;
}
function LeftIcon() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <g id="Vector">
    <path d={svgPaths.p23bb9f00} fill="var(--fill-0, #4B4B4B)"/>
    <path clipRule="evenodd" d={svgPaths.p23bc3140} fill="var(--fill-0, #4B4B4B)" fillRule="evenodd"/>
    </g>
    </g>
    </svg></div>;
}
function SidebarItem() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">Dashboard</p></div></div></div></div>;
}
function LeftIcon1() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <g id="Vector">
    <path d={svgPaths.p2c995a80} fill="var(--fill-0, black)"/>
    <path d={svgPaths.pde63180} fill="var(--fill-0, black)"/>
    <path d={svgPaths.p172da500} fill="var(--fill-0, black)"/>
    <path d={svgPaths.p2375ce00} fill="var(--fill-0, black)"/>
    </g>
    </g>
    </svg></div>;
}
function SidebarItem1() {
    return <div className="bg-[#ffffff] h-10 relative rounded-lg shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon1 /><div className="basis-0 font-['Open_Sauce_Two:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[13px] text-left"><p className="block leading-[24px]">All Proposals</p></div></div></div></div>;
}
function LeftIcon2() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <g id="Vector">
    <path d={svgPaths.p1e373700} fill="var(--fill-0, white)" fillOpacity="0.48"/>
    <path d={svgPaths.p34b5800} fill="var(--fill-0, white)" fillOpacity="0.48"/>
    <path d={svgPaths.pff97a00} fill="var(--fill-0, white)" fillOpacity="0.48"/>
    </g>
    </g>
    </svg></div>;
}
function SidebarItem2() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon2 /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">Delegate</p></div></div></div></div>;
}
function LeftIcon3() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <path clipRule="evenodd" d={svgPaths.p9cb7f00} fill="var(--fill-0, white)" fillOpacity="0.48" fillRule="evenodd" id="Vector"/>
    </g>
    </svg></div>;
}
function SidebarItem3() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon3 /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">Submit Proposal</p></div></div></div></div>;
}
function SidebarNav() {
    return <div className="relative rounded-xl shrink-0 w-full" data-name="sidebar_nav"><div className="flex flex-col justify-center relative size-full"><div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-2 relative w-full"><SidebarItem /><SidebarItem1 /><SidebarItem2 /><SidebarItem3 /></div></div></div>;
}
function Section1() {
    return <div className="relative shrink-0 w-full" data-name="section"><div className="flex flex-row items-end relative size-full"><div className="box-border content-stretch flex flex-row gap-2 items-end justify-start pb-0 pt-6 px-6 relative w-full"><div className="font-['Open_Sauce_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.48)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">ADMINISTRATION</p></div></div></div></div>;
}
function LeftIcon4() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <path d={svgPaths.p9a6800} fill="var(--fill-0, white)" fillOpacity="0.48" id="Vector"/>
    </g>
    </svg></div>;
}
function SidebarItem4() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon4 /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">{`Council `}</p></div></div></div></div>;
}
function LeftIcon5() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <path clipRule="evenodd" d={svgPaths.pc132500} fill="var(--fill-0, white)" fillOpacity="0.48" fillRule="evenodd" id="Vector"/>
    </g>
    </svg></div>;
}
function SidebarItem5() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon5 /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">My Portfolio</p></div></div></div></div>;
}
function LeftIcon6() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <path clipRule="evenodd" d={svgPaths.p3c053580} fill="var(--fill-0, white)" fillOpacity="0.48" fillRule="evenodd" id="Vector"/>
    </g>
    </svg></div>;
}
function SidebarItem6() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon6 /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">Staking</p></div></div></div></div>;
}
function SidebarNav1() {
    return <div className="relative rounded-xl shrink-0 w-full" data-name="sidebar_nav"><div className="flex flex-col justify-center relative size-full"><div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-2 relative w-full"><SidebarItem4 /><SidebarItem5 /><SidebarItem6 /></div></div></div>;
}
function Sections() {
    return <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full" data-name="sections"><Section /><SidebarNav /><Section1 /><SidebarNav1 /></div>;
}
function Top() {
    return <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full" data-name="top"><Header /><Sections /></div>;
}
function LeftIcon7() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <g id="Union">
    <path d={svgPaths.p1201f880} fill="var(--fill-0, white)" fillOpacity="0.48"/>
    <path clipRule="evenodd" d={svgPaths.p3415cf00} fill="var(--fill-0, white)" fillOpacity="0.48" fillRule="evenodd"/>
    </g>
    </g>
    </svg></div>;
}
function SidebarItem7() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon7 /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">Documentation</p></div></div></div></div>;
}
function LeftIcon8() {
    return <div className="relative shrink-0 size-[22px]" data-name="left_icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 22 22">
    <g id="left_icon">
    <path clipRule="evenodd" d={svgPaths.p4ac0200} fill="var(--fill-0, white)" fillOpacity="0.48" fillRule="evenodd" id="Vector"/>
    </g>
    </svg></div>;
}
function TestWrap() {
    return <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0" data-name="test_wrap"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7fe76f] text-[11px] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">All online</p></div></div>;
}
function Tags() {
    return <div className="bg-[rgba(80,223,58,0.18)] box-border content-stretch flex flex-row h-6 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-md shrink-0" data-name="tags"><TestWrap /><div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]"/></div>;
}
function SidebarItem8() {
    return <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="sidebar_item"><div className="flex flex-row items-center justify-center overflow-clip relative size-full"><div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center px-3 py-2 relative w-full"><LeftIcon8 /><div className="basis-0 font-['Open_Sauce_Two:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-left"><p className="block leading-[24px]">Help</p></div><Tags /></div></div></div>;
}
function SidebarNav2() {
    return <div className="relative rounded-xl shrink-0 w-full" data-name="sidebar_nav"><div className="flex flex-col justify-center relative size-full"><div className="box-border content-stretch flex flex-col items-start justify-center pb-4 pt-2 px-3 relative w-full"><SidebarItem7 /><SidebarItem8 /></div></div></div>;
}
function Bottom() {
    return <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full" data-name="bottom"><SidebarNav2 /></div>;
}
function SideBar() {
    return <div className="absolute bg-[#070707] h-[1087px] left-[15px] rounded-[20px] top-[17px] w-[304px]" data-name="side_bar"><div className="box-border content-stretch flex flex-col h-[1087px] items-start justify-between overflow-clip p-0 relative w-[304px]"><Top /><Bottom /></div><div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_6px_6px_-3px_rgba(0,0,0,0.12),0px_12px_12px_-6px_rgba(0,0,0,0.12),0px_32px_32px_-16px_rgba(0,0,0,0.12),0px_64px_64px_-32px_rgba(0,0,0,0.12)]"/></div>;
}
function LeftIcon10() {
    return <div className="bg-center bg-cover bg-no-repeat rounded-[1000px] shrink-0 size-5" data-name="left_icon" style={{ backgroundImage: `url('${imgLeftIcon}')` }}/>;
}
function TextWrap() {
    return <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0" data-name="text_wrap"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap"><p className="block leading-[24px] whitespace-pre">FV Seona</p></div></div>;
}
function TopNavItem() {
    return <div className="absolute bg-[#8d7aff] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 rounded-[1000px] top-[30px]" data-name="top_nav_item" style={{ left: "calc(91.667% - 31px)" }}><LeftIcon10 /><TextWrap /><div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]"/></div>;
}
function TextWrap1() {
    return <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0" data-name="text_wrap"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap"><p className="block leading-[24px] whitespace-pre">100,000 ROOT</p></div></div>;
}
function TopNavItem1() {
    return <div className="absolute bg-[#000000] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 rounded-[1000px] top-[30px]" data-name="top_nav_item" style={{ left: "calc(75% + 74px)" }}><TextWrap1 /></div>;
}
function Header1() {
    return <div className="relative shrink-0 w-full" data-name="header"><div className="relative size-full"><div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-3 pt-0 px-12 relative w-full"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[32px] text-left text-nowrap"><p className="block leading-[32px] whitespace-pre">All Proposals (20)</p></div></div></div></div>;
}
function NavBarHeader() {
    return <div className="absolute bottom-[971px] box-border content-stretch flex flex-col items-start justify-start pb-0 pt-10 px-0 w-[1088px]" data-name="nav_bar_header" style={{ left: "calc(16.667% + 69px)" }}><Header1 /></div>;
}
function TestWrap1() {
    return <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0" data-name="test_wrap"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7fe76f] text-[11px] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">Status Badge</p></div></div>;
}
function Tags1() {
    return <div className="bg-[rgba(80,223,58,0.18)] box-border content-stretch flex flex-row gap-0.5 h-5 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-md shrink-0" data-name="tags"><TestWrap1 /><div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]"/></div>;
}
function TestWrap2() {
    return <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-0.5 py-0 relative shrink-0" data-name="test_wrap"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#92cbf7] text-[11px] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">Track name</p></div></div>;
}
function Tags2() {
    return <div className="bg-[rgba(89,176,243,0.18)] box-border content-stretch flex flex-row gap-0.5 h-5 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-md shrink-0" data-name="tags"><TestWrap2 /><div className="absolute inset-0 pointer-events-none shadow-[0px_2px_3px_0px_inset_rgba(255,255,255,0.07),0px_-1px_3px_-1px_inset_rgba(255,255,255,0.07)]"/></div>;
}
function Frame5() {
    return <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"><Tags1 /><Tags2 /></div>;
}
function Frame2() {
    return <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"><Frame5 /><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">{`12 days left   |   #63542`}</p></div></div>;
}
function Change() {
    return <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="change"><div className="h-2.5 relative shrink-0 w-4" data-name="Vector"><div className="absolute bottom-0 left-[6.81%] right-[6.81%] top-[6.01%]" style={{ "--fill-0": "rgba(127, 231, 111, 1)" } as React.CSSProperties}><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 14 10">
    <path d={svgPaths.p3da20600} fill="var(--fill-0, #7FE76F)" id="Vector"/>
    </svg></div></div><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">9% Aye</p></div></div>;
}
function Change1() {
    return <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="change"><div className="flex items-center justify-center relative shrink-0"><div className="flex-none rotate-[180deg]"><div className="h-2.5 relative w-4" data-name="Vector"><div className="absolute bottom-0 left-[6.81%] right-[6.81%] top-[6.01%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
    <path d={svgPaths.p3da20600} fill="var(--fill-0, #D9242B)" id="Vector"/>
    </svg></div></div></div></div><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">9% Nay</p></div></div>;
}
function Frame3() {
    return <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"><Change /><Change1 /></div>;
}
function LeftIcon12() {
    return <div className="bg-center bg-cover bg-no-repeat rounded-[1000px] shrink-0 size-5" data-name="left_icon" style={{ backgroundImage: `url('${imgLeftIcon}')` }}/>;
}
function Frame6() {
    return <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"><LeftIcon12 /><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">FV Seona</p></div></div>;
}
function Frame1() {
    return <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"><Frame3 /><Frame6 /></div>;
}
function Figures() {
    return <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full" data-name="figures"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[26px] text-left text-nowrap"><p className="block leading-[32px] whitespace-pre">Proposal title goes here</p></div><Frame1 /></div>;
}
function DashboardInfo() {
    return <div className="bg-[#1b1b1b] relative rounded-2xl shrink-0 w-[598px]" data-name="dashboard_info"><div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-5 py-4 relative w-[598px]"><Frame2 /><Figures /></div><div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.12),0px_3px_3px_-1.5px_rgba(0,0,0,0.12),0px_24px_24px_-12px_rgba(0,0,0,0.12)]"/></div>;
}
function Frame4() {
    return <div className="[flex-flow:wrap] absolute box-border content-center flex gap-6 items-center justify-start p-0 top-[257px] w-[1220px]" style={{ left: "calc(16.667% + 117px)" }}>{[...Array(10).keys()].map((_, i) => (<DashboardInfo key={i}/>))}</div>;
}
function Button() {
    return <div className="absolute bg-[#8d7aff] h-12 rounded-[10px] top-[165px]" data-name="button" style={{ left: "calc(83.333% + 27px)" }}><div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center overflow-clip px-4 py-3 relative"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap"><p className="block leading-[24px] whitespace-pre">Submit Proposal</p></div></div><div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]"/><div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[10px]"/></div>;
}
function Icon() {
    return <div className="relative shrink-0 size-[18px]" data-name="icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
    <g id="icon">
    <path clipRule="evenodd" d={svgPaths.p1711a600} fill="var(--fill-0, white)" fillOpacity="0.72" fillRule="evenodd" id="Vector"/>
    </g>
    </svg></div>;
}
function IconButton() {
    return <div className="bg-[#141414] relative rounded-lg shrink-0 size-8" data-name="icon_button"><div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative size-8"><Icon /></div><div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-lg"/></div>;
}
function Button1() {
    return <div className="bg-[#8d7aff] relative rounded-lg shrink-0 size-8" data-name="button"><div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative size-8"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">1</p></div></div><div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_-2px_inset_rgba(255,255,255,0.56),0px_0px_8px_-2px_inset_rgba(0,0,0,0.24)]"/><div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-lg"/></div>;
}
function Button2() {
    return <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0 size-8" data-name="button"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">2</p></div></div>;
}
function Button3() {
    return <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0 size-8" data-name="button"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">3</p></div></div>;
}
function Button4() {
    return <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0 size-8" data-name="button"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">4</p></div></div>;
}
function Button5() {
    return <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0 size-8" data-name="button"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">5</p></div></div>;
}
function Button6() {
    return <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0 size-8" data-name="button"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">...</p></div></div>;
}
function Button7() {
    return <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0 size-8" data-name="button"><div className="font-['Open_Sauce_Two:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.72)] text-left text-nowrap"><p className="block leading-[16px] whitespace-pre">10</p></div></div>;
}
function Numbers() {
    return <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="numbers"><Button1 /><Button2 /><Button3 /><Button4 /><Button5 /><Button6 /><Button7 /></div>;
}
function Icon1() {
    return <div className="relative shrink-0 size-[18px]" data-name="icon"><svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
    <g id="icon">
    <path clipRule="evenodd" d={svgPaths.pf7ecb00} fill="var(--fill-0, white)" fillOpacity="0.72" fillRule="evenodd" id="Vector"/>
    </g>
    </svg></div>;
}
function IconButton1() {
    return <div className="bg-[#141414] relative rounded-lg shrink-0 size-8" data-name="icon_button"><div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip p-[8px] relative size-8"><Icon1 /></div><div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-lg"/></div>;
}
function Pages() {
    return <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0" data-name="pages"><IconButton /><Numbers /><IconButton1 /></div>;
}
function Pagination() {
    return <div className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 top-[1044px] w-[1040px]" data-name="pagination" style={{ left: "calc(25% + 63px)" }}><Pages /></div>;
}
export default function AllReferenda() {
    return <div className="bg-[#141414] relative size-full" data-name="All Referenda"><SideBar /><TopNavItem /><TopNavItem1 /><NavBarHeader /><div className="absolute box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 top-[168px] w-[1007px]" data-name="dashboard_search" style={{ left: "calc(16.667% + 117px)" }}><DashboardSearch /></div><Frame4 /><Button /><Pagination /></div>;
}
