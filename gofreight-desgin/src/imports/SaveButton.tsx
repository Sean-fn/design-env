export default function SaveButton() {
  return (
    <div className="bg-[#26a69a] relative rounded-[25px] size-full" data-name="Save button">
      <div aria-hidden="true" className="absolute border border-[#26a69a] border-solid inset-[-0.5px] pointer-events-none rounded-[25.5px] shadow-[0px_0px_26px_0px_#26af9c]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[50px] py-[7px] relative size-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save Button
          </p>
        </div>
      </div>
    </div>
  );
}