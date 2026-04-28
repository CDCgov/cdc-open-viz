import React from 'react'
import Button from '@cdc/core/components/elements/Button'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { iconHash } from '../helpers/iconHash'
import { getColumnHasAnyValueSummaryParts, getDashboardConditionSummary } from '../helpers/dashboardConditionUi'
import { DashboardCondition } from '../types/ConfigRow'
import { DashboardConditionModal } from './DashboardConditionModal'

import './dashboard-condition-summary.css'

type DashboardConditionSummaryProps = {
  dashboardCondition: DashboardCondition
  rowIndex: number
  columnIndex?: number
  entryIndex?: number
  className?: string
}

export const DashboardConditionSummary: React.FC<DashboardConditionSummaryProps> = ({
  dashboardCondition,
  rowIndex,
  columnIndex,
  entryIndex,
  className = ''
}) => {
  const { overlay } = useGlobalContext()
  const summary = getDashboardConditionSummary(dashboardCondition)
  const columnHasAnyValueSummaryParts =
    dashboardCondition.operator === 'columnHasAnyValue'
      ? getColumnHasAnyValueSummaryParts(dashboardCondition.columnName)
      : undefined
  const summaryContent = columnHasAnyValueSummaryParts ? (
    <>
      {columnHasAnyValueSummaryParts.prefix}
      <strong>{columnHasAnyValueSummaryParts.columnName}</strong>
      {columnHasAnyValueSummaryParts.suffix}
    </>
  ) : (
    summary
  )

  return (
    <Button
      aria-label={`Configure Dashboard Condition: ${summary}`}
      className={['dashboard-condition-summary', className].filter(Boolean).join(' ')}
      title={summary}
      onClick={() => {
        overlay?.actions.openOverlay(
          <DashboardConditionModal rowIndex={rowIndex} columnIndex={columnIndex} entryIndex={entryIndex} />
        )
      }}
    >
      <span className='dashboard-condition-summary__icon' aria-hidden='true'>
        {iconHash['condition']}
      </span>
      <span className='dashboard-condition-summary__text'>{summaryContent}</span>
    </Button>
  )
}
