/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const TabPane = (props) => <div className="tab-pane fade">{props.childern}</div>;
TabPane.propTypes = {
  name: PropTypes.string
};

export default TabPane;
