import { useFetch } from 'react-hooks-lib'
import { BASE_URL } from '../common/constants'
import { Filter } from '../state/filter.state'

export const getStatsUrl = ({ avg, country, period, type }: Filter) => {
  const [from, to] = period?.split('-') || []
  return `${BASE_URL}${avg}/${type}/${from}/${to}/${country}.json`
}

export function useStatsApi(filter: Filter) {
  const { data, loading, setUrl } = useFetch(getStatsUrl(filter))
  return { data, loading, setUrl }
}
