import { getFlag } from '../getFlag'

it.each([
  ['us', '🇺🇸'],
  ['gb', '🇬🇧'],
  ['ca', '🇨🇦'],
  ['mx', '🇲🇽'],
  ['de', '🇩🇪'],
  ['in', '🇮🇳'],
  ['no', '🇳🇴'],
  ['dk', '🇩🇰'],
  ['fr', '🇫🇷'],
  ['pl', '🇵🇱'],
  ['tw', '🇹🇼'],
  ['pt', '🇵🇹'],
  ['asdf', '']
])('Should get flag emoji by ISO country code', (iso, flag) => {
  expect(getFlag(iso)).toEqual(flag)
})
