function Content() {
  return (
    <div className="bg-[#333333] box-border content-stretch flex gap-[4px] items-center max-w-[200px] px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[17px] max-w-[200px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooltips
      </p>
    </div>
  );
}

function Beak() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="Beak">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="Beak">
          <path d="M0 0H10L5 5L0 0Z" fill="var(--fill-0, #333333)" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

export default function Tooltips() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-90 relative size-full" data-name="Tooltips">
      <Content />
      <Beak />
    </div>
  );
}