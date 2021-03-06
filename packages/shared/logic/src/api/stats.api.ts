import { useState, useEffect } from 'react'
import axios from 'axios'
import { Option } from '@shared/components'
import { Filter } from '@shared/types'

import { BASE_URL, STATS_COUNTRIES, YUGOSLAVIA } from '../common/constants'

export const getStatsUrl = ({ avg, country, period, type }: Filter) => {
  const [from, to] = period?.split('-') || []
  return `${BASE_URL}${avg}/${type}/${from}/${to}/${country}.json`
}

export function useStatsData(filter: Filter) {
  const initState = { data: undefined, loading: true }
  const [state, setState] = useState(initState)
  useEffect(() => {
    let requests
    setState(initState)
    if (filter.country === YUGOSLAVIA) {
      requests = STATS_COUNTRIES.filter((c: Option) => c.value !== YUGOSLAVIA).map((c) =>
        axios(getStatsUrl({ ...filter, country: c.value })),
      )
    } else {
      requests = [axios(getStatsUrl(filter))]
    }
    Promise.all(requests).then((result: any) => setState({ data: result, loading: false }))
    return () => {}
  }, [getStatsUrl(filter)])
  return state
}
