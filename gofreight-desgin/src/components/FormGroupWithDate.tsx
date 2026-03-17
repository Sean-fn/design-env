import React from "react";
import InputWithAddon from "./InputWithAddon";

interface FormGroupWithDateProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  onDateChange?: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  labelWidth?: string;
  dateValue?: Date;
  isAIFilled?: boolean;
}

export default function FormGroupWithDate({
  label,
  value,
  onChange,
  onDateChange,
  placeholder,
  disabled = false,
  className = "",
  labelWidth = "max-w-[140px]",
  dateValue,
  isAIFilled = false,
}: FormGroupWithDateProps) {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div 
      className={`content-stretch flex gap-[5px] items-center relative w-full ${className}`} 
      data-name="Form Group With Date"
    >
      {/* Label */}
      <div 
        className={`basis-0 content-stretch flex gap-[2px] grow items-center justify-end ${labelWidth} min-h-px min-w-px relative shrink-0`}
        data-name="Text"
      >
        <div 
          className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[10px] whitespace-pre">
            {label.startsWith("*") ? (
              <>
                <span className="text-[#e53935]">*</span>
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
        {/* Input Container */}
        <div 
          className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" 
          data-name="Input"
        >
          <div 
            className="content-stretch flex items-start justify-center relative shrink-0 w-full" 
            data-name="input-wrap"
          >
            <InputWithAddon
              value={value}
              onChange={handleInputChange}
              placeholder={placeholder}
              disabled={disabled}
              rightAddon="calendar"
              onDateChange={onDateChange}
              dateValue={dateValue}
              isAIFilled={isAIFilled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}