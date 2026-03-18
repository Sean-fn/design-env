function FaPlus() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-plus">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#aaaaaa] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaPlus />
    </div>
  );
}

function SolidButton() {
  return (
    <div className="bg-neutral-200 h-[28px] relative shrink-0 w-full" data-name="Solid Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] h-[28px] items-center justify-center px-[10px] py-[4px] relative w-full">
          <IconWrapper />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add HB/L
          </p>
        </div>
      </div>
    </div>
  );
}

function MainHr() {
  return (
    <div className="h-0 relative w-full" data-name=".Main / hr">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
          <g id=".Main / hr">
            <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="184" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HrDivider() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[20px] relative shrink-0 w-full" data-name="hr & divider">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <MainHr />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[100px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c4c4c4] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[10px] whitespace-pre">Sort by:</p>
      </div>
    </div>
  );
}

function FaAngleDown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaAngleDown />
    </div>
  );
}

function SelectIcon() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <IconWrapper1 />
    </div>
  );
}

function ActionGroup() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] pr-0 py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] relative shrink-0 text-[#333333] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create Date
      </p>
      <ActionGroup />
    </div>
  );
}

function SelectWrap() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container />
    </div>
  );
}

function SelectSingleSelect() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
      <SelectWrap />
    </div>
  );
}

function ElementGroup() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Element Group">
      <SelectSingleSelect />
    </div>
  );
}

function FormGroup() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-[134px]" data-name="Form Group">
      <Text />
      <ElementGroup />
    </div>
  );
}

function FaLongArrowDown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-long-arrow-down">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b9bd1] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <FaLongArrowDown />
    </div>
  );
}

function TextButton() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Text Button">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        DESC
      </p>
      <IconWrapper2 />
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filter Bar">
      <FormGroup />
      <TextButton />
    </div>
  );
}

function FaCogs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-cogs">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <FaCogs />
    </div>
  );
}

function TextButton1() {
  return (
    <div className="content-stretch flex gap-[3px] items-center overflow-clip relative shrink-0" data-name="Text Button">
      <IconWrapper3 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#777777] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card Setting
      </p>
    </div>
  );
}

function FilterOption() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Filter Option">
      <TextButton1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full">
      <FilterBar />
      <FilterOption />
    </div>
  );
}

function IconMask() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <div className="absolute flex flex-col font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] justify-center leading-[0] not-italic text-[#858c94] text-[14px] text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function DeprecatedFaInfoCircle() {
  return (
    <div className="h-[19px] relative shrink-0 w-[13px]" data-name=".DEPRECATED_fa-info-circle">
      <IconMask />
      <div className="absolute bg-white bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-start left-0 pb-0 pt-[7px] px-[7px] top-0 w-[184px]" data-name="Title">
      <DeprecatedFaInfoCircle />
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        HBLNo.
      </p>
    </div>
  );
}

function IconMask1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <div className="absolute flex flex-col font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] justify-center leading-[0] not-italic text-[#858c94] text-[14px] text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function DeprecatedFaExclamationCircle() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name=".DEPRECATED_fa-exclamation-circle">
      <IconMask1 />
      <div className="absolute bg-[#f3565d] bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function NoticeChangeColorHere() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-[163px] p-[7px] rounded-[15px] size-[27px] top-[3px]" data-name="notice-change color here">
      <div aria-hidden="true" className="absolute border-2 border-[#f3c200] border-solid inset-[-1px] pointer-events-none rounded-[16px] shadow-[-1px_2px_0px_0px_rgba(0,0,0,0.1)]" />
      <DeprecatedFaExclamationCircle />
    </div>
  );
}

function Title1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Title">
      <Title />
      <NoticeChangeColorHere />
    </div>
  );
}

function Subtitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subtitle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[7px] pl-[25px] pr-[7px] pt-0 relative w-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Subtitle
          </p>
        </div>
      </div>
    </div>
  );
}

function Subtitle1() {
  return (
    <div className="content-stretch flex items-center pb-[10px] pl-[7px] pr-0 pt-0 relative shrink-0 w-[184px]" data-name="Subtitle">
      <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[13px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shipper
      </p>
    </div>
  );
}

function Subtitle2() {
  return (
    <div className="content-stretch flex items-center pb-[10px] pl-[7px] pr-0 pt-0 relative shrink-0 w-[184px]" data-name="Subtitle">
      <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[13px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consignee
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start left-0 overflow-clip top-0" data-name="Text">
      <Subtitle1 />
      <Subtitle2 />
    </div>
  );
}

function IconMask2() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <p className="absolute font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] leading-[normal] not-italic text-[#858c94] text-[60px] text-center"></p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bottom-[3px] opacity-40 right-[5px] size-[60px]" data-name="Icon">
      <IconMask2 />
      <div className="absolute bg-white bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <div className="absolute flex flex-col font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] justify-center leading-[0] not-italic text-[#858c94] text-[12px] text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function DeprecatedFaWarning() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name=".DEPRECATED_fa-warning">
      <IconMask3 />
      <div className="absolute bg-white bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function NoticeTask() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] content-stretch flex items-center left-0 p-[5px] top-[134px]" data-name="notice task">
      <DeprecatedFaWarning />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Task</p>
      </div>
    </div>
  );
}

function ContentMax160Px() {
  return (
    <div className="h-[160px] relative shrink-0 w-[184px]" data-name="Content - max:160px">
      <Text1 />
      <Icon />
      <NoticeTask />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">PKG: 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Weight: 1 KG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Measurement: 1 CBM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre">AR/AP Balance 100.00 / 100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame4 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Bottom">
      <HblInfoCon />
      <HblInfoCon1 />
      <HblInfoCon2 />
      <HblInfoCon3 />
    </div>
  );
}

function SelectBgColorHere() {
  return (
    <div className="bg-[#f3c200] content-stretch flex flex-col items-start relative shrink-0" data-name="Select bg color here">
      <Title1 />
      <Subtitle />
      <ContentMax160Px />
      <Bottom />
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[5px] top-[5px]" data-name="Arrow Icon">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a99cc] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute h-[26px] left-[-24px] top-0 w-[24px]" data-name="Icon Container">
      <div className="h-[26px] overflow-clip relative rounded-[inherit] w-[24px]">
        <ArrowIcon />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card">
      <SelectBgColorHere />
      <IconContainer />
    </div>
  );
}

function HblCards() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[184px]" data-name="HBL cards">
      <Card />
    </div>
  );
}

export default function CardPanel() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative size-full" data-name="Card Panel">
      <SolidButton />
      <HrDivider />
      <Frame />
      <HblCards />
    </div>
  );
}