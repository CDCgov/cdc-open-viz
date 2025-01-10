import { parseModule } from 'magicast'
import type { DynamicConfig, StoryConfig } from './types'

const prepareStory = (story: StoryConfig) => {
  // FIXME: need arrow function support
  // const { decorators, loaders, render, play, ...rest } = story;
  // const prepared = { ...rest } as any;
  // if (decorators) prepared.decorators = decorators.map((d) => parseExpression(d));
  // if (loaders) prepared.loaders = loaders.map((l) => parseExpression(l));
  // if (render) prepared.render = parseExpression(render);
  // if (play) prepared.play = parseExpression(play);
  return story
}

export interface CompileOptions {}

export const compile = async (config: DynamicConfig, options?: CompileOptions) => {
  const { baseCsf } = config
  const stories = await config.stories()

  const mod = parseModule(baseCsf)
  Object.entries(stories).forEach(([key, story]) => {
    mod.exports[key] = prepareStory(story)
  })

  const { code } = mod.generate()
  return code
}
