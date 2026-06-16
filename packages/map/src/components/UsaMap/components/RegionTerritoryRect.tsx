import React from 'react'

type RegionTerritoryRectProps = {
  posX?: number
  tName: string
  textColor: string
  strokeColor: string
}

const RegionTerritoryRect: React.FC<RegionTerritoryRectProps> = ({ posX = 0, tName, textColor, strokeColor }) => {
  return (
    <>
      <rect x={posX} width='36' height='24' rx='2' stroke={strokeColor} strokeWidth='1' />
      <text textAnchor='middle' x={36 / 2 + posX} y='17' fill={textColor}>
        {tName}
      </text>
    </>
  )
}

export default RegionTerritoryRect
