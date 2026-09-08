import { type ConfigTracking } from '../types/ConfigTracking'

type TrackableConfig = {
  tracking?: ConfigTracking
}

export const markConfigTracking = <TConfig extends TrackableConfig, TField extends keyof ConfigTracking>(
  config: TConfig,
  field: TField,
  value: Required<ConfigTracking>[TField]
): TConfig & { tracking: ConfigTracking } => ({
  ...config,
  tracking: {
    ...config.tracking,
    [field]: value
  }
})
