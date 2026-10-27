const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export const getSankeyTooltip = (label: string, value?: string) => `<div class="sankey-chart__tooltip">
  <span class="sankey-chart__tooltip--tooltip-header">${escapeHtml(label)}</span>
  ${value ? `<span>${escapeHtml(value)}</span>` : ''}
</div>`
