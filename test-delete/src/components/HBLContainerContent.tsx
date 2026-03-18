import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";
import Textarea from "./Textarea";
import { useAIAnimation } from "./AIAnimationContext";

/* ── AI-extracted HBL container-tab fields (excludes containerNo — assigned from MBL) ── */

export const AI_FILLED_HBL_CONTAINER_FIELDS = new Set([
  "pkg",
  "pkgUnit",
  "netWeight",
  "grossWeight",
  "measurement",
  "commodityDescription",
  "commodityPkg",
  "commodityHtsCode",
  "commodityPcs",
  "commodityNetWeight",
  "commodityGrossWeight",
  "commodityMeasurement",
  "mark",
  "description",
]);

/* ── mock data ── */

interface ContainerRow {
  id: number;
  containerNo: string;
  pkg: string;
  netWeight: string;
  grossWeight: string;
  measurement: string;
}

interface CommodityRow {
  id: number;
  desc: string;
  pkg: string;
  hts: string;
  pcs: string;
  netWt: string;
  grossWt: string;
  measure: string;
}

const MOCK_CONTAINERS: ContainerRow[] = [
  { id: 1, containerNo: "MSKU8327451", pkg: "85",  netWeight: "980.000",  grossWeight: "1,120.000", measurement: "16.200" },
  { id: 2, containerNo: "TCLU7294018", pkg: "120", netWeight: "1,450.000", grossWeight: "1,620.000", measurement: "24.500" },
  { id: 3, containerNo: "TGHU6583920", pkg: "60",  netWeight: "720.000",  grossWeight: "810.000",   measurement: "11.800" },
];

const MOCK_COMMODITIES: CommodityRow[] = [
  { id: 1, desc: "ELECTRONIC PARTS AND ACCESSORIES", pkg: "120", hts: "8471.30", pcs: "2400", netWt: "1,450.000", grossWt: "1,620.000", measure: "24.500" },
  { id: 2, desc: "PLASTIC HOUSINGS FOR SWITCHES",    pkg: "85",  hts: "3926.90", pcs: "1700", netWt: "980.000",   grossWt: "1,120.000", measure: "16.200" },
  { id: 3, desc: "LED LIGHTING MODULES",             pkg: "60",  hts: "9405.42", pcs: "1200", netWt: "720.000",   grossWt: "810.000",   measure: "11.800" },
];

/* ── props ── */

interface HBLContainerContentProps {}

/* ── tiny reusable pieces ── */

const font: React.CSSProperties = { fontVariationSettings: "'wdth' 100" };
const aiGradient =
  "linear-gradient(to right, rgba(112, 218, 194, 0.35) 0%, rgba(192, 220, 160, 0.35) 50%, rgba(254, 215, 114, 0.35) 100%)";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#333] text-[16px]"
      style={font}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div className="w-full py-[20px]">
      <div className="h-0 w-full border-t border-[#eeeeee]" />
    </div>
  );
}

function BlueText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-['Open_Sans:Bold',sans-serif] font-bold text-[11px] text-[#5b9bd1] leading-[normal] whitespace-nowrap"
      style={font}
    >
      {children}
    </span>
  );
}

function GreyInputWithUnit({ unit }: { unit: string }) {
  return (
    <div className="flex gap-[4px] items-center w-full">
      <div className="flex-1 min-w-0">
        <div className="bg-[#e4e4e4] h-[24px] border border-[#e4e4e4] flex items-center px-[5px]">
          <span className="text-[11px] text-[#333] opacity-0 font-['Open_Sans:Regular',sans-serif]" style={font}>&nbsp;</span>
        </div>
      </div>
      <BlueText>{unit}</BlueText>
    </div>
  );
}

/* ── table-cell helpers ── */

function HeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex items-center px-[5px] py-[3px] ${className}`}>
      <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd] border-b-2" />
      {children}
    </div>
  );
}

function HeaderCellWithSelect({ label, selectValue, selectOptions, className = "" }: { label: string; selectValue: string; selectOptions: { value: string; label: string }[]; className?: string }) {
  return (
    <div className={`relative flex flex-col gap-[3px] items-end justify-center px-[4px] py-[8px] ${className}`}>
      <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd] border-b-2" />
      <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333] text-right leading-[normal]" style={font}>{label}</span>
      <div className="shrink-0">
        <Select options={selectOptions} value={selectValue} onChange={() => {}} />
      </div>
    </div>
  );
}

function DataCell({ children, className = "", bg = "bg-transparent", isAIFilled = false }: { children?: React.ReactNode; className?: string; bg?: string; isAIFilled?: boolean }) {
  const { reviewCompleted } = useAIAnimation();
  const showHighlight = isAIFilled && !reviewCompleted;
  return (
    <div
      className={`relative flex items-center px-[5px] py-[3px] ${bg} ${className}`}
      style={{
        background: showHighlight ? aiGradient : undefined,
        transition: 'background 0.8s ease-out',
      }}
    >
      <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#e4e4e4]" />
      {children}
    </div>
  );
}

function SummaryBorderCell({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex items-center px-[5px] py-[3px] ${className}`}>
      <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border-t border-l border-r border-solid border-[#ddd]" />
      {children}
    </div>
  );
}

/* ================================================================== */
/* MAIN COMPONENT                                                      */
/* ================================================================== */

export default function HBLContainerContent({}: HBLContainerContentProps) {
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());
  // AI highlight stays visible even after user edits
  const isAI = (field: string) => AI_FILLED_HBL_CONTAINER_FIELDS.has(field);
  const { shouldAnimate, reviewCompleted } = useAIAnimation();
  const shimmerClass = shouldAnimate ? 'ai-reveal' : '';
  
  const markDirty = (field: string) => {
    if (AI_FILLED_HBL_CONTAINER_FIELDS.has(field) && !dirtyFields.has(field)) {
      setDirtyFields(prev => { const next = new Set(prev); next.add(field); return next; });
    }
  };

  const [poMapping, setPoMapping] = useState("container");
  const [addPalletInfo, setAddPalletInfo] = useState(false);
  const [autoSync, setAutoSync] = useState(false);
  const [autoSyncWh, setAutoSyncWh] = useState(false);
  const [totalType, setTotalType] = useState("container");

  const [mark, setMark] = useState("N/M");
  const [description, setDescription] = useState(
    "ELECTRONIC PARTS AND ACCESSORIES\nPLASTIC HOUSINGS FOR SWITCHES\nLED LIGHTING MODULES\n265 CARTONS"
  );
  const [bookingRemarks, setBookingRemarks] = useState("");

  const unitOptions = [
    { value: "KG", label: "KG" },
    { value: "LB", label: "LB" },
  ];
  const pkgOptions = [
    { value: "CARTON(S)", label: "CARTON(S)" },
    { value: "PALLET(S)", label: "PALLET(S)" },
    { value: "PIECE(S)", label: "PIECE(S)" },
  ];
  const measureOptions = [
    { value: "CBM", label: "CBM" },
    { value: "CFT", label: "CFT" },
  ];
  const displayUnitOptions = [
    { value: "Show Both", label: "Show Both" },
    { value: "KG / CBM", label: "KG / CBM" },
    { value: "LBS / CFT", label: "LBS / CFT" },
  ];

  return (
    <div className="flex flex-col gap-[8px] items-end w-full">
      {/* ═══════════ P.O. No. ═══════════ */}
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[15px] items-center">
          <SectionTitle>P.O. No.</SectionTitle>
          <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#777]" style={font}>
            Please list down P.O. No. for this HB/L
          </span>
        </div>
        <div className="flex gap-[5px] items-center">
          <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333] text-right" style={font}>
            P.O. Mapping
          </span>
          <div className="flex gap-[8px] items-center">
            <RadioButton label="Container based" checked={poMapping === "container"} onClick={() => setPoMapping("container")} />
            <RadioButton label="Item based" checked={poMapping === "item"} onClick={() => setPoMapping("item")} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Input placeholder="Add P.O. here..." />
      </div>

      <Divider />

      {/* ═══════════ Container List ═══════════ */}
      <div className="flex flex-col gap-[32px] items-start w-full">
        <SectionTitle>Container List</SectionTitle>

        <div className="flex flex-col gap-[8px] items-start w-full">
          <div className="flex items-center gap-[4px] justify-end w-full">
            <Checkbox label="Add pallet info" checked={addPalletInfo} onChange={setAddPalletInfo} />
          </div>

          {/* Container Table */}
          <div className="w-full overflow-x-auto border border-[#ddd]">
            {/* Header Row */}
            <div className="flex items-stretch w-full">
              <HeaderCell className="w-[32px] shrink-0 justify-center">
                <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>#</span>
              </HeaderCell>
              <HeaderCell className="w-[120px] shrink-0">
                <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>Container No.</span>
              </HeaderCell>
              <HeaderCellWithSelect label="PKG" selectValue="CARTON(S)" selectOptions={pkgOptions} className="flex-1 min-w-[128px]" />
              <HeaderCellWithSelect label="Net Weight" selectValue="KG" selectOptions={unitOptions} className="flex-1 min-w-[128px]" />
              <HeaderCellWithSelect label="Weight" selectValue="KG" selectOptions={unitOptions} className="flex-1 min-w-[128px]" />
              <HeaderCellWithSelect label="Measurement" selectValue="CBM" selectOptions={measureOptions} className="flex-1 min-w-[128px]" />
              <HeaderCell className="flex-1 min-w-[200px]">
                <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>P.O. No.</span>
              </HeaderCell>
            </div>

            {/* Data Rows — Container No. from MBL (no highlight), other fields AI extracted */}
            {MOCK_CONTAINERS.map((row) => (
              <div key={row.id} className="flex items-stretch w-full h-[40px]">
                <DataCell className="w-[32px] shrink-0 justify-center">
                  <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>{row.id}</span>
                </DataCell>
                <DataCell className="w-[120px] shrink-0">
                  <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#333] truncate" style={font}>{row.containerNo}</span>
                </DataCell>
                <DataCell className="flex-1 min-w-[128px]">
                  <div className="flex-1">
                    <Input value={row.pkg} onChange={() => {}} isAIFilled={isAI("pkg")} />
                  </div>
                </DataCell>
                <DataCell className="flex-1 min-w-[128px]">
                  <div className="flex gap-[3px] items-center flex-1">
                    <div className="flex-1">
                      <Input value={row.netWeight} onChange={() => {}} isAIFilled={isAI("netWeight")} />
                    </div>
                    <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#333]" style={font}>KG</span>
                  </div>
                </DataCell>
                <DataCell className="flex-1 min-w-[128px]">
                  <div className="flex gap-[3px] items-center flex-1">
                    <div className="flex-1">
                      <Input value={row.grossWeight} onChange={() => {}} isAIFilled={isAI("grossWeight")} />
                    </div>
                    <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#333]" style={font}>KG</span>
                  </div>
                </DataCell>
                <DataCell className="flex-1 min-w-[128px]">
                  <div className="flex gap-[3px] items-center flex-1">
                    <div className="flex-1">
                      <Input value={row.measurement} onChange={() => {}} isAIFilled={isAI("measurement")} />
                    </div>
                    <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#333]" style={font}>CBM</span>
                  </div>
                </DataCell>
                <DataCell className="flex-1 min-w-[200px]">
                  <div className="flex-1 bg-[#e4e4e4] h-[24px] border border-[#e4e4e4]" />
                </DataCell>
              </div>
            ))}

            {/* Container Total Row */}
            <div className="flex items-stretch w-full bg-white">
              <div className="relative flex items-center justify-center w-[32px] shrink-0">
                <RadioButton label="" checked={totalType === "container"} onClick={() => setTotalType("container")} />
              </div>
              <SummaryBorderCell className="w-[120px] shrink-0"><BlueText>Container Total</BlueText></SummaryBorderCell>
              <SummaryBorderCell className="flex-1 min-w-[128px] justify-end"><BlueText>265</BlueText></SummaryBorderCell>
              <SummaryBorderCell className="flex-1 min-w-[128px] flex-col items-end justify-center">
                <BlueText>3,150.000 KG</BlueText>
                <BlueText>6,944.600 LB</BlueText>
              </SummaryBorderCell>
              <SummaryBorderCell className="flex-1 min-w-[128px] flex-col items-end justify-center">
                <BlueText>3,550.000 KG</BlueText>
                <BlueText>7,826.800 LB</BlueText>
              </SummaryBorderCell>
              <SummaryBorderCell className="flex-1 min-w-[128px] flex-col items-end justify-center">
                <BlueText>52.500 CBM</BlueText>
                <BlueText>1,853.670 CTF</BlueText>
              </SummaryBorderCell>
              <SummaryBorderCell className="flex-1 min-w-[200px]" />
            </div>

            {/* Manual Input Total Row */}
            <div className="flex items-stretch w-full bg-white">
              <div className="relative flex items-center justify-center w-[32px] shrink-0">
                <div aria-hidden="true" className="absolute pointer-events-none inset-0 border-t border-b border-solid border-[#ddd]" />
                <RadioButton label="" checked={totalType === "manual"} onClick={() => setTotalType("manual")} />
              </div>
              <div className="relative flex items-center px-[5px] py-[3px] w-[120px] shrink-0">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd]" />
                <BlueText>Manual Input Total</BlueText>
              </div>
              <div className="relative flex-1 min-w-[128px] flex flex-col gap-[2px] justify-center px-[5px] py-[8px]">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd]" />
                <GreyInputWithUnit unit="KG" />
                <div className="flex justify-end px-[5px]"><BlueText>0000000 LB</BlueText></div>
              </div>
              <div className="relative flex-1 min-w-[128px] flex flex-col gap-[2px] justify-center px-[5px] py-[8px]">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd]" />
                <GreyInputWithUnit unit="KG" />
                <div className="flex justify-end px-[5px]"><BlueText>0000000 LB</BlueText></div>
              </div>
              <div className="relative flex-1 min-w-[128px] flex flex-col gap-[2px] justify-center px-[5px] py-[8px]">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd]" />
                <GreyInputWithUnit unit="KG" />
                <div className="flex justify-end px-[5px]"><BlueText>0000000 LB</BlueText></div>
              </div>
              <div className="relative flex-1 min-w-[128px] flex flex-col gap-[2px] justify-center px-[5px] py-[8px]">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd]" />
                <GreyInputWithUnit unit="CBM" />
                <div className="flex justify-end px-[5px]"><BlueText>0000000 CTF</BlueText></div>
              </div>
              <div className="relative flex-1 min-w-[200px] flex items-center px-[5px] py-[3px]">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border-t border-l border-r border-solid border-[#ddd]" />
              </div>
            </div>

            {/* Receiving Total Row */}
            <div className="flex items-stretch w-full bg-white">
              <div className="relative flex items-center justify-center w-[32px] shrink-0">
                <div aria-hidden="true" className="absolute pointer-events-none inset-0 border-b border-solid border-[#ddd]" />
                <RadioButton label="" checked={totalType === "receiving"} onClick={() => setTotalType("receiving")} disabled />
              </div>
              <div className="relative flex items-center px-[5px] py-[3px] w-[120px] shrink-0">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd]" />
                <BlueText>Receiving Total</BlueText>
              </div>
              <div className="relative flex-1 flex items-center gap-[16px] px-[5px] py-[3px]">
                <div aria-hidden="true" className="absolute pointer-events-none inset-[-0.5px] border border-solid border-[#ddd] border-b-2" />
                <SolidButton icon="fas fa-filter" text="Load from Warehouse Receipt List" variant="blue" size="small" />
                <SolidButton icon="fas fa-filter" text="Create Item and Link the warehouse receipt" variant="blue" size="small" />
              </div>
            </div>

            {/* Footer: Auto-sync + Display Unit */}
            <div className="flex items-center justify-between px-[8px] pt-[8px] pb-[24px] w-full">
              <Checkbox label="Auto-sync package, weight and measurements" checked={autoSync} onChange={setAutoSync} />
              <div className="flex gap-[5px] items-center w-[325px]">
                <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333] text-right shrink-0" style={font}>Display Unit</span>
                <div className="flex-1">
                  <Select options={displayUnitOptions} value="Show Both" onChange={() => {}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ═══════════ Commodity / Manifest Commodity ═══════════ */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex gap-[15px] items-center w-full">
          <SectionTitle>Commodity / Manifest Commodity</SectionTitle>
          <div className="flex gap-[2px] items-start">
            <SolidButton icon="fas fa-plus" variant="teal" size="large" />
            <OutlineButton icon="fas fa-trash" size="large" />
            <OutlineButton text="Load from Shipper" size="large" />
            <OutlineButton text="Save to Shipper" size="large" />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          {/* Header */}
          <div className="flex items-stretch w-full">
            <HeaderCell className="w-[32px] shrink-0 justify-center">
              <Checkbox checked={false} onChange={() => {}} />
            </HeaderCell>
            <HeaderCell className="w-[128px] shrink-0">
              <div className="flex-1 flex gap-[3px] items-center">
                <span className="text-[#f3565d] text-[11px]">*</span>
                <div className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333] leading-[normal]" style={font}>
                  <p>Commodity</p><p>Description</p>
                </div>
              </div>
            </HeaderCell>
            <HeaderCell className="w-[208px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>PKG</span>
            </HeaderCell>
            <HeaderCell className="w-[72px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>HTS Code</span>
            </HeaderCell>
            <HeaderCell className="w-[64px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>PCS</span>
            </HeaderCell>
            <HeaderCellWithSelect label="Net Weight" selectValue="KG" selectOptions={unitOptions} className="min-w-[64px] shrink-0" />
            <HeaderCellWithSelect label="Gross Weight" selectValue="KG" selectOptions={unitOptions} className="w-[64px] shrink-0 min-w-[64px]" />
            <HeaderCellWithSelect label="Measurement" selectValue="CBM" selectOptions={measureOptions} className="w-[96px] shrink-0 min-w-[96px]" />
            <HeaderCell className="w-[80px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>Unit Price</span>
            </HeaderCell>
            <HeaderCell className="w-[80px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>Amount</span>
            </HeaderCell>
            <HeaderCell className="w-[128px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>Commodity Details</span>
            </HeaderCell>
            <HeaderCell className="flex-1 min-w-[80px]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>Container</span>
            </HeaderCell>
          </div>

          {/* Data Rows — AI extracted commodity fields */}
          {MOCK_COMMODITIES.map((row, idx) => {
            const bgClass = idx % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white";
            return (
              <div key={row.id} className={`flex items-stretch w-full ${bgClass}`}>
                <DataCell className="w-[32px] shrink-0 justify-center" bg={bgClass}>
                  <Checkbox checked={false} onChange={() => {}} />
                </DataCell>
                <DataCell className="w-[128px] shrink-0" bg={bgClass}>
                  <div className="flex-1"><Input value={row.desc} onChange={() => {}} isAIFilled={isAI("commodityDescription")} /></div>
                </DataCell>
                <DataCell className="w-[208px] shrink-0" bg={bgClass}>
                  <div className="flex items-center gap-[4px] flex-1">
                    <div className="w-[60px]"><Input value={row.pkg} onChange={() => {}} isAIFilled={isAI("commodityPkg")} /></div>
                    <div className="shrink-0"><Select options={pkgOptions} value="CARTON(S)" onChange={() => {}} isAIFilled={isAI("commodityPkg")} /></div>
                  </div>
                </DataCell>
                <DataCell className="w-[72px] shrink-0" bg={bgClass}>
                  <div className="flex-1"><Input value={row.hts} onChange={() => {}} isAIFilled={isAI("commodityHtsCode")} /></div>
                </DataCell>
                <DataCell className="w-[64px] shrink-0" bg={bgClass}>
                  <div className="flex-1"><Input value={row.pcs} onChange={() => {}} isAIFilled={isAI("commodityPcs")} /></div>
                </DataCell>
                <DataCell className="min-w-[64px] shrink-0" bg={bgClass}>
                  <div className="flex-1"><Input value={row.netWt} onChange={() => {}} isAIFilled={isAI("commodityNetWeight")} /></div>
                </DataCell>
                <DataCell className="w-[64px] shrink-0 min-w-[64px]" bg={bgClass}>
                  <div className="flex-1"><Input value={row.grossWt} onChange={() => {}} isAIFilled={isAI("commodityGrossWeight")} /></div>
                </DataCell>
                <DataCell className="w-[96px] shrink-0 min-w-[96px]" bg={bgClass}>
                  <div className="flex-1"><Input value={row.measure} onChange={() => {}} isAIFilled={isAI("commodityMeasurement")} /></div>
                </DataCell>
                <DataCell className="w-[80px] shrink-0" bg={bgClass}>
                  <div className="flex-1"><Input placeholder=" " /></div>
                </DataCell>
                <DataCell className="w-[80px] shrink-0" bg={bgClass}>
                  <div className="flex-1"><Input placeholder=" " /></div>
                </DataCell>
                <DataCell className="w-[128px] shrink-0" bg={bgClass}>
                  <div className="flex-1"><Input placeholder=" " /></div>
                </DataCell>
                <DataCell className="flex-1 min-w-[80px]" bg={bgClass}>
                  <div className="flex-1"><Input placeholder=" " /></div>
                </DataCell>
              </div>
            );
          })}
        </div>
      </div>

      <Divider />

      {/* ═══════════ Warehouse Receipt List ═══════════ */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex gap-[15px] items-center w-full">
          <SectionTitle>Warehouse Receipt List</SectionTitle>
          <i className="fas fa-sliders-h text-[#777] text-[12px]"></i>
          <OutlineButton icon="fas fa-trash" size="large" />
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex items-stretch w-full">
            <HeaderCell className="w-[32px] shrink-0 justify-center">
              <Checkbox checked={false} onChange={() => {}} />
            </HeaderCell>
            <HeaderCell className="w-[128px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>Receipt No.</span>
            </HeaderCell>
            <HeaderCell className="w-[208px] shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>Vin No.</span>
            </HeaderCell>
            {["TOTAL PCS", "Available PCS", "Allocated PCS", "Unit", "Actual Weight", "Measurement", "Remarks for Load Plan"].map((h) => (
              <HeaderCell key={h} className="flex-1 min-w-[72px]">
                <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]" style={font}>{h}</span>
              </HeaderCell>
            ))}
          </div>

          <div className="flex items-center gap-[16px] px-[5px] py-[3px] border-t-2 border-l border-r border-b-2 border-[#ddd]">
            <SolidButton icon="fas fa-external-link-square-alt" text="Load from Warehouse" variant="blue" size="small" />
            <SolidButton icon="fas fa-external-link-square-alt" text="Create Item and Link" variant="blue" size="small" />
            <Checkbox label="Auto-sync package, weight and measurements" checked={autoSyncWh} onChange={setAutoSyncWh} />
          </div>
        </div>
      </div>

      <Divider />

      {/* ═══════════ Mark & Description ═══════════ */}
      <div className="flex gap-[16px] items-start w-full">
        <div className="flex-1 flex flex-col gap-[16px]">
          <div className="h-[33px] flex items-center"><SectionTitle>Mark</SectionTitle></div>
          <div className={isAI("mark") ? shimmerClass : ''} style={isAI("mark") && !reviewCompleted ? { background: aiGradient, transition: 'background 0.8s ease-out' } : { transition: 'background 0.8s ease-out' }}>
            <Textarea value={mark} onChange={(e) => { markDirty("mark"); setMark(e.target.value); }} rows={4} />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[16px]">
          <div className="h-[33px] flex items-center justify-between">
            <SectionTitle>Description</SectionTitle>
            <div className="flex gap-[8px] items-center">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333] text-right" style={font}>Copy:</span>
              <div className="flex items-center pr-px">
                <OutlineButton text="P.O." size="large" />
                <OutlineButton text="Commodity" size="large" />
                <OutlineButton text="Commodity & HTS" size="large" />
              </div>
            </div>
          </div>
          <div className={isAI("description") ? shimmerClass : ''} style={isAI("description") && !reviewCompleted ? { background: aiGradient, transition: 'background 0.8s ease-out' } : { transition: 'background 0.8s ease-out' }}>
            <Textarea value={description} onChange={(e) => { markDirty("description"); setDescription(e.target.value); }} rows={4} />
          </div>
        </div>
      </div>

      <Divider />

      {/* ═══════════ Booking Remarks ═══════════ */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="h-[33px] flex items-center"><SectionTitle>Booking Remarks</SectionTitle></div>
        <Textarea value={bookingRemarks} onChange={(e) => setBookingRemarks(e.target.value)} placeholder="Input text here...." rows={4} />
      </div>
    </div>
  );
}