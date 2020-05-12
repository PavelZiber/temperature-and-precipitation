import { avg, formatNumber } from './helpers'

test('avg 4+2 to equal 3', () => {
  expect(avg(4, 2)).toBe(3)
})

test('formatNumber', () => {
  expect(formatNumber(4.322334)).toBe('4.32')
  expect(formatNumber(undefined)).toBe(undefined)
})
