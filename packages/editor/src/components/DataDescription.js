import React, { useState, useContext, useMemo, useCallback, useEffect, memo } from 'react';

import GlobalState from '../context';
import { useDebounce } from 'use-debounce';



const debugFunc = (item = null, item2 = null) => {
  debugger;
  // setTempConfig(null)
  // let foo = config.dataDescription.fileName;
  return
}

const DataDescription = ({ dataOrigin }) => {
  // const [fileData, setFileData] = useState(dataOrigin ?? []);

  useEffect(() => {
    debugger
    if(!dataOrigin) {
      return;
    }


    // setFileData(...dataOrigin)
  }, [dataOrigin])




  const Meta = () => (
    <p>
      <b>Data Source:</b><br />
      {dataOrigin.dataFileSource}
    </p>
  )

  return [ <Meta />]
};

export default DataDescription;