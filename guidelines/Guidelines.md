# Material 3 Design Guidelines

This project follows Google's Material Design 3 (Material You) design system to ensure consistency, accessibility, and modern design patterns throughout the dental practice website.

## Core Principles

### 1. Dynamic Color System
- Use semantic color tokens that adapt to light and dark themes
- Primary colors derive from teal/cyan dental-friendly palette
- Implement proper contrast ratios for accessibility
- Use tonal surface variations instead of stark contrasts

### 2. Typography Scale
Material 3 defines a comprehensive typography scale:
- **Display**: For large, prominent text (display-large, display-medium, display-small)
- **Headline**: For section headers (headline-large, headline-medium, headline-small)
- **Title**: For component titles (title-large, title-medium, title-small)
- **Body**: For body text (body-large, body-medium, body-small)
- **Label**: For labels and buttons (label-large, label-medium, label-small)

### 3. Shape System
- **Corner Radius**: Use Material 3 shape tokens (4px, 8px, 12px, 16px, 24px)
- **Cards**: 12px corner radius for consistency
- **Buttons**: 12px corner radius for a modern but refined appearance (less rounded than fully circular)
- **Images**: 24px corner radius for hero sections
- **Navigation Elements**: Full corner radius for active state indicators

### 4. Elevation System
- **Level 0**: Surface elements (no shadow)
- **Level 1**: Cards at rest
- **Level 2**: Cards on hover
- **Level 3**: Floating action buttons, navigation
- **Level 4**: Modal dialogs
- **Level 5**: Navigation drawers

## Component Guidelines

### Buttons
- **Filled Buttons**: Primary actions (appointments, contact) - Use medium corner radius (12px)
- **Outlined Buttons**: Secondary actions (learn more, contact info) - Use medium corner radius (12px)
- **Text Buttons**: Tertiary actions (navigation links) - Use medium corner radius (12px)
- **FABs**: Special floating buttons can use larger corner radius (16px) for distinction
- Use state layers for hover/focus/active states
- Available roundness utilities: `.button-rounded-none`, `.button-rounded-sm`, `.button-rounded-md`, `.button-rounded-lg`, `.button-rounded-full`

### Button Roundness Guidelines
The site uses a refined approach to button styling with moderate rounding:
- **Default**: Medium corner radius (12px) for professional appearance
- **Less Formal**: Small corner radius (8px) for more geometric look
- **More Formal**: Large corner radius (16px) for softer appearance
- **Avoid**: Fully rounded buttons except for special cases like FABs or icon buttons

### Cards
- Use `md-card` class for consistent styling
- Implement hover states with elevation changes
- Include proper padding and content hierarchy
- Use surface container colors for background

### Navigation
- Implement Material 3 navigation bar pattern
- Use state layers for interactive elements
- Highlight current page with surface container colors
- Smooth transitions for navigation states
- Active navigation items can use full rounding for pill-like appearance

### Typography
- Headlines should use semantic heading tags (h1, h2, h3)
- Body text should maintain proper line height (1.5)
- Use color tokens for consistent text colors
- Implement proper text hierarchy

### Color Usage
```css
/* Primary Actions */
background-color: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);

/* Secondary Actions */
background-color: var(--md-sys-color-secondary-container);
color: var(--md-sys-color-on-secondary-container);

/* Surface Elements */
background-color: var(--md-sys-color-surface-container);
color: var(--md-sys-color-on-surface);

/* Error States */
background-color: var(--md-sys-color-error-container);
color: var(--md-sys-color-on-error-container);
```

## Layout Guidelines

### Spacing
- Use consistent 16px base spacing unit
- Implement 4px, 8px, 12px, 16px, 24px, 32px spacing scale
- Maintain proper content padding (16px minimum)

### Grid System
- Use CSS Grid for complex layouts
- Implement responsive breakpoints
- Maintain consistent content width (max-width: container)

### Motion & Animation
- Use Material 3 motion tokens for duration and easing
- Standard duration: 200-300ms for most interactions
- Emphasized easing for important state changes
- Smooth transitions for theme switching

## Accessibility

### Color Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Use Material 3 color tokens to ensure proper contrast

### Focus States
- Implement visible focus indicators
- Use state layers for keyboard navigation
- Maintain proper tab order

### Semantic HTML
- Use proper heading hierarchy
- Implement ARIA labels where needed
- Ensure screen reader compatibility

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Layout Adaptations
- Single column layout on mobile
- Adaptive navigation (hamburger menu on mobile)
- Responsive typography scaling
- Touch-friendly interactive elements (48px minimum)

## Component Patterns

### Hero Sections
```tsx
<section className="py-16 lg:py-24 surface-container-lowest">
  <div className="container mx-auto px-4">
    <h1 className="display-small mb-6">Hero Title</h1>
    <p className="body-large mb-8">Hero description</p>
    <button className="md-button-filled">Primary Action</button>
  </div>
</section>
```

### Content Cards
```tsx
<div className="md-card">
  <div className="p-6">
    <h3 className="title-medium mb-2">Card Title</h3>
    <p className="body-medium">Card content</p>
  </div>
</div>
```

### Button Variations
```tsx
{/* Standard buttons with medium rounding */}
<button className="md-button-filled">Primary Action</button>
<button className="md-button-outlined">Secondary Action</button>

{/* Custom roundness if needed */}
<button className="md-button-filled button-rounded-sm">Sharp Button</button>
<button className="md-button-filled button-rounded-lg">Soft Button</button>
```

### Feature Lists
```tsx
<div className="space-y-4">
  {features.map((feature, index) => (
    <div key={index} className="flex items-center space-x-3">
      <CheckCircle className="w-5 h-5" style={{ color: 'var(--md-sys-color-primary)' }} />
      <span className="body-medium">{feature}</span>
    </div>
  ))}
</div>
```

## Best Practices

1. **Consistency**: Always use Material 3 design tokens
2. **Performance**: Optimize images and animations
3. **Accessibility**: Test with screen readers and keyboard navigation
4. **Responsiveness**: Design mobile-first, enhance for larger screens
5. **Theme Support**: Ensure all components work in light and dark themes
6. **Content Hierarchy**: Use typography scale to establish clear information hierarchy
7. **Interactive States**: Implement hover, focus, and active states for all interactive elements
8. **Loading States**: Provide feedback for asynchronous operations
9. **Error Handling**: Use Material 3 error colors and patterns for error states
10. **Progressive Enhancement**: Ensure basic functionality works without JavaScript
11. **Button Design**: Use medium corner radius (12px) as default for professional, modern appearance
12. **Shape Consistency**: Maintain consistent corner radius within component groups (all buttons, all cards, etc.)

## Button Style Reference

### Current Button Styling
- **Default Radius**: 12px (medium) for refined, professional appearance
- **Alternative Options**: 8px (small), 16px (large), 0px (none), 50% (full)
- **Hover Effects**: Elevation changes and subtle background shifts
- **State Layers**: Overlay effects for interactive feedback

### When to Use Different Roundness
- **12px (Default)**: Most buttons, professional contexts
- **8px**: More geometric, technical interfaces
- **16px**: Softer, more friendly interfaces
- **0px**: Sharp, modern architectural feel
- **50%**: Only for icon buttons, FABs, or special circular elements