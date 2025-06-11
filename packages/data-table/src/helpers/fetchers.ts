import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

export const fetchConfig = (configUrl: string) =>
  fetch(configUrl)
    .then(res => res.json())
    .catch(err => {
      console.error('Error fetching config:', err)
    })

export const fetchData = (dataUrl: string) =>
  fetchRemoteData(`${dataUrl}`).catch(err => {
    console.error('Error fetching data:', err)
  })
