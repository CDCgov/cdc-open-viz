export default {
  type: 'schedule-table',
  visualizationType: 'Schedule Table',
  title: 'Schedule Table',
  showTitle: true,
  data: [],
  dataUrl: '',
  matrix: {
    rowKey: '',
    columnKey: '',
    valueKey: '',
    displayKey: '',
    notesKey: ''
  },
  columnOrder: [],
  recommendations: [
    {
      value: 'recommended',
      label: 'Recommended for all persons in this category',
      color: '#ffc107',
      symbol: '■'
    },
    {
      value: 'risk-based',
      label: 'Recommended based on additional risk factors or indications',
      color: '#9c27b0',
      symbol: '●'
    },
    {
      value: 'shared-decision',
      label: 'Based on shared clinical decision-making',
      color: '#03a9f4',
      symbol: '▲'
    },
    {
      value: 'no-guidance',
      label: 'No guidance or not applicable',
      color: '#e0e0e0',
      symbol: ''
    }
  ],
  table: {
    caption: '',
    showLegend: true,
    legendPosition: 'top',
    stickyHeaders: true,
    cellMinWidth: 150,
    showNotesLinks: true,
    notesLinkText: 'See Notes'
  },
  filters: [],
  footnotes: [],
  general: {
    showTitle: true,
    border: true,
    accent: false,
    background: true
  },
  runtime: {
    uniqueId: null,
    editorErrorMessage: ''
  },
  theme: 'theme-blue'
}
