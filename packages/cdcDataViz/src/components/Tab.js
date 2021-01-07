/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import TabPane from './TabPane';

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState('');
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className="tabs">
      <ul className="nav nav-pills nav-fill">
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? 'nav-item active' : 'nav-item'}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* <ul className="nav nav-pills nav-fill">
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item.name)}
            key={item.name}
            className={item === active ? `nav-item active ${item.dataicon}` : `nav-item ${item.dataicon}`}
          >
            {item.name}
          </li>
        ))}
      </ul> */}
      <div className="tab-content">
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div className="tab-child">{childContent[key]}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children(props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, (child) => {
      if (child.type !== TabPane) {
        error = new Error(
          `\`${componentName}\` children should be of type \`TabPane\`.`
        );
      }
    });
    return error;
  }
};

export default Tabs;
