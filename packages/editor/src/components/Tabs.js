import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <nav>
        <ul className="nav nav-pills nav-fill">
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
    </div>
  );
};

export default Tabs;
