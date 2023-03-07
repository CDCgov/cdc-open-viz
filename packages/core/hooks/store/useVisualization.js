import { useEffect } from "react";
import useStore from "../../store/store";
import fetchAsyncUrl from "../../helpers/fetchAsyncUrl";

export const useVisualization = ({ visualizationKey, configUrl, config: propsConfig } = {}, defaultConfig = {}) => {
  const addVisualization = useStore(state => state.addVisualization);
  const storedConfig = useStore(state => state.visualizations[visualizationKey]);
  const resolvedConfig = Object.assign({}, defaultConfig, propsConfig ?? storedConfig);

  useEffect(() => {
    async function fetchRemoteConfig() {
      let remoteConfig = await fetchAsyncUrl(configUrl) || {}
  
      addVisualization(remoteConfig) // Get initial configObj, or object from configUrl
    }

    if (!propsConfig && configUrl) {
      console.log('fetching remote config');
      void fetchRemoteConfig()
    }
  }, [propsConfig, configUrl, addVisualization])

  return resolvedConfig;
}