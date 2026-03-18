function FaXmark() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-xmark">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-[14px] size-[9px] top-[14px]" data-name="icon-wrapper">
      <FaXmark />
    </div>
  );
}

export default function DefaultAlert() {
  return (
    <div className="bg-[#f2dede] relative size-full" data-name="Default Alert">
      <div aria-hidden="true" className="absolute border border-[#f0c7c6] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5px] items-center pl-[15px] pr-[35px] py-[15px] relative size-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a94442] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre">Text</p>
          </div>
          <IconWrapper />
        </div>
      </div>
    </div>
  );
}