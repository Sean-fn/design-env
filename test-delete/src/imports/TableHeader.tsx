function Content() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type Here
      </p>
    </div>
  );
}

function TableHeadHeadDefaultSize() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative shrink-0" data-name="Table Head / Head Default Size">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[3px] items-start justify-center px-[4px] py-[8px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function TableHeader() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Table Header">
      {[...Array(12).keys()].map((_, i) => (
        <TableHeadHeadDefaultSize key={i} />
      ))}
    </div>
  );
}