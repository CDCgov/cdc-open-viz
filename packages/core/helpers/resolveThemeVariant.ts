import { ThemeVariant } from '../components/ui/Title'
import { CDC_THEME_COLORS } from './constants'

export const resolveThemeVariant = (value: string): ThemeVariant => {
  // We create a type guard to ensure we're returning a valid ThemeVariant
  const normalizedValue = value.toLowerCase().replace('theme-', '')

  // Type guard function
  const isThemeVariant = (theme: string): theme is ThemeVariant => {
    return CDC_THEME_COLORS.includes(theme as any)
  }

  if (isThemeVariant(normalizedValue)) {
    return normalizedValue
  }

  return 'blue' as const
}
