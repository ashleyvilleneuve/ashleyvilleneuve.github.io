/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const Footer = () => {
  const [colorMode] = useColorMode()

  return (
    <footer
      sx={{
        variant: "footer",
        textAlign: "center",
        padding: 3,
      }}
    >
      Copyright &copy; {new Date().getFullYear()}
      <br />
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
          color: "text",
          fontWeight: "semibold",
          fontSize: "x-small",
          a: { 
            color: "text",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline"
            }
          }
        }}
      >
        <a
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 1 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </a>
        <span sx={{ mx: 1 }}>by</span>
        <a
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
        >
          LekoArts
        </a>
      </div>
    </footer>
  )
}

export default Footer
