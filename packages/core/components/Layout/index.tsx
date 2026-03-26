import Responsive from './components/Responsive'
import Sidebar from './components/Sidebar'
import VisualizationContainer from './components/VisualizationContainer'
import VisualizationContent from './components/VisualizationContent'
import VisualizationWrapper from './components/Visualization'

export { Responsive, Sidebar, VisualizationContainer, VisualizationContent, VisualizationWrapper }

/** @deprecated Use named imports instead: `import { Responsive, Sidebar, VisualizationContainer, VisualizationContent } from '@cdc/core/components/Layout'` */
const Layout = { Responsive, Sidebar, VisualizationContainer, VisualizationContent, VisualizationWrapper }
export default Layout
