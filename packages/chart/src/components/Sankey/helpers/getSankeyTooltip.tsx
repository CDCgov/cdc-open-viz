import ReactDOMServer from 'react-dom/server'
import ColumnList from '../components/ColumnList'

export const getSankeyTooltip = (data: Object, tooltipID: string) => {
  const tooltipVal = `${(data?.tooltips?.find(item => item.node === tooltipID) || {}).value}`
  const tooltipSummary = `${(data?.tooltips?.find(item => item.node === tooltipID) || {}).summary}`
  const tooltipColumn1Label = (data?.tooltips?.find(item => item.node === tooltipID) || {}).column1Label
  const tooltipColumn2Label = (data?.tooltips?.find(item => item.node === tooltipID) || {}).column2Label
  const tooltipColumn1 = (data?.tooltips?.find(item => item.node === tooltipID) || {}).column1
  const tooltipColumn2 = (data?.tooltips?.find(item => item.node === tooltipID) || {}).column2

  const tooltipColumn1Data = ReactDOMServer.renderToString(<ColumnList columnData={tooltipColumn1} />)
  const tooltipColumn2Data = ReactDOMServer.renderToString(<ColumnList columnData={tooltipColumn2} />)

  return `<div class="sankey-chart__tooltip">
    <span class="sankey-chart__tooltip--tooltip-header">${tooltipID}</span>
    <span class="sankey-chart__tooltip--tooltip-header">${tooltipVal}</span>
    <div class="divider"></div>
    <span><strong>Summary: </strong>${tooltipSummary}</span>
    <div class="divider"></div>
    <div class="sankey-chart__tooltip--info-section">
      <div>
        <span><strong>${tooltipColumn1Label}</strong></span>
        ${tooltipColumn1Data}
      </div>
      <div>
        <span><strong>${tooltipColumn2Label}</strong></span>
        ${tooltipColumn2Data}
      </div>
    </div>
  </div>
`
}
