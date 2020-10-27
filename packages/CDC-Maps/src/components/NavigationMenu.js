import React, { useEffect, useState } from 'react';

export default ({
  processedData, navigationHandler, options, columns, displayGeoName
}) => {
  const [activeGeo, setActiveGeo] = useState('');

  const [dropdownItems, setDropdownItems] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (activeGeo !== '') {
      const urlString = processedData[dropdownItems[activeGeo]][columns.navigate.name];

      navigationHandler(urlString);
    }
  };
  let navSelect; let
    navGo;

  switch (options.language) {
    case 'es':
      navSelect = 'Selecciona un Artículo';
      navGo = 'Ir';
      break;
    default:
      navSelect = 'Select an Item';
      navGo = 'Go';
  }

  useEffect(() => {
    const sortedOptions = {};

    const processedDropdown = {};

    Object.keys(processedData).forEach((val) => {
      const fullName = displayGeoName(val);

      processedDropdown[fullName] = val;
    });

    Object.keys(processedDropdown).sort().forEach((key) => {
      sortedOptions[key] = processedDropdown[key];
    });

    setDropdownItems(sortedOptions);

    setActiveGeo(Object.keys(sortedOptions)[0]);
  }, [processedData]);

  return (
    <section className="navigation-menu">
      <form onSubmit={handleSubmit} type="get">
        <label htmlFor="dropdown">
          <h5>{navSelect}</h5>
          <select value={activeGeo} id="dropdown" onChange={(e) => setActiveGeo(e.target.value)}>
            {Object.keys(dropdownItems).map((key, i) => <option key={key} value={key}>{key}</option>)}
          </select>
        </label>
        <input type="submit" value={navGo} className={`${options.headerColor} btn`} id="cdcnavmap-dropdown-go" />
      </form>
    </section>
  );
};
