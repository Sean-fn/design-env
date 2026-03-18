function FaMagnifyingGlass() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-magnifying-glass">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon-wrapper">
      <FaMagnifyingGlass />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pb-0 pl-[10px] pr-0 pt-[2px] relative shrink-0">
      <IconWrapper />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[5px] pr-[10px] py-0 relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre">Search Input</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainDefault() {
  return (
    <div className="basis-0 bg-white grow h-[26px] min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="Main / Default">
      <div className="content-stretch flex h-[26px] items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame2 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
    </div>
  );
}

function AutoCompleteSearchBar() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Auto complete / Search Bar">
      <MainDefault />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[8px] relative w-full">
          <AutoCompleteSearchBar />
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 content-stretch flex gap-[5px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left">
      <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">{`M&S DISTRIBUTION INC`}</p>
      </div>
    </div>
  );
}

function MainBody() {
  return (
    <div className="absolute bg-white box-border content-stretch flex inset-0 items-center overflow-clip pl-[5px] pr-[14px] py-[8px]" data-name=".❖ Main / Body">
      <Left />
    </div>
  );
}

function DropdownTextIcon() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Dropdown / Text + Icon">
      <MainBody />
    </div>
  );
}

function Left1() {
  return (
    <div className="basis-0 content-stretch flex gap-[5px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left">
      <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">{`M&S DISTRIBUTION INC`}</p>
      </div>
    </div>
  );
}

function MainBody1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex inset-0 items-center overflow-clip pl-[5px] pr-[14px] py-[8px]" data-name=".❖ Main / Body">
      <Left1 />
    </div>
  );
}

function DropdownTextIcon1() {
  return (
    <div className="bg-[#f4f4f4] h-[34px] relative shrink-0 w-full" data-name="Dropdown / Text + Icon">
      <MainBody1 />
    </div>
  );
}

function Left2() {
  return (
    <div className="basis-0 content-stretch flex gap-[5px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left">
      <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">{`PARADIGM HEALTH & WELLNESS, INC`}</p>
      </div>
    </div>
  );
}

function MainBody2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex inset-0 items-center overflow-clip pl-[5px] pr-[14px] py-[8px]" data-name=".❖ Main / Body">
      <Left2 />
    </div>
  );
}

function DropdownTextIcon2() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Dropdown / Text + Icon">
      <MainBody2 />
    </div>
  );
}

function IconMask() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <p className="absolute font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] leading-[normal] not-italic text-[#858c94] text-[14px] text-center"></p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[13px]" data-name="ICON">
      <IconMask />
      <div className="absolute bg-[#45b6af] bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function Left3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[5px] items-center pl-[5px] pr-0 py-0 relative w-full">
          <Icon />
          <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">{`M&S DISTRIBUTION INC`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainBody3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex inset-0 items-center overflow-clip pl-[5px] pr-[14px] py-[8px]" data-name=".❖ Main / Body">
      <Left3 />
    </div>
  );
}

function DropdownTextIcon3() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Dropdown / Text + Icon">
      <MainBody3 />
    </div>
  );
}

function ScrollHeight232Px() {
  return (
    <div className="h-[232px] relative shrink-0 w-full" data-name="scroll height : 232px">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[232px] items-start px-[14px] py-0 relative w-full">
          <DropdownTextIcon />
          <DropdownTextIcon1 />
          <DropdownTextIcon2 />
          <DropdownTextIcon />
          <DropdownTextIcon />
          <DropdownTextIcon />
          {[...Array(2).keys()].map((_, i) => (
            <DropdownTextIcon3 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function List() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="list">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-[-1px] pointer-events-none shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)]" />
      <Frame />
      <ScrollHeight232Px />
    </div>
  );
}