# GoFreight – AI Design System Guidelines

These rules define how the AI should create and modify UI in this prototype.
Always follow the instructions below.

---

## 1. General Rules
- Only use components from the "GF / Components" library.
- Never create custom shapes, colors, icons, or typography.
- Always use Auto Layout for frames and component placement.
- Maintain consistent hierarchy and naming structure when generating screens.
- When unsure, prefer clean, modular layouts rather than dense or irregular ones.

### Brand Colors
- **Primary Color (Teal)**: `#26a69a` - Use for primary actions, links, and emphasis
- **HBL Yellow**: `#f3c200` - Use for HBL Portlet backgrounds and borders

---

## 2. Component Rules

### Buttons
- Use existing variants: Solid / Outline / Ghost.
- Do not recreate button visuals manually.
- Primary actions appear on the right side.
- Button width is usually “hug contents” unless specified.

### Inputs & Textareas
- Use input components (Default / Error / Disabled).
- Width should follow parent container (“fill container” when applicable).
- Do not place actual content in placeholder text.
- Use textarea component for long text; do not resize manually.

### Dropdowns & Selects
- Always use the dropdown component from library.
- Never build dropdowns using rectangles + text.
- For expanded state, use the existing dropdown menu component.

### Tags / Status Badges
- Use status tag variants as provided.
- Do not change color, radius, or typo.

### Tables
- Use table header + table row components.
- Keep minimum column width at 120px OR use “fill container”.
- Never replace tables with repeated frames.
- Preserve existing column hierarchy when rebuilding a screen.

### Icons
- All icons must come from the Font Awesome library.
- Do not generate custom icons or draw new shapes.
- Use the correct size variant from the design system (16px / 20px depending on component).
- Do not stretch, recolor, or modify icons manually.

### Cards / Sections
- Use card components only.
- Internal spacing must remain 16px.

---

## 3. Layout Rules

### Spacing
- Vertical spacing: 16px
- Horizontal gutter: 24px
- Section spacing: 32px

### Structure
- Use vertical Auto Layout for page-level flow.
- Use horizontal Auto Layout for toolbars and filter bars.
- Max content width: 1280px, centered.

### Typography
- Do not override text tokens.
- Always use the default text styles defined in library.

### Naming
- Pages: `[Module] / [Page Name]`
- Frames: `Header`, `Filter Bar`, `Table – Shipment List`, `Modal – Create New`
- Components: semantic names like  
  `btn-primary-create`, `input-search`, `tag-status-delivered`

---

## 4. Interaction Rules
- Buttons that open overlays must use modal frames (named `Modal – [Action]`).
- Navigation between screens should use “swap screen”.
- Dropdowns and popovers must use provided component variants.
- Do not create new modal or drawer patterns without instruction.

---

## 5. Screen Generation Rules

### A. Rebuilding a page from a screenshot
Follow this process:
1. Identify layout structure.
2. Rebuild the UI using only design system components.
3. Match information hierarchy, not custom visuals from the screenshot.
4. Keep spacing, alignment, and naming consistent.
5. Do not replicate screenshot colors, icons, or irregular spacing.

### B. Designing a new page from a prompt
- Follow standard GoFreight page structure:  
  Page title → Action bar → Filters → Content area  
- Use only available components.  
- Keep the layout modular and consistent with the rest of the prototype.  
- Do not invent new components, patterns, or icons.

---

## 6. Forbidden Actions
- Do not create new colors, borders, radius, or shadows.
- Do not manually draw buttons, dropdowns, or tags.
- Do not stretch or distort icons.
- Do not override typography tokens.
- Do not merge multiple components into a single frame.
- Do not produce screens without proper naming.
- Do not use any icon source other than Font Awesome.

---

Always follow these rules when interpreting prompts or generating UI in this prototype.