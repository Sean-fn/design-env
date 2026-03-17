import React from "react";
import FormGroup from "./FormGroup";
import SolidButton from "./SolidButton";
import FormGroupWithDate from "./FormGroupWithDate";
import InputWithAddon from "./InputWithAddon";

interface HBLFormProps {
  carrierOptions?: Array<{ value: string; label: string }>;
  serviceTermOptions?: Array<{ value: string; label: string }>;
}

export default function HBLForm({ 
  carrierOptions = [{ value: "", label: "Select..." }],
  serviceTermOptions = [
    { value: "CY", label: "CY" },
    { value: "CFS", label: "CFS" },
  ]
}: HBLFormProps) {
  
  const handleDateChange = (field: string) => (date: Date) => {
    console.log(`${field} changed to:`, date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }));
  };

  return (
    <div className="p-4">
      {/* Form Grid - 4 columns layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-3">
        
        {/* Row 1 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">*HBL No.</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="input"
              value="2BG2CL25110002"
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <FormGroup
          label="AMS No."
          type="input"
          value=""
          placeholder=""
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="ISF No."
          type="input"
          value=""
          placeholder=""
          labelWidth="max-w-[140px]"
        />

        <div className="flex items-center justify-end">
          <span className="text-[11px] text-[#666666]">ISF Filing by 3rd Party</span>
        </div>

        {/* Row 2 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Quotation No.</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Shipper</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Consignee</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Notify</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-share-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        {/* Row 3 */}
        <FormGroup
          label="Customer"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="Bill To"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="Sub B/L No."
          type="input"
          value=""
          placeholder=""
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">OP</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="input"
              value="Brad Fan (Brad)"
              disabled
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-share-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        {/* Row 4 */}
        <FormGroup
          label="Sales"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="Forwarding Agent"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">ISF Matched Date</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onDateChange={handleDateChange('ISF Matched Date')}
            />
          </div>
        </div>

        <div></div>

        {/* Row 5 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Customs Broker</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Trucker</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <FormGroup
          label="CY/CFS Location"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Available</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onDateChange={handleDateChange('Available')}
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Place of Delivery (DEL)</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Place of Delivery ETA</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('Place of Delivery ETA')}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Final Destination</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Final ETA</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('Final ETA')}
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Delivery Location</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value=""
              options={carrierOptions}
              placeholder="Select..."
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <FormGroup
          label="Ship Mode"
          type="select"
          value="BULK"
          options={[
            { value: "BULK", label: "BULK" },
            { value: "FCL", label: "FCL" },
            { value: "LCL", label: "LCL" },
          ]}
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="Freight"
          type="input"
          value="PREPAID"
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">LFD</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('LFD')}
            />
          </div>
        </div>

        {/* Row 8 */}
        <FormGroup
          label="Rail"
          type="input"
          value=""
          placeholder=""
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">IT No.</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-1 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <SolidButton
              icon="fas fa-pencil-alt"
              variant="teal"
              size="tiny"
              rounded={false}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">IT Date</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('IT Date')}
            />
          </div>
        </div>

        <FormGroup
          label="IT Issued Location"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        {/* Row 9 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">G.O Date</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('G.O Date')}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Expiry Date</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('Expiry Date')}
            />
          </div>
        </div>

        <div></div>
        <div></div>

        {/* Row 10 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Express B/L</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-4 grow items-center min-h-px min-w-px relative shrink-0">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="expressbl" value="yes" className="cursor-pointer" />
              <span className="text-[11px] text-[#333333]">Yes</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="expressbl" value="no" className="cursor-pointer" />
              <span className="text-[11px] text-[#333333]">No</span>
            </label>
          </div>
        </div>

        <FormGroup
          label="Sales Type"
          type="select"
          value="CO-LOAD"
          options={[
            { value: "CO-LOAD", label: "CO-LOAD" },
            { value: "DIRECT", label: "DIRECT" },
          ]}
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="Incoterms"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="Cargo Type"
          type="select"
          value="GENERAL CARGO"
          options={[
            { value: "GENERAL CARGO", label: "GENERAL CARGO" },
            { value: "DANGEROUS", label: "DANGEROUS" },
            { value: "REFRIGERATED", label: "REFRIGERATED" },
          ]}
          labelWidth="max-w-[140px]"
        />

        {/* Row 11 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Door Move</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-4 grow items-center min-h-px min-w-px relative shrink-0">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-[11px] text-[#333333]">C.Clearance</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-[11px] text-[#333333]">C.Hold</span>
            </label>
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">C. Released Date</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('C. Released Date')}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Service Term</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroup
              label=""
              type="select"
              value="CFS"
              options={serviceTermOptions}
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
            <i className="fas fa-arrows-alt-h text-[#999999] text-[12px] shrink-0"></i>
            <FormGroup
              label=""
              type="select"
              value="CFS"
              options={serviceTermOptions}
              labelWidth="max-w-[0px]"
              className="flex-1"
            />
          </div>
        </div>

        <FormGroup
          label="Container/Qty"
          type="input"
          value="12RF*1"
          labelWidth="max-w-[140px]"
        />

        {/* Row 12 */}
        <FormGroup
          label="Referred By"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <FormGroup
          label="Entry No."
          type="input"
          value=""
          placeholder=""
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Entry DOC Sent</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('Entry DOC Sent')}
            />
          </div>
        </div>

        <div></div>

        {/* Row 13 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">OB/L Received</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('OB/L Received')}
            />
          </div>
        </div>

        <div></div>

        <FormGroup
          label="Hold"
          type="input"
          value=""
          placeholder=""
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Container Owner Type</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-3 grow items-center min-h-px min-w-px relative shrink-0">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="containerOwner" value="coc" className="cursor-pointer" />
              <span className="text-[11px] text-[#333333]">COC</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="containerOwner" value="noc" className="cursor-pointer" />
              <span className="text-[11px] text-[#333333]">NOC</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="containerOwner" value="soc" className="cursor-pointer" />
              <span className="text-[11px] text-[#333333]">SOC</span>
            </label>
          </div>
        </div>

        {/* Row 14 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Freight Released</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <InputWithAddon
              placeholder="Select date"
              leftAddon="checkbox"
              rightAddon="calendar"
              onDateChange={handleDateChange('Freight Released')}
            />
          </div>
        </div>

        <FormGroup
          label="Released By"
          type="select"
          value=""
          options={carrierOptions}
          placeholder="Select..."
          labelWidth="max-w-[140px]"
        />

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">Door Delivered</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('Door Delivered')}
            />
          </div>
        </div>

        <div></div>

        {/* Row 15 */}
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">AN Sent Date</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('AN Sent Date')}
            />
          </div>
        </div>

        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[10px] whitespace-pre">DO Sent Date</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
            <FormGroupWithDate
              label=""
              type="input"
              value=""
              placeholder=""
              labelWidth="max-w-[0px]"
              className="w-full"
              onChange={handleDateChange('DO Sent Date')}
            />
          </div>
        </div>

        <div className="flex items-center">
          <button className="flex items-center gap-1 text-[#5a9fd4] text-[11px] hover:underline">
            More <i className="fas fa-plus text-[10px]"></i>
          </button>
        </div>

        <div></div>

      </div>
    </div>
  );
}