import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import OutlineButton from './OutlineButton';
import AiButton from '../imports/AiButton';
import SolidButton from './SolidButton';
import TextButton from './TextButton';
import Pagination from './Pagination';
import FormGroup from './FormGroup';
import TableHeaderCell from './TableHeaderCell';
import TableRowCell from './TableRowCell';
import Group1 from '../imports/Group1';
import GoNexusHubPanel from './GoNexusHubPanel';
import { type FileRecord } from './GoNexusHubPanel';

interface MyShipmentListPageProps {
  onShipmentClick?: (fileNo: string) => void;
  onNavigateToNewShipment?: () => void;
  onNavigateToAICreate?: () => void;
  nexusFiles: FileRecord[];
  onNexusFilesChange: React.Dispatch<React.SetStateAction<FileRecord[]>>;
}

export default function MyShipmentListPage({ onShipmentClick, onNavigateToNewShipment, onNavigateToAICreate, nexusFiles, onNexusFilesChange }: MyShipmentListPageProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showGoNexusHub, setShowGoNexusHub] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only hide when leaving the outermost container
    if (e.currentTarget === e.target) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      console.log('Files dropped:', files);
      setUploadedFiles(files);
      setShowGoNexusHub(true);
    }
  };

  // Sample data for the shipment list
  const shipmentData = [
    {
      fileNo: "OIM-25110011",
      hblNo: "CUSTOMSTEST, XXXXX, XXXXX",
      mblNo: "DEMOSTING",
      createDate: "11-05-2025",
      office: "GFTEST",
      colorRemarks: "",
      hblNo2: "CUSTOMSTEST, XXXXX, XXXXX",
      containerNo: "HMMU709925",
      containerQty: "20DC*1",
      eta: "01-01-2026",
      overdue: ""
    },
    {
      fileNo: "OIM-25110006",
      hblNo: "DEMO1008",
      mblNo: "",
      createDate: "10-07-2025",
      office: "MED",
      colorRemarks: "",
      hblNo2: "123, ASDIFGHIJKL",
      containerNo: "",
      containerQty: "20DC*1",
      eta: "01-01-2026",
      overdue: ""
    },
    {
      fileNo: "OIM-25110010",
      hblNo: "GOCLLTEST123",
      mblNo: "",
      createDate: "11-05-2025",
      office: "GFTEST",
      colorRemarks: "",
      hblNo2: "TEST123",
      containerNo: "",
      containerQty: "",
      eta: "12-31-2025",
      overdue: ""
    },
    {
      fileNo: "OIM-25110009",
      hblNo: "GOCLLTEST",
      mblNo: "",
      createDate: "11-05-2025",
      office: "GFTEST",
      colorRemarks: "",
      hblNo2: "GOCLLTEST456",
      containerNo: "",
      containerQty: "",
      eta: "12-31-2025",
      overdue: ""
    },
    {
      fileNo: "OIM-25110008",
      hblNo: "GOCLLTEST",
      mblNo: "",
      createDate: "11-05-2025",
      office: "GFTEST",
      colorRemarks: "",
      hblNo2: "GOCLLTEST123",
      containerNo: "",
      containerQty: "",
      eta: "12-25-2025",
      overdue: ""
    },
    {
      fileNo: "OIM-25110008",
      hblNo: "DEMOMASTER1008",
      mblNo: "",
      createDate: "10-07-2025",
      office: "GFTEST",
      colorRemarks: "",
      hblNo2: "DEMOHOUSE1008, 12345, 33333, QWE...",
      containerNo: "",
      containerQty: "",
      eta: "12-25-2025",
      overdue: ""
    },
    {
      fileNo: "OIM-25110007",
      hblNo: "MASTERDEMO1008",
      mblNo: "",
      createDate: "10-07-2025",
      office: "",
      colorRemarks: "",
      hblNo2: "",
      containerNo: "",
      containerQty: "",
      eta: "12-25-2025",
      overdue: ""
    },
    {
      fileNo: "OIM-25110005",
      hblNo: "TEST10777",
      mblNo: "",
      createDate: "10-07-2025",
      office: "GFTEST",
      colorRemarks: "",
      hblNo2: "TEST1007",
      containerNo: "",
      containerQty: "",
      eta: "12-25-2025",
      overdue: ""
    },
    {
      fileNo: "OIM-25110003",
      hblNo: "NETCHB",
      mblNo: "",
      createDate: "11-04-2025",
      office: "GFTEST",
      colorRemarks: "",
      hblNo2: "NETCHB",
      containerNo: "",
      containerQty: "",
      eta: "12-06-2025",
      overdue: ""
    },
    {
      fileNo: "OIM-25110019",
      hblNo: "RONALDTEST",
      mblNo: "",
      createDate: "11-08-2025",
      office: "GDFT",
      colorRemarks: "",
      hblNo2: "",
      containerNo: "",
      containerQty: "",
      eta: "11-30-2025",
      overdue: "GOI"
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
    if (selectedRows.length === shipmentData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(shipmentData.map((_, i) => i));
    }
  };

  // Filter form state
  const [filterData, setFilterData] = useState({
    fileNo: "",
    mblNo: "",
    office: "",
    blType: "",
    postDate: "",
    carrierBkgNo: "",
    itnNo: "",
    carrier: "",
    blAcctCarrier: "",
    shippingAgent: "",
    overseaAgentConsignee: "",
    notify: "",
    forwardingAgent: "",
    coLoader: "",
    co: "",
    op: "",
    carrierContractNo: "",
    directMaster: "",
    vessel: "",
    voyage: "",
    placeOfReceipt: "",
    placeOfReceiptEtd: "",
    portOfLoading: "",
    etd: "",
    portOfDischarge: "",
    eta: "",
    placeOfDelivery: "",
    placeOfDeliveryEta: "",
    finalDestination: "",
    finalEta: "",
    emptyPickup: "",
    deliveryToPier: "",
    preCarriageBy: "",
    atd: "",
    ata: "",
    freight: "",
    shipMode: "",
    svcTermFrom: "",
    svcTermTo: "",
    containerQty: "",
    oblType: "",
    docCutOffDate: "",
    portCutOffDate: "",
    vgmCutOffDate: "",
    railCutOffDate: "",
    blCancelled: "",
    cancelledBy: "",
    reasonForCancel: "",
    businessReferredBy: "",
    bookingAgent: "",
    freightReleased: "",
    releasedBy: "",
    onBoardDate: "",
    earliestReturnDate: ""
  });

  // Options for select dropdowns
  const officeOptions = [
    { value: "", label: "Select..." },
    { value: "GFTEST", label: "GFTEST" },
    { value: "MED", label: "MED" },
    { value: "GDFT", label: "GDFT" },
  ];

  const blTypeOptions = [
    { value: "", label: "Select..." },
    { value: "NORMAL", label: "NORMAL" },
    { value: "EXPRESS", label: "EXPRESS" },
  ];

  const shipModeOptions = [
    { value: "", label: "Select..." },
    { value: "FCL", label: "FCL" },
    { value: "LCL", label: "LCL" },
  ];

  const serviceTermOptions = [
    { value: "", label: "Select..." },
    { value: "CY", label: "CY" },
    { value: "CFS", label: "CFS" },
  ];

  const oblTypeOptions = [
    { value: "", label: "Select..." },
    { value: "ORIGINAL_BILL_OF_LADING", label: "ORIGINAL BILL OF LADING" },
    { value: "SEAWAY_BILL", label: "SEAWAY BILL" },
  ];

  const genericOptions = [
    { value: "", label: "Select..." },
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilterData(prev => ({ ...prev, [field]: value }));
  };

  const handleFilterClear = () => {
    setFilterData({
      fileNo: "",
      mblNo: "",
      office: "",
      blType: "",
      postDate: "",
      carrierBkgNo: "",
      itnNo: "",
      carrier: "",
      blAcctCarrier: "",
      shippingAgent: "",
      overseaAgentConsignee: "",
      notify: "",
      forwardingAgent: "",
      coLoader: "",
      co: "",
      op: "",
      carrierContractNo: "",
      directMaster: "",
      vessel: "",
      voyage: "",
      placeOfReceipt: "",
      placeOfReceiptEtd: "",
      portOfLoading: "",
      etd: "",
      portOfDischarge: "",
      eta: "",
      placeOfDelivery: "",
      placeOfDeliveryEta: "",
      finalDestination: "",
      finalEta: "",
      emptyPickup: "",
      deliveryToPier: "",
      preCarriageBy: "",
      atd: "",
      ata: "",
      freight: "",
      shipMode: "",
      svcTermFrom: "",
      svcTermTo: "",
      containerQty: "",
      oblType: "",
      docCutOffDate: "",
      portCutOffDate: "",
      vgmCutOffDate: "",
      railCutOffDate: "",
      blCancelled: "",
      cancelledBy: "",
      reasonForCancel: "",
      businessReferredBy: "",
      bookingAgent: "",
      freightReleased: "",
      releasedBy: "",
      onBoardDate: "",
      earliestReturnDate: ""
    });
  };

  const handleFilterApply = () => {
    console.log('Apply filter:', filterData);
    // Here you would typically filter the shipmentData based on filterData
    setShowFilter(false);
  };

  return (
    <div 
      className="flex flex-col gap-4 relative min-h-screen"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Main Content */}
      <div className="bg-white rounded-[0px] p-4">
        {/* Title Bar with Actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[rgb(75,119,190)] text-[16px] uppercase font-[Open_Sans] font-bold">House b/l list</h2>
          <div className="flex items-center gap-2">
            <SolidButton 
              icon="fas fa-filter"
              text="Filter"
              variant="blue"
              rounded
              size="medium"
              onClick={() => setShowFilter(!showFilter)}
            />
            <SolidButton 
              icon="fas fa-cog"
              text="Config"
              variant="blue"
              rounded
              size="medium"
              onClick={() => console.log('Config clicked')}
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

        {/* Filter Panel */}
        {showFilter && (
          <div className="bg-[#f8f9fa] border border-[#dddddd] rounded p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[#333333] text-[14px] font-semibold">Filter Criteria</h3>
              <button 
                onClick={() => setShowFilter(false)}
                className="text-[#999999] hover:text-[#333333] transition-colors"
              >
                <i className="fas fa-times text-[14px]"></i>
              </button>
            </div>

            {/* Filter Form Grid - 4 columns layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-3 mb-4">
              <FormGroup
                label="File No."
                type="input"
                value={filterData.fileNo}
                onChange={(value) => handleFilterChange('fileNo', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="MB/L No."
                type="input"
                value={filterData.mblNo}
                onChange={(value) => handleFilterChange('mblNo', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="* Office"
                type="select"
                value={filterData.office}
                onChange={(value) => handleFilterChange('office', value)}
                options={officeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="B/L Type"
                type="select"
                value={filterData.blType}
                onChange={(value) => handleFilterChange('blType', value)}
                options={blTypeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Post Date"
                type="input"
                value={filterData.postDate}
                onChange={(value) => handleFilterChange('postDate', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Carrier Bkg. No."
                type="input"
                value={filterData.carrierBkgNo}
                onChange={(value) => handleFilterChange('carrierBkgNo', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="ITN No."
                type="input"
                value={filterData.itnNo}
                onChange={(value) => handleFilterChange('itnNo', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Carrier"
                type="select"
                value={filterData.carrier}
                onChange={(value) => handleFilterChange('carrier', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="B/L Acct. Carrier"
                type="select"
                value={filterData.blAcctCarrier}
                onChange={(value) => handleFilterChange('blAcctCarrier', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Shipping Agent"
                type="input"
                value={filterData.shippingAgent}
                onChange={(value) => handleFilterChange('shippingAgent', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="(Oversea Agent) Consignee"
                type="select"
                value={filterData.overseaAgentConsignee}
                onChange={(value) => handleFilterChange('overseaAgentConsignee', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Notify"
                type="select"
                value={filterData.notify}
                onChange={(value) => handleFilterChange('notify', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Forwarding Agent"
                type="select"
                value={filterData.forwardingAgent}
                onChange={(value) => handleFilterChange('forwardingAgent', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Co-loader"
                type="select"
                value={filterData.coLoader}
                onChange={(value) => handleFilterChange('coLoader', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="C/O"
                type="select"
                value={filterData.co}
                onChange={(value) => handleFilterChange('co', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="OP"
                type="input"
                value={filterData.op}
                onChange={(value) => handleFilterChange('op', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Carrier Contract No."
                type="input"
                value={filterData.carrierContractNo}
                onChange={(value) => handleFilterChange('carrierContractNo', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Direct Master"
                type="input"
                value={filterData.directMaster}
                onChange={(value) => handleFilterChange('directMaster', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Vessel"
                type="select"
                value={filterData.vessel}
                onChange={(value) => handleFilterChange('vessel', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Voyage"
                type="input"
                value={filterData.voyage}
                onChange={(value) => handleFilterChange('voyage', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Place of Receipt"
                type="select"
                value={filterData.placeOfReceipt}
                onChange={(value) => handleFilterChange('placeOfReceipt', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Place of Receipt ETD"
                type="input"
                value={filterData.placeOfReceiptEtd}
                onChange={(value) => handleFilterChange('placeOfReceiptEtd', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Port of Loading"
                type="select"
                value={filterData.portOfLoading}
                onChange={(value) => handleFilterChange('portOfLoading', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="* ETD"
                type="input"
                value={filterData.etd}
                onChange={(value) => handleFilterChange('etd', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Port of Discharge"
                type="select"
                value={filterData.portOfDischarge}
                onChange={(value) => handleFilterChange('portOfDischarge', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="ETA"
                type="input"
                value={filterData.eta}
                onChange={(value) => handleFilterChange('eta', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Place of Delivery (DEL)"
                type="select"
                value={filterData.placeOfDelivery}
                onChange={(value) => handleFilterChange('placeOfDelivery', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Place of Delivery ETA"
                type="input"
                value={filterData.placeOfDeliveryEta}
                onChange={(value) => handleFilterChange('placeOfDeliveryEta', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Final Destination"
                type="select"
                value={filterData.finalDestination}
                onChange={(value) => handleFilterChange('finalDestination', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Final ETA"
                type="input"
                value={filterData.finalEta}
                onChange={(value) => handleFilterChange('finalEta', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Empty Pickup"
                type="select"
                value={filterData.emptyPickup}
                onChange={(value) => handleFilterChange('emptyPickup', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Delivery To/Pier"
                type="select"
                value={filterData.deliveryToPier}
                onChange={(value) => handleFilterChange('deliveryToPier', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Pre-carriage by"
                type="select"
                value={filterData.preCarriageBy}
                onChange={(value) => handleFilterChange('preCarriageBy', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="ATD"
                type="input"
                value={filterData.atd}
                onChange={(value) => handleFilterChange('atd', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="ATA"
                type="input"
                value={filterData.ata}
                onChange={(value) => handleFilterChange('ata', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Freight"
                type="input"
                value={filterData.freight}
                onChange={(value) => handleFilterChange('freight', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Ship Mode"
                type="select"
                value={filterData.shipMode}
                onChange={(value) => handleFilterChange('shipMode', value)}
                options={shipModeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="SVC Term From"
                type="select"
                value={filterData.svcTermFrom}
                onChange={(value) => handleFilterChange('svcTermFrom', value)}
                options={serviceTermOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="SVC Term To"
                type="select"
                value={filterData.svcTermTo}
                onChange={(value) => handleFilterChange('svcTermTo', value)}
                options={serviceTermOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Container/Qty"
                type="select"
                value={filterData.containerQty}
                onChange={(value) => handleFilterChange('containerQty', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="OB/L Type"
                type="select"
                value={filterData.oblType}
                onChange={(value) => handleFilterChange('oblType', value)}
                options={oblTypeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Doc Cut-Off Date"
                type="input"
                value={filterData.docCutOffDate}
                onChange={(value) => handleFilterChange('docCutOffDate', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Port Cut-Off Date"
                type="input"
                value={filterData.portCutOffDate}
                onChange={(value) => handleFilterChange('portCutOffDate', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="VGM Cut-Off Date"
                type="input"
                value={filterData.vgmCutOffDate}
                onChange={(value) => handleFilterChange('vgmCutOffDate', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Rail Cut-Off Date"
                type="input"
                value={filterData.railCutOffDate}
                onChange={(value) => handleFilterChange('railCutOffDate', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="BL Cancelled"
                type="input"
                value={filterData.blCancelled}
                onChange={(value) => handleFilterChange('blCancelled', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Cancelled By"
                type="input"
                value={filterData.cancelledBy}
                onChange={(value) => handleFilterChange('cancelledBy', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Reason for Cancel"
                type="input"
                value={filterData.reasonForCancel}
                onChange={(value) => handleFilterChange('reasonForCancel', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Business Referred By"
                type="select"
                value={filterData.businessReferredBy}
                onChange={(value) => handleFilterChange('businessReferredBy', value)}
                options={genericOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Booking Agent"
                type="input"
                value={filterData.bookingAgent}
                onChange={(value) => handleFilterChange('bookingAgent', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Freight Released"
                type="input"
                value={filterData.freightReleased}
                onChange={(value) => handleFilterChange('freightReleased', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Released By"
                type="input"
                value={filterData.releasedBy}
                onChange={(value) => handleFilterChange('releasedBy', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="On Board Date"
                type="input"
                value={filterData.onBoardDate}
                onChange={(value) => handleFilterChange('onBoardDate', value)}
                labelWidth="max-w-[140px]"
              />
              
              <FormGroup
                label="Earliest Return Date"
                type="input"
                value={filterData.earliestReturnDate}
                onChange={(value) => handleFilterChange('earliestReturnDate', value)}
                labelWidth="max-w-[140px]"
              />
            </div>

            {/* Filter Actions */}
            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#dddddd]">
              <OutlineButton 
                text="Clear"
                onClick={handleFilterClear}
              />
              <SolidButton 
                text="Apply"
                variant="blue"
                onClick={handleFilterApply}
              />
            </div>
          </div>
        )}

        {/* Toolbar */}
        <div className="flex items-center gap-2 mb-4">
          <AiButton onClick={() => setShowGoNexusHub(true)} />
          <ButtonGroup 
            onAdd={() => onNavigateToNewShipment?.()}
            onCopy={() => console.log('Copy clicked')}
            onDelete={() => console.log('Delete clicked')}
          />
          <div className="w-px h-6 bg-[#dddddd] mx-1"></div>
          <OutlineButton 
            text="Block"
            onClick={() => console.log('Block clicked')}
          />
          <OutlineButton 
            text="Unblock"
            onClick={() => console.log('Unblock clicked')}
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
                  checked={selectedRows.length === shipmentData.length}
                  onChange={toggleSelectAll}
                  className="cursor-pointer"
                />
              </TableHeaderCell>
              <TableHeaderCell width="w-[100px]" text="File No." />
              <TableHeaderCell width="w-[50px]" text="" />
              <TableHeaderCell width="w-[150px]" text="HBL No." />
              <TableHeaderCell width="w-[120px]" text="MBL No." />
              <TableHeaderCell width="w-[100px]" text="Create Date" />
              <TableHeaderCell width="w-[80px]" text="Office" />
              <TableHeaderCell width="w-[120px]" text="Color Remarks" />
              <TableHeaderCell width="w-[200px]" text="HBL No." />
              <TableHeaderCell width="w-[120px]" text="Container No." />
              <TableHeaderCell width="w-[120px]" text="Container/Qty" />
              <TableHeaderCell width="w-[100px]" text="ETA" />
              <TableHeaderCell width="w-[80px]" text="Overdue" />
            </div>

            {/* Table Body */}
            <div className="mt-[2px]">
              {shipmentData.map((row, index) => (
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
                  
                  <TableRowCell width="w-[100px]" variant={index % 2 === 0 ? "odd" : "even"}>
                    <a 
                      href="#" 
                      className="text-[#5a9fd4] hover:underline font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] cursor-pointer" 
                      style={{ fontVariationSettings: "'wdth' 100" }}
                      onClick={(e) => {
                        e.preventDefault();
                        onShipmentClick?.(row.fileNo);
                      }}
                    >
                      {row.fileNo}
                    </a>
                  </TableRowCell>
                  
                  <TableRowCell width="w-[50px]" variant={index % 2 === 0 ? "odd" : "even"}>
                    <div className="flex items-center justify-center gap-1 w-full">
                      <i className="fas fa-arrow-right text-[10px] text-[#999999]"></i>
                      <button className="text-[#5a9fd4] text-[11px] hover:underline">
                        VIEW
                      </button>
                    </div>
                  </TableRowCell>
                  
                  <TableRowCell width="w-[150px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.hblNo} />
                  <TableRowCell width="w-[120px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.mblNo} />
                  <TableRowCell width="w-[100px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.createDate} />
                  <TableRowCell width="w-[80px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.office} />
                  <TableRowCell width="w-[120px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.colorRemarks} />
                  <TableRowCell width="w-[200px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.hblNo2} />
                  <TableRowCell width="w-[120px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.containerNo} />
                  <TableRowCell width="w-[120px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.containerQty} />
                  <TableRowCell width="w-[100px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.eta} />
                  <TableRowCell width="w-[80px]" variant={index % 2 === 0 ? "odd" : "even"} text={row.overdue} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={9}
          recordsPerPage={50}
          totalRecords={8}
          onPageChange={(page) => console.log('Page changed to:', page)}
          onRecordsPerPageChange={(records) => console.log('Records per page changed to:', records)}
        />
      </div>

      {/* Drag and Drop Overlay */}
      {isDragging && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Group1 />
        </div>
      )}

      {/* GoNexus Hub Panel */}
      <GoNexusHubPanel 
        isOpen={showGoNexusHub} 
        onClose={() => setShowGoNexusHub(false)} 
        uploadedFiles={uploadedFiles}
        files={nexusFiles}
        onFilesChange={onNexusFilesChange}
        onNavigateToShipment={() => {
          setShowGoNexusHub(false);
          onNavigateToNewShipment?.();
        }}
        onNavigateToAICreate={() => {
          setShowGoNexusHub(false);
          onNavigateToAICreate?.();
        }}
      />
    </div>
  );
}