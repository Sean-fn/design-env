function MainHr() {
  return (
    <div className="h-0 relative w-full" data-name=".Main / hr">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1273 1">
          <g id=".Main / hr">
            <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="1273" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] relative shrink-0 w-full" data-name="Divider">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <MainHr />
        </div>
      </div>
    </div>
  );
}

function FaCloudUpload() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-cloud-upload">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white"></p>
    </div>
  );
}

function IconL() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Icon (L)">
      <FaCloudUpload />
    </div>
  );
}

function SolidButton() {
  return (
    <div className="bg-[#26a69a] content-stretch flex gap-[3px] items-center px-[14px] py-[7px] relative shrink-0" data-name="Solid Button">
      <IconL />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upload File
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        File Name
      </p>
    </div>
  );
}

function TableSmallSizedHeader() {
  return (
    <div className="bg-[#888] flex-[1_0_0] min-h-px min-w-px relative" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Related Shipment
      </p>
    </div>
  );
}

function TableSmallSizedHeader1() {
  return (
    <div className="bg-[#888] flex-[1_0_0] min-h-px min-w-px relative" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Uploaded At
      </p>
    </div>
  );
}

function TableSmallSizedHeader2() {
  return (
    <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[160px]" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Document Type
      </p>
    </div>
  );
}

function TableSmallSizedHeader3() {
  return (
    <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[120px]" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status
      </p>
    </div>
  );
}

function TableSmallSizedHeader4() {
  return (
    <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[160px]" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action
      </p>
    </div>
  );
}

function TableSmallSizedHeader5() {
  return (
    <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[160px]" data-name="table / small-sized / header">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      <Content5 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="bg-[#888] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Head">
      <TableSmallSizedHeader />
      <TableSmallSizedHeader1 />
      <TableSmallSizedHeader2 />
      <TableSmallSizedHeader3 />
      <TableSmallSizedHeader4 />
      <TableSmallSizedHeader5 />
    </div>
  );
}

function TableSmallSizedCell() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            PREALERT
          </p>
        </div>
      </div>
    </div>
  );
}

function TableSmallSizedCell1() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] size-full" />
      </div>
    </div>
  );
}

function TableSmallSizedCell2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[160px]" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        05-20-2025 20:00
      </p>
    </div>
  );
}

function TableSmallSizedCell3() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[120px]" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PDF
      </p>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#428bca] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-white tracking-[0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13px]">Pending Review</p>
      </div>
    </div>
  );
}

function TableSmallSizedCell4() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[160px]" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <Label />
    </div>
  );
}

function Elements() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Elements">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Review
      </p>
    </div>
  );
}

function MainExtraSamll() {
  return (
    <div className="bg-white relative shrink-0" data-name=".❖ Main / Extra Samll">
      <div className="content-stretch flex items-start overflow-clip px-[5px] py-px relative rounded-[inherit]">
        <Elements />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}

function MainGhostExtraSamll() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name=".❖ Main / Ghost / Extra Samll">
      <MainExtraSamll />
    </div>
  );
}

function DeprecatedWordButton() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0" data-name=".DEPRECATED_Word Button">
      <MainGhostExtraSamll />
    </div>
  );
}

function TableSmallSizedCell5() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[160px]" data-name="table / small-sized / cell">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
      <DeprecatedWordButton />
    </div>
  );
}

function SingleRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Single Row">
      <TableSmallSizedCell />
      <TableSmallSizedCell1 />
      <TableSmallSizedCell2 />
      <TableSmallSizedCell3 />
      <TableSmallSizedCell4 />
      <TableSmallSizedCell5 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table Body">
      <SingleRow />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHead />
      <TableBody />
    </div>
  );
}

function SolidButton1() {
  return (
    <div className="absolute bg-[#e5e5e5] content-stretch flex gap-[3px] items-center px-[14px] py-[7px] right-0 top-0" data-name="Solid Button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Close
      </p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[24px] relative shadow-[0px_-1px_23px_0px_rgba(0,0,0,0.75)] size-full" data-name="Container">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        GoNEXUS Hub Processing
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>{`Upload or drag & drop a shipping document — GoNEXUS will analyze it to help you create or update a shipment with ease.`}</p>
      <Divider />
      <SolidButton />
      <Table />
      <SolidButton1 />
    </div>
  );
}