import React from 'react'
import PropTypes from 'prop-types'

import Accordion from './ui/Accordion'

const Editor = ({displayPanel, content, Confirm, Error, onBackClick, config, children}) => {

  return (
    <div className={`cove-editor${displayPanel ? ' panel-shown' : ''}`}>
      {/* TODO: COVE Refactor - Change other component's config.newViz to check for undefined vs self? */}
      {config.newViz && <Confirm/>}
      <button className={`cove-editor__toggle` + (!displayPanel ? ` collapsed` : ``)}
              title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}/>
      <section className="cove-editor__panel">
        <div className="cove-editor__panel-container">
          {/* TODO: COVE Refactor - Change below headers to be imported component? */}
          <h2 className="cove-editor__heading" aria-level="2" role="heading">Configure Chart</h2>
          <section className="cove-editor__panel-config">
            <Accordion>
              <Accordion.Section label="Global">
                Test data
              </Accordion.Section>
              {children}
            </Accordion>
          </section>
        </div>
      </section>
      <div className="cove-editor__content">
        <div className="cove-editor__content-wrap">
          {undefined === config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error/>}
          {content}
        </div>
      </div>
    </div>
  )
}

Editor.propTypes = {
  displayPanel: PropTypes.bool
}

export default Editor
