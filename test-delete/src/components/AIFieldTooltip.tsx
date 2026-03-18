import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useAIAnimation } from "./AIAnimationContext";

const font: React.CSSProperties = { fontVariationSettings: "'wdth' 100" };

interface AIFieldTooltipProps {
  children: React.ReactNode;
  /** The original value AI extracted */
  originalValue?: string;
  /** Whether this is an unmatched TP field */
  isUnmatched?: boolean;
  /** Whether the user has edited this field */
  isEdited?: boolean;
  /** Whether to show the tooltip at all */
  enabled?: boolean;
}

export default function AIFieldTooltip({
  children,
  originalValue,
  isUnmatched = false,
  isEdited = false,
  enabled = false,
}: AIFieldTooltipProps) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; direction: "top" | "bottom" }>({
    top: 0,
    left: 0,
    direction: "top",
  });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { reviewCompleted } = useAIAnimation();

  // For normal AI fields: only show tooltip after user has edited
  // For unmatched TP fields: always show tooltip
  // After review completed: never show tooltip
  const shouldShowTooltip = !reviewCompleted && (isUnmatched || isEdited);

  const updatePosition = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const tooltipHeight = 80; // estimated
    const spaceAbove = rect.top;
    const direction = spaceAbove < tooltipHeight + 12 ? "bottom" : "top";

    // Use viewport-relative coords directly (no scrollY/scrollX) since tooltip is position:fixed
    setCoords({
      top: direction === "top" ? rect.top : rect.bottom,
      left: rect.left,
      direction,
    });
  }, []);

  // Recalculate on scroll / resize while visible
  useEffect(() => {
    if (!show) return;
    updatePosition();
    const handleScroll = () => updatePosition();
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [show, updatePosition]);

  if (!enabled || !shouldShowTooltip) return <>{children}</>;

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      updatePosition();
      setShow(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setShow(false);
  };

  const tooltipContent = show
    ? createPortal(
        <div
          ref={tooltipRef}
          className="fixed pointer-events-none"
          style={{
            zIndex: 99999,
            top: coords.direction === "top" ? undefined : coords.top,
            bottom: coords.direction === "top" ? `calc(100vh - ${coords.top}px + 6px)` : undefined,
            left: coords.left,
            marginTop: coords.direction === "bottom" ? 6 : 0,
          }}
        >
          <div
            className="bg-[#333] text-white rounded-[4px] px-[10px] py-[8px] shadow-lg min-w-[180px] max-w-[320px]"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))" }}
          >
            {isUnmatched ? (
              /* ── Unmatched TP tooltip ── */
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-[5px]">
                  <i className="fas fa-exclamation-triangle text-[#f0ad4e] text-[10px] shrink-0" />
                  <span
                    className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-[#f0ad4e] leading-[14px]"
                    style={font}
                  >
                    No matching Trade Partner
                  </span>
                </div>
                {originalValue && (
                  <div className="flex flex-col gap-[3px]">
                    <span
                      className="font-['Open_Sans:Regular',sans-serif] font-normal text-[10px] text-[#bbb] leading-[13px]"
                      style={font}
                    >
                      AI extracted:
                    </span>
                    <span
                      className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-white leading-[14px] break-words"
                      style={font}
                    >
                      &ldquo;{originalValue}&rdquo;
                    </span>
                  </div>
                )}
                <div className="h-px bg-[#555] my-[2px]" />
                <span
                  className="font-['Open_Sans:Regular',sans-serif] font-normal text-[10px] text-[#ccc] leading-[14px]"
                  style={font}
                >
                  Please select an existing TP or create a new one.
                </span>
              </div>
            ) : (
              /* ── Edited AI-filled tooltip ── */
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-center gap-[5px]">
                  <i className="fas fa-wand-magic-sparkles text-[#70DAC2] text-[10px] shrink-0" />
                  <span
                    className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-[#70DAC2] leading-[14px]"
                    style={font}
                  >
                    AI Extracted (Modified)
                  </span>
                </div>
                {originalValue && (
                  <div className="flex flex-col gap-[2px]">
                    <span
                      className="font-['Open_Sans:Regular',sans-serif] font-normal text-[10px] text-[#bbb] leading-[13px]"
                      style={font}
                    >
                      Original value:
                    </span>
                    <span
                      className="font-['Open_Sans:Regular',sans-serif] font-normal text-[10px] text-white leading-[14px] break-words"
                      style={font}
                    >
                      {originalValue}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Arrow */}
            <div
              className={`absolute left-[16px] w-0 h-0 ${
                coords.direction === "top"
                  ? "top-full border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#333]"
                  : "bottom-full border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#333]"
              }`}
            />
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {tooltipContent}
    </div>
  );
}