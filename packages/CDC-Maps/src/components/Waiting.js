import React from 'react';

export default ({ requiredColumns, className }) => (
  <section className={className}>
    <section className="container">
      <h3>Configuration Required</h3>
      <p>Please set the following: { requiredColumns.map((col, i) => (<span key={`missing-column-${i}`}><strong>{col}</strong>{i + 1 < requiredColumns.length && ', '}</span>)) } in the Columns section of the editor to display data on the map.</p>
    </section>
  </section>
);
