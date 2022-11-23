import { useEffect, useState } from 'react'

export const usePrefersColorScheme = () => {
  const [preferredColorSchema, setPreferredColorSchema] = useState<
    'dark' | 'light'
  >(() => {
    if (typeof window === 'undefined') return 'light'
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    return isDark.matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (!window.matchMedia) return

    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    const isLight = window.matchMedia('(prefers-color-scheme: light)')

    setPreferredColorSchema(isDark.matches ? 'dark' : 'light')

    const darkListener = ({ matches }: MediaQueryListEvent) => {
      matches && setPreferredColorSchema('dark')
    }
    const lightListener = ({ matches }: MediaQueryListEvent) => {
      matches && setPreferredColorSchema('light')
    }
    isDark.addEventListener('change', darkListener)
    isLight.addEventListener('change', lightListener)
    return () => {
      isDark.removeEventListener('change', darkListener)
      isLight.removeEventListener('change', lightListener)
    }
  }, [])

  return preferredColorSchema
}

export default usePrefersColorScheme
