function FaCopy() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-copy">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333333] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaCopy />
    </div>
  );
}

export default function OutlineButton() {
  return (
    <div className="bg-white relative size-full" data-name="Outline Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3px] items-center px-[14px] py-[7px] relative size-full">
          <IconWrapper />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Text
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}