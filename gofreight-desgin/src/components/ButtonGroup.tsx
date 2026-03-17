import React from "react";

interface ButtonGroupProps {
  onAdd?: () => void;
  onCopy?: () => void;
  onDelete?: () => void;
}

export default function ButtonGroup({ onAdd, onCopy, onDelete }: ButtonGroupProps) {
  return (
    <div className="flex items-center" data-name="Button Group">
      {/* Add Button - Solid */}
      

      {/* Copy Button - Outline */}
      <button
        onClick={onCopy}
        className="bg-white h-[34px] px-[14px] py-[7px] flex items-center justify-center border border-[#c6c6c6] hover:bg-[#f5f5f5] transition-colors -mr-px"
        data-name="Outline Button"
      >
        <i className="far fa-copy text-[#333333] text-[14px]"></i>
      </button>

      {/* Delete Button - Outline */}
      <button
        onClick={onDelete}
        className="bg-white h-[34px] px-[14px] py-[7px] flex items-center justify-center border border-[#c6c6c6] hover:bg-[#f5f5f5] transition-colors"
        data-name="Outline Button"
      >
        <i className="far fa-trash-alt text-[#333333] text-[14px]"></i>
      </button>
    </div>
  );
}
