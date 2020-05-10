import { useFetch } from 'react-hooks-lib'

const getUrl = ({ avg }) =>
  `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${avg}/tas/1920/1939/HRV.json`

export function useStatsApi(filter) {
  const { data, loading, setUrl } = useFetch(getUrl(filter))
  return { data, loading, setUrl }
}
