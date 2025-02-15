/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Divider from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations"
import ProjectsMDX from "../sections/projects.mdx"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <Content 
        speed={0.4} 
        offset={offset + 0.2} 
        factor={factor}
        sx={{
          marginBottom: isMobile ? "100vh" : 0,
          "& > div": {
            // Target the Inner component
            minHeight: isMobile ? "150vh" : "auto",
            paddingBottom: isMobile ? "4rem" : 0
          }
        }}
      >
        <Inner>
          <div
            sx={{
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              h2: { gridColumn: `-1/1`, color: `white !important` },
            }}
          >
            <ProjectsMDX isMobile={isMobile} />
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg icon="star_e" width={6} color="icon_brightest" left="85%" top="75%" />
          <Svg icon="star_c" width={8} color="icon_teal" left="70%" top="20%" />
          <Svg icon="star_a" width={8} stroke color="icon_orange" left="25%" top="5%" />
          <Svg icon="star_a" hiddenMobile width={20} color="icon_brightest" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="star_c" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
          <Svg icon="star_d" width={12} stroke color="icon_brightest" left="90%" top="30%" />
          <Svg icon="star_b" width={16} color="icon_yellow" left="70%" top="90%" />
          <Svg icon="star_c" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
          <Svg icon="star_a" width={6} color="icon_brightest" left="75%" top="10%" />
          <Svg icon="star_e" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="star_c" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="star_c" width={12} color="icon_pink" left="80%" top="60%" />
        <Svg icon="star_a" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="star_d" width={12} color="icon_yellow" left="29%" top="26%" />
        <Svg icon="star_b" width={16} stroke color="icon_red" left="75%" top="30%" />
        <Svg icon="star_b" width={8} stroke color="icon_yellow" left="80%" top="70%" />
      </Divider>
    </div>
  );
};

export default Projects