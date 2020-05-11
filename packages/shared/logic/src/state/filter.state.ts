import { createContextState } from 'react-hooks-lib'
import { STATS_COUNTRIES, STATS_PERIODS, STATS_TYPES } from '../common/constants'

export type Filter = {
  country: string
  period: string
  type: string
  avg?: string
}

const initValues: Filter = {
  country: STATS_COUNTRIES[0].value,
  period: STATS_PERIODS[0].value,
  type: STATS_TYPES[0].value,
}

const { ContextProvider, useContextState } = createContextState(initValues)

export const useFilterState = useContextState
export const FilterContext = ContextProvider
