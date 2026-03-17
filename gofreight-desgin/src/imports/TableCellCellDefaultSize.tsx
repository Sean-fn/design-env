export default function TableCellCellDefaultSize() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Table Cell / Cell Default Size">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_1px] border-solid bottom-0 left-[-0.5px] pointer-events-none right-[-0.5px] top-0" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3px] items-center px-[5px] py-[8px] relative size-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type Here
          </p>
        </div>
      </div>
    </div>
  );
}