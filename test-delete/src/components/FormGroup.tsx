import React from "react";
import Select from "./Select";
import Input from "./Input";
import TextButton from "./TextButton";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

interface RadioOption {
  value: string;
  label: string;
}

interface CheckboxOption {
  value: string;
  label: string;
  checked: boolean;
}

interface RightButton {
  icon: string;
  onClick: () => void;
  variant?: 'solid' | 'default';
}

interface FormGroupProps {
  label: string;
  type: "input" | "select" | "radio" | "checkbox";
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  options?: Array<{ value: string; label: string }>;
  className?: string;
  labelWidth?: string;
  radioOptions?: RadioOption[];
  radioName?: string;
  isAutoComplete?: boolean;
  checkboxOptions?: CheckboxOption[];
  onCheckboxChange?: (value: string, checked: boolean) => void;
  rightButtons?: RightButton[];
  isAIFilled?: boolean;
  isAIUnmatched?: boolean;
  aiExtractedText?: string;
}

export default function FormGroup({
  label,
  type = 'input',
  value,
  onChange,
  placeholder,
  disabled = false,
  options = [],
  className = "",
  labelWidth = "max-w-[100px]",
  radioOptions = [],
  radioName = "",
  isAutoComplete = false,
  checkboxOptions = [],
  onCheckboxChange = () => {},
  rightButtons = [],
  isAIFilled = false,
  isAIUnmatched = false,
  aiExtractedText,
}: FormGroupProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleSelectChange = (selectedValue: string) => {
    onChange?.(selectedValue);
  };

  const handleRadioClick = (optionValue: string) => {
    if (!disabled) {
      onChange?.(optionValue);
    }
  };

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    if (!disabled) {
      onCheckboxChange?.(optionValue, checked);
    }
  };

  return (
    <div 
      className={`content-stretch flex gap-[5px] items-center relative w-full ${className}`} 
      data-name="Form Group"
    >
      {/* Label */}
      <div 
        className={`basis-0 content-stretch flex gap-[2px] grow items-center justify-end ${labelWidth} min-h-px min-w-px relative shrink-0`}
        data-name="Text"
      >
        <div 
          className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative text-[#333333] text-[11px] text-right leading-tight" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-tight text-[11px]">
            {label.startsWith("*") ? (
              <>
                <span style={{ color: '#e53935' }}>*</span>
                {label.slice(1)}
              </>
            ) : (
              label
            )}
          </p>
        </div>
      </div>

      {/* Element Group */}
      <div 
        className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0" 
        data-name="Element Group"
      >
        {/* Input/Select/Radio Container */}
        <div 
          className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" 
          data-name="Input"
        >
          <div 
            className="content-stretch flex items-start justify-center relative shrink-0 w-full" 
            data-name="input-wrap"
          >
            {type === 'input' ? (
              <Input
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                disabled={disabled}
                isAIFilled={isAIFilled}
                isAIUnmatched={isAIUnmatched}
                aiExtractedText={aiExtractedText}
              />
            ) : type === 'select' ? (
              <Select
                options={options}
                value={value}
                onChange={handleSelectChange}
                placeholder={placeholder}
                disabled={disabled}
                isAutoComplete={isAutoComplete}
                isAIFilled={isAIFilled}
                isAIUnmatched={isAIUnmatched}
                aiExtractedText={aiExtractedText}
              />
            ) : type === 'radio' ? (
              <div className="basis-0 content-stretch flex gap-[5px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio Group">
                {radioOptions.map((option) => (
                  <RadioButton
                    key={option.value}
                    label={option.label}
                    checked={value === option.value}
                    onClick={() => handleRadioClick(option.value)}
                    disabled={disabled}
                  />
                ))}
              </div>
            ) : type === 'checkbox' ? (
              <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox Group">
                {checkboxOptions.map((option) => (
                  <Checkbox
                    key={option.value}
                    label={option.label}
                    checked={option.checked}
                    onChange={(checked) => handleCheckboxChange(option.value, checked)}
                    disabled={disabled}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Right Buttons */}
      {rightButtons.map((button, index) => (
        <TextButton
          key={index}
          icon={button.icon}
          onClick={button.onClick}
          variant={button.variant}
        />
      ))}
    </div>
  );
}