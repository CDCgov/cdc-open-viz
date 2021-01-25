import React, { useState } from 'react';

const Tabs = ({ children, startingTab = 0, className }) => {
  const [active, setActive] = useState(startingTab);

  let containerClassName = 'tabs';

  if(className) {
    containerClassName = `tabs ${className}`;
  }

  return (
    <>
      <nav className={containerClassName}>
        <ul className="nav nav-fill">
          {children.map(({props}, i) => (
            <li
              onClick={() => setActive(i)}
              key={props.title}
              className={i === active ? 'nav-item active' : 'nav-item'}
            >
              {props.icon}
              {props.title}
            </li>
          ))}
        </ul>
      </nav>
      {children[active]}
    </>
  );
};

export default Tabs;
