import type { HTMLAttributes } from 'react'

export type PanelHeaderProps = HTMLAttributes<HTMLSpanElement>

const PanelHeader = ({ className, ...props }: PanelHeaderProps) => (
  <span className={['divider-heading', className].filter(Boolean).join(' ')} {...props} />
)

export default PanelHeader
