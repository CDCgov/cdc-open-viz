import React from 'react'
import Layout from './index'

type LayoutTemplateProps = {
  config: any // todo
  editorPanel: any
  children: any
  isEditor: boolean
  isDashboard: boolean
  missingRequiredSections: any
}

const LayoutTemplate: ReactFC<LayoutTemplateProps> = ({
  children,
  config,
  editorPanel,
  handleAriaLabels,
  imageId,
  isDashboard,
  isEditor,
  missingRequiredSections,
  outerContainerRef,
  updateConfig,
  viewport
}) => {
  console.log('config', config)
  if (!config) return <></>
  const EditorPanel = editorPanel

  const handleRequiredSections = () => {
    if (config.type === 'chart') {
      return !missingRequiredSections() && !config?.newViz
    }

    if (config.type === 'map') {
    }

    return true
  }

  return (
    <Layout.VisualizationWrapper
      config={config}
      isEditor={isEditor}
      currentViewport={viewport}
      ref={outerContainerRef}
      imageId={imageId}
      showEditorPanel={config?.showEditorPanel}
    >
      {isEditor && <EditorPanel />}
      {config && config.type === 'chart' && config.newViz && (
        <Layout.ConfirmSetup
          newViz={config.newViz}
          missingRequiredSections={config.type === 'chart' ? missingRequiredSections : () => false}
          updateConfig={updateConfig}
          config={config}
        />
      )}
      {config && config.runtime && config.runtime.editorErrorMessage && <Layout.ErrorSetup config={config} />}
      <Layout.Responsive isEditor={isEditor}>
        {handleRequiredSections() && (
          <Layout.ContentWrapper
            config={config}
            ariaLabel={handleAriaLabels(config)}
            missingRequiredSections={config.type === 'chart' ? missingRequiredSections : () => false}
            newViz={config?.newViz}
          >
            <Layout.Title
              showTitle={config?.showTitle ? config.showTitle : true}
              isDashboard={isDashboard}
              title={config?.type === 'map' ? config.general.title : config.title}
              superTitle={config.superTitle}
              classes={['chart-title', `${config.theme}`, 'cove-component__header']}
              style={undefined}
            />
            {children}
          </Layout.ContentWrapper>
        )}
      </Layout.Responsive>
    </Layout.VisualizationWrapper>
  )
}

export default LayoutTemplate
