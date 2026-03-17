import React from "react";
import Checkbox from "./Checkbox";
import Select from "./Select";

interface ContainerTableTotalRowProps {
  inputTotalNumber: boolean;
  onInputTotalNumberChange: (checked: boolean) => void;
  displayUnit: string;
  onDisplayUnitChange: (value: string) => void;
  totalCartons: number;
  totalTareKg: number;
  totalVgmKg: number;
  totalNetWeightKg: number;
  totalGrossWeightLb: number;
  totalMeasurementCbm: number;
}

export default function ContainerTableTotalRow({
  inputTotalNumber,
  onInputTotalNumberChange,
  displayUnit,
  onDisplayUnitChange,
  totalCartons,
  totalTareKg,
  totalVgmKg,
  totalNetWeightKg,
  totalGrossWeightLb,
  totalMeasurementCbm,
}: ContainerTableTotalRowProps) {
  const displayUnitOptions = [
    { value: "Show Both", label: "Show Both" },
    { value: "Metric Only", label: "Metric Only" },
    { value: "Imperial Only", label: "Imperial Only" },
  ];

  return (
    <div className="grid w-full h-[32px] bg-[#f9f9f9] border-t-2 border-[#e0e0e0]" style={{ gridTemplateColumns: '32px 32px 64px minmax(180px, 1fr) minmax(120px, 1fr) minmax(128px, 1fr) 40px minmax(140px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr) minmax(140px, 1fr) minmax(150px, 1fr) minmax(150px, 1fr)' }}>
      {/* Checkbox Column - Empty */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
      </div>

      {/* Number Column - "Total" Text */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-start px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total
        </p>
      </div>

      {/* PP/CTF Column - Checkbox with "Input total number" */}
      <div className="content-stretch flex h-full items-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center gap-[4px]">
          <Checkbox
            checked={inputTotalNumber}
            onChange={onInputTotalNumberChange}
          />
        </div>
      </div>

      {/* Container No. Column - "Input total number" text */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center px-[5px] py-[3px] h-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b9bd1] text-[10px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Input total number
          </p>
        </div>
      </div>

      {/* TP/SZ Column - Empty */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
      </div>

      {/* Seal No. Column - Empty */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
      </div>

      {/* Calculator Button Column - Empty */}
      <div className="content-stretch flex h-full items-center justify-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
      </div>

      {/* PKG Column - Total Cartons */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center gap-[4px] px-[5px] py-[3px] h-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {totalCartons}
          </p>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            CARTON(S)
          </p>
        </div>
      </div>

      {/* TARE Column - Total TARE KG */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center gap-[4px] px-[5px] py-[3px] h-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {totalTareKg.toFixed(2)}
          </p>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            KG
          </p>
        </div>
      </div>

      {/* VGM Column - Total VGM KG */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center gap-[4px] px-[5px] py-[3px] h-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {totalVgmKg.toFixed(2)}
          </p>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            KG
          </p>
        </div>
      </div>

      {/* Net Weight Column - Total Net Weight KG */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center gap-[4px] px-[5px] py-[3px] h-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {totalNetWeightKg.toFixed(2)}
          </p>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            KG
          </p>
        </div>
      </div>

      {/* Gross Weight Column - Total Gross Weight LB */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center gap-[4px] px-[5px] py-[3px] h-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {totalGrossWeightLb.toFixed(2)}
          </p>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            LB
          </p>
        </div>
      </div>

      {/* Measurement Column - Total Measurement CBM + Display Unit */}
      <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px relative">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[1px_0px_0px_0px] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex items-center justify-between gap-[8px] px-[5px] py-[3px] h-full">
          <div className="flex items-center gap-[4px]">
            <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {totalMeasurementCbm.toFixed(3)}
            </p>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              CBM
            </p>
          </div>
          <div className="flex items-center gap-[4px]">
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Display Unit
            </p>
            <div className="w-[100px]">
              <Select
                value={displayUnit}
                onChange={onDisplayUnitChange}
                options={displayUnitOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}