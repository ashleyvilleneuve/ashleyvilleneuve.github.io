/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Divider from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations"
import AboutMDX from "../sections/about.mdx"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
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
        offset={isMobile ? offset + 1 : offset} 
        factor={factor}
        sx={{
          position: 'relative',
          zIndex: 2,
          height: isMobile ? '650px !important' : 'auto',
          fontSize: isMobile ? '1.15rem !important' : '1.5rem',
          'p': {
            fontSize: isMobile ? '1.15rem !important' : '1.5rem !important',
          }
          }}
        >
      
        <Inner>
          <AboutMDX />
        </Inner>
      </Content>
      <Divider
        bg="divider"
        clipPath={isMobile ? "polygon(0 5%, 100% 2%, 100% 95%, 0 98%)" : "polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"}
        speed={0.2}
        offset={offset}
        factor={factor}
      />
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg icon="star_b" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
          <Svg icon="star_c" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
          <Svg icon="star_d" width={8} stroke color="icon_darkest" left="25%" top="5%" />
          <Svg icon="star_c" hiddenMobile width={20} color="icon_orange" left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="star_c" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
          <Svg icon="star_a" width={12} stroke color="icon_brightest" left="95%" top="50%" />
          <Svg icon="star_d" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
          <Svg icon="star_c" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="star_a" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="star_a" width={12} color="icon_darkest" left="70%" top="60%" />
        <Svg icon="star_e" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="star_b" width={12} color="icon_darkest" left="20%" top="30%" />
        <Svg icon="star_c" width={8} stroke color="icon_darkest" left="80%" top="70%" />
      </Divider>
    </div>
  );
};

export default About
