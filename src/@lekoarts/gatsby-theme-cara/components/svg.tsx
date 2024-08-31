/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { hidden } from "../styles/utils"

type IconType = "star_b" | "star_c" | "star_a" | "star_d" | "star_e"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | string
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const viewBox = {
  star_b: `0 0 60 90`,
  star_c: `0 0 60 90`,
  star_a: `0 0 60 90`,
  star_d: `0 0 60 90`,
  star_e: `0 0 60 90`,
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => {

  return (
    <svg
      sx={{
        position: `absolute`,
        stroke: stroke ? `currentColor` : `none`,
        fill: stroke ? `none` : `currentColor`,
        display: hiddenMobile ? hidden : `block`,
        color,
        width,
        left,
        top,
      }}
      viewBox={viewBox[icon]}
    >
      <use href={withPrefix(`/icons.svg#${icon}`)} />
    </svg>
  );
}

export default Svg;
