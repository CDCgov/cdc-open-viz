export const drawCircle = (circle, context, state) => {
  const percentOfOriginalSize = 0.75
  const scaleVal = 1
  const adjustedGeoRadius =
    state.mapPosition.zoom > 1
      ? Number(circle.geoRadius * scaleVal) * percentOfOriginalSize
      : circle.geoRadius * scaleVal
  context.lineWidth = 1
  context.fillStyle = circle.color
  context.beginPath()
  context.arc(circle.x, circle.y, adjustedGeoRadius, 0, 2 * Math.PI)
  context.fill()
  context.stroke()
}
export const drawSquare = (square, context, state) => {
  const percentOfOriginalSize = 0.75
  const scaleVal = 1.75
  const sideLength = square.size * scaleVal

  const adjustedSize = state.mapPosition.zoom > 1 ? sideLength * percentOfOriginalSize : sideLength

  context.lineWidth = square.lineWidth
  context.fillStyle = square.color
  context.beginPath()

  const halfSize = adjustedSize / 2
  const topLeftX = square.x - halfSize
  const topLeftY = square.y - halfSize

  context.rect(topLeftX, topLeftY, adjustedSize, adjustedSize)
  context.fill()
  context.stroke()
}

export const drawDiamond = (diamond, context, state) => {
  const percentOfOriginalSize = 0.75
  const scaleVal = 2.2
  const fullSize = diamond.size * scaleVal

  const adjustedSize = state.mapPosition.zoom > 1 ? fullSize * percentOfOriginalSize : fullSize

  context.lineWidth = diamond.lineWidth
  context.fillStyle = diamond.color
  context.beginPath()

  // Calculate the vertices of the diamond

  const Ax = diamond.x
  const Ay = diamond.y - adjustedSize / 2

  // Vertex B (right vertex)
  const Bx = diamond.x + adjustedSize / 2
  const By = diamond.y

  // Vertex C (bottom vertex)
  const Cx = diamond.x
  const Cy = diamond.y + adjustedSize / 2

  // Vertex D (left vertex)
  const Dx = diamond.x - adjustedSize / 2
  const Dy = diamond.y

  // Draw the diamond
  context.moveTo(Ax, Ay)
  context.lineTo(Bx, By)
  context.lineTo(Cx, Cy)
  context.lineTo(Dx, Dy)
  context.closePath()
  context.fill()
  context.stroke()
}
export const drawTriangle = (triangle, context, state) => {
  const percentOfOriginalSize = 0.75
  const scaleVal = 2.2
  const baseLength = triangle.size * scaleVal

  // Adjust the size
  const adjustedSize = state.mapPosition.zoom > 1 ? baseLength * percentOfOriginalSize : baseLength

  // Calculate height
  const height = (adjustedSize * Math.sqrt(3)) / 2

  context.lineWidth = triangle.lineWidth
  context.fillStyle = triangle.color
  context.beginPath()

  // Calculatef the triangle
  const Ax = triangle.x
  const Ay = triangle.y - height / 2

  const Bx = triangle.x - adjustedSize / 2
  const By = triangle.y + height / 2

  const Cx = triangle.x + adjustedSize / 2
  const Cy = By

  // Draw the triangle
  context.moveTo(Ax, Ay)
  context.lineTo(Bx, By)
  context.lineTo(Cx, Cy)
  context.closePath()
  context.fill()
  context.stroke()
}
export const drawStar = (star, context, state) => {
  const percentOfOriginalSize = 0.75
  const scaleVal = 2.2
  const spikes = star.spikes
  const outerRadius = star.outerRadius * scaleVal
  const innerRadius = star.innerRadius * scaleVal

  const adjustedOuterRadius = state.mapPosition.zoom > 1 ? outerRadius * percentOfOriginalSize : outerRadius
  const adjustedInnerRadius = state.mapPosition.zoom > 1 ? innerRadius * percentOfOriginalSize : innerRadius

  context.lineWidth = star.lineWidth
  context.fillStyle = star.color
  context.beginPath()

  let rot = (Math.PI / 2) * 3
  let step = Math.PI / spikes

  // Starting coordinates for the first point
  let x = star.x
  let y = star.y
  context.moveTo(x, y - adjustedOuterRadius)

  for (let i = 0; i < spikes; i++) {
    x = star.x + Math.cos(rot) * adjustedOuterRadius
    y = star.y + Math.sin(rot) * adjustedOuterRadius
    context.lineTo(x, y)
    rot += step

    x = star.x + Math.cos(rot) * adjustedInnerRadius
    y = star.y + Math.sin(rot) * adjustedInnerRadius
    context.lineTo(x, y)
    rot += step
  }

  context.lineTo(star.x, star.y - adjustedOuterRadius)
  context.closePath()
  context.fill()
  context.stroke()
}

export const drawPin = (pin, ctx, state) => {
  const scaleVal = 10
  const percentOfOriginalSize = 0.75
  const baseSize = pin.size * scaleVal
  const size = state.mapPosition.zoom > 1 ? baseSize * percentOfOriginalSize : baseSize

  ctx.save()
  ctx.translate(pin.x, pin.y)
  ctx.scale(size / baseSize, size / baseSize)

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.bezierCurveTo((2 * size) / 100, (-10 * size) / 100, (-20 * size) / 100, (-25 * size) / 100, 0, (-30 * size) / 100)
  ctx.bezierCurveTo((20 * size) / 100, (-25 * size) / 100, (-2 * size) / 100, (-10 * size) / 100, 0, 0)
  ctx.fillStyle = pin.color
  ctx.fill()
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 1
  ctx.stroke()

  // Draw the circle on top of the pin
  ctx.beginPath()
  ctx.arc(0, (-21 * size) / 100, (3 * size) / 100, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()

  ctx.restore()
}

export const drawShape = (shape, context, state, additionalParams) => {
  const shapeMap = {
    circle: drawCircle,
    square: drawSquare,
    diamond: drawDiamond,
    triangle: drawTriangle,
    star: drawStar,
    pin: drawPin
  }

  const drawFunction = shapeMap[shape.type]

  if (drawFunction) {
    drawFunction(shape, context, state, additionalParams)
  } else {
    console.error('Shape type not recognized or draw function not available:', shape.type)
  }
}

export const createShapeProperties = (type, pixelCoords, legendValues, state, geoRadius) => {
  const baseProps = {
    x: pixelCoords[0],
    y: pixelCoords[1],
    color: legendValues[0],
    size: geoRadius,
    lineWidth: 1
  }

  switch (type) {
    case 'circle':
      return { ...baseProps, geoRadius: geoRadius, type: 'circle' }
    case 'pin':
      return { ...baseProps, type: 'pin' }
    case 'square':
      return { ...baseProps, type: 'square' }
    case 'triangle':
      return { ...baseProps, type: 'triangle' }
    case 'diamond':
      return { ...baseProps, type: 'diamond' }
    case 'star':
      return {
        ...baseProps,
        spikes: 5,
        outerRadius: state.visual.geoCodeCircleSize / 3,
        innerRadius: (state.visual.geoCodeCircleSize / 3) * 2,
        type: 'star'
      }
    default:
      return null
  }
}
