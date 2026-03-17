function FaCheck() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-check">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaCheck />
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
          <IconWrapper />
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

export default function InputTypeWithSurfixIcon() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Input type: with surfix icon">
      <InputWrap />
    </div>
  );
}