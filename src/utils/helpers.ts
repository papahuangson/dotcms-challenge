import { DotcmsNavigationItem } from 'types'

// export const formatCurrency = (value: number): string => {
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }).format(value)
// }

export const homeNavItem: DotcmsNavigationItem = {
  title: 'Home',
  href: '/',
  hash: 1,
  folder: '',
  host: '',
  languageId: 0,
  type: '',
  target: '',
  order: 0
}

export const formatCurrency = (value: string) => {
  const normalizedValue = value.replace(',', '.')
  const numberValue = Number(normalizedValue)

  if (isNaN(numberValue)) {
    console.error('Invalid currency value:', value)
    return ''
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(numberValue)
}

export const convertCurrencyToUSDFormat = (value: string) => {
  return Number(value.replace(',', '.'))
}
