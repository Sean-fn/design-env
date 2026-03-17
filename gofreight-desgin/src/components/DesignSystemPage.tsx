import React, { useState } from "react";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";
import TextButton from "./TextButton";
import FloatingButton from "./FloatingButton";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";
import InputWithAddon from "./InputWithAddon";
import Select from "./Select";
import Textarea from "./Textarea";
import FormGroup from "./FormGroup";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import Tab, { TabItem } from "./Tab";
import PortletContainer from "./PortletContainer";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableHeaderCell from "./TableHeaderCell";
import TableRowCell from "./TableRowCell";
import TableHeaderCellWithDropdown from "./TableHeaderCellWithDropdown";
import Sidebar, { SidebarItem } from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Pagination from "./Pagination";
import Tooltip from "./Tooltip";
import ToastAlert from "./ToastAlert";
import Modal from "./Modal";
import Popover from "./Popover";
import PopoverStandard from "./PopoverStandard";
import PopoverDemo from "./PopoverDemo";
import CardPanel from "./CardPanel";
import HblCard from "./HblCard";
import FormDivider from "./FormDivider";

// Component showcase card wrapper
function ComponentCard({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description?: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg border border-[#dddddd]">
      <div className="bg-[#f5f5f5] px-6 py-4 border-b border-[#dddddd] rounded-t-lg">
        <h3 className="font-['Open_Sans:SemiBold',_sans-serif] text-[#333333] text-[16px]">
          {title}
        </h3>
        {description && (
          <p className="font-['Open_Sans:Regular',_sans-serif] text-[#666666] text-[13px] mt-1">
            {description}
          </p>
        )}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

// Example grid for component variants
function VariantGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}

function VariantItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-[#fafafa] rounded border border-[#eeeeee]">
      <div 
        className="font-['Open_Sans:SemiBold',_sans-serif] text-[#666666] text-[12px] text-center"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </div>
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState(""); // For Textarea demo
  const [selectValue, setSelectValue] = useState("");
  const [autoCompleteValue, setAutoCompleteValue] = useState(""); // For AutoComplete Select demo
  const [formGroupValue, setFormGroupValue] = useState(""); // For FormGroup demo
  const [formGroupAutoValue, setFormGroupAutoValue] = useState(""); // For FormGroup AutoComplete demo
  const [formGroupRadioValue, setFormGroupRadioValue] = useState("no"); // For FormGroup Radio demo
  const [formGroupRadioMultiValue, setFormGroupRadioMultiValue] = useState("option2"); // For FormGroup Radio Multi demo
  const [formGroupWithButtonValue, setFormGroupWithButtonValue] = useState("GOFREIGHT LAX"); // For FormGroup with Right Button demo
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [popoverCheckboxChecked, setPopoverCheckboxChecked] = useState(false); // For Popover checkbox demo
  
  // For FormGroup Checkbox demo
  const [formGroupCheckboxValues, setFormGroupCheckboxValues] = useState({
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  // For standalone Checkbox demo
  const [standaloneCheckbox1, setStandaloneCheckbox1] = useState(false);
  const [standaloneCheckbox2, setStandaloneCheckbox2] = useState(true);
  const [standaloneCheckbox3, setStandaloneCheckbox3] = useState(false);

  // For standalone RadioButton demo
  const [standaloneRadioValue, setStandaloneRadioValue] = useState("option1");

  const selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const tabItems: TabItem[] = [
    { id: "tab1", label: "Dashboard" },
    { id: "tab2", label: "Analytics" },
    { id: "tab3", label: "Reports" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1400px] mx-auto bg-white mx-4 my-0 p-8 rounded-lg">
      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center w-[50px] h-[50px] bg-[#26a69a] hover:bg-[#1e8c82] text-white rounded shadow-lg transition-all duration-200 hover:scale-110"
        title="回到選單頂部"
      >
        <i className="fas fa-arrow-up text-[16px]"></i>
        <span className="text-[9px] mt-1">TOP</span>
      </button>

      {/* Header */}
      <div className="mb-8 pb-6 border-b border-[#dddddd]">
        <h1 className="text-[32px] text-[#333333] mb-2">GoFreight Design System</h1>
        <p className="text-[#666666] text-[14px]">
          完整的 UI 組件庫 - 所有組件均來自 "GF / Components" 設計系統
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-8 p-6 bg-[#f8f9fa] rounded-lg border border-[#e0e0e0]">
        <h2 className="text-[18px] text-[#333333] mb-4">快速導覽</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <a href="#buttons" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Buttons
          </a>
          <a href="#inputs" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Inputs & Forms
          </a>
          <a href="#checkbox-radio" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Checkbox & Radio
          </a>
          <a href="#tabs" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Tabs
          </a>
          <a href="#portlets" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Portlets
          </a>
          <a href="#tables" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Tables
          </a>
          <a href="#navigation" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Navigation
          </a>
          <a href="#tooltips" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Tooltips
          </a>
          <a href="#toast-alerts" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Toast Alerts
          </a>
          <a href="#modals" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Modals
          </a>
          <a href="#popovers" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Popovers
          </a>
          <a href="#card-panel" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Card Panel & HBL Cards
          </a>
          <a href="#dividers" className="px-4 py-2 bg-white rounded border border-[#dddddd] text-[#1caf9a] hover:bg-[#f0f0f0] text-[13px] text-center transition-colors">
            Dividers
          </a>
        </div>
      </div>

      <div className="space-y-12">
        {/* BUTTONS SECTION */}
        <section id="buttons">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Buttons 按鈕組件
          </h2>
          
          <div className="space-y-6">
            {/* Solid Button */}
            <ComponentCard 
              title="SolidButton" 
              description="主要操作按鈕，支援圖標、文字、尺寸和顏色變體"
            >
              <div className="space-y-8">
                {/* Basic Variants */}
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">基本樣式</h4>
                  <VariantGrid>
                    <VariantItem label="Icon Only">
                      <SolidButton 
                        icon="fas fa-plus"
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Icon + Text">
                      <SolidButton 
                        icon="fas fa-plus"
                        text="Add"
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Text Only">
                      <SolidButton 
                        text="Submit"
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">尺寸變體 (Large 33px / Medium 24px / Small 18px / Tiny 16px)</h4>
                  <VariantGrid>
                    <VariantItem label="Large (33px)">
                      <SolidButton 
                        icon="fas fa-check"
                        text="Large"
                        size="large"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Medium (24px)">
                      <SolidButton 
                        icon="fas fa-check"
                        text="Medium"
                        size="medium"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Small (18px)">
                      <SolidButton 
                        icon="fas fa-check"
                        text="Small"
                        size="small"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Tiny (16px)">
                      <SolidButton 
                        icon="fas fa-check"
                        text="Tiny"
                        size="tiny"
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>

                {/* Colors */}
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">顏色變體</h4>
                  <VariantGrid>
                    <VariantItem label="Teal (Primary)">
                      <SolidButton 
                        icon="fas fa-plus"
                        text="Teal"
                        variant="teal"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Blue">
                      <SolidButton 
                        icon="fas fa-filter"
                        text="Blue"
                        variant="blue"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Gray">
                      <SolidButton 
                        icon="fas fa-cog"
                        text="Gray"
                        variant="gray"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>
              </div>
            </ComponentCard>

            {/* Outline Button */}
            <ComponentCard 
              title="OutlineButton" 
              description="次要操作按鈕，邊框樣式"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">基本樣式</h4>
                  <VariantGrid>
                    <VariantItem label="Icon Only">
                      <OutlineButton 
                        icon="far fa-copy"
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Icon + Text">
                      <OutlineButton 
                        icon="far fa-copy"
                        text="Copy"
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Text Only">
                      <OutlineButton 
                        text="Cancel"
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>

                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">尺寸變體</h4>
                  <VariantGrid>
                    <VariantItem label="Large (33px)">
                      <OutlineButton 
                        icon="far fa-edit"
                        text="Edit"
                        size="large"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Medium (24px)">
                      <OutlineButton 
                        icon="far fa-edit"
                        text="Edit"
                        size="medium"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                    <VariantItem label="Small (18px)">
                      <OutlineButton 
                        icon="far fa-edit"
                        text="Edit"
                        size="small"
                        rounded
                        onClick={() => console.log('Clicked')}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>
              </div>
            </ComponentCard>

            {/* Text Button */}
            <ComponentCard 
              title="TextButton" 
              description="文字連結按鈕，無背景和邊框"
            >
              <VariantGrid>
                <VariantItem label="With Icon">
                  <TextButton 
                    icon="fas fa-file-excel"
                    iconColor="text-green-600"
                    text="Export Excel"
                    onClick={() => console.log('Clicked')}
                  />
                </VariantItem>
                <VariantItem label="Text Only">
                  <TextButton 
                    text="View Details"
                    onClick={() => console.log('Clicked')}
                  />
                </VariantItem>
              </VariantGrid>
            </ComponentCard>

            {/* Floating Button */}
            <ComponentCard 
              title="FloatingButton" 
              description="浮動按鈕，帶發光陰影效果，適用於重要操作"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">單個按鈕</h4>
                  <VariantGrid>
                    <VariantItem label="Save">
                      <FloatingButton 
                        text="Save"
                        onClick={() => console.log('Save')}
                        isDemo={true}
                      />
                    </VariantItem>
                    <VariantItem label="Submit">
                      <FloatingButton 
                        text="Submit"
                        onClick={() => console.log('Submit')}
                        isDemo={true}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>

                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">組合按鈕 (position: left / middle / right)</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-center">
                      <div className="flex">
                        <FloatingButton 
                          text="Save"
                          position="left"
                          onClick={() => console.log('Save')}
                          isDemo={true}
                        />
                        <FloatingButton 
                          text="Submit"
                          position="right"
                          onClick={() => console.log('Submit')}
                          isDemo={true}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex">
                        <FloatingButton 
                          text="Cancel"
                          position="left"
                          onClick={() => console.log('Cancel')}
                          isDemo={true}
                        />
                        <FloatingButton 
                          text="Save"
                          position="middle"
                          onClick={() => console.log('Save')}
                          isDemo={true}
                        />
                        <FloatingButton 
                          text="Submit"
                          position="right"
                          onClick={() => console.log('Submit')}
                          isDemo={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentCard>

            {/* Button Group */}
            <ComponentCard 
              title="ButtonGroup" 
              description="按鈕組合，包含 Add、Copy、Delete 操作"
            >
              <div className="flex justify-center p-4">
                <ButtonGroup 
                  onAdd={() => console.log('Add')}
                  onCopy={() => console.log('Copy')}
                  onDelete={() => console.log('Delete')}
                />
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* INPUTS & FORMS SECTION */}
        <section id="inputs">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Inputs & Forms 輸入與表單組件
          </h2>
          
          <div className="space-y-6">
            {/* Input */}
            <ComponentCard 
              title="Input" 
              description="文字輸入框，支援 placeholder 和不同狀態"
            >
              <div className="space-y-6 max-w-md">
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">Default State</p>
                  <Input 
                    placeholder="Enter text here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">With Value</p>
                  <Input 
                    placeholder="Enter text here"
                    value="Sample text content"
                    onChange={(e) => {}}
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">With Suffix Icon (Check)</p>
                  <Input 
                    placeholder="Text"
                    value="Text"
                    onChange={(e) => {}}
                    suffixIcon={
                      <i className="fa-solid fa-check text-[#c6c6c6] text-[12px]" />
                    }
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">With Suffix Icon (Custom)</p>
                  <Input 
                    placeholder="Enter text"
                    value=""
                    onChange={(e) => {}}
                    suffixIcon={
                      <i className="fa-solid fa-search text-[#c6c6c6] text-[12px]" />
                    }
                  />
                </div>
              </div>
            </ComponentCard>

            {/* Input with Addons */}
            <ComponentCard 
              title="Input with Addons" 
              description="帶有左側 Checkbox 或右側 Calendar Icon 的輸入框變體，點擊 Calendar Icon 或 Input 欄位都可開啟日期選擇器"
            >
              <div className="space-y-6 max-w-md">
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">Left Checkbox + Right Calendar (點擊 Input 或 Icon 開啟日期選擇器)</p>
                  <InputWithAddon 
                    placeholder="Select date"
                    leftAddon="checkbox"
                    rightAddon="calendar"
                    onCheckboxChange={(checked) => console.log('Checkbox:', checked)}
                    onDateChange={(date) => console.log('Date selected:', date)}
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">Right Calendar Only (點擊 Input 或 Icon 開啟日期選擇器)</p>
                  <InputWithAddon 
                    placeholder="Select date"
                    rightAddon="calendar"
                    onDateChange={(date) => console.log('Date selected:', date)}
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">Left Checkbox Only</p>
                  <InputWithAddon 
                    placeholder="Enter text"
                    leftAddon="checkbox"
                    onCheckboxChange={(checked) => console.log('Checkbox:', checked)}
                  />
                </div>
              </div>
            </ComponentCard>

            {/* Textarea */}
            <ComponentCard 
              title="Textarea" 
              description="多行文字輸入框，支援可調整大小與固定大小兩種模式"
            >
              <div className="space-y-6 max-w-md">
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">Resizable (Default - 可垂直調整大小)</p>
                  <Textarea 
                    placeholder="Input text here...."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    rows={4}
                    resizable={true}
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">Fixed Size (不可調整大小)</p>
                  <Textarea 
                    placeholder="Input text here...."
                    value="This textarea has a fixed size and cannot be resized by the user."
                    onChange={(e) => {}}
                    rows={3}
                    resizable={false}
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">With Custom Rows (6 rows)</p>
                  <Textarea 
                    placeholder="Enter longer text here...."
                    value=""
                    onChange={(e) => {}}
                    rows={6}
                  />
                </div>
                <div>
                  <p className="text-[13px] text-[#666666] mb-2">Disabled State</p>
                  <Textarea 
                    placeholder="Input text here...."
                    value="This textarea is disabled"
                    onChange={(e) => {}}
                    rows={4}
                    disabled={true}
                  />
                </div>
              </div>
            </ComponentCard>

            {/* Select */}
            <ComponentCard 
              title="Select" 
              description="下拉選擇框，支援一般樣式與 Auto-Complete 搜索樣式"
            >
              <div className="space-y-8 max-w-md">
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">Default Style</h4>
                  <Select 
                    options={selectOptions}
                    value={selectValue}
                    onChange={(val) => setSelectValue(val)}
                    placeholder="Select an option"
                  />
                </div>
                
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">Auto-Complete Style (Searchable)</h4>
                  <Select 
                    options={[
                      { value: "ms_dist", label: "M&S DISTRIBUTION INC" },
                      { value: "paradigm", label: "PARADIGM HEALTH & WELLNESS, INC" },
                      { value: "gofreight", label: "GoFreight Inc." },
                      { value: "apple", label: "Apple Inc." },
                      { value: "google", label: "Google LLC" },
                    ]}
                    value={autoCompleteValue}
                    onChange={(val) => setAutoCompleteValue(val)}
                    placeholder="Search or Select..."
                    isAutoComplete={true}
                  />
                </div>
              </div>
            </ComponentCard>

            {/* FormGroup */}
            <ComponentCard 
              title="FormGroup" 
              description="表單組合元件，包含 label 和輸入框"
            >
              <div className="space-y-6 max-w-md">
                <FormGroup 
                  label="Customer Name"
                  type="input"
                  placeholder="Enter customer name"
                  value=""
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormGroup 
                  label="Country"
                  type="select"
                  options={selectOptions}
                  value={formGroupValue}
                  onChange={(val) => setFormGroupValue(val)}
                />
                <FormGroup 
                  label="Shipper (Auto)"
                  type="select"
                  options={[
                    { value: "ms_dist", label: "M&S DISTRIBUTION INC" },
                    { value: "paradigm", label: "PARADIGM HEALTH & WELLNESS, INC" },
                    { value: "gofreight", label: "GoFreight Inc." },
                  ]}
                  value={formGroupAutoValue}
                  onChange={(val) => setFormGroupAutoValue(val)}
                  placeholder="Search Shipper..."
                  isAutoComplete={true}
                />
                <FormGroup 
                  label="Express B/L"
                  type="radio"
                  radioOptions={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  radioName="expressBl"
                  value={formGroupRadioValue}
                  onChange={(val) => setFormGroupRadioValue(val)}
                  labelWidth="max-w-[140px]"
                />
                <FormGroup 
                  label="Label"
                  type="checkbox"
                  checkboxOptions={[
                    { value: "checkbox1", label: "Label", checked: formGroupCheckboxValues.checkbox1 },
                    { value: "checkbox2", label: "Label", checked: formGroupCheckboxValues.checkbox2 },
                    { value: "checkbox3", label: "Label", checked: formGroupCheckboxValues.checkbox3 },
                    { value: "checkbox4", label: "Label", checked: formGroupCheckboxValues.checkbox4 },
                  ]}
                  onCheckboxChange={(value, checked) => {
                    setFormGroupCheckboxValues(prev => ({ ...prev, [value]: checked }));
                  }}
                />
              </div>
            </ComponentCard>

            {/* FormGroup with Right Buttons */}
            <ComponentCard 
              title="FormGroup with Right Buttons" 
              description="表單組合元件，右側帶有 Solid Button（編輯、複製等操作按鈕）"
            >
              <div className="space-y-6 max-w-md">
                <FormGroup 
                  label="Shipping Agent"
                  type="input"
                  placeholder=""
                  value={formGroupWithButtonValue}
                  onChange={(val) => setFormGroupWithButtonValue(val)}
                  labelWidth="max-w-[140px]"
                  rightButtons={[
                    {
                      icon: "fas fa-pencil-alt",
                      onClick: () => alert('Edit clicked'),
                      variant: "solid"
                    }
                  ]}
                />
                <FormGroup 
                  label="Consignee"
                  type="select"
                  options={[
                    { value: "", label: "Select..." },
                    { value: "company1", label: "Company 1" },
                    { value: "company2", label: "Company 2" },
                  ]}
                  value=""
                  onChange={(val) => console.log(val)}
                  labelWidth="max-w-[140px]"
                  rightButtons={[
                    {
                      icon: "fas fa-pencil-alt",
                      onClick: () => alert('Edit clicked'),
                      variant: "solid"
                    },
                    {
                      icon: "fas fa-external-link-alt",
                      onClick: () => alert('Link clicked'),
                      variant: "solid"
                    }
                  ]}
                />
                <FormGroup 
                  label="OP"
                  type="input"
                  placeholder=""
                  value="GoFreight (hardcore)"
                  onChange={(val) => console.log(val)}
                  labelWidth="max-w-[140px]"
                  rightButtons={[
                    {
                      icon: "fas fa-share-alt",
                      onClick: () => alert('Share clicked'),
                      variant: "solid"
                    }
                  ]}
                />
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* CHECKBOX & RADIO SECTION */}
        <section id="checkbox-radio">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Checkbox & Radio 勾選與單選組件
          </h2>
          
          <div className="space-y-6">
            {/* Checkbox */}
            <ComponentCard 
              title="Checkbox" 
              description="獨立的勾選框組件，可單獨使用或組合使用，支援 checked、disabled 狀態"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">基本狀態</h4>
                  <VariantGrid>
                    <VariantItem label="Unchecked">
                      <Checkbox 
                        label="Option 1"
                        checked={standaloneCheckbox1}
                        onChange={(checked) => setStandaloneCheckbox1(checked)}
                      />
                    </VariantItem>
                    <VariantItem label="Checked">
                      <Checkbox 
                        label="Option 2"
                        checked={standaloneCheckbox2}
                        onChange={(checked) => setStandaloneCheckbox2(checked)}
                      />
                    </VariantItem>
                    <VariantItem label="Disabled (Unchecked)">
                      <Checkbox 
                        label="Disabled Option"
                        checked={false}
                        onChange={() => {}}
                        disabled={true}
                      />
                    </VariantItem>
                    <VariantItem label="Disabled (Checked)">
                      <Checkbox 
                        label="Disabled Option"
                        checked={true}
                        onChange={() => {}}
                        disabled={true}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>

                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">組合使用範例</h4>
                  <div className="p-4 bg-[#fafafa] rounded border border-[#eeeeee]">
                    <div className="flex gap-6">
                      <Checkbox 
                        label="Accept Terms"
                        checked={standaloneCheckbox1}
                        onChange={(checked) => setStandaloneCheckbox1(checked)}
                      />
                      <Checkbox 
                        label="Subscribe to Newsletter"
                        checked={standaloneCheckbox2}
                        onChange={(checked) => setStandaloneCheckbox2(checked)}
                      />
                      <Checkbox 
                        label="Enable Notifications"
                        checked={standaloneCheckbox3}
                        onChange={(checked) => setStandaloneCheckbox3(checked)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ComponentCard>

            {/* RadioButton */}
            <ComponentCard 
              title="RadioButton" 
              description="獨立的單選按鈕組件，通常組合使用以提供多個互斥選項，支援 checked、disabled 狀態"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">基本狀態</h4>
                  <VariantGrid>
                    <VariantItem label="Unchecked">
                      <RadioButton 
                        label="Option A"
                        checked={false}
                        onClick={() => {}}
                      />
                    </VariantItem>
                    <VariantItem label="Checked">
                      <RadioButton 
                        label="Option B"
                        checked={true}
                        onClick={() => {}}
                      />
                    </VariantItem>
                    <VariantItem label="Disabled (Unchecked)">
                      <RadioButton 
                        label="Disabled Option"
                        checked={false}
                        onClick={() => {}}
                        disabled={true}
                      />
                    </VariantItem>
                    <VariantItem label="Disabled (Checked)">
                      <RadioButton 
                        label="Disabled Option"
                        checked={true}
                        onClick={() => {}}
                        disabled={true}
                      />
                    </VariantItem>
                  </VariantGrid>
                </div>

                <div>
                  <h4 className="text-[14px] text-[#666666] mb-4">組合使用範例（Radio Group）</h4>
                  <div className="p-4 bg-[#fafafa] rounded border border-[#eeeeee]">
                    <div className="space-y-3">
                      <p className="text-[13px] text-[#666666] mb-2">Select shipping method:</p>
                      <div className="flex gap-5">
                        <RadioButton 
                          label="Standard Shipping"
                          checked={standaloneRadioValue === "option1"}
                          onClick={() => setStandaloneRadioValue("option1")}
                        />
                        <RadioButton 
                          label="Express Shipping"
                          checked={standaloneRadioValue === "option2"}
                          onClick={() => setStandaloneRadioValue("option2")}
                        />
                        <RadioButton 
                          label="Overnight Shipping"
                          checked={standaloneRadioValue === "option3"}
                          onClick={() => setStandaloneRadioValue("option3")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* TABS SECTION */}
        <section id="tabs">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Tabs 標籤頁組件
          </h2>
          
          <ComponentCard 
            title="Tab" 
            description="標籤頁切換組件，支援錯誤狀態和設定按鈕"
          >
            <div className="space-y-8">
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">基本樣式</h4>
                <Tab 
                  tabs={tabItems}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
              </div>
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">帶錯誤標記</h4>
                <Tab 
                  tabs={[
                    { id: "tab1", label: "General" },
                    { id: "tab2", label: "Validation", hasError: true },
                    { id: "tab3", label: "Security" },
                  ]}
                  activeTab="tab1"
                  onChange={() => {}}
                />
              </div>
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">帶設定按鈕</h4>
                <Tab 
                  tabs={[
                    { id: "tab1", label: "Overview", hasSettings: true },
                    { id: "tab2", label: "Configuration", hasSettings: true },
                  ]}
                  activeTab="tab1"
                  onChange={() => {}}
                  onSettingsClick={(id) => alert(`Settings for ${id}`)}
                />
              </div>
            </div>
          </ComponentCard>
        </section>

        {/* PORTLETS SECTION */}
        <section id="portlets">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Portlets 容器組件
          </h2>
          
          <ComponentCard 
            title="PortletContainer" 
            description="內容容器，支援標題、狀態標籤、折疊功能和 HBL 變體"
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">Default (MBL) Variant</h4>
                <PortletContainer
                  title="MBL/ Information"
                  statusLabel="Not Submitted"
                  showSubtitle={false}
                >
                  <div className="p-6 bg-white">
                    <p className="text-[14px] text-[#666666]">Container content goes here</p>
                  </div>
                </PortletContainer>
              </div>
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">HBL Variant (Yellow Border)</h4>
                <PortletContainer
                  title="HBL  2BM2CP25110004"
                  statusLabel="Draft"
                  variant="hbl"
                  showSubtitle={false}
                  onRemove={() => alert('Remove clicked')}
                >
                  <div className="p-6 bg-white">
                    <p className="text-[14px] text-[#666666]">HBL container content</p>
                  </div>
                </PortletContainer>
              </div>
            </div>
          </ComponentCard>
        </section>

        {/* TABLES SECTION */}
        <section id="tables">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Tables 表格組件
          </h2>
          
          <div className="space-y-6">
            <ComponentCard 
              title="TableHeader & TableHeaderCell" 
              description="表格標題行"
            >
              <div className="overflow-x-auto">
                <TableHeader 
                  labels={[
                    "File No.",
                    "Type",
                    "Customer",
                    "Status",
                    "ETD",
                    "ETA"
                  ]}
                  variant="light"
                />
              </div>
            </ComponentCard>

            <ComponentCard 
              title="TableRow & TableRowCell" 
              description="表格數據行，支援 odd/even 樣式"
            >
              <div className="space-y-4 overflow-x-auto">
                <TableRow 
                  data={[
                    "OIM-25110001",
                    "Ocean Import",
                    "ABC Company",
                    "In Progress",
                    "2025-11-20",
                    "2025-12-05"
                  ]}
                  variant="odd"
                />
                <TableRow 
                  data={[
                    "OIM-25110002",
                    "Ocean Import",
                    "XYZ Corp",
                    "Completed",
                    "2025-11-18",
                    "2025-12-01"
                  ]}
                  variant="even"
                />
              </div>
            </ComponentCard>

            <ComponentCard 
              title="TableHeaderCellWithDropdown" 
              description="表格標題帶下拉選單，用於單位切換等場景"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-2">With Unit Selector</h4>
                  <div className="flex items-stretch border border-[#dddddd]">
                    <TableHeaderCellWithDropdown
                      text="VGM"
                      options={[
                        { value: "KGS", label: "KGS" },
                        { value: "LBS", label: "LBS" },
                        { value: "TON", label: "TON" }
                      ]}
                      value="KGS"
                      onChange={(val) => console.log('Selected:', val)}
                      variant="light"
                      width="w-[120px]"
                    />
                    <TableHeaderCellWithDropdown
                      text="Gross Weight"
                      options={[
                        { value: "KGS", label: "KGS" },
                        { value: "LBS", label: "LBS" }
                      ]}
                      value="LBS"
                      onChange={(val) => console.log('Selected:', val)}
                      variant="light"
                      width="w-[140px]"
                    />
                    <TableHeaderCellWithDropdown
                      text="Measurement"
                      options={[
                        { value: "CBM", label: "CBM" },
                        { value: "CFT", label: "CFT" }
                      ]}
                      value="CBM"
                      onChange={(val) => console.log('Selected:', val)}
                      variant="light"
                      width="w-[140px]"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[14px] text-[#666666] mb-2">Dark Variant</h4>
                  <div className="flex items-stretch border border-[#dddddd]">
                    <TableHeaderCellWithDropdown
                      text="Net Weight"
                      options={[
                        { value: "KGS", label: "KGS" },
                        { value: "LBS", label: "LBS" }
                      ]}
                      value="KGS"
                      onChange={(val) => console.log('Selected:', val)}
                      variant="dark"
                      width="w-[140px]"
                    />
                  </div>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Complete Table Example" 
              description="完整表格範例"
            >
              <div className="overflow-x-auto border border-[#dddddd] rounded">
                <TableHeader 
                  labels={["File No.", "Type", "Customer", "Status"]}
                  variant="light"
                />
                <TableRow 
                  data={["OIM-25110001", "Ocean Import", "ABC Company", "Active"]}
                  variant="odd"
                />
                <TableRow 
                  data={["OIM-25110002", "Ocean Export", "XYZ Corp", "Draft"]}
                  variant="even"
                />
                <TableRow 
                  data={["OIM-25110003", "Air Import", "DEF Inc", "Completed"]}
                  variant="odd"
                />
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* NAVIGATION SECTION */}
        <section id="navigation">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Navigation 導航組件
          </h2>
          
          <div className="space-y-6">
            {/* Breadcrumb */}
            <ComponentCard 
              title="Breadcrumb" 
              description="麵包屑導航，顯示當前頁面路徑"
            >
              <div className="space-y-4">
                <div>
                   <h4 className="text-[14px] text-[#666666] mb-2">Basic Example</h4>
                   <div className="bg-[#f1f3fa] ml-0 p-[0px] m-[0px]"> {/* Simulate app background and offset margin */}
                      <Breadcrumb currentPage="ocean-import-list" />
                   </div>
                </div>
              </div>
            </ComponentCard>

            {/* Pagination */}
            <ComponentCard 
              title="Pagination" 
              description="分頁組件，支援頁碼切換和每頁筆數設定"
            >
              <div className="space-y-4">
                <Pagination 
                   currentPage={1}
                   totalPages={5}
                   totalRecords={250}
                   recordsPerPage={50}
                />
              </div>
            </ComponentCard>

            {/* Sidebar Item */}
            <ComponentCard 
              title="Sidebar Item" 
              description="側邊欄導航項目，支援展開/收合與子選單"
            >
              <div className="space-y-4 bg-[#364150] p-4 rounded w-[300px]">
                <SidebarItem 
                  icon={<i className="fas fa-home text-[16px]"></i>}
                  label="Dashboard"
                  isExpanded={true}
                  isActive={true}
                />
                <SidebarItem 
                  icon={<i className="fas fa-cog text-[16px]"></i>}
                  label="Settings"
                  isExpanded={true}
                  isActive={false}
                />
                <SidebarItem 
                  icon={<i className="fas fa-truck text-[16px]"></i>}
                  label="Ocean Import"
                  isExpanded={true}
                  isActive={false}
                  hasSubmenu={true}
                />
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* TOOLTIPS SECTION */}
        <section id="tooltips">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Tooltips 提示組件
          </h2>
          
          <ComponentCard 
            title="Tooltip" 
            description="提示訊息框，滑鼠懸停時顯示"
          >
            <div className="flex gap-12 pt-8 pb-4 px-4 items-center justify-center">
               <div className="flex flex-col items-center gap-2">
                 <p className="text-[12px] text-[#999999] mb-2">Static Preview</p>
                 {/* Forced Visible for Demo */}
                 <Tooltip content="Tooltips" visible={true}>
                    <div className="w-[100px] h-[32px] bg-[#e0e0e0] rounded flex items-center justify-center text-[#666666] text-[12px]">
                      Target
                    </div>
                 </Tooltip>
               </div>

               <div className="flex flex-col items-center gap-2">
                 <p className="text-[12px] text-[#999999] mb-2">Interactive (Hover Me)</p>
                 <Tooltip content="Information">
                    <SolidButton 
                      icon="fas fa-info-circle" 
                      text="Hover Info" 
                      size="medium"
                      variant="blue"
                      onClick={() => {}}
                    />
                 </Tooltip>
               </div>

               <div className="flex flex-col items-center gap-2">
                 <p className="text-[12px] text-[#999999] mb-2">On Icon</p>
                 <Tooltip content="Delete Item">
                    <OutlineButton 
                      icon="fas fa-trash-alt" 
                      size="medium"
                      onClick={() => {}}
                    />
                 </Tooltip>
               </div>
            </div>
          </ComponentCard>
        </section>

        {/* TOAST ALERTS SECTION */}
        <section id="toast-alerts">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Toast Alerts 通知提示
          </h2>
          
          <ComponentCard 
            title="Toast Alert Variants" 
            description="通知提示訊息，包含成功、錯誤與資訊三種狀態"
          >
            <div className="space-y-4 max-w-[500px]">
              <div className="space-y-2">
                <p className="text-[12px] text-[#999999]">Success</p>
                <ToastAlert 
                  variant="success" 
                  message="Data saved successfully." 
                  onClose={() => console.log('Closed success alert')}
                />
              </div>

              <div className="space-y-2">
                <p className="text-[12px] text-[#999999]">Error</p>
                <ToastAlert 
                  variant="error" 
                  message="Error occurred while processing request." 
                  onClose={() => console.log('Closed error alert')}
                />
              </div>

              <div className="space-y-2">
                <p className="text-[12px] text-[#999999]">Info</p>
                <ToastAlert 
                  variant="info" 
                  message="System will be under maintenance at 12:00 PM." 
                  onClose={() => console.log('Closed info alert')}
                />
              </div>
            </div>
          </ComponentCard>
        </section>

        {/* MODALS SECTION */}
        <section id="modals">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Modals 彈窗組件
          </h2>
          
          <ComponentCard 
            title="Modal Variants" 
            description="支援四種標準寬度：Small (300px), Medium (600px), Large (900px), Extra Large (80%)"
          >
            <div className="flex flex-wrap gap-4 mb-8 hidden">
              <SolidButton 
                text="Open Small Modal" 
                onClick={() => setActiveModal('small')}
                variant="teal"
              />
              <SolidButton 
                text="Open Medium Modal" 
                onClick={() => setActiveModal('medium')}
                variant="teal"
              />
              <SolidButton 
                text="Open Large Modal" 
                onClick={() => setActiveModal('large')}
                variant="teal"
              />
              <SolidButton 
                text="Open Extra Large Modal" 
                onClick={() => setActiveModal('xl')}
                variant="teal"
              />
            </div>

            {/* Static Modal Displays */}
            <div className="space-y-8">
              {/* Small Modal Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">Small Modal (300px)</h4>
                <div className="bg-white flex flex-col shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] w-[300px]">
                  {/* Header */}
                  <div className="bg-white relative shrink-0 w-full border-b border-[#e4e4e4]">
                    <div className="flex flex-row justify-between size-full">
                      <div className="box-border content-stretch flex items-center justify-between p-[15px] relative w-full">
                        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Small Modal
                        </p>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[20px] h-[20px]">
                          <i className="fas fa-times text-[#c6c6c6] text-[14px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-[15px] items-start p-[15px] relative w-full">
                      <div className="w-full h-[100px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                        Slot Content (Filled Container)
                      </div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="bg-white relative shrink-0 w-full border-t border-[#e4e4e4]">
                    <div className="flex flex-row items-center justify-end size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[15px] relative w-full">
                        <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => {}} />
                        <SolidButton variant="teal" text="Confirm" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium Modal Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">Medium Modal (600px)</h4>
                <div className="bg-white flex flex-col shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] w-[600px]">
                  {/* Header */}
                  <div className="bg-white relative shrink-0 w-full border-b border-[#e4e4e4]">
                    <div className="flex flex-row justify-between size-full">
                      <div className="box-border content-stretch flex items-center justify-between p-[15px] relative w-full">
                        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Medium Modal
                        </p>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[20px] h-[20px]">
                          <i className="fas fa-times text-[#c6c6c6] text-[14px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-[15px] items-start p-[15px] relative w-full">
                      <div className="w-full h-[150px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                        Slot Content (Filled Container)
                      </div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="bg-white relative shrink-0 w-full border-t border-[#e4e4e4]">
                    <div className="flex flex-row items-center justify-end size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[15px] relative w-full">
                        <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => {}} />
                        <SolidButton variant="teal" text="Confirm" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Large Modal Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">Large Modal (900px)</h4>
                <div className="bg-white flex flex-col shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] w-[900px]">
                  {/* Header */}
                  <div className="bg-white relative shrink-0 w-full border-b border-[#e4e4e4]">
                    <div className="flex flex-row justify-between size-full">
                      <div className="box-border content-stretch flex items-center justify-between p-[15px] relative w-full">
                        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Large Modal
                        </p>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[20px] h-[20px]">
                          <i className="fas fa-times text-[#c6c6c6] text-[14px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-[15px] items-start p-[15px] relative w-full">
                      <div className="w-full h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                        Slot Content (Filled Container)
                      </div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="bg-white relative shrink-0 w-full border-t border-[#e4e4e4]">
                    <div className="flex flex-row items-center justify-end size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[15px] relative w-full">
                        <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => {}} />
                        <SolidButton variant="teal" text="Confirm" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Large Modal Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">Extra Large Modal (80% viewport)</h4>
                <div className="bg-white flex flex-col shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] w-[80%]">
                  {/* Header */}
                  <div className="bg-white relative shrink-0 w-full border-b border-[#e4e4e4]">
                    <div className="flex flex-row justify-between size-full">
                      <div className="box-border content-stretch flex items-center justify-between p-[15px] relative w-full">
                        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Extra Large Modal
                        </p>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[20px] h-[20px]">
                          <i className="fas fa-times text-[#c6c6c6] text-[14px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-[15px] items-start p-[15px] relative w-full">
                      <div className="flex gap-[15px] w-full">
                        <div className="flex-1 h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                          ✦ Slot 1
                        </div>
                        <div className="flex-1 h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                          ✦ Slot 2
                        </div>
                        <div className="flex-1 h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                          ✦ Slot 3
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="bg-white relative shrink-0 w-full border-t border-[#e4e4e4]">
                    <div className="flex flex-row items-center justify-end size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[15px] relative w-full">
                        <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => {}} />
                        <SolidButton variant="teal" text="Confirm" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Modals (Hidden by default, opened via buttons) */}
            <Modal
              isOpen={activeModal === 'small'}
              onClose={() => setActiveModal(null)}
              title="Small Modal"
              size="small"
              footer={
                <>
                  <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => setActiveModal(null)} />
                  <SolidButton variant="teal" text="Confirm" onClick={() => setActiveModal(null)} />
                </>
              }
            >
              <div className="w-full h-[100px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                Slot Content (Filled Container)
              </div>
            </Modal>

            <Modal
              isOpen={activeModal === 'medium'}
              onClose={() => setActiveModal(null)}
              title="Medium Modal"
              size="medium"
              footer={
                <>
                  <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => setActiveModal(null)} />
                  <SolidButton variant="teal" text="Confirm" onClick={() => setActiveModal(null)} />
                </>
              }
            >
              <div className="w-full h-[150px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                Slot Content (Filled Container)
              </div>
            </Modal>

            <Modal
              isOpen={activeModal === 'large'}
              onClose={() => setActiveModal(null)}
              title="Large Modal"
              size="large"
              footer={
                <>
                  <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => setActiveModal(null)} />
                  <SolidButton variant="teal" text="Confirm" onClick={() => setActiveModal(null)} />
                </>
              }
            >
              <div className="w-full h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                Slot Content (Filled Container)
              </div>
            </Modal>

            <Modal
              isOpen={activeModal === 'xl'}
              onClose={() => setActiveModal(null)}
              title="Extra Large Modal"
              size="xl"
              footer={
                <>
                  <SolidButton customBgColor="#E5E5E5" text="Cancel" onClick={() => setActiveModal(null)} />
                  <SolidButton variant="teal" text="Confirm" onClick={() => setActiveModal(null)} />
                </>
              }
            >
              <div className="flex gap-[15px] w-full">
                <div className="flex-1 h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                  ✦ Slot 1
                </div>
                <div className="flex-1 h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                  ✦ Slot 2
                </div>
                <div className="flex-1 h-[200px] flex items-center justify-center bg-[#f9f9f9] text-[#666]">
                  ✦ Slot 3
                </div>
              </div>
            </Modal>
          </ComponentCard>
        </section>

        {/* POPOVERS SECTION */}
        <section id="popovers">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Popovers 彈出提示組件
          </h2>
          
          <ComponentCard 
            title="Popover (Promotion)" 
            description="彈出式提示訊息框（Promotion Popover），支援自訂訊息、按鈕、Checkbox 及背景色，提供兩種預設尺寸"
          >
            <div className="space-y-8">
              {/* Size Variants */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">尺寸變體 (Size Variants)</h4>
                <p className="text-[12px] text-[#999999] mb-4">尺寸分為兩種最大尺寸，分別是 276px, 375px。在內容尚未觸及最大寬度時，寬度會根據內容而定。</p>
                <div className="flex flex-col gap-8 p-8 bg-[#fafafa] rounded items-center">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Small (276px)</p>
                    <div className="content-stretch flex flex-col isolate items-center relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] max-w-[276px]">
                      <div className="flex items-center justify-center relative shrink-0 z-[2]">
                        <div className="flex-none scale-y-[-100%]">
                          <div className="h-[5px] relative w-[10px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                              <path d="M5 5L1.98813e-08 2.5826e-07L10 1.13249e-06L5 5Z" fill="#26a69a" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#26a69a] content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[276px] px-[14px] py-[8px] relative rounded-[3px] shrink-0 z-[1]">
                        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[17px]">Put promote content here, Put promote content here, Put promote content here, Put promote content here</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                          <div 
                            className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer"
                            onClick={() => setPopoverCheckboxChecked(!popoverCheckboxChecked)}
                          >
                            <div className="relative shrink-0 size-[15px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <rect fill="white" height="14" width="14" x="0.5" y="0.5" />
                                <rect height="14" stroke="#C6C6C6" width="14" x="0.5" y="0.5" />
                                {popoverCheckboxChecked && <path d="M5.66772 12.4836L1.87186 8.68771L3.09755 7.46202L5.6325 9.99697L12.0945 3.53495L13.3554 4.79587L5.66772 12.4836Z" fill="#666666" />}
                              </svg>
                            </div>
                            <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Never show this again
                            </p>
                          </div>
                          <OutlineButton text="Got It" size="medium" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Medium (375px)</p>
                    <div className="content-stretch flex flex-col isolate items-center relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] max-w-[375px]">
                      <div className="flex items-center justify-center relative shrink-0 z-[2]">
                        <div className="flex-none scale-y-[-100%]">
                          <div className="h-[5px] relative w-[10px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                              <path d="M5 5L1.98813e-08 2.5826e-07L10 1.13249e-06L5 5Z" fill="#26a69a" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#26a69a] content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[375px] px-[14px] py-[8px] relative rounded-[3px] shrink-0 z-[1]">
                        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[17px]">Put promote content here, Put promote content here, Put promote content here, Put promote content here</p>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                          <div 
                            className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer"
                            onClick={() => setPopoverCheckboxChecked(!popoverCheckboxChecked)}
                          >
                            <div className="relative shrink-0 size-[15px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <rect fill="white" height="14" width="14" x="0.5" y="0.5" />
                                <rect height="14" stroke="#C6C6C6" width="14" x="0.5" y="0.5" />
                                {popoverCheckboxChecked && <path d="M5.66772 12.4836L1.87186 8.68771L3.09755 7.46202L5.6325 9.99697L12.0945 3.53495L13.3554 4.79587L5.66772 12.4836Z" fill="#666666" />}
                              </svg>
                            </div>
                            <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Never show this again
                            </p>
                          </div>
                          <OutlineButton text="Got It" size="medium" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Display - Default Teal */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">Default Variant (Teal Background)</h4>
                <div className="flex justify-center p-8 bg-[#fafafa] rounded">
                  <div className="content-stretch flex flex-col isolate items-center relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)]">
                    {/* Triangle pointer */}
                    <div className="flex items-center justify-center relative shrink-0 z-[2]">
                      <div className="flex-none scale-y-[-100%]">
                        <div className="h-[5px] relative w-[10px]" data-name="Triangle">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                            <g id="Triangle">
                              <path d="M5 5L1.98813e-08 2.5826e-07L10 1.13249e-06L5 5Z" fill="#26a69a" id="White" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Popover Body */}
                    <div 
                      className="bg-[#26a69a] content-stretch flex flex-col gap-[10px] items-start justify-center px-[14px] py-[8px] relative rounded-[3px] shrink-0 z-[1]"
                      style={{ maxWidth: "276px" }}
                      data-name="Popover Body"
                    >
                      {/* Message */}
                      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[17px]">You have 3 overdue containers that might be charged demurrage fees, please pay attention and click it to see detail.</p>
                      </div>

                      {/* Action Group */}
                      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Action Group">
                        {/* Checkbox */}
                        <div 
                          className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" 
                          data-name="Checkbox"
                          onClick={() => setPopoverCheckboxChecked(!popoverCheckboxChecked)}
                        >
                          <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(198, 198, 198, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <g id="checkbox-input">
                                  <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
                                  <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
                                  {popoverCheckboxChecked && <path d="M5.66772 12.4836L1.87186 8.68771L3.09755 7.46202L5.6325 9.99697L12.0945 3.53495L13.3554 4.79587L5.66772 12.4836Z" fill="#666666" />}
                                </g>
                              </svg>
                            </div>
                          </div>
                          <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Never show this again
                          </p>
                        </div>

                        {/* Button Group */}
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Group">
                          <SolidButton 
                            text="Hide This Column"
                            size="medium"
                            variant="teal"
                          />
                          <OutlineButton 
                            text="Got It"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </ComponentCard>

          <ComponentCard 
            title="PopoverStandard" 
            description="標準彈出提示框，支援有標題和無標題兩種樣式，提供三種預設尺寸"
          >
            <div className="space-y-8">
              {/* Size Variants */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">尺寸變體 (Size Variants)</h4>
                <div className="flex flex-col gap-8 p-8 bg-[#fafafa] rounded">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Small (276px)</p>
                    <PopoverStandard 
                      content="This popover's max width is 276px, before the content reach the maximum width, the content will be hug content"
                      hasTitle={true}
                      title="Popover Title"
                      size="small"
                      position="bottom"
                    />
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Medium (375px)</p>
                    <PopoverStandard 
                      content="This popover's max width is 375px, before the content reach the maximum width, the content will be hug content"
                      hasTitle={true}
                      title="Popover Title"
                      size="medium"
                      position="bottom"
                    />
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Large (500px)</p>
                    <PopoverStandard 
                      content="This popover's max width is 500px, before the content reach the maximum width, the content will be hug content"
                      hasTitle={true}
                      title="Popover Title"
                      size="large"
                      position="bottom"
                    />
                  </div>
                </div>
              </div>

              {/* Without Title */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">無標題樣式 (Without Title)</h4>
                <div className="flex justify-center p-8 bg-[#fafafa] rounded">
                  <PopoverStandard 
                    content="Popover Content"
                    hasTitle={false}
                    size="small"
                    position="bottom"
                  />
                </div>
              </div>

              {/* With Title */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">有標題樣式 (With Title)</h4>
                <div className="flex justify-center p-8 bg-[#fafafa] rounded">
                  <PopoverStandard 
                    content="Popover Content"
                    hasTitle={true}
                    title="Popover Title"
                    size="small"
                    position="bottom"
                  />
                </div>
              </div>

              {/* Different Positions */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">指標位置變化 (Pointer Positions)</h4>
                <div className="grid grid-cols-2 gap-8 p-8 bg-[#fafafa] rounded">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Top</p>
                    <PopoverStandard 
                      content="This is a popover with top pointer"
                      hasTitle={true}
                      title="Top Pointer"
                      position="top"
                      maxWidth={200}
                    />
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Bottom</p>
                    <PopoverStandard 
                      content="This is a popover with bottom pointer"
                      hasTitle={true}
                      title="Bottom Pointer"
                      position="bottom"
                      maxWidth={200}
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <p className="text-[12px] text-[#999999]">Left</p>
                    <PopoverStandard 
                      content="Left pointer"
                      hasTitle={false}
                      position="left"
                      maxWidth={150}
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <PopoverStandard 
                      content="Right pointer"
                      hasTitle={false}
                      position="right"
                      maxWidth={150}
                    />
                    <p className="text-[12px] text-[#999999]">Right</p>
                  </div>
                </div>
              </div>

              {/* Props Description */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-[#e0e0e0] hidden">
                <h4 className="text-[14px] text-[#666666] mb-3">Component Props</h4>
                <div className="space-y-2 text-[13px] text-[#666666]">
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">content</code>: 內容文字（必填）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">hasTitle</code>: 是否顯示標題（預設：false）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">title</code>: 標題文字（預設："Popover Title"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">size</code>: 尺寸大小 'small' | 'medium' | 'large'（預設：'small' - 276px / 375px / 500px）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">maxWidth</code>: 自訂最大寬度 px（若設置則覆蓋 size）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">position</code>: 指標位置 'top' | 'bottom' | 'left' | 'right'（預設：'bottom'）</p>
                </div>
              </div>
            </div>
          </ComponentCard>
        </section>

        {/* CARD PANEL SECTION */}
        <section id="card-panel">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Card Panel HBL 卡片面板
          </h2>
          
          <ComponentCard 
            title="CardPanel" 
            description="HBL 卡片控制面板，提供新增 HB/L、排序選擇、排序方向切換及卡片設定功能"
          >
            <div className="space-y-8">
              {/* Basic Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">基本展示</h4>
                <div className="flex justify-center p-8 bg-[#fafafa] rounded">
                  <div className="w-[200px]">
                    <CardPanel 
                      onAddClick={() => console.log('Add HB/L clicked')}
                      onSortChange={(value) => console.log('Sort changed:', value)}
                      onOrderChange={(order) => console.log('Order changed:', order)}
                      onSettingClick={() => console.log('Setting clicked')}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Demo with Cards */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">互動示範 - 點擊 Add HB/L 新增卡片 (Interactive Demo - Click Add HB/L to add cards)</h4>
                <div className="flex justify-center p-8 bg-[#fafafa] rounded">
                  <div className="w-[220px]">
                    <CardPanel 
                      onSortChange={(value) => console.log(`Sort by: ${value}`)}
                      onOrderChange={(order) => console.log(`Order: ${order}`)}
                      onSettingClick={() => console.log('Opening card settings')}
                      sortValue="Create Date"
                      sortOrder="desc"
                      showCards={true}
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="hidden bg-[#f8f9fa] p-6 rounded-lg border border-[#e0e0e0]">
                <h4 className="text-[14px] text-[#666666] mb-3">功能特性 (Features)</h4>
                <div className="space-y-2 text-[13px] text-[#666666]">
                  <p>✓ Add HB/L 按鈕 - 新增 HBL 資料</p>
                  <p>✓ 排序選擇器 (Sort Selector) - 支援多種排序條件切換</p>
                  <p>✓ 排序方向 (Order Toggle) - ASC/DESC 切換</p>
                  <p>✓ 卡片設定連結 (Card Setting) - 開啟卡片配置</p>
                  <p>✓ 下拉選單互動 (Dropdown Interaction) - 點擊展開/收合</p>
                </div>
              </div>

              {/* Props Description */}
              <div className="hidden bg-[#f8f9fa] p-6 rounded-lg border border-[#e0e0e0]">
                <h4 className="text-[14px] text-[#666666] mb-3">Component Props</h4>
                <div className="space-y-2 text-[13px] text-[#666666]">
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">onAddClick</code>: 點擊 Add HB/L 按鈕的回調函數</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">onSortChange</code>: 排序選擇改變的回調函數，參數為選擇的值</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">onOrderChange</code>: 排序方向改變的回調函數，參數為 'asc' | 'desc'</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">onSettingClick</code>: 點擊卡片設定的回調函數</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">sortValue</code>: 當前排序值（預設："Create Date"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">sortOrder</code>: 當前排序方向 'asc' | 'desc'（預設："desc"）</p>
                </div>
              </div>

              {/* Usage Example */}
              <div className="hidden bg-[#f8f9fa] p-6 rounded-lg border border-[#e0e0e0]">
                <h4 className="text-[14px] text-[#666666] mb-3">使用範例 (Usage Example)</h4>
                <pre className="bg-white p-4 rounded text-[12px] text-[#333] overflow-x-auto">
{`<CardPanel 
  onAddClick={() => handleAddHBL()}
  onSortChange={(value) => handleSortChange(value)}
  onOrderChange={(order) => handleOrderChange(order)}
  onSettingClick={() => openSettings()}
  sortValue="Create Date"
  sortOrder="desc"
/>`}
                </pre>
              </div>
            </div>
          </ComponentCard>
          
          {/* HBL Card Component */}
          <ComponentCard 
            title="HblCard" 
            description="HBL 貨運卡片組件，顯示 HBL 詳細資訊，包含標題、副標題、Shipper/Consignee、Task 通知及貨物資訊"
          >
            <div className="space-y-8">
              {/* Basic Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">基本展示</h4>
                <div className="flex justify-center p-8 bg-[#fafafa] rounded">
                  <div className="w-[220px] ml-8">
                    <HblCard 
                      hblNo="HBL001"
                      subtitle="Ocean Import"
                      shipper="ABC Company Ltd."
                      consignee="XYZ Trading Co."
                      showTask={true}
                      taskText="Task"
                      pkg="100"
                      weight="1,500 KG"
                      measurement="25 CBM"
                      arApBalance="100.00 / 100.00"
                      hasNotice={true}
                    />
                  </div>
                </div>
              </div>

              {/* Multiple Cards Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">多張卡片展示 (Multiple Cards)</h4>
                <div className="flex justify-center p-8 bg-[#fafafa] rounded">
                  <div className="w-[220px] ml-8 flex flex-col gap-[5px]">
                    <HblCard 
                      hblNo="HBL001"
                      subtitle="Ocean Import"
                      shipper="ABC Company Ltd."
                      consignee="XYZ Trading Co."
                      pkg="50"
                      weight="500 KG"
                      measurement="10 CBM"
                      arApBalance="100.00 / 50.00"
                      hasNotice={true}
                    />
                    <HblCard 
                      hblNo="HBL002"
                      subtitle="Air Export"
                      shipper="DEF Logistics Inc."
                      consignee="GHI Imports LLC"
                      pkg="25"
                      weight="250 KG"
                      measurement="5 CBM"
                      arApBalance="200.00 / 200.00"
                      hasNotice={false}
                      showTask={false}
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-[#e0e0e0] hidden">
                <h4 className="text-[14px] text-[#666666] mb-3">功能特性 (Features)</h4>
                <div className="space-y-2 text-[13px] text-[#666666]">
                  <p>✓ 黃色背景 (#f3c200) - HBL 識別色</p>
                  <p>✓ 標題區域 - 顯示 HBL 編號及資訊圖標</p>
                  <p>✓ 通知徽章 - 可選的警告通知圖標</p>
                  <p>✓ Shipper/Consignee 資訊顯示</p>
                  <p>✓ 錨點背景圖標 - 海運貨物視覺標識</p>
                  <p>✓ Task 通知標籤 - 可選的任務提醒</p>
                  <p>✓ 貨物資訊 - PKG/Weight/Measurement/AR-AP Balance</p>
                  <p>✓ 左側箭頭圖標 - 展開/收合指示</p>
                  <p>✓ Hover 效果 - 滑鼠懸停透明度變化</p>
                  <p>✓ 可點擊互動 - 支援 onClick 回調</p>
                </div>
              </div>

              {/* Props Description */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-[#e0e0e0] hidden">
                <h4 className="text-[14px] text-[#666666] mb-3">Component Props</h4>
                <div className="space-y-2 text-[13px] text-[#666666]">
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">hblNo</code>: HBL 編號（預設："HBLNo."）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">subtitle</code>: 副標題（預設："Subtitle"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">shipper</code>: 發貨人（預設："Shipper"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">consignee</code>: 收貨人（預設："Consignee"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">showTask</code>: 是否顯示 Task 標籤（預設：true）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">taskText</code>: Task 文字（預設："Task"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">pkg</code>: 包裹數量（預設："1"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">weight</code>: 重量（預設："1 KG"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">measurement</code>: 體積（預設："1 CBM"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">arApBalance</code>: AR/AP 餘額（預設："100.00 / 100.00"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">hasNotice</code>: 是否顯示通知徽章（預設：true）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">backgroundColor</code>: 背景顏色（預設："#f3c200"）</p>
                  <p><code className="bg-white px-2 py-1 rounded text-[#e74c3c]">onCardClick</code>: 卡片點擊回調函數</p>
                </div>
              </div>

              {/* Usage Example */}
              <div className="bg-[#f8f9fa] p-6 rounded-lg border border-[#e0e0e0] hidden">
                <h4 className="text-[14px] text-[#666666] mb-3">使用範例 (Usage Example)</h4>
                <pre className="bg-white p-4 rounded text-[12px] text-[#333] overflow-x-auto">
{`<HblCard 
  hblNo="HBL001"
  subtitle="Ocean Import"
  shipper="ABC Company Ltd."
  consignee="XYZ Trading Co."
  showTask={true}
  taskText="Task"
  pkg="100"
  weight="1,500 KG"
  measurement="25 CBM"
  arApBalance="100.00 / 100.00"
  hasNotice={true}
  onCardClick={() => handleCardClick()}
/>`}
                </pre>
              </div>
            </div>
          </ComponentCard>
        </section>

        {/* DIVIDERS SECTION */}
        <section id="dividers">
          <h2 className="text-[24px] text-[#333333] mb-6 pb-3 border-b-2 border-[#1caf9a]">
            Dividers 分隔線組件
          </h2>
          
          <ComponentCard 
            title="FormDivider" 
            description="用於表單佈局中的水平分隔線，適用於 Shipment Entry MBL & HBL Information 表單"
          >
            <div className="space-y-8">
              {/* Basic Display */}
              <div>
                <h4 className="text-[14px] text-[#666666] mb-4">基本展示 (Basic Display)</h4>
                <div className="p-6 bg-[#fafafa] rounded border border-[#eeeeee]">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2px]">
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 1</div>
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 2</div>
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 3</div>
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 4</div>
                    
                    <FormDivider />
                    
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 5</div>
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 6</div>
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 7</div>
                    <div className="bg-white p-4 border border-[#e0e0e0] rounded">Column 8</div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </section>

        {/* Design Guidelines */}
        <section className="mt-12 p-8 bg-[#f8f9fa] rounded-lg border border-[#e0e0e0]">
          <h2 className="text-[20px] text-[#333333] mb-4">設計規範 Design Guidelines</h2>
          <div className="space-y-3 text-[14px] text-[#666666]">
            <p>✓ 所有組件均來自 "GF / Components" 設計系統庫</p>
            <p>✓ 圖標使用 Font Awesome 6.0</p>
            <p>✓ 字體：Open Sans</p>
            <p>✓ 主要顏色：Teal (#1caf9a) / Blue (#3987d5) / Gray (#808080)</p>
            <p>✓ 間距：16px 垂直間距 / 24px 水平間距 / 32px 區塊間距</p>
            <p>✓ 不可自行創建顏色、圖標或樣式</p>
          </div>
        </section>
      </div>
    </div>
  );
}