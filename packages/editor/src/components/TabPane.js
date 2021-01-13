import React from 'react';

const TabPane = ({ children, className }) => <div className={`${className} tab-content`}>{children}</div>;

export default TabPane;
