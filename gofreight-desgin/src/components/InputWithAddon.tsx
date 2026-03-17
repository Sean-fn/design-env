import React, { useState, forwardRef, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";
import DatePicker from "./DatePicker";
import { useAIAnimation } from "./AIAnimationContext";

interface InputWithAddonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  leftAddon?: "checkbox" | React.ReactNode;
  rightAddon?: "calendar" | React.ReactNode;
  onCheckboxChange?: (checked: boolean) => void;
  checkboxChecked?: boolean;
  onDateChange?: (date: Date) => void;
  dateValue?: Date;
  isAIFilled?: boolean;
}

const InputWithAddon = forwardRef<HTMLInputElement, InputWithAddonProps>(
  (
    {
      className = "",
      disabled = false,
      leftAddon,
      rightAddon,
      onCheckboxChange,
      checkboxChecked = false,
      onDateChange,
      dateValue,
      isAIFilled = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(checkboxChecked);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(dateValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const calendarButtonRef = useRef<HTMLDivElement>(null);
    const { reviewCompleted } = useAIAnimation();

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsDatePickerOpen(false);
        }
      };

      if (isDatePickerOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isDatePickerOpen]);

    const aiGradient = 'linear-gradient(to right, rgba(112, 218, 194, 0.35) 0%, rgba(192, 220, 160, 0.35) 50%, rgba(254, 215, 114, 0.35) 100%)';

    const getStateClasses = () => {
      if (disabled) {
        return "bg-[#e4e4e4] border-[#e4e4e4] cursor-not-allowed";
      }
      if (isFocused) {
        return `${isAIFilled && !reviewCompleted ? '' : 'bg-[#ffffff]'} border-2 border-[#5b8aff]`;
      }
      return `${isAIFilled && !reviewCompleted ? '' : 'bg-[#ffffff]'} border border-[#e4e4e4]`;
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsFocused(true);
        props.onFocus?.(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleCheckboxChange = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onCheckboxChange?.(newChecked);
    };

    const renderLeftAddon = () => {
      if (!leftAddon) return null;

      if (leftAddon === "checkbox") {
        return (
          <div
            className="bg-[#e4e4e4] content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[24px] cursor-pointer"
            onClick={handleCheckboxChange}
          >
            <div className="relative shrink-0 size-[15px]">
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
                {isChecked && (
                  <path
                    d="M3 7.5L6.5 11L12 4.5"
                    stroke="#333333"
                    strokeWidth="2"
                    fill="none"
                  />
                )}
              </svg>
            </div>
          </div>
        );
      }

      return (
        <div className="bg-[#e4e4e4] content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[24px]">
          {leftAddon}
        </div>
      );
    };

    const renderRightAddon = () => {
      if (!rightAddon) return null;

      if (rightAddon === "calendar") {
        return (
          <div 
            className="bg-[#e4e4e4] content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[24px] cursor-pointer"
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            ref={calendarButtonRef}
          >
            <Calendar className="w-[14px] h-[14px] text-[#555555]" strokeWidth={1.5} />
          </div>
        );
      }

      return (
        <div className="bg-[#e4e4e4] content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[24px]">
          {rightAddon}
        </div>
      );
    };

    const handleDateChange = (date: Date) => {
      setSelectedDate(date);
      onDateChange?.(date);
      setIsDatePickerOpen(false);
    };

    const handleInputClick = () => {
      if (rightAddon === "calendar" && !disabled) {
        setIsDatePickerOpen(true);
      }
    };

    return (
      <div ref={containerRef} className={`relative w-full ${className}`}>
        <div className="content-stretch flex items-start justify-center relative w-full">
          {renderLeftAddon()}
          <div
            className={`basis-0 grow h-6 min-h-px min-w-px relative shrink-0 ${getStateClasses()}`}
            style={{
              background: isAIFilled && !disabled && !reviewCompleted ? aiGradient : undefined,
              transition: 'background 0.8s ease-out',
            }}
          >
            <div className="flex flex-row items-center size-full">
              <input
                ref={ref}
                {...props}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={
                  rightAddon === "calendar" && selectedDate
                    ? selectedDate.toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                    : (props.value ?? "")
                }
                onChange={props.onChange || (() => {})}
                readOnly={rightAddon === "calendar"}
                className={`
                  w-full h-full px-[5px] py-[3px]
                  font-['Open_Sans:Regular',_sans-serif] font-normal text-[11px] text-[#333333] leading-[1.429]
                  outline-none bg-transparent border-none
                  ${disabled ? "cursor-not-allowed" : ""}
                  ${rightAddon === "calendar" ? "cursor-pointer" : ""}
                `}
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={handleInputClick}
              />
            </div>
          </div>
          {renderRightAddon()}
        </div>
        {rightAddon === "calendar" && (
          <DatePicker
            isOpen={isDatePickerOpen}
            value={selectedDate}
            onChange={handleDateChange}
            onClose={() => setIsDatePickerOpen(false)}
            anchorEl={containerRef.current}
          />
        )}
      </div>
    );
  }
);

InputWithAddon.displayName = "InputWithAddon";

export default InputWithAddon;