import React, { useContext } from 'react'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendShape from '@cdc/core/components/LegendShape'
import getLegendClasses from './helpers/getLegendClasses'
import ConfigContext, { ChartDispatchContext } from '../../ConfigContext'
import _ from 'lodash'

function LegendSubgroup({ data, config, colorScale, formatLabels }) {
  const dispatch = useContext(ChartDispatchContext)
  const { highlight, seriesHighlight } = useContext(ConfigContext)
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

  const groups: string[] = getSubGroups(data, config.legend.groupBy)

  const classNames = ['legend-group', `${config.legend.position}`]
  // if (config.legend.position === 'bottom' || config.legend.position === 'top') {
  //   classNames.push('d-flex')
  // }
  let classNameItem = ['legend-group group-item']

  return (
    <div className={classNames.join(' ')}>
      {groups.map(group => {
        return (
          <div style={{ cursor: 'pointer' }} className={classNameItem.join(' ')} key={group}>
            <div className='text-left'>
              <p>{group}</p>
            </div>
            <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
              {labels =>
                formatLabels(labels)
                  .filter(label => {
                    const groupBy = config.legend.groupBy || ''
                    return data.some(d => d[groupBy] === group && d[label.text] !== undefined && d[label.text] !== 'NA')
                  })

                  .map((label, i) => {
                    let className = []
                    if (seriesHighlight.length) {
                      if (!seriesHighlight.includes(label.datum)) {
                        className.push('inactive')
                      } else {
                        className.push('highlighted')
                      }
                    }

                    return (
                      <LegendItem
                        className={className.join(' ')}
                        onClick={e => {
                          e.preventDefault()
                          highlight(label)
                        }}
                        key={`legend-item-${i}`}
                        tabIndex={0}
                      >
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
        )
      })}
    </div>
  )
}

export default LegendSubgroup
