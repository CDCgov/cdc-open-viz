# @cdc/schedule-table

A React component for displaying color-coded recommendation schedules and matrices. Perfect for vaccine schedules, screening guidelines, treatment protocols, and risk assessment tables.

## Installation

```bash
npm install @cdc/schedule-table
# or
yarn add @cdc/schedule-table
```

## Usage

```jsx
import CdcScheduleTable from '@cdc/schedule-table'

const MyComponent = () => {
  return <CdcScheduleTable configUrl="/path/to/config.json" />
}
```

## Configuration

The schedule table uses a JSON configuration with long-format data:

```json
{
  "type": "schedule-table",
  "visualizationType": "Schedule Table",
  "title": "Recommended Adult Immunization Schedule",
  "matrix": {
    "rowKey": "vaccine",
    "columnKey": "ageGroup",
    "valueKey": "recommendation",
    "displayKey": "displayText",
    "notesKey": "notesUrl"
  },
  "columnOrder": ["19-26 years", "27-49 years", "50-64 years", "≥65 years"],
  "recommendations": [
    {
      "value": "recommended",
      "label": "Recommended for all persons",
      "color": "#ffc107"
    }
  ],
  "data": [
    {
      "vaccine": "COVID-19",
      "ageGroup": "19-26 years",
      "recommendation": "recommended",
      "displayText": "1 or more doses",
      "notesUrl": "https://example.com/notes"
    }
  ]
}
```

## Features

- Color-coded cells based on recommendation categories
- Flexible matrix structure (rows and columns configurable)
- Support for external note links
- Responsive design
- Sticky headers
- Legend display (top or bottom)
- Reusable for multiple use cases (vaccines, screenings, treatments, etc.)

## Use Cases

- **Vaccine Schedules**: Age-based vaccination recommendations
- **Screening Guidelines**: Age/risk-based screening protocols
- **Treatment Protocols**: Condition-severity treatment guidance
- **Risk Assessment**: Color-coded risk matrices

## Props

| Prop | Type | Description |
|------|------|-------------|
| `config` | `Config` | Configuration object |
| `configUrl` | `string` | URL to fetch configuration from |
| `isDashboard` | `boolean` | Whether component is in a dashboard |
| `isEditor` | `boolean` | Whether to show the editor panel |
| `setConfig` | `function` | Callback to update parent config |

## Development

```bash
# Start development server
npm start

# Build package
npm run build

# Run tests
npm test
```

## License

Apache-2.0
