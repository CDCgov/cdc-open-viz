import Responsive from './components/ResponsiveWrapper/Responsive'
import Sidebar from './components/Sidebar'
import VisualizationWrapper from './components/Visualization'
import VisualizationError from './components/VisualizationError'
import Content from './components/ContentWrapper'
import Title from './components/Title'
import VisualizationConfirmation from './components/VisualizationConfirmation'
import IntroText from './components/IntroText'
import Subtext from './components/Subtext'

const Layout = {
  Responsive,
  Sidebar,
  Subtext,
  VisualizationWrapper,
  VisualizationError,
  VisualizationConfirmation,
  Content,
  Title,
  IntroText
}

export const ChartLayoutComponent = ({ chartLayoutProps, editorPanel, isEditor, children }) => {
  const {
    config,
    currentViewport,
    outerContainerRef,
    imageId,
    updateConfig,
    missingRequiredSections,
    title,
    isDashboard,
    handleChartAriaLabels
  } = chartLayoutProps

  // use editorPanel as react component
  const EditorPanel = editorPanel
  return (
    <Layout.VisualizationWrapper
      config={config}
      isEditor={isEditor}
      currentViewport={currentViewport}
      ref={outerContainerRef}
      imageId={imageId}
      showEditorPanel={config?.showEditorPanel}
    >
      <EditorPanel isEditor={isEditor} />
      <Layout.Responsive isEditor={isEditor}>
        <Layout.VisualizationConfirmation
          config={config}
          updateConfig={updateConfig}
          missingRequiredSections={missingRequiredSections}
        />
        <Layout.VisualizationError config={config} isEditor />
        <Layout.Content
          config={config}
          ariaLabel={handleChartAriaLabels(config)}
          missingRequiredSections={missingRequiredSections}
          newViz={config.newViz}
        >
          <Layout.Title
            showTitle={config.showTitle}
            isDashboard={isDashboard}
            title={title}
            superTitle={config.superTitle}
            classes={['chart-title', `${config.theme}`, 'cove-component__header']}
            style={undefined}
          />
          <Layout.IntroText config={config} />
          {children}
        </Layout.Content>
      </Layout.Responsive>
    </Layout.VisualizationWrapper>
  )
}

export default Layout
