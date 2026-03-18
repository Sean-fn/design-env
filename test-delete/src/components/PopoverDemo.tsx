import React, { useState, useRef } from "react";
import Popover from "./Popover";
import SolidButton from "./SolidButton";

export default function PopoverDemo() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (checked: boolean) => {
    console.log("Checkbox changed:", checked);
    setCheckboxValue(checked);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <div ref={buttonRef}>
          <SolidButton
            text="開啟 Popover"
            size="medium"
            variant="blue"
            onClick={() => setIsPopoverOpen(true)}
          />
        </div>
        <p className="text-[12px] text-[#666666]">
          Checkbox 狀態: {checkboxValue ? "✓ 已勾選" : "☐ 未勾選"}
        </p>
      </div>

      <Popover
        isOpen={isPopoverOpen}
        onClose={() => setIsPopoverOpen(false)}
        message="This is a promotion popover with an interactive checkbox. Try clicking on it!"
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
        showCheckbox={true}
        checkboxLabel="Never show this again"
        onCheckboxChange={handleCheckboxChange}
        position="bottom"
        anchorEl={buttonRef.current}
        backgroundColor="#26a69a"
        size="medium"
      />
    </div>
  );
}
