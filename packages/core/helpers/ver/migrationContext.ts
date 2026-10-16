export type CoveMigrationContext = Readonly<{
  startingConfig: any
  isMultiDashboardChild: boolean
}>

export type CoveMigration = (config: any, context?: CoveMigrationContext) => any
