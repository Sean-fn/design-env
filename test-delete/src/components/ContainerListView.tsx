import React, { useState } from "react";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";
import Select from "./Select";
import Input from "./Input";
import Textarea from "./Textarea";
import ContainerTableHeader from "./ContainerTableHeader";
import ContainerTableRow from "./ContainerTableRow";
import ContainerTableTotalRow from "./ContainerTableTotalRow";
import Checkbox from "./Checkbox";

/** MBL Container tab fields that AI extracted */
export const AI_FILLED_MBL_CONTAINER_FIELDS = new Set([
  "containerNo",
  "tpSz",
  "sealNo",
  "pkgCarton",
  "tareKg",
  "vgmKg",
  "netWeightKg",
  "grossWeightKg",
  "grossWeightLb",
  "measurementCbm",
]);

interface ContainerRow {
  id: number;
  selected: boolean;
  number: number;
  pcTf1: string;
  pcTf2: string;
  containerNo: string;
  tpSz: string;
  sealNo: string;
  pkgCarton: string;
  tareKg: string;
  vgmKg: string;
  netWeightKg: string;
  grossWeightKg: string;
  grossWeightLb: string;
  measurementCbm: string;
}

export default function ContainerListView() {
  const [containers, setContainers] = useState<ContainerRow[]>([
    {
      id: 1,
      selected: false,
      number: 1,
      pcTf1: "",
      pcTf2: "",
      containerNo: "MSKU8327451",
      tpSz: "40HC",
      sealNo: "SL90281",
      pkgCarton: "85",
      tareKg: "3,800",
      vgmKg: "5,920",
      netWeightKg: "980.000",
      grossWeightKg: "1,120.000",
      grossWeightLb: "2,469.200",
      measurementCbm: "16.200",
    },
    {
      id: 2,
      selected: false,
      number: 2,
      pcTf1: "",
      pcTf2: "",
      containerNo: "TCLU7294018",
      tpSz: "40HC",
      sealNo: "SL90282",
      pkgCarton: "120",
      tareKg: "3,750",
      vgmKg: "6,370",
      netWeightKg: "1,450.000",
      grossWeightKg: "1,620.000",
      grossWeightLb: "3,571.500",
      measurementCbm: "24.500",
    },
    {
      id: 3,
      selected: false,
      number: 3,
      pcTf1: "",
      pcTf2: "",
      containerNo: "TGHU6583920",
      tpSz: "20GP",
      sealNo: "SL90283",
      pkgCarton: "60",
      tareKg: "2,250",
      vgmKg: "3,060",
      netWeightKg: "720.000",
      grossWeightKg: "810.000",
      grossWeightLb: "1,785.700",
      measurementCbm: "11.800",
    },
  ]);
  const [displayUnit, setDisplayUnit] = useState("Show Both");
  const [mark, setMark] = useState("");
  const [description, setDescription] = useState("");
  const [domesticRouting, setDomesticRouting] = useState("");
  const [inputTotalNumber, setInputTotalNumber] = useState(false);

  const displayUnitOptions = [
    { value: "Show Both", label: "Show Both" },
    { value: "Metric Only", label: "Metric Only" },
    { value: "Imperial Only", label: "Imperial Only" },
  ];

  const handleAddRow = () => {
    const newRow: ContainerRow = {
      id: Date.now(),
      selected: false,
      number: containers.length + 1,
      pcTf1: "",
      pcTf2: "",
      containerNo: "",
      tpSz: "",
      sealNo: "",
      pkgCarton: "",
      tareKg: "",
      vgmKg: "",
      netWeightKg: "",
      grossWeightKg: "",
      grossWeightLb: "",
      measurementCbm: "",
    };
    setContainers([...containers, newRow]);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        {/* Left: Container List Title + Action Buttons */}
        <div className="flex items-center h-[34px]">
          <span className="text-[#1a1a1a] mr-2">Container List</span>
          
          {/* Add Button + +5 Button - No gap between them */}
          <div className="flex items-center mr-2">
            {/* Add Button - Green */}
            <SolidButton
              icon="fas fa-plus"
              onClick={handleAddRow}
              variant="green"
              size="medium"
            />

            {/* +5 Button */}
            <OutlineButton
              text="+5"
              size="medium"
              onClick={() => console.log("+5")}
            />
          </div>

          {/* Add Multiple Button */}
          <OutlineButton
            icon="far fa-layer-group"
            size="medium"
            onClick={() => console.log("Add Multiple")}
          />

          {/* Clone + Delete Buttons - No gap between them */}
          <div className="flex items-center ml-2">
            {/* Clone Button */}
            <OutlineButton
              icon="far fa-clone"
              size="medium"
              onClick={() => console.log("Clone")}
            />

            {/* Delete Button */}
            <OutlineButton
              icon="far fa-trash-alt"
              size="medium"
              onClick={() => console.log("Delete")}
            />
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2 h-[34px]">
          {/* Import Container Button */}
          <SolidButton
            text="Import Container"
            icon="fas fa-upload"
            size="medium"
            onClick={() => console.log("Import Container")}
          />

          {/* Create A/P Button */}
          <SolidButton
            text="Create A/P"
            icon="fas fa-plus"
            variant="green"
            size="medium"
            onClick={() => console.log("Create A/P")}
          />

          {/* Copy Data from All HB/L - Blue Solid Button */}
          <SolidButton
            text="Copy Data from All HB/L"
            size="small"
            variant="blue"
            onClick={() => console.log("Copy from HBL")}
          />

          {/* Container info to clipboard */}
          <OutlineButton
            text="Container info to clipboard"
            icon="fas fa-external-link-alt"
            iconPosition="right"
            size="small"
            onClick={() => console.log("Copy to clipboard")}
          />

          {/* Settings/Export Button - Purple */}
          <SolidButton
            icon="fas fa-file-import"
            customBgColor="#9575cd"
            size="medium"
            onClick={() => console.log("Assign Container")}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="border border-[#e0e0e0] overflow-hidden">
        <div className="w-full">
          <div className="w-full">
            {/* Table Header */}
            <ContainerTableHeader />

            {/* Table Rows */}
            {containers.length === 0 ? (
              <div className="p-8 text-center text-[#666666] text-[12px] border-t border-[#e0e0e0]">
                No Data Available. Please click{" "}
                <button
                  onClick={handleAddRow}
                  className="text-[#5b9bd1] hover:underline"
                >
                  here
                </button>{" "}
                to add a new row.
              </div>
            ) : (
              containers.map((row, index) => (
                <ContainerTableRow 
                  key={row.id} 
                  rowData={row}
                  aiFilledFields={AI_FILLED_MBL_CONTAINER_FIELDS}
                  onUpdate={(field, value) => {
                    const updated = [...containers];
                    const rowIndex = updated.findIndex(r => r.id === row.id);
                    if (rowIndex !== -1) {
                      updated[rowIndex] = { ...updated[rowIndex], [field]: value };
                      setContainers(updated);
                    }
                  }}
                />
              ))
            )}

            {/* Total Row */}
            <ContainerTableTotalRow
              inputTotalNumber={inputTotalNumber}
              onInputTotalNumberChange={setInputTotalNumber}
              displayUnit={displayUnit}
              onDisplayUnitChange={setDisplayUnit}
              totalCartons={265}
              totalTareKg={9800}
              totalVgmKg={15350}
              totalNetWeightKg={3150}
              totalGrossWeightLb={7826}
              totalMeasurementCbm={52.5}
            />
          </div>
        </div>
      </div>

      {/* Mark and Description Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Mark */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] text-[#1a1a1a]">Mark</label>
          <Textarea
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            placeholder="Enter mark..."
            rows={6}
            resizable={false}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-[12px] text-[#1a1a1a]">Description</label>
            <OutlineButton
              text="Copy from All HB/L"
              size="small"
              onClick={() => console.log("Copy description")}
            />
          </div>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description..."
            rows={6}
            resizable={false}
          />
        </div>
      </div>

      {/* Domestic Routing / Export Instructions */}
      <div className="flex flex-col gap-2">
        <label className="text-[12px] text-[#1a1a1a]">Domestic Routing / Export Instructions</label>
        <Textarea
          value={domesticRouting}
          onChange={(e) => setDomesticRouting(e.target.value)}
          placeholder="Enter routing instructions..."
          rows={6}
          resizable={false}
        />
      </div>
    </div>
  );
}