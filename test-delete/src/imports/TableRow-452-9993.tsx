import svgPaths from "./svg-hxvhfnedyo";

function CheckboxInput() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="checkbox-input">
          <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
          <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxText() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox + text">
      <CheckboxInput />
    </div>
  );
}

function DeprecatedTableSmallSizedDeprecatedCell() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center min-w-[32px] px-[5px] py-[3px] relative shrink-0 w-[32px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <CheckboxText />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
    </div>
  );
}

function DeprecatedTableSmallSizedDeprecatedHeader() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center min-w-[32px] px-[5px] py-[3px] relative shrink-0 w-[32px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
    </div>
  );
}

function DeprecatedTableSmallSizedDeprecatedHeader1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-px relative shrink-0" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) header">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-full items-center min-w-[64px] relative shrink-0 w-[64px]">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_1px] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      {[...Array(2).keys()].map((_, i) => (
        <DeprecatedTableSmallSizedDeprecatedHeader1 key={i} />
      ))}
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e4e4e4] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {" "}
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

function Input() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputWrap />
    </div>
  );
}

function DeprecatedTableSmallSizedDeprecatedCell1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-px relative shrink-0" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
          <Input />
        </div>
      </div>
    </div>
  );
}

function More() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group 34">
          <path clipRule="evenodd" d={svgPaths.p33cdb380} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Line 3 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p309e1000} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Line 4 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3bff2400} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Rectangle 7 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function TableSmallSizedCell() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center px-[5px] py-[3px] relative shrink-0 w-[40px]" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <More />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-[176px] relative shrink-0">
      <DeprecatedTableSmallSizedDeprecatedCell1 />
      <TableSmallSizedCell />
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

function IconWrapper() {
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
      <IconWrapper />
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
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[5px] pr-0 py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            40HC
          </p>
          <ActionGroup />
        </div>
      </div>
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

function SelectSingleSelect() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Select / Single Select">
      <SelectWrap />
    </div>
  );
}

function DeprecatedTableSmallSizedDeprecatedCell2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-[96px] relative shrink-0" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <SelectSingleSelect />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e4e4e4] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container2 />
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputWrap1 />
    </div>
  );
}

function DeprecatedTableSmallSizedDeprecatedCell3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center px-[5px] py-[3px] relative shrink-0 w-[128px]" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <Input1 />
    </div>
  );
}

function FaCalculator() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-calculator">
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[11px] text-center text-nowrap"></p>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaCalculator />
    </div>
  );
}

function TableSmallSizedCell1() {
  return (
    <div className="bg-white content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative shrink-0" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-[-0.5px] pointer-events-none" />
      <IconWrapper1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-w-[40px] relative shrink-0 w-[40px]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <TableSmallSizedCell1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e4e4e4] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container3 />
    </div>
  );
}

function Input2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputWrap2 />
    </div>
  );
}

function DeprecatedTableSmallSizedDeprecatedCell4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-[104px] relative shrink-0" data-name=".(DEPRECATED) table / small-sized / (DEPRECATED) cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <Input2 />
        </div>
      </div>
    </div>
  );
}

function FaCheck() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-check">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b9bd1] text-[14px] text-center text-nowrap"></p>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaCheck />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            100
          </p>
          <IconWrapper2 />
        </div>
      </div>
    </div>
  );
}

function InputWrap3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container4 />
    </div>
  );
}

function Input3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputWrap3 />
    </div>
  );
}

function TableSmallSizedCell2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-[104px] relative shrink-0" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <Input3 />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            KG
          </p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <Container5 />
    </div>
  );
}

function Input4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputWrap4 />
    </div>
  );
}

function TableSmallSizedCell3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-[104px] relative shrink-0" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <Input4 />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            KG
          </p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            0
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container6 />
    </div>
  );
}

function Input5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputWrap5 />
    </div>
  );
}

function TableSmallSizedCell4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-[104px] relative shrink-0" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
          <Input5 />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            CBM
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TableRow() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Table Row">
      <DeprecatedTableSmallSizedDeprecatedCell />
      <DeprecatedTableSmallSizedDeprecatedHeader />
      <Frame />
      <Frame1 />
      <DeprecatedTableSmallSizedDeprecatedCell2 />
      <DeprecatedTableSmallSizedDeprecatedCell3 />
      <Frame2 />
      <DeprecatedTableSmallSizedDeprecatedCell4 />
      <TableSmallSizedCell2 />
      {[...Array(3).keys()].map((_, i) => (
        <TableSmallSizedCell3 key={i} />
      ))}
      <TableSmallSizedCell4 />
    </div>
  );
}