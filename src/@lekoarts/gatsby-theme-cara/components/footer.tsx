/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="footer">
      
      Copyright &copy; {new Date().getFullYear()}
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
          fontSize: `x-small`
        }}
      >
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 1 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
