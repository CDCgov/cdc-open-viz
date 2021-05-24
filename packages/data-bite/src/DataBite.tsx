import React, { useEffect, useRef, useState } from 'react';
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import Loading from '@cdc/core/components/Loading';
import ResizeObserver from 'resize-observer-polyfill'
import Context from "../../chart/src/context";

const CdcDataBite = (
    { configUrl, config: configObj, isEditor = false, setConfig: setParentConfig} :
    { configUrl?: string, config?: any, isEditor?: boolean, setConfig? }
) => {

  interface keyable {
    [key: string]: any
  }

  const [config, setConfig] = useState<keyable>({});
  const [data, setData] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const { title } = config;

  const outerContainerRef = useRef(null);

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
    resizeObserver.observe(outerContainerRef.current);
  }, []);

  useEffect( () => {
    setLoading(false);
  }, [])

  const viewports:keyable = {
    'md': 992,
    'sm': 768,
    'xs': 576,
    'xxs': 350
  }

  const getViewport = size => {
    let result = 'lg'
    let viewportList = Object.keys( viewports )

    for(let viewport of viewportList) {
      if(size <= viewports[viewport]) {
        result = viewport
      }
    }

    return result
  }

  const [currentViewport, setCurrentViewport] = useState<String>('lg');
  const [dimensions, setDimensions] = useState<Array<Number>>([]);

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver:ResizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let newViewport = getViewport(width)

      setCurrentViewport(newViewport)

      if(isEditor) {
        width = width - 350;
      }

      setDimensions([width, height])
    }
  })

  const loadConfig = async () => {

    let response = configObj || await (await fetch(configUrl)).json();

    // If data is included through a URL, fetch that and store
    let data = response.data ?? {}

    if(response.dataUrl) {
      const dataString = await fetch(response.dataUrl);
      data = await dataString.json();
    }

    setData(data);

    let newConfig = {...defaults, ...response}

    updateConfig(newConfig, data);
  }

  const updateConfig = (newConfig, dataOverride = undefined) => {
    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key]) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    });

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {};
    newConfig.runtime.uniqueId = Date.now();

    //Check things that are needed and set error messages if needed
    newConfig.runtime.editorErrorMessage = '';

    setConfig(newConfig);
  }

  let body = (<Loading />)

  if(false === loading) {
    body = (
      <>
        {isEditor && <EditorPanel />}
        <div className="cdc-data-bite-inner-container">
          hello
          {/* Title */}
          {title && <div role="heading" className={`data-bite-title ${config.theme}`}>{title}</div>}
        </div>
      </>
    )
  }

  return (
    <Context.Provider value={{ config, data, dimensions, currentViewport, loading, updateConfig, setParentConfig }}>
      <div className={`cdc-open-viz-module type-data-bite ${currentViewport} font-${config.fontSize}`} ref={outerContainerRef}>
        {body}
      </div>
    </Context.Provider>
  );
};

export default CdcDataBite;