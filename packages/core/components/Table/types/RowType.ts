export enum RowType {
  row_group = 'row_group',
  total = 'total',
  row_group_total = 'row_group_total'
}

// The only distinction between total and row_group_total is the way the UI renders it.
// They function otherwise the same a regular row.
