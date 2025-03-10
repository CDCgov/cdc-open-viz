import React from 'react'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendShape from '@cdc/core/components/LegendShape'
import getLegendClasses from './helpers/getLegendClasses'

function LegendSubgroup({ data, config, colorScale, formatLabels }) {
  const { innerClasses, containerClasses } = getLegendClasses(config)
  function getSubGroups(data, key: string | undefined) {
    const uniqueGroups = new Set()
    data.forEach(d => {
      config.series.forEach(series => {
        if (d[key] && d[series.dataKey]) {
          uniqueGroups.add(d[key])
        }
      })
    })
    return Array.from(uniqueGroups) as string[]
  }

  const groups: string[] = getSubGroups(data, config.legend.subGroup)
  let className = ['legend-item']

  const classNames = ['flex-row', 'justify-content-start', 'align-items-start', 'flex-wrap']
  if (config.legend.position === 'bottom') {
    classNames.push('d-flex')
  }
  let classNameItem = ['me-5']

  return (
    <div className={classNames.join(' ')}>
      {groups.map(group => (
        <div className={classNameItem.join(' ')} key={group}>
          <h5>{group}</h5>
          <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
            {labels =>
              formatLabels(labels)
                .filter(label => {
                  const subGroupItem = config.legend.subGroup || ''
                  return data.some(
                    d => d[subGroupItem] === group && d[label.text] !== undefined && d[label.text] !== 'NA'
                  )
                })
                .map((label, i) => {
                  return (
                    <LegendItem key={`legend-item-${i}`} tabIndex={0}>
                      <LegendShape shape={config.legend.style === 'boxes' ? 'square' : 'circle'} fill={label.value} />
                      <LegendLabel align='left' margin='0'>
                        {label.text}
                      </LegendLabel>
                    </LegendItem>
                  )
                })
            }
          </LegendOrdinal>
        </div>
      ))}
    </div>
  )
}

export default LegendSubgroup
