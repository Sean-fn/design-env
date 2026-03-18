# 如何將 MBL/HBL 中的 Calendar 輸入框更新為 DatePicker

## 更新方式

在 MBLInformation.tsx 和 HBLInformation.tsx 中，將所有使用 `FormGroup + TextButton (calendar icon)` 的組合替換為 `FormGroupWithDate` 組件。

### 舊的寫法（需要被替換）：

```tsx
<div className="flex gap-2 items-center w-full">
  <FormGroup
    label="Place of Receipt ETD"
    type="input"
    value={formData.placeOfReceiptEtd}
    onChange={(value) => handleChange('placeOfReceiptEtd', value)}
    placeholder=""
    labelWidth="max-w-[140px]"
    className="flex-1"
  />
  <TextButton 
    icon="fas fa-calendar-alt"
    onClick={() => console.log('Open Calendar')}
    variant="solid"
    className="shrink-0"
  />
</div>
```

### 新的寫法（使用 DatePicker）：

```tsx
<FormGroupWithDate
  label="Place of Receipt ETD"
  value={formData.placeOfReceiptEtd}
  onChange={(value) => handleChange('placeOfReceiptEtd', value)}
  onDateChange={(date) => handleChange('placeOfReceiptEtd', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
  placeholder=""
  labelWidth="max-w-[140px]"
/>
```

## 需要更新的欄位列表

### MBLInformation.tsx:
1. Place of Receipt ETD (line ~408)
2. ETD (line ~446)
3. ETA (line ~483)
4. Place of Delivery ETA (line ~521)
5. Final ETA (line ~558)
6. ATD (line ~611)
7. ATA (line ~629)
8. Doc Cut-Off Date (line ~725)
9. Port Cut-Off Date (line ~743)
10. VGM Cut-Off (line ~761)
11. Rail Cut-Off Date (line ~780)
12. BL Cancelled Date (line ~798-829) - 這個比較特別，有 checkbox
13. Reason for Cancel (line ~840-856) - 這個似乎不需要日期
14. Freight Released Date (line ~887-918) - 有 checkbox
15. On Board Date (line ~939)
16. Earliest Return Date (line ~960)

### HBLForm.tsx 和 HBLInformation.tsx:
使用相同的方式更新所有帶有 `fa-calendar-alt` icon 的輸入框。

## 注意事項

1. 記得在文件頂部導入 `FormGroupWithDate`：
   ```tsx
   import FormGroupWithDate from "./FormGroupWithDate";
   ```

2. `FormGroupWithDate` 組件已經內建了 calendar icon，不需要額外的 TextButton

3. 對於有 checkbox 的日期欄位（如 BL Cancelled Date, Freight Released Date），保持原有結構，只需將內部的 FormGroup 替換即可
