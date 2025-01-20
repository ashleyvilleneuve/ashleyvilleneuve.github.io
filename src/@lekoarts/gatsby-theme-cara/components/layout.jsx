import * as React from "react"
import { Global } from "@emotion/react"
import SEO from "@lekoarts/gatsby-theme-cara/src/components/seo"

const Layout = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.classList.add('theme-ui-dark')
  }, [])

  return (
    <React.Fragment>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          "html": {
            WebkitTextSizeAdjust: `100%`,
          },
          "body": {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
            color: theme.colors.text,
            backgroundColor: theme.colors.background,
            transition: 'none !important'
          },
        })}
      />
      <SEO />
      {children}
    </React.Fragment>
  )
}

export default Layout
