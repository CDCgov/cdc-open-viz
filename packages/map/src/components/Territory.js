/** @jsx jsx */
import { jsx } from '@emotion/core';

export default ((props) => {
  const {
    label, toolTip, styles, geoClickHandler, territoryData, fullName, mapType=null
  } = props;

  let Territory = (
    <li
      css={styles}
      key={label}
    >
      {label}
    </li>
  );

  if(mapType === 'hex') {
    Territory = (
      <li key={label} style={{width: '8%', height:'8%', padding:0, borderColor:'transparent' }}>
        <svg 
          style={{width: '100%', height:'100%', overflow: 'hidden', borderColor:'transparent'}} 
          viewBox="0 0 173.20508075688772 200"
          >
          <path  
            css={styles}
            fill={styles.backgroundColor}
            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
            data-tip={toolTip}
            data-for="tooltip"
            onClick={() => geoClickHandler(fullName, territoryData)}
          >
          </path>
          <text 
            fill={styles.color} 
            x="30%" 
            y="32%" 
            dy="1em"
          >
            {label}
          </text>
        </svg>
        
      </li>
    )
  } else if(styles.backgroundColor !== '#E6E6E6') {
    Territory = (
      <li
        css={styles}
        key={label}
        data-tip={toolTip}
        data-for="tooltip"
        onClick={() => geoClickHandler(fullName, territoryData)}
      >
        {label}
      </li>
    );
  }

  return Territory;
});
