import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableHeaderCell from "./TableHeaderCell";
import TableRow from "./TableRow";
import TableRowCell from "./TableRowCell";
import SolidButton from "./SolidButton";
import Select from "./Select";

interface ContainerData {
  id: string;
  containerNo: string;
  tpSz: string;
  sealNo: string;
  pkg: string;
  tare: string;
  vgm: string;
  netWeight: string;
  grossWeight: string;
  measurement: string;
}

interface ContainerTableProps {
  variant?: "mbl" | "hbl";
}

export default function ContainerTable({ variant = "mbl" }: ContainerTableProps) {
  const [containers, setContainers] = useState<ContainerData[]>([
    {
      id: "1",
      containerNo: "",
      tpSz: "",
      sealNo: "",
      pkg: "",
      tare: "",
      vgm: "",
      netWeight: "",
      grossWeight: "",
      measurement: "",
    },
  ]);

  const [displayUnit, setDisplayUnit] = useState("Show Both");
  const [inputTotal, setInputTotal] = useState(false);

  const unitOptions = [
    { value: "show-both", label: "Show Both" },
    { value: "kg-cbm", label: "KG / CBM" },
    { value: "lbs-cft", label: "LBS / CFT" },
  ];

  const handleAddContainer = () => {
    const newContainer: ContainerData = {
      id: Date.now().toString(),
      containerNo: "",
      tpSz: "",
      sealNo: "",
      pkg: "",
      tare: "",
      vgm: "",
      netWeight: "",
      grossWeight: "",
      measurement: "",
    };
    setContainers([...containers, newContainer]);
  };

  return (
    <div className="flex flex-col gap-[8px] w-full">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between gap-2 px-2 py-1">
        <div className="flex items-center gap-2">
          <SolidButton
            icon="fas fa-plus"
            text="Container"
            variant="green"
            size="medium"
            onClick={handleAddContainer}
          />
          <SolidButton
            text="Import Container"
            variant="green"
            size="medium"
          />
          <div className="relative">
            <SolidButton
              text="Create A/P"
              variant="green"
              size="medium"
              className="pr-[24px]"
            />
            <i className="fas fa-chevron-down absolute right-[8px] top-1/2 -translate-y-1/2 text-white text-[10px] pointer-events-none"></i>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Display Unit Dropdown */}
          <div className="flex items-center gap-1">
            <span className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#333333]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Display Unit:
            </span>
            <div className="w-[120px]">
              <Select
                options={unitOptions}
                value={displayUnit}
                onChange={(value) => setDisplayUnit(value)}
                placeholder="Show Both"
              />
            </div>
          </div>

          {/* Purple Assign Button */}
          <SolidButton
            icon="fas fa-user-check"
            variant="teal"
            size="tiny"
            customBgColor="#9370db"
          />
        </div>
      </div>

      {/* Container Table */}
      <div className="w-full overflow-x-auto">
        {/* Table Header */}
        <div className="content-stretch flex items-center relative w-full">
          <TableHeaderCell text="Container No." width="flex-1 min-w-[120px]" variant="light" />
          <TableHeaderCell text="TP/SZ" width="w-[80px]" variant="light" />
          <TableHeaderCell text="Seal No." width="w-[100px]" variant="light" />
          <TableHeaderCell text="PKG" width="w-[80px]" variant="light" />
          <TableHeaderCell text="TARE" width="w-[100px]" variant="light" />
          <TableHeaderCell text="VGM" width="w-[100px]" variant="light" />
          <TableHeaderCell text="Net Weight" width="w-[120px]" variant="light" />
          <TableHeaderCell text="Gross Weight" width="w-[120px]" variant="light" />
          <TableHeaderCell text="Measurement" width="w-[120px]" variant="light" />
        </div>

        {/* Table Rows */}
        {containers.map((container, index) => (
          <div key={container.id} className="content-stretch flex items-center relative w-full h-[30px]">
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="flex-1 min-w-[120px]">
              <input
                type="text"
                value={container.containerNo}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].containerNo = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[80px]">
              <input
                type="text"
                value={container.tpSz}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].tpSz = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[100px]">
              <input
                type="text"
                value={container.sealNo}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].sealNo = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[80px]">
              <input
                type="text"
                value={container.pkg}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].pkg = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[100px]">
              <input
                type="text"
                value={container.tare}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].tare = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[100px]">
              <input
                type="text"
                value={container.vgm}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].vgm = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[120px]">
              <input
                type="text"
                value={container.netWeight}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].netWeight = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[120px]">
              <input
                type="text"
                value={container.grossWeight}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].grossWeight = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
            <TableRowCell variant={index % 2 === 0 ? "odd" : "even"} width="w-[120px]">
              <input
                type="text"
                value={container.measurement}
                onChange={(e) => {
                  const newContainers = [...containers];
                  newContainers[index].measurement = e.target.value;
                  setContainers(newContainers);
                }}
                className="w-full h-full bg-transparent outline-none font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333] px-1"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </TableRowCell>
          </div>
        ))}

        {/* Total Row */}
        <div className="content-stretch flex items-center relative w-full h-[30px] bg-[#e8e8e8]">
          <TableRowCell variant="even" width="flex-1 min-w-[120px]" className="bg-[#e8e8e8]">
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center w-[15px] h-[15px] cursor-pointer"
                onClick={() => setInputTotal(!inputTotal)}
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 15 15"
                >
                  <rect
                    fill="white"
                    height="14"
                    width="14"
                    x="0.5"
                    y="0.5"
                  />
                  <rect
                    height="14"
                    stroke="#C6C6C6"
                    width="14"
                    x="0.5"
                    y="0.5"
                    fill="none"
                  />
                  {inputTotal && (
                    <path
                      d="M3 7.5L6.5 11L12 4.5"
                      stroke="#333333"
                      strokeWidth="2"
                      fill="none"
                    />
                  )}
                </svg>
              </div>
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Input total number
              </span>
            </div>
          </TableRowCell>
          <TableRowCell variant="even" width="w-[80px]" className="bg-[#e8e8e8]" />
          <TableRowCell variant="even" width="w-[100px]" className="bg-[#e8e8e8]" />
          <TableRowCell variant="even" width="w-[80px]" className="bg-[#e8e8e8]">
            <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0
            </span>
          </TableRowCell>
          <TableRowCell variant="even" width="w-[100px]" className="bg-[#e8e8e8]" />
          <TableRowCell variant="even" width="w-[100px]" className="bg-[#e8e8e8]" />
          <TableRowCell variant="even" width="w-[120px]" className="bg-[#e8e8e8]">
            <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0.00 KG / 0.00 LBS
            </span>
          </TableRowCell>
          <TableRowCell variant="even" width="w-[120px]" className="bg-[#e8e8e8]">
            <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0.00 KG / 0.00 LBS
            </span>
          </TableRowCell>
          <TableRowCell variant="even" width="w-[120px]" className="bg-[#e8e8e8]">
            <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333333]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0.00 CBM / 0.00 CFT
            </span>
          </TableRowCell>
        </div>
      </div>
    </div>
  );
}