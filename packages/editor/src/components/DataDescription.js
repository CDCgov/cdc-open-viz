import React from 'react';

const DataDescription = ({ dataOrigin }) => {

  const Meta = () => (
    <p>
      <b>Data Source:</b><br />
      {dataOrigin.dataFileSource}
    </p>
  )

  return [ <Meta />]
};

export default DataDescription;