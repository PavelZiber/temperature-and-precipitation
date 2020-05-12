import { useState } from 'react'
import { Option } from '@shared/components'
import { BASE_URL, STATS_COUNTRIES, YUGOSLAVIA } from '../common/constants'
import { Filter } from '../state/filter.state'
import axios from 'axios'
import { useShallowEqualEffect } from 'react-hooks-lib'

export const getStatsUrl = ({ avg, country, period, type }: Filter) => {
  const [from, to] = period?.split('-') || []
  return `${BASE_URL}${avg}/${type}/${from}/${to}/${country}.json`
}

type StatItem = {
  gcm: string
  variable: string
  fromYear: string
  toYear: string
}
export type MonthStatItem = StatItem & {
  monthVals: number[]
}

export type YearStatItem = StatItem & {
  annualData: number[]
}

export function useStatsData(filter: Filter) {
  const [state, setState] = useState(null)
  useShallowEqualEffect(() => {
    let requests
    if (filter.country === YUGOSLAVIA) {
      requests = STATS_COUNTRIES.filter((c: Option) => c.value !== YUGOSLAVIA).map((c) =>
        axios(getStatsUrl({ ...filter, country: c.value })),
      )
    } else {
      requests = [axios(getStatsUrl(filter))]
    }
    Promise.all(requests).then((result) => setState(result))
    return () => {}
  }, [getStatsUrl(filter)])
  return state
}
