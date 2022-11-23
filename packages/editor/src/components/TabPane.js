import React from 'react'

const TabPane = ({ children, className = '' }) => <div className={`tab-content ${className}`}>{children}</div>

export default TabPane
