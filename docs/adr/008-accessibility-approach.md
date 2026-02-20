# ADR-008: Accessibility Approach

## Status
Accepted

## Context
Accessibility is often an afterthought. We need it baked into the component library from the start.

## Decision

### Component requirements
- All interactive components must be keyboard navigable
- Focus management: modals trap focus, dropdowns return focus on close
- ARIA attributes where native semantics are insufficient
- Color contrast meets WCAG 2.1 AA (4.5:1 for text, 3:1 for UI elements)

### Testing
- Unit tests verify ARIA attributes and keyboard handlers
- Manual testing with screen reader for new components (VoiceOver on macOS)

### Documentation
- Each component documents its keyboard interactions
- a11y is part of the code review checklist

## Consequences

### Positive
- Components are usable by everyone out of the box
- Prevents a11y debt from accumulating
- Legal compliance in markets that require it

### Negative
- Increases development time for new components (~15-20%)
- Focus trap logic adds complexity to overlay components
