export const BASE_URL = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/'

export const YUGOSLAVIA = 'YUG'

export const STATS_COUNTRIES = [
  { label: 'Croatia', value: 'HRV' },
  { label: 'Slovenia', value: 'SVN' },
  { label: 'Serbia', value: 'SRB' },
  { label: 'Bosnia & Herzegovina', value: 'BIH' },
  { label: 'Montenegro', value: 'MNE' },
  { label: 'Macedonia', value: 'MKD' },
  { label: 'Yugoslavia', value: YUGOSLAVIA },
]

export const STATS_PERIODS = [
  { label: '1920-1939', value: '1920-1939' },
  { label: '1940-1959', value: '1940-1959' },
  { label: '1960-1979', value: '1960-1979' },
  { label: '1980-1999', value: '1980-1999' },
]

export const STATS_TYPES = [
  { label: 'temperature', value: 'tas' },
  { label: 'precipitation', value: 'pr' },
]

export const STATS_MODE = {
  MONTHLY_AVERAGE: 'mavg',
  YEARLY_AVERAGE: 'annualavg',
}
