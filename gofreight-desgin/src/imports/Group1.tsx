function Frame() {
  return (
    <div className="absolute bg-[#26a69a] content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-[24px] rounded-[8px] text-center text-white w-[370px]">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] w-full whitespace-pre-wrap"></p>
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Drop your file here</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">GoNEXUS will analyze your document and help you create or update a shipment.</p>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="fixed inset-0 size-full">
      <div className="absolute bg-[rgba(38,166,154,0.25)] inset-0 w-full h-full" data-name="Mask" />
      <Frame />
    </div>
  );
}