import React from "react";
import svgPaths from "../imports/svg-0amk6gr1a2";

interface PopoverStandardProps {
  /** Popover 內容 */
  content: string;
  /** 是否顯示標題 */
  hasTitle?: boolean;
  /** 標題文字（當 hasTitle 為 true 時） */
  title?: string;
  /** 尺寸大小 (small: 276px, medium: 375px, large: 500px) */
  size?: "small" | "medium" | "large";
  /** 自訂最大寬度（若設置則覆蓋 size） */
  maxWidth?: number;
  /** 指標位置 */
  position?: "top" | "bottom" | "left" | "right";
}

export default function PopoverStandard({
  content,
  hasTitle = false,
  title = "Popover Title",
  size = "small",
  maxWidth,
  position = "bottom"
}: PopoverStandardProps) {
  // 根據 size 決定最大寬度，如果 maxWidth 有設置則優先使用
  const getMaxWidth = () => {
    if (maxWidth) return maxWidth;
    
    switch (size) {
      case "small":
        return 276;
      case "medium":
        return 375;
      case "large":
        return 500;
      default:
        return 276;
    }
  };

  const finalMaxWidth = getMaxWidth();

  // 根據 position 決定三角形的方向和位置
  const getTriangleTransform = () => {
    switch (position) {
      case "top":
        return "rotate(180deg)";
      case "bottom":
        return "rotate(0deg)";
      case "left":
        return "rotate(90deg)";
      case "right":
        return "rotate(-90deg)";
      default:
        return "rotate(0deg)";
    }
  };

  const trianglePosition = position === "top" || position === "bottom" ? "vertical" : "horizontal";

  return (
    <div 
      className={`content-stretch flex ${trianglePosition === "vertical" ? "flex-col" : "flex-row"} items-center relative rounded-[3px]`}
      data-name="Popover Standard"
    >
      {/* 如果位置在 top，三角形在上方 */}
      {position === "top" && (
        <div className="h-[6px] relative shrink-0 w-[12px]" style={{ transform: getTriangleTransform() }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <g>
              <path d={svgPaths.p27c21b00} fill="#C6C6C6" />
              <path d={svgPaths.pe92edf0} fill="white" />
            </g>
          </svg>
        </div>
      )}

      {/* 如果位置在 left，三角形在左邊 */}
      {position === "left" && (
        <div className="h-[12px] relative shrink-0 w-[6px]" style={{ transform: getTriangleTransform() }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <g>
              <path d={svgPaths.p27c21b00} fill="#C6C6C6" />
              <path d={svgPaths.pe92edf0} fill="white" />
            </g>
          </svg>
        </div>
      )}

      {/* Popover 主體 */}
      <div className="flex flex-col">
        {/* 標題（可選） */}
        {hasTitle && (
          <>
            <div 
              className="bg-[#f6f6f6] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" 
              style={{ maxWidth: `${finalMaxWidth}px` }}
              data-name="Popover Title"
            >
              <div 
                aria-hidden="true" 
                className="absolute border-[#c6c6c6] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[3.5px] rounded-tr-[3.5px]" 
              />
              <div className="flex flex-row items-center max-w-[inherit] size-full">
                <div className="content-stretch flex items-center max-w-[inherit] px-[14px] py-[8px] relative w-full">
                  <div 
                    className="basis-0 flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[16px]">{title}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 分隔線 */}
            <div className="h-0 relative shrink-0 w-full">
              <div 
                className="absolute bottom-0 left-0 right-0 top-[-1px]" 
                style={{ "--stroke-0": "rgba(235, 235, 235, 1)" } as React.CSSProperties}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 1">
                  <line stroke="var(--stroke-0, #EBEBEB)" x2="123" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </>
        )}

        {/* 內容 */}
        <div 
          className={`bg-white content-stretch flex flex-col items-start justify-center px-[14px] py-[8px] relative shrink-0 ${
            hasTitle 
              ? "rounded-bl-[3px] rounded-br-[3px]" 
              : "rounded-bl-[3px] rounded-br-[3px] rounded-tl-[3px] rounded-tr-[4px]"
          }`}
          style={{ maxWidth: `${finalMaxWidth}px` }}
          data-name="Popover Body"
        >
          <div 
            aria-hidden="true" 
            className={`absolute border-[#c6c6c6] border-solid pointer-events-none ${
              hasTitle 
                ? "border-[0px_0.5px_0.5px] bottom-[-0.5px] left-[-0.5px] right-[-0.5px] rounded-bl-[3.5px] rounded-br-[3.5px] top-0" 
                : "border-[0.5px] inset-[-0.5px] rounded-bl-[3.5px] rounded-br-[3.5px] rounded-tl-[3.5px] rounded-tr-[4.5px]"
            }`}
          />
          <div 
            className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] w-full" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[16px]">{content}</p>
          </div>
        </div>
      </div>

      {/* 如果位置在 bottom，三角形在下方 */}
      {position === "bottom" && (
        <div className="h-[6px] relative shrink-0 w-[12px]" style={{ transform: getTriangleTransform() }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <g>
              <path d={svgPaths.p27c21b00} fill="#C6C6C6" />
              <path d={svgPaths.pe92edf0} fill="white" />
            </g>
          </svg>
        </div>
      )}

      {/* 如果位置在 right，三角形在右邊 */}
      {position === "right" && (
        <div className="h-[12px] relative shrink-0 w-[6px]" style={{ transform: getTriangleTransform() }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <g>
              <path d={svgPaths.p27c21b00} fill="#C6C6C6" />
              <path d={svgPaths.pe92edf0} fill="white" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}