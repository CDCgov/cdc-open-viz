import React from 'react'
import Layout from './index'
import Waiting from '../Waiting'

type LayoutTemplateProps = {
  config: any // todo
  editorPanel: any
  children: any
  isEditor: boolean
  isDashboard: boolean
  missingRequiredSections: any
  children: React.ReactNode
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
  viewport,
  requiredColumns,
  displayPanel
}) => {
  if (!config) return <></>

  const handleRequiredSections = () => {
    if (config.type === 'chart') {
      return !missingRequiredSections() && !config?.newViz
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
      {isEditor && editorPanel}
      {/* CHARTS > CONFIRM SETUP */}
      {config && config.type === 'chart' && config.newViz && (
        <Layout.ConfirmSetup
          newViz={config.newViz}
          missingRequiredSections={missingRequiredSections}
          updateConfig={updateConfig}
          config={config}
        />
      )}
      {/* CHARTS & MAPS > ERROR */}
      {(config.type === 'chart' && config?.runtime?.editorErrorMessage) ||
      (config.type === 'map' && config?.runtime?.editorErrorMessage.length > 0) ? (
        <Layout.ErrorSetup config={config} />
      ) : null}
      {/* MAPS > REQUIRED COLUMNS */}
      {requiredColumns && config.type === 'map' && (
        <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
      )}
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
              superTitle={config.type === 'map' ? config.general.superTitle : config.superTitle}
              config={config}
            />
            {children}
          </Layout.ContentWrapper>
        )}
      </Layout.Responsive>
    </Layout.VisualizationWrapper>
  )
}

export default LayoutTemplate
