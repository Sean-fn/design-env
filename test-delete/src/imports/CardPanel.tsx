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

export default function CardPanel() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative size-full" data-name="Card Panel">
      <SolidButton />
      <HrDivider />
      <Frame />
    </div>
  );
}