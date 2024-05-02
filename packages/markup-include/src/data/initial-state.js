export default {
  contentEditor: {
    inlineHTML: '<h2>Inline HTML</h2> <div>{{state}</div> <div>{{rate}</div>',
    markupVariables: [
      {
        variableName: '',
        variableTag: '',
        columnName: '',
        conditions: [
          {
            columnName: '',
            isOrIsNotEqualTo: 'is',
            value: ''
          }
        ]
      }
    ],
    showHeader: true,
    srcUrl: '#example',
    title: 'Markup Include',
    useInlineHTML: true
  },
  newViz: true,
  theme: 'theme-blue',
  runtime: null,
  visual: {
    border: false,
    accent: false,
    background: false,
    hideBackgroundColor: false,
    borderColorTheme: false
  }
}
