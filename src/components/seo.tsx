import * as React from 'react'

interface Props {
  title: string
  children?: Array<JSX.Element> | JSX.Element
}

const SEO = ({ title, children }: Props) => (
  <>
    <title>{title}</title>

    <link id="icon" rel="icon" href="global-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />

    {children}
  </>
)

export default SEO
