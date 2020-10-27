import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default (props) => {
  const {
    legend,
    filters,
    columns,
    announceChange,
    applyColorToLegend,
    changeFilterActive,
    sharing,
    resetLegendToggles,
    setState,
    processedLegend,
    prefix,
    suffix
  } = props;

  const addCommas = (value) => {
    // If value is a number, apply specific formattings
    if (value && columns.primary.hasOwnProperty('useCommas') && columns.primary.useCommas === true) {
      return value.toLocaleString('en-US', { style: 'decimal' });
    }

    return value;
  };

  // Toggles if a legend is active and being applied to the map and data table.
  const toggleLegendActive = (index) => {
    const { data } = processedLegend;

    const newValue = !data[index].disabled;

    let disabledAmt = processedLegend.disabledAmt || 0;

    if (newValue === true) {
      disabledAmt++;
    } else {
      disabledAmt--;
    }

    data[index].disabled = newValue; // Toggle!

    const newObj = {
      ...processedLegend,
      disabledAmt,
      data
    };

    setState(() => ({ processedLegend: newObj }));
  };

  const legendList = processedLegend.data.map((entry, index) => {
    const entryMax = addCommas(entry.max);

    const entryMin = addCommas(entry.min);

    let formattedText = `${prefix + entryMin + suffix} — ${prefix + entryMax + suffix}`;

    // If interval, add some formatting
    if (legend.type === 'equalinterval' && index
      !== processedLegend.data.length - 1) {
      formattedText = `${prefix + entryMin + suffix} — < ${prefix + entryMax + suffix}`;
    }

    const { disabled } = entry;

    if (entry.category) {
      formattedText = prefix + entry.category + suffix;
    }

    if (entry.max === 0 && entry.min === 0) {
      formattedText = '0';
    }

    let legendLabel = formattedText;

    if (entry.hasOwnProperty('special')) {
      legendLabel = entry.value || entry.category;
    }

    return (
      <li
        key={index}
        title={`Legend item ${legendLabel} - Click to disable`}
        onClick={() => { toggleLegendActive(index); announceChange(`Disabled legend item ${legendLabel}. Please reference the data table to see updated values.`); }}
        className={disabled ? 'disabled single-legend' : 'single-legend'}
      ><span
        className="color"
        style={{
          backgroundColor: applyColorToLegend(
            entry
          ),
        }}
      /> <span className="label">{legendLabel}</span>
      </li>
    );
  });

  const filtersList = filters.map((singleFilter, index) => {
    const values = [];

    singleFilter.values.forEach((filterOption, index) => {
      values.push(<option
        key={index}
        value={filterOption}
      >{filterOption}
      </option>);
    });

    return (
      <section key={index}>
        <label htmlFor={`filter-${index}`}>{singleFilter.label}</label>
        <select
          id={`filter-${index}`}
          className="filter-select"
          data-index="0"
          value={singleFilter.active}
          onChange={(val) => {
            changeFilterActive(index, val.target.value);
            announceChange(`Filter ${singleFilter.label} value has been changed to ${val.target.value}, please reference the data table to see updated values.`);
          }}
        >
          {values}
        </select>
      </section>
    );
  });

  return (
    <aside className={legend.position}>
      <section className="legend-section" aria-label="Map Legend">
        {processedLegend.disabledAmt > 0
          && (
          <button
            onClick={(e) => {
              e.preventDefault();
              resetLegendToggles();
              announceChange('Legend has been reset, please reference the data table to see updated values.');
            }}
            className="clear btn"
          >Clear
          </button>
          )}
        {legend.title && <h2>{ ReactHtmlParser(legend.title) }</h2>}
        {legend.dynamicDescription === false && legend.description
          && <p>{ ReactHtmlParser(legend.description) }</p>}
        {legend.dynamicDescription === true && filters.map((filter, index) => {
          const lookupStr = `${index},${filter.values.indexOf(String(filter.active))}`;

          // Do we have a custom description for this?
          const desc = legend.descriptions[lookupStr] || '';

          if (desc.length > 0) {
            return (<p>{ desc }</p>);
          }
          return true;
        })}
        <ul className={legend.singleColumn ? 'single-column' : ''} aria-label="Legend items">
          {legendList}
        </ul>
      </section>
      {filtersList.length > 0
        && (
        <section className="filters-section" aria-label="Map Filters">
          <h3>Filters</h3>
          <form>
            <section>
              {filtersList}
            </section>
          </form>
        </section>
        )}
    </aside>
  );
};
