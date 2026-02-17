# Line Chart Label Positioning Algorithm

## Overview

This algorithm intelligently positions data point labels on line charts to prevent overlap with the chart lines themselves. It uses a quadrant-based system that analyzes line segment angles to determine optimal label placement.

The algorithm is based on standard unit circle angle measurements (0° = right/east, 90° = up/north, 180° = left/west, 270° = down/south) and accounts for SVG's inverted y-axis.

## Algorithm Design

### Quadrant System

Line segments are classified into quadrants based on their angle in the standard unit circle:

- **Quadrant 1 (Q1)**: 1° - 89° (steep upward slope, right and up)
- **Quadrant 2 (Q2)**: 91° - 179° (gentle downward slope, left and up)
- **Quadrant 3 (Q3)**: 181° - 269° (steep downward slope, left and down)
- **Quadrant 4 (Q4)**: 271° - 359° (gentle upward slope, right and down)

### Constants

- **Vertical Offset**: 9px (0.5rem) - used for vertical spacing
- **Horizontal Offset**:
  - **4.5px** (0.25rem) for first/last points
  - **9px** (0.5rem) for middle points (more separation needed)
- **Near X-Axis Threshold**: ≤20px from the bottom of the chart

### Data Point Classification

1. **First Point**: Only has an **ending segment** (line going OUT of the point, shown in pink)
2. **Last Point**: Only has a **starting segment** (line coming INTO the point, shown in purple)
3. **Middle Points**: Have both **starting** and **ending** segments

## Positioning Rules

### First Data Point Rules

Only has ending segment (line going out):

| Ending Segment Range | Near X-Axis (≤20px) | Position |
|---------------------|---------------------|----------|
| 180°–269° (Q3) | Any | 9px above |
| 91°–179° (Q2) | NO | 9px below |
| 91°–179° (Q2) | YES | 9px above, 4.5px left |
| 269°–360° (Q4) | Any | 9px above |
| Other | Any | 9px above (default) |

### Last Data Point Rules

Only has starting segment (line coming in):

| Starting Segment Range | Near X-Axis (≤20px) | Position |
|-----------------------|---------------------|----------|
| 269°–360° (Q4) | Any (even near x-axis) | 9px above |
| 1°–89° (Q1) | NO | 9px below |
| 0°–89° (Q1) | YES | 9px above, 4.5px right |
| Other | Any | 9px above (default) |

### Middle Data Point Rules

Has both starting and ending segments:

#### Starting Q1 + Ending Q2 (Peak/Local Maximum)

| Angle Between Segments | Near X-Axis | Additional Condition | Position |
|------------------------|-------------|---------------------|----------|
| 1°–179° | NO | - | 9px below |
| ≥135° | YES | - | 9px above (centered) |
| <135° | YES | Ending angle ≥68° | 9px above, 9px right |
| <135° | YES | Ending angle <68° | 9px above, 9px left |

#### Starting Q4 + Ending Q3

| Angle Between Segments | Position |
|------------------------|----------|
| 0°–180° | 9px above |

#### Starting Q4 + Ending Q2

| Angle Between Segments | Position |
|------------------------|----------|
| 92°–269° | 9px above, 9px left |

#### Starting Q1 + Ending Q3

| Angle Between Segments | Position |
|------------------------|----------|
| 92°–269° | 9px above, 9px right |

#### Default for All Other Middle Point Cases

Position: **9px above** (centered)

## API Reference

### Primary Function

```typescript
function getLabelPositionForDataPoint(
  dataPoints: Point[],
  dataIndex: number,
  chartHeight: number
): LabelOffset

interface Point {
  x: number  // SVG x-coordinate
  y: number  // SVG y-coordinate
}

interface LabelOffset {
  dx: number              // Horizontal offset (positive = right)
  dy: number              // Vertical offset (positive = down)
  textAnchor?: 'start' | 'middle' | 'end'
  verticalAnchor?: 'start' | 'middle' | 'end'
}
```

### Alternative Function (Direct Angle Input)

```typescript
function calculateLabelOffset(
  pointIndex: number,
  pointY: number,
  startingSegmentAngle: number | null,  // null for first point
  endingSegmentAngle: number | null,    // null for last point
  xAxisY: number
): { offsetX: number; offsetY: number }
```

**Parameters:**
- `pointY`: Y-coordinate of the point in SVG coordinates
- `startingSegmentAngle`: Angle of line segment coming INTO point (null for first point)
- `endingSegmentAngle`: Angle of line segment going OUT OF point (null for last point)
- `xAxisY`: Y-coordinate of x-axis for "near axis" calculation
- Returns: `offsetX` (positive = right), `offsetY` (positive = down)

### Utility Functions

```typescript
// Calculate angle between two points (returns 0°-360°)
function calculateAngle(fromPoint: Point, toPoint: Point): number

// Determine which quadrant an angle belongs to
function getQuadrant(angle: number): Quadrant

// Calculate angle between two segments
function calculateAngleBetweenSegments(
  startingSegmentAngle: number,
  endingSegmentAngle: number
): number

// Check if point is near x-axis (≤20px from bottom)
function isNearXAxis(yPosition: number, chartHeight: number): boolean
```

## Usage Examples

### Basic Integration

```typescript
import { getLabelPositionForDataPoint } from './labelPositioning'

// Build array of point coordinates from your data
const dataPoints = sortedData
  .filter(item => isNumber(item[seriesKey]))
  .map(item => ({
    x: xScale(item.xValue),
    y: yScale(item.yValue)
  }))

// For each data point, calculate label position
dataPoints.forEach((point, index) => {
  const labelOffset = getLabelPositionForDataPoint(
    dataPoints,
    index,
    Number(chartHeight)
  )

  // Render label with offset
  <Text
    x={point.x + labelOffset.dx}
    y={point.y + labelOffset.dy}
    textAnchor={labelOffset.textAnchor || 'middle'}
    verticalAnchor={labelOffset.verticalAnchor || 'middle'}
  >
    {formatNumber(data[index].value)}
  </Text>
})
```

### Using Pre-Calculated Angles

```typescript
import { calculateLabelOffset } from './labelPositioning'

// If you already have angles calculated
const startAngle = 45   // Coming from bottom-right
const endAngle = 135    // Going to top-left
const pointY = 200
const xAxisY = 450

const offset = calculateLabelOffset(
  5,           // Point index (for determining first/last/middle)
  pointY,
  startAngle,
  endAngle,
  xAxisY
)

// offset.offsetX and offset.offsetY contain the pixel offsets
```

## Testing

### Unit Tests

Run tests with: `npm test labelPositioning.test.ts`

Tests verify:
- Angle calculations (0°, 90°, 180°, 270°, and diagonals)
- Quadrant classification
- Near x-axis detection
- All first point rules
- All last point rules
- All middle point rules including Q1→Q2 special cases
- Edge cases (vertical/horizontal lines, boundary angles)

### Visual Testing in Storybook

Navigate to: **Components → Templates → Chart → QuadrantAngles**

Available test scenarios:
- **All Quadrants** - Combined view of all angles
- **Q1 Steep Upward** - Isolated testing of 1°-89° angles
- **Q2 Gentle Downward** - Isolated testing of 91°-179° angles
- **Q3 Steep Downward** - Isolated testing of 181°-269° angles
- **Q4 Gentle Upward** - Isolated testing of 271°-359° angles
- **Near Zero Rise** - Edge case near 0°/360°
- **Near Zero Fall** - Edge case near 180°

## Implementation Details

### Angle Calculation

The algorithm uses `Math.atan2(-dy, dx)` to calculate angles:
- Negative `dy` accounts for SVG's inverted y-axis
- Result is normalized to [0, 360) range
- Standard unit circle convention: 0° = right, 90° = up, 180° = left, 270° = down

### Coordinate Systems

**SVG Coordinates:**
- x increases rightward
- y increases downward (inverted from Cartesian)

**Angle Measurement:**
- Standard unit circle (0° = east, counterclockwise)
- Algorithm internally converts SVG coordinates to standard angles

### Near X-Axis Detection

A point is considered "near x-axis" when:
```typescript
(chartHeight - pointY) <= 20
```

Where `chartHeight` is the bottom of the chart (y-axis maximum in SVG coords).

## Performance Considerations

1. **Per-Point Calculation**: Algorithm runs for each data point on every render
2. **Optimization Strategies**:
   - Consider memoizing results for static datasets
   - Pre-calculate all points during data transformation
   - Use `React.useMemo` for data point arrays

## Constraints and Limitations

1. **No Label-to-Label Collision Detection**: Algorithm only prevents line overlap, not label overlap
2. **Fixed Offsets**: Doesn't adapt to label text width/height
3. **Single Series**: Doesn't consider proximity to other series' lines
4. **Static Rules**: No learning or adaptation based on actual rendered results

## Future Enhancements

- [ ] Dynamic collision detection between labels
- [ ] Adaptive offset scaling based on chart dimensions
- [ ] Support for rotated/angled labels
- [ ] Label width-aware positioning
- [ ] Multi-series collision avoidance
- [ ] Configurable offset constants
- [ ] Label priority system for dense datasets
