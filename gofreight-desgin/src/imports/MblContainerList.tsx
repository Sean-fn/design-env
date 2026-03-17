import svgPaths from "./svg-0k3vl48qpm";

function Frame13() {
  return (
    <div className="content-stretch flex gap-[15px] items-center leading-[normal] relative shrink-0">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        P.O. No.
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#777] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Please list down P.O. No. for this HB/L
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[10px]">P.O. Mapping</p>
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Radio">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Radio">
          <rect fill="var(--fill-0, white)" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
          <rect height="13" rx="6.5" stroke="var(--stroke-0, #C6C6C6)" width="13" x="0.5" y="0.5" />
          <circle cx="7" cy="7" fill="var(--fill-0, #666666)" id="Dot Select" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Radio">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Radio">
          <rect fill="var(--fill-0, white)" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
          <rect height="13" rx="6.5" stroke="var(--stroke-0, #C6C6C6)" width="13" x="0.5" y="0.5" />
          <circle cx="7" cy="7" fill="var(--fill-0, #666666)" id="Dot Select" r="4" />
        </g>
      </svg>
    </div>
  );
}

function ElementGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Element Group">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio Button">
        <Radio />
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Container based
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio Button">
        <Radio1 />
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Item based
        </p>
      </div>
    </div>
  );
}

function FormGroup() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Form Group">
      <Text />
      <ElementGroup />
    </div>
  );
}

function SectionHead() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section Head">
      <Frame13 />
      <FormGroup />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add P.O. here...
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container />
    </div>
  );
}

function SectionHead1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Section Head">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Container List
      </p>
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="checkbox-input">
          <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
          <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        #
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Container No.
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-end relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        PKG
      </p>
    </div>
  );
}

function SelectIcon() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
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

function Container1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CARTON(S)
      </p>
      <ActionGroup />
    </div>
  );
}

function SelectWrap() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-end relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        Net Weight
      </p>
    </div>
  );
}

function SelectIcon1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
      <ActionGroup1 />
    </div>
  );
}

function SelectWrap1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-end relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weight
      </p>
    </div>
  );
}

function SelectIcon2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
      <ActionGroup2 />
    </div>
  );
}

function SelectWrap2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-end relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        Measurement
      </p>
    </div>
  );
}

function SelectIcon3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CBM
      </p>
      <ActionGroup3 />
    </div>
  );
}

function SelectWrap3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container4 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        P.O. No.
      </p>
    </div>
  );
}

function TableSmallSizedRowBorderHeader() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[6]" data-name="table / small-sized / row / border / header">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[32px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
        <Content />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[120px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content1 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[128px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[3px] items-end justify-center min-w-[inherit] pl-[4px] pr-[6px] py-[8px] relative w-full">
            <Content2 />
            <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
              <SelectWrap />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[128px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[3px] items-end justify-center min-w-[inherit] pl-[4px] pr-[6px] py-[8px] relative w-full">
            <Content3 />
            <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
              <SelectWrap1 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[128px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[3px] items-end justify-center min-w-[inherit] pl-[4px] pr-[6px] py-[8px] relative w-full">
            <Content4 />
            <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
              <SelectWrap2 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[128px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[3px] items-end justify-center min-w-[inherit] pl-[4px] pr-[6px] py-[8px] relative w-full">
            <Content5 />
            <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
              <SelectWrap3 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            0
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container6 />
    </div>
  );
}

function TableSmallSizedCell() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-[295px] relative" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
            <InputWrap2 />
          </div>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#333] text-[11px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            KG
          </p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            0
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container7 />
    </div>
  );
}

function TableSmallSizedCell1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-[295px] relative" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
            <InputWrap3 />
          </div>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#333] text-[11px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            KG
          </p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            0
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container8 />
    </div>
  );
}

function TableSmallSizedCell2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-[295px] relative" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
            <InputWrap4 />
          </div>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#333] text-[11px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
            CBM
          </p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#e4e4e4] flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px opacity-0 relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container9 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full z-[5]" data-name="Table Row">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center px-[5px] py-[3px] relative shrink-0 w-[32px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
        <Content7 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-full items-center px-[5px] py-[3px] relative shrink-0 w-[120px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal h-[15px] leading-[normal] min-h-px min-w-px overflow-hidden relative text-[#333] text-[11px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          QWER1234567
        </p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-[295px] relative" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
              <InputWrap1 />
            </div>
          </div>
        </div>
      </div>
      <TableSmallSizedCell />
      <TableSmallSizedCell1 />
      <TableSmallSizedCell2 />
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
              <InputWrap5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Radio">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Radio">
          <rect fill="var(--fill-0, white)" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
          <rect height="13" rx="6.5" stroke="var(--stroke-0, #C6C6C6)" width="13" x="0.5" y="0.5" />
          <circle cx="7" cy="7" fill="var(--fill-0, #666666)" id="Dot Select" r="4" />
        </g>
      </svg>
    </div>
  );
}

function TableSmallSizedHeader() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[120px]" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Container Total</p>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedHeader1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
      <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
            <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedHeader2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
      <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
            <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">0.000 KG</p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
            <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">0.000 LB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedHeader3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
      <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
            <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">0.000 KG</p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
            <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">0.000 LB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedHeader4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
      <div className="flex flex-col items-end justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
            <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">0.000 CBM</p>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
            <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">0.000 CTF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedHeader5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[5px] py-[3px] size-full" />
      </div>
    </div>
  );
}

function TableSmallSizedRowBorderHeader1() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full z-[4]" data-name="table / small-sized / row / border / header">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative self-stretch shrink-0 w-[32px]" data-name="Radio Button">
        <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
        <Radio2 />
      </div>
      <TableSmallSizedHeader />
      <TableSmallSizedHeader1 />
      <TableSmallSizedHeader2 />
      <TableSmallSizedHeader3 />
      <TableSmallSizedHeader4 />
      <TableSmallSizedHeader5 />
    </div>
  );
}

function Radio3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Radio">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Radio">
          <rect fill="var(--fill-0, white)" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
          <rect height="13" rx="6.5" stroke="var(--stroke-0, #C6C6C6)" width="13" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function TableSmallSizedHeader6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[120px]" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Manual Input Total</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#e4e4e4] flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px opacity-0 relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Text
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
        <InputWrap6 />
      </div>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[5px] relative w-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            0000000 LB
          </p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#e4e4e4] flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px opacity-0 relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Text
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
        <InputWrap7 />
      </div>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[5px] relative w-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            0000000 LB
          </p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#e4e4e4] flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px opacity-0 relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Text
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container12 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
        <InputWrap8 />
      </div>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[5px] relative w-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            0000000 LB
          </p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#e4e4e4] flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px opacity-0 relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Text
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap9() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container13 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
        <InputWrap9 />
      </div>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CBM
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[5px] relative w-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            0000000 CTF
          </p>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedHeader7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[5px] py-[3px] size-full" />
      </div>
    </div>
  );
}

function TableSmallSizedRowBorderHeader2() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full z-[3]" data-name="table / small-sized / row / border / header">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative self-stretch shrink-0 w-[32px]" data-name="Radio Button">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid border-t inset-0 pointer-events-none" />
        <Radio3 />
      </div>
      <TableSmallSizedHeader6 />
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-w-[inherit] px-[5px] py-[8px] relative w-full">
            <Frame4 />
            <Frame1 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-w-[inherit] px-[5px] py-[8px] relative w-full">
            <Frame5 />
            <Frame2 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-w-[inherit] px-[5px] py-[8px] relative w-full">
            <Frame6 />
            <Frame3 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[295px] relative" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-w-[inherit] px-[5px] py-[8px] relative w-full">
            <Frame7 />
            <Frame8 />
          </div>
        </div>
      </div>
      <TableSmallSizedHeader7 />
    </div>
  );
}

function Radio4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Radio">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Radio">
          <rect fill="var(--fill-0, white)" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
          <rect height="13" rx="6.5" stroke="var(--stroke-0, #C6C6C6)" width="13" x="0.5" y="0.5" />
          <circle cx="7" cy="7" fill="var(--fill-0, #DDDDDD)" id="BG" r="6.5" stroke="var(--stroke-0, #C6C6C6)" />
        </g>
      </svg>
    </div>
  );
}

function TableSmallSizedHeader8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[120px]" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Text">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5b9bd1] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Receiving Total</p>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedHeader9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[5px] py-[3px] relative size-full">
          <div className="bg-[#428bca] content-stretch flex gap-[3px] items-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Solid Button">
            <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-filter">
                <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white"></p>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Load from Warehouse Receipt List
            </p>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
                <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white"></p>
              </div>
            </div>
          </div>
          <div className="bg-[#428bca] content-stretch flex gap-[3px] items-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Solid Button">
            <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-filter">
                <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white"></p>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Create Item and Link the warehouse receipt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedRowBorderHeader3() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="table / small-sized / row / border / header">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative self-stretch shrink-0 w-[32px]" data-name="Radio Button">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
        <Radio4 />
      </div>
      <TableSmallSizedHeader8 />
      <TableSmallSizedHeader9 />
    </div>
  );
}

function CheckboxInput1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="checkbox-input">
          <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
          <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center justify-end max-w-[100px] min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[10px]">Display Unit</p>
      </div>
    </div>
  );
}

function SelectIcon4() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#333] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Show Both
          </p>
          <ActionGroup4 />
        </div>
      </div>
    </div>
  );
}

function SelectWrap4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container14 />
    </div>
  );
}

function ElementGroup1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative" data-name="Element Group">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="size=default, state=default, status=default, filled?=true">
        <SelectWrap4 />
      </div>
    </div>
  );
}

function TableSmallSizedRowBorderHeader4() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="table / small-sized / row / border / header">
      <div className="content-stretch flex items-start justify-between pb-[24px] pt-[8px] px-[8px] relative w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
          <CheckboxInput1 />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Auto-sync package, weight and measurements
          </p>
        </div>
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-[325px]" data-name="Form Group">
          <Text1 />
          <ElementGroup1 />
        </div>
      </div>
    </div>
  );
}

function TableSmallSized() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="table / small-sized">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-1px] pointer-events-none" />
      <TableSmallSizedRowBorderHeader />
      <TableRow />
      <TableSmallSizedRowBorderHeader1 />
      <TableSmallSizedRowBorderHeader2 />
      <TableSmallSizedRowBorderHeader3 />
      <TableSmallSizedRowBorderHeader4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxInput />
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Add pallet info
        </p>
      </div>
      <TableSmallSized />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <SectionHead1 />
      <Frame14 />
    </div>
  );
}

function ActionButtonGroup() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="action-button-group">
      <div className="bg-[#26a69a] content-stretch flex gap-[3px] h-[33px] items-center px-[14px] py-[7px] relative shrink-0" data-name="Solid Button">
        <div className="content-stretch flex h-[19px] items-center relative shrink-0" data-name="icon-wrapper">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-plus">
            <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white"></p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[33px] relative shrink-0" data-name="Outline Button">
        <div className="content-stretch flex gap-[3px] h-full items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
          <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-trash">
              <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px] text-center"></p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[33px] relative shrink-0" data-name="Outline Button">
        <div className="content-stretch flex gap-[3px] h-full items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Load from Shipper
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[33px] relative shrink-0" data-name="Outline Button">
        <div className="content-stretch flex gap-[3px] h-full items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save to Shipper
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function SectionHead2() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Section Head">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commodity / Manifest Commodity
      </p>
      <ActionButtonGroup />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[15px]" data-name=".DEPRECATED_Checkbox">
        <div className="absolute bg-white left-0 size-[15px] top-0" data-name=".❖ Main / Checkbox">
          <div className="absolute bg-white border border-[#c9c9c9] border-solid left-0 size-[15px] top-0" data-name="background" />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[3px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="h-full leading-[10px] relative shrink-0 text-[#f3565d] text-[11px] text-right w-[7px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
      <div className="leading-[normal] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Commodity</p>
        <p>Description</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PKG
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        HTS Code
      </p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PCS
      </p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-end relative shrink-0" data-name="Content">
      <div className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Net</p>
        <p>Weight</p>
      </div>
    </div>
  );
}

function SelectIcon5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
      <ActionGroup5 />
    </div>
  );
}

function SelectWrap5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container15 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-end relative shrink-0" data-name="Content">
      <div className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Gross</p>
        <p>Weight</p>
      </div>
    </div>
  );
}

function SelectIcon6() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
      <ActionGroup6 />
    </div>
  );
}

function SelectWrap6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container16 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-end relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        Measurement
      </p>
    </div>
  );
}

function SelectIcon7() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon7 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        KG
      </p>
      <ActionGroup7 />
    </div>
  );
}

function SelectWrap7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container17 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unit Price
      </p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amount
      </p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commodity Details
      </p>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Container
      </p>
    </div>
  );
}

function TableSmallSizedRowBorderHeader5() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="table / small-sized / row / border / header">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[32px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content8 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[128px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content9 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[208px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content10 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[72px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content11 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[64px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content12 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[3px] items-end justify-center min-w-[64px] pl-[4px] pr-[6px] py-[8px] relative self-stretch shrink-0" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content13 />
        <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
          <SelectWrap5 />
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[3px] items-end justify-center min-w-[64px] pl-[4px] pr-[6px] py-[8px] relative self-stretch shrink-0 w-[64px]" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content14 />
        <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
          <SelectWrap6 />
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[3px] items-end justify-center min-w-[96px] pl-[4px] pr-[6px] py-[8px] relative self-stretch shrink-0 w-[96px]" data-name=".(DEPRECATED) table / default-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content15 />
        <div className="bg-white content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
          <SelectWrap7 />
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[80px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content16 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[80px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content17 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[128px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content18 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
            <Content19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckboxInput2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="checkbox-input">
          <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
          <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap10() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap11() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container19 />
    </div>
  );
}

function SelectIcon8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]" data-name="select-icon">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-angle-down">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center"></p>
        </div>
      </div>
    </div>
  );
}

function ActionGroup8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="action-group">
      <SelectIcon8 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center pl-[5px] py-[3px] relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        QUARTERS OF BEEF
      </p>
      <ActionGroup8 />
    </div>
  );
}

function SelectWrap8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="select-wrap">
      <Container20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center pl-[5px] py-[3px] relative shrink-0 w-[72px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap11 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Select / Single Select">
          <SelectWrap8 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap12() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap13() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap14() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap15() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap16() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap17() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap18() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap19() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.429] min-h-px min-w-px relative text-[#e4e4e4] text-[11px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
        </div>
      </div>
    </div>
  );
}

function InputWrap20() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container29 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[1]" data-name="Table Row">
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[32px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox + text">
          <CheckboxInput2 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[128px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap10 />
        </div>
      </div>
      <Frame />
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[72px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap12 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[64px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap13 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[64px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap14 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[64px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap15 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[96px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap16 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[80px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap17 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[80px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap18 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[128px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
          <InputWrap19 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Input">
              <InputWrap20 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSmallSized1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="table / small-sized">
      <TableSmallSizedRowBorderHeader5 />
      <TableRow1 />
    </div>
  );
}

function HblCommodity() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="HBL Commodity">
      <SectionHead2 />
      <TableSmallSized1 />
    </div>
  );
}

function ActionButtonGroup1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="action-button-group">
      <div className="bg-white h-[33px] opacity-60 relative shrink-0" data-name="Outline Button">
        <div className="content-stretch flex gap-[3px] h-full items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
          <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-trash">
              <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px] text-center"></p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function SectionHead3() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Section Head">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Warehouse Receipt List
      </p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-sliders">
          <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#777] text-[12px] text-center"></p>
        </div>
      </div>
      <ActionButtonGroup1 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[15px]" data-name=".DEPRECATED_Checkbox">
        <div className="absolute bg-white left-0 size-[15px] top-0" data-name=".❖ Main / Checkbox">
          <div className="absolute bg-white border border-[#c9c9c9] border-solid left-0 size-[15px] top-0" data-name="background" />
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Receipt No.
      </p>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vin No.
      </p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TOTAL PCS
      </p>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Available PCS
      </p>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Allocated PCS
      </p>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unit
      </p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actual Weight
      </p>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Measurement
      </p>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Remarks for Load Plan
      </p>
    </div>
  );
}

function TableSmallSizedRowBorderHeader6() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="table / small-sized / row / border / header">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[32px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content20 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-[65px] items-center px-[5px] py-[3px] relative shrink-0 w-[128px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content21 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[208px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <Content22 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[72px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content23 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[72px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content24 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[72px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content25 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[72px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content26 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[72px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content27 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[72px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content28 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[72px] relative self-stretch" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
        <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <Content29 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckboxInput3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="checkbox-input">
          <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
          <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function TableSmallSizedHeader11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[3px] h-full items-center justify-center min-w-[263px] px-[5px] py-[3px] relative shrink-0 w-[304px]" data-name="table / small-sized / header">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
        <CheckboxInput3 />
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Auto-sync package, weight and measurements
        </p>
      </div>
    </div>
  );
}

function TableSmallSizedHeader10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[5px] py-[3px] relative size-full">
          <div className="bg-[#428bca] content-stretch flex gap-[3px] items-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Solid Button">
            <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-external-link-square">
                <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white"></p>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Load from Warehouse
            </p>
          </div>
          <div className="bg-[#428bca] content-stretch flex gap-[3px] items-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Solid Button">
            <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-external-link-square">
                <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white"></p>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Create Item and Link
            </p>
          </div>
          <TableSmallSizedHeader11 />
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedRowBorderHeader7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[1]" data-name="table / small-sized / row / border / header">
      <TableSmallSizedHeader10 />
    </div>
  );
}

function TableSmallSized2() {
  return (
    <div className="content-stretch flex flex-col h-[96px] isolate items-start relative shrink-0 w-full" data-name="table / small-sized">
      <TableSmallSizedRowBorderHeader6 />
      <TableSmallSizedRowBorderHeader7 />
    </div>
  );
}

function HblCommodity1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="HBL Commodity">
      <SectionHead3 />
      <TableSmallSized2 />
    </div>
  );
}

function SectionHead4() {
  return (
    <div className="content-stretch flex h-[33px] items-center relative shrink-0 w-full" data-name="Section Head">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mark
      </p>
    </div>
  );
}

function Padding() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding - 12 6">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[6px] px-[12px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.6px] relative shrink-0 text-[#333] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}

function ResizeIcon() {
  return (
    <div className="content-stretch flex h-[6px] items-end justify-end relative shrink-0 w-full" data-name="resize icon">
      <div className="relative shrink-0 size-[6.1px]" data-name="Resizer">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.09961 6.09961">
          <path d={svgPaths.p11a9ba00} fill="var(--fill-0, #333333)" id="Resizer" />
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[140px] items-start min-h-px min-w-px relative">
      <SectionHead4 />
      <div className="bg-white h-[91px] relative shrink-0 w-full" data-name="Textarea">
        <div className="content-stretch flex flex-col items-end justify-end overflow-clip relative rounded-[inherit] size-full">
          <Padding />
          <ResizeIcon />
        </div>
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-2 border-l border-r border-solid border-t-2 inset-[-1px_-0.5px] pointer-events-none" />
      </div>
    </div>
  );
}

function SectionHead5() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Section Head">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Description
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[10px]">Copy:</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Text2 />
      <div className="content-stretch flex items-center pr-px relative shrink-0" data-name="Button Group">
        <div className="bg-white h-[34px] mr-[-1px] relative shrink-0" data-name="Outline Button">
          <div className="content-stretch flex gap-[3px] h-full items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              P.O.
            </p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[34px] mr-[-1px] opacity-60 relative shrink-0" data-name="Outline Button">
          <div className="content-stretch flex gap-[3px] h-full items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Commodity
            </p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white h-[34px] mr-[-1px] opacity-60 relative shrink-0" data-name="Outline Button">
          <div className="content-stretch flex gap-[3px] h-full items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Commodity & HTS`}</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-[697.5px]">
      <SectionHead5 />
      <Frame17 />
    </div>
  );
}

function Padding1() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding - 12 6">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[6px] px-[12px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.6px] relative shrink-0 text-[#333] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}

function ResizeIcon1() {
  return (
    <div className="content-stretch flex h-[6px] items-end justify-end relative shrink-0 w-full" data-name="resize icon">
      <div className="relative shrink-0 size-[6.1px]" data-name="Resizer">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.09961 6.09961">
          <path d={svgPaths.p11a9ba00} fill="var(--fill-0, #333333)" id="Resizer" />
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame11 />
      <div className="bg-white h-[91px] relative shrink-0 w-[697.5px]" data-name="Textarea">
        <div className="content-stretch flex flex-col items-end justify-end overflow-clip relative rounded-[inherit] size-full">
          <Padding1 />
          <ResizeIcon1 />
        </div>
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-2 border-l border-r border-solid border-t-2 inset-[-1px_-0.5px] pointer-events-none" />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function SectionHead6() {
  return (
    <div className="content-stretch flex h-[33px] items-center relative shrink-0 w-full" data-name="Section Head">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Booking Remarks
      </p>
    </div>
  );
}

function Padding2() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding - 12 6">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[6px] px-[12px] relative w-full">
          <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[19.6px] relative shrink-0 text-[#333] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">Input text here....</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResizeIcon2() {
  return (
    <div className="content-stretch flex h-[6px] items-end justify-end relative shrink-0 w-full" data-name="resize icon">
      <div className="relative shrink-0 size-[6.1px]" data-name="Resizer">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.09961 6.09961">
          <path d={svgPaths.p11a9ba00} fill="var(--fill-0, #333333)" id="Resizer" />
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[140px] items-start relative shrink-0 w-full">
      <SectionHead6 />
      <div className="bg-white relative shrink-0 w-full" data-name="Textarea">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          <Padding2 />
          <ResizeIcon2 />
        </div>
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-2 border-l border-r border-solid border-t-2 inset-[-1px_-0.5px] pointer-events-none" />
      </div>
    </div>
  );
}

export default function MblContainerList() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col gap-[8px] items-end justify-end p-[20px] relative size-full" data-name="MBL Container List">
      <div aria-hidden="true" className="absolute border border-[#f3c200] border-solid inset-0 pointer-events-none" />
      <SectionHead />
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Input">
        <InputWrap />
      </div>
      <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="hr & divider">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <div className="content-stretch flex flex-col items-start relative w-full" data-name=".Main / hr">
              <div className="h-0 relative shrink-0 w-full" data-name="line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1411 1">
                    <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="1411" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame16 />
      <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="hr & divider">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <div className="content-stretch flex flex-col items-start relative w-full" data-name=".Main / hr">
              <div className="h-0 relative shrink-0 w-full" data-name="line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1411 1">
                    <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="1411" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HblCommodity />
      <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="hr & divider">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <div className="content-stretch flex flex-col items-start relative w-full" data-name=".Main / hr">
              <div className="h-0 relative shrink-0 w-full" data-name="line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1411 1">
                    <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="1411" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HblCommodity1 />
      <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="hr & divider">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <div className="content-stretch flex flex-col items-start relative w-full" data-name=".Main / hr">
              <div className="h-0 relative shrink-0 w-full" data-name="line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1411 1">
                    <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="1411" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15 />
      <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="hr & divider">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <div className="content-stretch flex flex-col items-start relative w-full" data-name=".Main / hr">
              <div className="h-0 relative shrink-0 w-full" data-name="line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1411 1">
                    <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="1411" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}