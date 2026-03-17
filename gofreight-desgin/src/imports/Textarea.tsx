import svgPaths from "./svg-s5u3tp28ik";

function Padding2Px5Px() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding - 2px 5px">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[2px] px-[5px] relative w-full">
          <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[15.4px] relative shrink-0 text-[#333] text-[11px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">Input text here....</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResizeIcon() {
  return (
    <div className="content-stretch flex h-[2px] items-end justify-end relative shrink-0 w-full" data-name="resize icon">
      <div className="relative shrink-0 size-[6.1px]" data-name="Resizer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <path d={svgPaths.p11a9ba00} fill="var(--fill-0, #333333)" id="Resizer" />
        </svg>
      </div>
    </div>
  );
}

export default function Textarea() {
  return (
    <div className="bg-white relative size-full" data-name="Textarea">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Padding2Px5Px />
        <ResizeIcon />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}