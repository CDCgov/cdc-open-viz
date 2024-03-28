import { PropsWithChildren, ReactNode } from 'react'

const ScreenReaderText = (props: PropsWithChildren<{ as: keyof JSX.IntrinsicElements; children?: ReactNode }>) => {
  const Component = props.as
  return <Component className='cdcdataviz-sr-only'>{props.children}</Component>
}

export default ScreenReaderText
