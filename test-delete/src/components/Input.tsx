import React, { useState, useRef, forwardRef } from "react";
import { useAIAnimation } from "./AIAnimationContext";
import AIFieldTooltip from "./AIFieldTooltip";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  suffixIcon?: React.ReactNode;
  isAIFilled?: boolean;
  isAIUnmatched?: boolean;
  aiExtractedText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", disabled = false, suffixIcon, isAIFilled = false, isAIUnmatched = false, aiExtractedText, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [userEdited, setUserEdited] = useState(false);
    const { shouldAnimate, reviewCompleted } = useAIAnimation();

    // Store the original AI value on first render
    const originalValueRef = useRef<string | undefined>(
      isAIFilled ? (props.value as string) ?? (props.defaultValue as string) : undefined
    );

    // AI highlight stays visible even after edits
    const showAI = isAIFilled;
    const showUnmatched = isAIUnmatched;

    const aiGradient = 'linear-gradient(to right, rgba(112, 218, 194, 0.35) 0%, rgba(192, 220, 160, 0.35) 50%, rgba(254, 215, 114, 0.35) 100%)';
    const unmatchedGradient = 'linear-gradient(to right, rgba(255, 179, 71, 0.30) 0%, rgba(255, 216, 155, 0.30) 100%)';

    const getBackground = () => {
      if (disabled) return undefined;
      if (reviewCompleted) return { background: 'transparent' };
      if (showUnmatched) return { background: unmatchedGradient };
      if (showAI) return { background: aiGradient };
      return {};
    };

    const getStateClasses = () => {
      if (disabled) {
        return "bg-[#e4e4e4] border-[#e4e4e4] cursor-not-allowed";
      }
      if (isFocused) {
        return `${(showAI || showUnmatched) && !reviewCompleted ? '' : 'bg-[#ffffff]'} border-2 border-[#5b8aff]`;
      }
      if (showUnmatched && !reviewCompleted) {
        return 'border border-[#f0ad4e]';
      }
      return `${showAI && !reviewCompleted ? '' : 'bg-[#ffffff]'} border border-[#cccccc]`;
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

    // shimmer class for first-visit animation
    const shimmerClass = (showAI || showUnmatched) && shouldAnimate ? 'ai-reveal' : '';

    // Wrap the parent onChange to detect user edits
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if ((isAIFilled || isAIUnmatched) && !userEdited) {
        setUserEdited(true);
      }
      props.onChange?.(e);
    };

    // Tooltip: show for AI-filled or unmatched fields
    const tooltipEnabled = isAIFilled || isAIUnmatched;
    const tooltipOriginalValue = isAIUnmatched
      ? aiExtractedText
      : originalValueRef.current;

    // If no suffixIcon, render the original input
    if (!suffixIcon) {
      return (
        <AIFieldTooltip
          enabled={tooltipEnabled}
          originalValue={tooltipOriginalValue}
          isUnmatched={isAIUnmatched}
          isEdited={userEdited}
        >
          <div className={`relative w-full ${className}`}>
            {/* Unmatched TP warning icon inside input */}
            {showUnmatched && !reviewCompleted && (
              <i 
                className="fas fa-exclamation-triangle text-[#e67e22] text-[10px] absolute left-[5px] top-1/2 -translate-y-1/2 z-10 pointer-events-none"
              />
            )}
            <input
              ref={ref}
              {...props}
              disabled={disabled}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={showUnmatched && aiExtractedText && !props.value ? aiExtractedText : props.placeholder}
              className={`
                w-full h-6 py-[3px]
                ${showUnmatched && !reviewCompleted ? 'pl-[18px]' : 'px-[5px]'}
                font-['Open_Sans:Regular',_sans-serif] font-normal text-[11px] text-[#333333] leading-[1.429]
                outline-none transition-all duration-200
                text-ellipsis overflow-hidden whitespace-nowrap
                ${getStateClasses()}
                ${disabled ? 'text-[#333333]' : 'text-[#333333]'}
                ${showUnmatched && !props.value ? 'placeholder:text-[#999] placeholder:italic' : ''}
                ${shimmerClass}
              `}
              style={{ 
                fontVariationSettings: "'wdth' 100",
                transition: 'background 0.8s ease-out, box-shadow 0.3s ease-out, border-color 0.6s ease',
                ...getBackground()
              }}
            />
          </div>
        </AIFieldTooltip>
      );
    }

    // With suffixIcon, use a different layout
    return (
      <AIFieldTooltip
        enabled={tooltipEnabled}
        originalValue={tooltipOriginalValue}
        isUnmatched={isAIUnmatched}
        isEdited={userEdited}
      >
        <div className={`relative w-full ${className}`}>
          <div 
            className={`flex items-center h-6 px-[5px] py-[3px] ${getStateClasses()} transition-all duration-200 ${shimmerClass}`}
            style={{
              ...getBackground(),
              transition: 'background 0.8s ease-out, box-shadow 0.3s ease-out, border-color 0.6s ease',
            }}
          >
            <input
              ref={ref}
              {...props}
              disabled={disabled}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`
                flex-1 bg-transparent
                font-['Open_Sans:Regular',_sans-serif] font-normal text-[11px] text-[#333333] leading-[1.429]
                outline-none border-none
                ${disabled ? 'text-[#333333]' : 'text-[#333333]'}
              `}
              style={{ fontVariationSettings: "'wdth' 100" }}
            />
            <div className="flex items-center justify-center shrink-0">
              {suffixIcon}
            </div>
          </div>
        </div>
      </AIFieldTooltip>
    );
  }
);

Input.displayName = "Input";

export default Input;