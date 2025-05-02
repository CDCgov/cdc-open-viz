import React from 'react'
import parse from 'html-react-parser'
import styles from './title.module.css'
import { Visualization } from '../../../types/Visualization'
import { cva } from 'class-variance-authority'
import '@cdc/core/styles/_global-variables.scss'
import { CDC_THEME_COLORS } from '../../../helpers/constants'

export type ThemeVariant = (typeof CDC_THEME_COLORS)[number]

type HeaderProps = {
  title?: string
  superTitle?: string
  classes?: string[]
  style?: React.CSSProperties
  showTitle?: boolean
  ariaLevel?: number
  config: Visualization
  theme: ThemeVariant
}

const Title = (props: HeaderProps) => {
  const { title, superTitle, classes = [], showTitle = true, ariaLevel = 2, theme, style } = props

  // standard classes every component should have
  const baseClasses = [
    styles.coveComponentHeader,
    'mb-3',
    `bg-${theme}-primary`,
    `border-bottom-color-${theme}-secondary`
  ]

  const standard_title_classes = cva(baseClasses, {
    // CDC Variants are handled by utility classes, if we want to add custom themes place them here...
    variants: {
      theme: {
        simple: styles.themeSimple
      }
    },
    defaultVariants: {
      theme: 'blue'
    }
  })

  const titleClasses = `${standard_title_classes({ theme: theme ? theme.toLowerCase() : 'blue' })} ${classes.join(
    ' '
  )}`.trim()

  return (
    title &&
    showTitle && (
      <header className={titleClasses} style={style} aria-level={ariaLevel}>
        {superTitle && <sup>{parse(superTitle)}</sup>}
        <h2>{parse(title)}</h2>
      </header>
    )
  )
}

export default Title
