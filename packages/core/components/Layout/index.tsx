import Responsive from './components/Responsive'
import Sidebar from './components/Sidebar'
import VisualizationContainer from './components/VisualizationContainer'
import VisualizationWrapper from './components/Visualization'

export { Responsive, Sidebar, VisualizationContainer, VisualizationWrapper }

/** @deprecated Use named imports instead: `import { Responsive, Sidebar, VisualizationContainer } from '@cdc/core/components/Layout'` */
const Layout = { Responsive, Sidebar, VisualizationWrapper }
export default Layout
