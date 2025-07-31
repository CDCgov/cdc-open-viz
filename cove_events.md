# COVE Analytics Implementation Guide
## Overview
All analytics events are published using cove:analytics namespace and handled by a separate analytics module.

### Implementation
1. Publishing Events (in your components)
Use existing publish function with cove:analytics namespace
```.js
publish('cove:analytics', {
  event_type: 'legend_item_toggled',
  action: 'highlight',
})
```

## Event Documentation
// Replace with csv when finished