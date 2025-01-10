import type { ArgTypes, Tag } from '@storybook/csf'

type AnyJson = boolean | number | string | null | JsonArray | JsonMap
interface JsonMap {
  [key: string]: AnyJson
}
interface JsonArray extends Array<AnyJson> {}
export type CsfString = string

interface AnnotationsConfig {
  parameters?: JsonMap
  args?: JsonMap
  argTypes?: ArgTypes
  tags?: Tag[]
  // FIXME: need ArrowFunctionExpression in magicast
  // decorators?: JSAnnotation[];
  // loaders?: JSAnnotation[];
  // render?: JSAnnotation;
  // play?: JSAnnotation;
}
export interface MetaConfig extends AnnotationsConfig {
  title?: string
}
export interface StoryConfig extends AnnotationsConfig {
  name?: string
}
export type StoryConfigs = Record<string, StoryConfig>

export interface DynamicConfig {
  baseCsf: CsfString
  stories: () => Promise<StoryConfigs> | StoryConfigs
}
