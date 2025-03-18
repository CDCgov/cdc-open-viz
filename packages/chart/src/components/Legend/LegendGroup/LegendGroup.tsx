import React, { useContext } from 'react'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendShape from '@cdc/core/components/LegendShape'
import ConfigContext from '../../../ConfigContext'
import _ from 'lodash'
import './LegendGroup.styles.scss'

interface LegendGroup {
  formatLabels: Function
}
const LegendGroup = ({ formatLabels }) => {
  const {
    highlight,
    seriesHighlight,
    colorScale,
    transformedData: data,
    config,
    currentViewport
  } = useContext(ConfigContext)

  const getSubGroups = (data, key: string | undefined) => {
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

  const classNames = ['legend-group', 'container', config.legend.position, currentViewport, 'row']

  const gridCol =
    currentViewport === 'xs'
      ? 'col-12'
      : currentViewport === 'sm'
      ? 'col-6'
      : currentViewport === 'md'
      ? 'col-4'
      : 'col-3'

  const isSigleCol = config.legend.position === 'bottom' || config.legend.position === 'top' ? gridCol : 'col-12'

  let classNameItem = ['legend-group group-item', isSigleCol]

  return (
    <div className={classNames.join(' ')}>
      {groups.map(group => {
        return (
          <div className={classNameItem.join(' ')} key={group}>
            <div>
              <p className='legend-group group-label'>{group}</p>
            </div>
            <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
              {labels =>
                formatLabels(labels)
                  .filter(label => {
                    const groupBy = config.legend.groupBy || ''
                    return data.some(d => d[groupBy] === group && d[label.text] !== undefined && d[label.text] !== 'NA')
                  })

                  .map((label, i) => {
                    console.log(label, 'label')
                    let className = ['legend-group', 'group-item']
                    if (seriesHighlight.length) {
                      if (!seriesHighlight.includes(label.datum)) {
                        className.push('inactive')
                      } else {
                        className.push('highlighted')
                      }
                    }

                    return (
                      <LegendItem
                        alignItems='start'
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

export default LegendGroup
