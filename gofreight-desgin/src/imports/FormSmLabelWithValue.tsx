import svgPaths from "./svg-zfcn4fpbel";
import { imgBackground } from "./svg-wfcdd";

function MaskGroup() {
  return (
    <div className="absolute contents left-[0.61px] top-px" data-name="Mask group">
      <div className="absolute h-[23px] left-[0.61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[244px_23px] top-px w-[243.6px]" data-name="Background" style={{ backgroundImage: "linear-gradient(164.789deg, rgb(112, 218, 194) 0%, rgb(192, 220, 160) 50%, rgb(254, 215, 114) 100%)", maskImage: `url('${imgBackground}')` }} />
    </div>
  );
}

function SelectArrow() {
  return (
    <div className="-translate-y-1/2 absolute h-[24px] right-[-0.4px] top-1/2 w-[19px]" data-name="Select Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 24">
        <g clipPath="url(#clip0_2039_51)" id="Select Arrow">
          <g id="Rectangle 5" />
          <path d={svgPaths.pd2860a0} id="Path" stroke="var(--stroke-0, #959695)" />
          <path d="M0.5 1L0.499999 23" id="Line 3" stroke="var(--stroke-0, #DDDDDD)" />
        </g>
        <defs>
          <clipPath id="clip0_2039_51">
            <rect fill="white" height="24" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-center left-[5px] right-[25.6px] top-[6px]" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px relative text-[11px] text-black tracking-[0.5px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[15px] whitespace-pre-wrap">GoFreight Inc</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <MaskGroup />
      <SelectArrow />
      <Content />
      <div className="absolute border border-[#ddd] border-solid inset-0" data-name="Border" />
    </div>
  );
}

function MainSelectMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name=".❖ Main / Select + Message">
      <Container />
    </div>
  );
}

function Select() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33.17%] right-0 top-0" data-name="Select">
      <MainSelectMessage />
    </div>
  );
}

export default function FormSmLabelWithValue() {
  return (
    <div className="relative size-full" data-name="form-sm/label-with-value">
      <Select />
      <div className="absolute flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold inset-[29.17%_68.07%_29.17%_0] justify-center leading-[0] text-[#444] text-[11px] text-right" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[10px] whitespace-pre-wrap">Customer</p>
      </div>
    </div>
  );
}