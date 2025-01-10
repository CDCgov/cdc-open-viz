import fs from 'fs/promises'
import { defineStories } from '../../../../.storybook/dynamic/index'
import { dedent } from 'ts-dedent'
import { basename, join } from 'path'

export default defineStories({
  baseCsf: dedent`
    import { CdcMap } from '@cdc/map'
    export default {
      title:'Components/Templates/Map/Respiratory Virus',
      component: CdcMap
    }
  `,
  stories: async () => {
    const result = {}
    const respiratoryDir = join(__dirname, '_mock/respiratory-virus')
    const configs = (await fs.readdir(respiratoryDir)).filter(f => f.endsWith('.json'))

    await Promise.all(
      configs.map(async file => {
        try {
          const config = JSON.parse(await fs.readFile(join(respiratoryDir, file), 'utf-8'))
          const key = basename(file, '.json')
          result[key] = {
            args: {
              config
            }
          }
        } catch (e) {
          console.error(file, e)
        }
      })
    )
    return result
  }
})
