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

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckboxInput />
    </div>
  );
}

function AddonLeft() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[24px]" data-name="addon-left">
      <Checkbox />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.429] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Text
          </p>
        </div>
      </div>
    </div>
  );
}

function FaCalendar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-calendar">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#555] text-[14px] text-center text-nowrap"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaCalendar />
    </div>
  );
}

function AddonRight() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[24px]" data-name="addon-right">
      <IconWrapper />
    </div>
  );
}

function InputWrap() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <AddonLeft />
      <Container />
      <AddonRight />
    </div>
  );
}

export default function InputTypeAddOnBoth() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Input type: add-on both">
      <InputWrap />
    </div>
  );
}