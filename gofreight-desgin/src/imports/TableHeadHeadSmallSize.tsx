function Content() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        VGM
      </p>
    </div>
  );
}

function FaAngleDown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap"></p>
    </div>
  );
}

function SelectIcon() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <FaAngleDown />
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
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        KGS
      </p>
      <ActionGroup />
    </div>
  );
}

function SelectWrap() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="select-wrap">
      <Container />
    </div>
  );
}

function SelectSingleSelect() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
      <SelectWrap />
    </div>
  );
}

export default function TableHeadHeadSmallSize() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative size-full" data-name="Table Head / Head Small Size">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start justify-center px-[5px] py-[3px] relative size-full">
          <Content />
          <SelectSingleSelect />
        </div>
      </div>
    </div>
  );
}