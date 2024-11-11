interface SankeyTooltipParams {
  tooltipID: string
  tooltipVal: string
  tooltipSummary: string
  tooltipColumn1Label: string
  tooltipColumn1Data: string
  tooltipColumn2Label: string
  tooltipColumn2Data: string
}

export const getSankeyTooltip = ({
  tooltipID,
  tooltipVal,
  tooltipSummary,
  tooltipColumn1Label,
  tooltipColumn1Data,
  tooltipColumn2Label,
  tooltipColumn2Data
}: SankeyTooltipParams) => `
  <div class="sankey-chart__tooltip">
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
