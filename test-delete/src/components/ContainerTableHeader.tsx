import React from "react";
import Checkbox from "./Checkbox";
import TableHeaderCellWithDropdown from "./TableHeaderCellWithDropdown";

interface ContainerTableHeaderProps {
  onPkgUnitChange?: (value: string) => void;
  onTareUnitChange?: (value: string) => void;
  onVgmUnitChange?: (value: string) => void;
  onNetWeightUnitChange?: (value: string) => void;
  onGrossWeightUnitChange?: (value: string) => void;
  onMeasurementUnitChange?: (value: string) => void;
}

export default function ContainerTableHeader({
  onPkgUnitChange,
  onTareUnitChange,
  onVgmUnitChange,
  onNetWeightUnitChange,
  onGrossWeightUnitChange,
  onMeasurementUnitChange,
}: ContainerTableHeaderProps = {}) {
  return (
    <div className="grid w-full" style={{ gridTemplateColumns: '32px 32px 64px minmax(180px, 1fr) minmax(120px, 1fr) minmax(128px, 1fr) 40px minmax(140px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr) minmax(140px, 1fr) minmax(150px, 1fr) minmax(150px, 1fr)' }}>
      {/* Checkbox Column */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
          <Checkbox 
            checked={false}
            onChange={(checked) => console.log('Select all:', checked)}
          />
        </div>
      </div>

      {/* # Column */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            #
          </p>
        </div>
      </div>

      {/* PP/CTF Column */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            PP/CTF
          </p>
        </div>
      </div>

      {/* Container No. Column */}
      <div className="bg-[rgba(255,255,255,0)] relative">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
            <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
              <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Container No.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TP/SZ Column */}
      <div className="bg-[rgba(255,255,255,0)] relative">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
            <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
              <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                TP/SZ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seal No. Column */}
      <div className="bg-[rgba(255,255,255,0)] relative">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
            <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
              <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Seal No.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty Column (Calculator Button Area) */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_1px_2px] border-solid inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
      </div>

      {/* PKG Column */}
      <TableHeaderCellWithDropdown
        text="PKG"
        options={[
          { value: "CARTON(S)", label: "CARTON(S)" },
          { value: "PACKAGE(S)", label: "PACKAGE(S)" },
          { value: "PALLET(S)", label: "PALLET(S)" },
          { value: "BOX(ES)", label: "BOX(ES)" },
        ]}
        value="CARTON(S)"
        onChange={onPkgUnitChange}
        width=""
        className="w-full"
      />

      {/* TARE Column */}
      <TableHeaderCellWithDropdown
        text="TARE"
        options={[
          { value: "KG", label: "KG" },
          { value: "LB", label: "LB" },
        ]}
        value="KG"
        onChange={onTareUnitChange}
        width=""
        className="w-full"
      />

      {/* VGM Column */}
      <TableHeaderCellWithDropdown
        text="VGM"
        options={[
          { value: "KG", label: "KG" },
          { value: "LB", label: "LB" },
        ]}
        value="KG"
        onChange={onVgmUnitChange}
        width=""
        className="w-full"
      />

      {/* Net Weight Column */}
      <TableHeaderCellWithDropdown
        text="Net Weight"
        options={[
          { value: "KG", label: "KG" },
          { value: "LB", label: "LB" },
        ]}
        value="KG"
        onChange={onNetWeightUnitChange}
        width=""
        className="w-full"
      />

      {/* Gross Weight Column */}
      <TableHeaderCellWithDropdown
        text="Gross Weight"
        options={[
          { value: "KG", label: "KG" },
          { value: "LB", label: "LB" },
        ]}
        value="LB"
        onChange={onGrossWeightUnitChange}
        width=""
        className="w-full"
      />

      {/* Measurement Column */}
      <TableHeaderCellWithDropdown
        text="Measurement"
        options={[
          { value: "CBM", label: "CBM" },
          { value: "CFT", label: "CFT" },
        ]}
        value="CBM"
        onChange={onMeasurementUnitChange}
        width=""
        className="w-full"
      />
    </div>
  );
}