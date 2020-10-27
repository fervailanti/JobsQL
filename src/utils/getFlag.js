export const getFlag = (isoCode) => {
  const flags = {
    US: '🇺🇸',
    GB: '🇬🇧',
    CA: '🇨🇦',
    MX: '🇲🇽',
    DE: '🇩🇪',
    IN: '🇮🇳',
    NO: '🇳🇴',
    DK: '🇩🇰',
    FR: '🇫🇷',
    PL: '🇵🇱',
    TW: '🇹🇼',
    PT: '🇵🇹'
  }
  return flags[isoCode.toUpperCase()] || ''
}
