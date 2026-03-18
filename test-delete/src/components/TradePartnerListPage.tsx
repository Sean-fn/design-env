import React, { useState } from "react";
import TableHeaderCell from "./TableHeaderCell";
import TableRowCell from "./TableRowCell";
import ButtonGroup from "./ButtonGroup";
import OutlineButton from "./OutlineButton";
import SolidButton from "./SolidButton";
import Pagination from "./Pagination";

interface TradePartnerListPageProps {
  onPartnerClick?: (code: string) => void;
}

export default function TradePartnerListPage({ onPartnerClick }: TradePartnerListPageProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Sample data for the trade partner list
  const partnerData = [
    {
      code: "XMN",
      name: "XIAMEN AIRLINE",
      alias: "XIAMEN AIRLINE",
      localName: "",
      scacIata: "MF (731)",
      firmCode: "MF",
      contact: "",
      type: "SHIPPER (KNOWN)",
      group: "CASS",
      address: "TEST"
    },
    {
      code: "WWSU",
      name: "WESTWOOD SHIPPING LINES INC",
      alias: "WWSU",
      localName: "",
      scacIata: "WWSU",
      firmCode: "",
      contact: "D/DPS 800-220-9752",
      type: "OCEAN CARRIER",
      group: "",
      address: "1011"
    },
    {
      code: "WLWH",
      name: "WALLENIUS WILHELMSEN",
      alias: "WLWH",
      localName: "",
      scacIata: "WLWH",
      firmCode: "",
      contact: "",
      type: "OCEAN CARRIER",
      group: "",
      address: ""
    },
    {
      code: "WH1415",
      name: "YRC LOGISTICS GLOBAL, LLC (0879)",
      alias: "YRC",
      localName: "",
      scacIata: "",
      firmCode: "",
      contact: "",
      type: "WAREHOUSE",
      group: "CASS",
      address: "1080"
    },
    {
      code: "WH1414",
      name: "WTT CUSTOMHOUSE BROKER (N304)",
      alias: "N304",
      localName: "",
      scacIata: "",
      firmCode: "",
      contact: "",
      type: "WAREHOUSE",
      group: "CASS",
      address: "22 E"
    },
    {
      code: "WH1413",
      name: "WORLD CARTAGE SYSTEMS (§10)",
      alias: "WORLD",
      localName: "",
      scacIata: "",
      firmCode: "",
      contact: "",
      type: "WAREHOUSE",
      group: "",
      address: "8301"
    },
    {
      code: "WH1412",
      name: "WELLMADE PRODUCT",
      alias: "WELLMADE",
      localName: "",
      scacIata: "",
      firmCode: "",
      contact: "",
      type: "WAREHOUSE",
      group: "",
      address: "1711"
    },
    {
      code: "WH1410",
      name: "WALKER BROTHERS - ANAHEIM DIV.",
      alias: "",
      localName: "",
      scacIata: "",
      firmCode: "",
      contact: "KEN 888-500-8700",
      type: "WAREHOUSE",
      group: "",
      address: "3834"
    },
    {
      code: "WH1409",
      name: "VERSATILE BUILDING PRODUCTS, INC.",
      alias: "VERSATILE",
      localName: "",
      scacIata: "",
      firmCode: "",
      contact: "",
      type: "WAREHOUSE",
      group: "",
      address: "245"
    },
    {
      code: "WH1408",
      name: "STG LOGISTICS, (F146)",
      alias: "F146",
      localName: "",
      scacIata: "",
      firmCode: "",
      contact: "",
      type: "WAREHOUSE",
      group: "ST GEORGE",
      address: "6807"
    }
  ];

  const toggleRowSelection = (index: number) => {
    setSelectedRows(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === partnerData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(partnerData.map((_, i) => i));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Content */}
      <div className="bg-white rounded-[0px] p-4">
        {/* Title Bar with Actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[rgb(75,119,190)] text-[16px] uppercase font-[Open_Sans] font-bold">
            TRADE PARTNER LIST
          </h2>
          <div className="flex items-center gap-2">
            <SolidButton 
              icon="fas fa-filter"
              text="Filter"
              variant="blue"
              rounded
              size="medium"
              onClick={() => console.log('Filter clicked')}
            />
            <OutlineButton 
              icon="fas fa-file-excel"
              text="Excel"
              rounded
              size="medium"
              onClick={() => console.log('Excel clicked')}
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2 mb-4">
          <ButtonGroup 
            onAdd={() => console.log('Add clicked')}
            onCopy={() => console.log('Copy clicked')}
            onDelete={() => console.log('Delete clicked')}
          />
        </div>

        {/* Table using Design System Components */}
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="flex items-stretch min-w-max">
              <TableHeaderCell width="w-8">
                <input 
                  type="checkbox" 
                  checked={selectedRows.length === partnerData.length}
                  onChange={toggleSelectAll}
                  className="cursor-pointer"
                />
              </TableHeaderCell>
              <TableHeaderCell width="w-[100px]" text="Code" />
              <TableHeaderCell width="w-[200px]" text="Name" sortable />
              <TableHeaderCell width="w-[150px]" text="Alias" />
              <TableHeaderCell width="w-[150px]" text="Local Name" />
              <TableHeaderCell width="w-[120px]" text="SCAC / IATA" />
              <TableHeaderCell width="w-[100px]" text="Firm Code" />
              <TableHeaderCell width="w-[150px]" text="Contact" />
              <TableHeaderCell width="w-[150px]" text="Type" />
              <TableHeaderCell width="w-[120px]" text="Group" />
              <TableHeaderCell width="w-[100px]" text="Address" />
            </div>

            {/* Table Body */}
            <div className="mt-[2px]">
              {partnerData.map((row, index) => (
                <div 
                  key={index} 
                  className="flex items-center h-[30px] min-w-max hover:bg-[#f0f7ff] transition-colors"
                >
                  <TableRowCell 
                    width="w-8" 
                    variant={index % 2 === 0 ? "odd" : "even"}
                    className="flex items-center justify-center"
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleRowSelection(index)}
                      className="cursor-pointer"
                    />
                  </TableRowCell>
                  
                  <TableRowCell width="w-[100px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.code} />
                  
                  <TableRowCell width="w-[200px]" variant={index % 2 === 0 ? "odd" : "even"}>
                    <a 
                      href="#" 
                      className="text-[#5a9fd4] hover:underline font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] cursor-pointer" 
                      style={{ fontVariationSettings: "'wdth' 100" }}
                      onClick={(e) => {
                        e.preventDefault();
                        onPartnerClick?.(row.code);
                      }}
                    >
                      {row.name}
                    </a>
                  </TableRowCell>
                  
                  <TableRowCell width="w-[150px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.alias} />
                  <TableRowCell width="w-[150px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.localName} />
                  <TableRowCell width="w-[120px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.scacIata} />
                  <TableRowCell width="w-[100px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.firmCode} />
                  <TableRowCell width="w-[150px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.contact} />
                  <TableRowCell width="w-[150px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.type} />
                  <TableRowCell width="w-[120px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.group} />
                  <TableRowCell width="w-[100px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.address} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={1}
          recordsPerPage={10}
          totalRecords={10}
          onPageChange={(page) => console.log('Page changed to:', page)}
          onRecordsPerPageChange={(records) => console.log('Records per page changed to:', records)}
        />
      </div>
    </div>
  );
}
