import React, { useEffect, useRef } from "react";
import svgPaths from "../imports/svg-frzhmn6qjd";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showCheckbox?: boolean;
  checkboxLabel?: string;
  onCheckboxChange?: (checked: boolean) => void;
  position?: 'top' | 'bottom' | 'left' | 'right';
  anchorEl?: HTMLElement | null;
  backgroundColor?: string;
  /** 尺寸大小 (small: 276px, medium: 375px) */
  size?: "small" | "medium";
  /** 自訂最大寬度（若設置則覆蓋 size） */
  maxWidth?: number;
}

function Triangle({ color = "#26a69a" }: { color?: string }) {
  return (
    <div className="h-[5px] relative w-[10px]" data-name="Triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="Triangle">
          {/* Triangle pointing up: tip at top (5, 0), base at bottom (0, 5) and (10, 5) */}
          <path d="M5 0L0 5L10 5Z" fill={color} id="White" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxInput({ checked = false }: { checked?: boolean }) {
  return (
    <div 
      className="relative shrink-0 size-[15px]" 
      data-name="checkbox-input"
    >
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(198, 198, 198, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="checkbox-input">
            <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
            <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
            {checked && <path d={svgPaths.p3ee97080} fill="#666666" id="check" />}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Popover({
  isOpen,
  onClose,
  message,
  primaryButtonText = "Confirm",
  secondaryButtonText = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
  showCheckbox = false,
  checkboxLabel = "Never show this again",
  onCheckboxChange,
  position = 'top',
  anchorEl,
  backgroundColor = "#26a69a",
  size = "small",
  maxWidth
}: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isChecked, setIsChecked] = React.useState(false);
  const [popoverPosition, setPopoverPosition] = React.useState({ top: 0, left: 0 });

  // Calculate position based on anchor element
  useEffect(() => {
    if (isOpen && anchorEl && popoverRef.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      
      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = anchorRect.top - popoverRect.height - 10;
          left = anchorRect.left + (anchorRect.width / 2) - (popoverRect.width / 2);
          break;
        case 'bottom':
          top = anchorRect.bottom + 10;
          left = anchorRect.left + (anchorRect.width / 2) - (popoverRect.width / 2);
          break;
        case 'left':
          top = anchorRect.top + (anchorRect.height / 2) - (popoverRect.height / 2);
          left = anchorRect.left - popoverRect.width - 10;
          break;
        case 'right':
          top = anchorRect.top + (anchorRect.height / 2) - (popoverRect.height / 2);
          left = anchorRect.right + 10;
          break;
      }

      setPopoverPosition({ top, left });
    }
  }, [isOpen, anchorEl, position]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onCheckboxChange) {
      onCheckboxChange(newValue);
    }
  };

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    }
    onClose();
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    }
    onClose();
  };

  if (!isOpen) return null;

  // Triangle 預設指向上方，根據 position 調整方向
  const triangleRotation = position === 'top' ? '' : position === 'bottom' ? 'scale-y-[-100%]' : position === 'left' ? 'rotate-[-90deg]' : 'rotate-90';

  // 根據 position 決定陰影方向
  const getShadowStyle = () => {
    switch (position) {
      case "top":
        return "shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)]"; // 右下
      case "bottom":
        return "shadow-[5px_-5px_0px_0px_rgba(102,102,102,0.1)]"; // 右上（垂直-5）
      case "left":
        return "shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)]"; // 右下
      case "right":
        return "shadow-[-5px_5px_0px_0px_rgba(102,102,102,0.1)]"; // 左下（水平-5）
      default:
        return "shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)]";
    }
  };

  return (
    <div 
      ref={popoverRef}
      className="fixed z-50"
      style={{
        top: anchorEl ? `${popoverPosition.top}px` : '50%',
        left: anchorEl ? `${popoverPosition.left}px` : '50%',
        transform: anchorEl ? 'none' : 'translate(-50%, -50%)'
      }}
      data-name="Popover"
    >
      <div className={`content-stretch flex flex-col isolate items-center relative rounded-[3px] ${getShadowStyle()}`}>
        {/* Triangle pointer */}
        {(position === 'top' || position === 'bottom') && (
          <div className="flex items-center justify-center relative shrink-0 z-[2]">
            <div className={`flex-none ${triangleRotation}`}>
              <Triangle color={backgroundColor} />
            </div>
          </div>
        )}

        {/* Popover Body */}
        <div 
          className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[14px] py-[8px] relative rounded-[3px] shrink-0 z-[1]"
          style={{ 
            backgroundColor: backgroundColor,
            maxWidth: `${maxWidth || (size === "medium" ? 375 : 276)}px`
          }}
          data-name="Popover Body"
        >
          {/* Message */}
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px]">{message}</p>
          </div>

          {/* Action Group */}
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Action Group">
            {/* Checkbox */}
            {showCheckbox && (
              <div 
                className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" 
                data-name="Checkbox"
                onClick={handleCheckboxChange}
              >
                <CheckboxInput checked={isChecked} />
                <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {checkboxLabel}
                </p>
              </div>
            )}

            {/* Button Group */}
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Group">
              <SolidButton 
                text={primaryButtonText}
                onClick={handlePrimaryClick}
                size="medium"
                variant="teal"
              />
              <OutlineButton 
                text={secondaryButtonText}
                onClick={handleSecondaryClick}
                size="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}