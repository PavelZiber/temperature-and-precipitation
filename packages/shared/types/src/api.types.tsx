export type StatItem = {
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

export type Filter = {
  country: string
  period: string
  type: string
  avg?: string
}

export type StatsResponse<T> = {
  data: T[]
}
