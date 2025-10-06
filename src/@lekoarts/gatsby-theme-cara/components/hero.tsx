/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations"


const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="star_b" hiddenMobile width={20} stroke color="icon_orange" left="10%" top="20%" />
        <Svg icon="star_a" width={12} stroke color="icon_red" left="60%" top="70%" />
        <Svg icon="star_c" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="star_d" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <Svg icon="star_e" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="star_b" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg icon="star_b" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <Svg icon="star_a" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <Svg icon="star_c" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg icon="star_c" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="star_e" hiddenMobile width={20} color="icon_darker" left="5%" top="70%" />
      <Svg icon="star_b" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="star_b" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="star_a" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg icon="star_c" hiddenMobile width={12} color="icon_darker" left="40%" top="80%" />
      <Svg icon="star_b" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <Svg icon="star_e" width={20} color="icon_green" left="95%" top="5%" />
      <Svg icon="star_c" hiddenMobile width={16} color="icon_purple" left="5%" top="90%" />
      <Svg icon="star_c" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="star_c" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg icon="star_d" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <Svg icon="star_a" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <section
          sx={{
            textAlign: "left",
            maxWidth: "1020px",
            pt: [7, 8],
            pb: [4, 5],
          }}
        >
          <div
            sx={{
              display: "grid",
              gridGap: [1],
              gridTemplateColumns: ["1fr"],
            }}
          >
            <h1
              sx={{
                variant: "styles.h1",
                fontSize: [5, 6, 7],
                lineHeight: 1.1,
                m: 0,
                textAlign: "left",
                letterSpacing: "-0.01em",
                mt: 1,
                mb: 2,
              }}
            >
              Ashley Villeneuve
            </h1>
            <p
              sx={{
                fontSize: [2, 3],
                color: "muted",
                mt: 1,
                mb: 1,
                textAlign: "left",
                maxWidth: "46ch",
                mr: "auto",
              }}
            >
              Lead Shopify Developer · Shopify Plus Architect
            </p>

            {/* Primary actions */}
            <div
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: 2,
                mt: 3,
                alignItems: "center",
              }}
              aria-label="Primary actions"
            >
              <a
                href="/resume.pdf"
                sx={{
                  display: "inline-block",
                  px: 3,
                  py: 2,
                  borderRadius: 8,
                  bg: "text",
                  color: "background",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "opacity 0.2s ease",
                  lineHeight: 1,
                  boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 1px 2px rgba(0,0,0,0.2)",
                  ":hover": { opacity: 0.9, transform: "translateY(-1px)" },
                  ":focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary",
                    outlineOffset: "2px",
                  },
                }}
              >
                Download Résumé
              </a>
              <a
                href="https://github.com/ashleyvilleneuve"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: 3,
                  py: 2,
                  borderRadius: 8,
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.16)",
                  textDecoration: "none",
                  color: "text",
                  bg: "background",
                  lineHeight: 1,
                  transition: "background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease",
                  ":hover": { bg: "muted", transform: "translateY(-1px)", borderColor: "rgba(255,255,255,0.24)" },
                  gap: 2,
                  fontWeight: "normal",
                  ":focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary",
                    outlineOffset: "2px",
                  },
                }}
              >
                <span aria-hidden="true">🐙</span> GitHub
              </a>
              <a
                href="https://linkedin.com/in/ashley-villeneuve-22a17196"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: 3,
                  py: 2,
                  borderRadius: 8,
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.16)",
                  textDecoration: "none",
                  color: "text",
                  bg: "background",
                  lineHeight: 1,
                  transition: "background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease",
                  ":hover": { bg: "muted", transform: "translateY(-1px)", borderColor: "rgba(255,255,255,0.24)" },
                  gap: 2,
                  fontWeight: "normal",
                  ":focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary",
                    outlineOffset: "2px",
                  },
                }}
              >
                <span aria-hidden="true">🔗</span> LinkedIn
              </a>
              <a
                href="mailto:ashleyvilleneuve@icloud.com"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: 3,
                  py: 2,
                  borderRadius: 8,
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.16)",
                  textDecoration: "none",
                  color: "text",
                  bg: "background",
                  lineHeight: 1,
                  transition: "background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease",
                  ":hover": { bg: "muted", transform: "translateY(-1px)", borderColor: "rgba(255,255,255,0.24)" },
                  gap: 2,
                  fontWeight: "normal",
                  ":focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary",
                    outlineOffset: "2px",
                  },
                }}
              >
                <span aria-hidden="true">✉️</span> Email
              </a>
            </div>

            <div
              sx={{
                mt: 4,
                mb: 3,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
              }}
              role="presentation"
              aria-hidden="true"
            />

            {/* Case studies */}
            <h2
              sx={{
                fontSize: [4, 5],
                fontWeight: "bold",
                mt: 4,
                mb: 3,
                letterSpacing: "-0.01em",
              }}
            >
              Featured Case Studies
            </h2>
            <p>Selected work leading performance, scalability, and developer-experience improvements for Shopify Plus merchants.</p>
            <div
              sx={{
                display: "grid",
                gridTemplateColumns: ["1fr", null, "1fr 1fr"],
                gap: 3,
                mt: 4,
              }}
              aria-label="Featured case studies"
            >
              <a
                href="/case-studies/token-migration/"
                aria-label="Read case study: Design Token to Tailwind Migration"
                sx={{
                  display: "block",
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.12)",
                  textDecoration: "none",
                  color: "text",
                  background: 'rgba(0, 0, 0, 0.8)',
                  transition: "background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease, border-color 0.2s ease",
                  ":hover": {
                    bg: "background",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                    transform: "translateY(-2px)",
                    borderColor: "rgba(255,255,255,0.24)",
                    color: "primary",
                    "& *, &:hover *": { color: "primary" },
                  },
                  ":focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary",
                    outlineOffset: "2px",
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    ":hover": { transform: "none" },
                  },
                }}
              >
                <div>
                  <div sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span aria-hidden="true" sx={{ mr: 2, opacity: 0.8 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="2" />
                        <circle cx="11" cy="3" r="2" />
                        <circle cx="3" cy="11" r="2" />
                        <circle cx="11" cy="11" r="2" />
                      </svg>
                    </span>
                    <span sx={{ fontWeight: "semibold" }}>Design Token → Tailwind Migration</span>
                    <span aria-hidden="true" sx={{ opacity: 0.6 }}>→</span>
                  </div>
                  <p sx={{ mt: 1, mb: 0, color: "muted", fontSize: 1 }}>
                    Token-driven semantic classes mapped to Figma; faster reviews & consistency.
                  </p>
                </div>
              </a>
              <a
                href="/case-studies/starter-theme/"
                aria-label="Read case study: Modular Shopify Starter Theme"
                sx={{
                  display: "block",
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.12)",
                  textDecoration: "none",
                  color: "text",
                  background: 'rgba(0, 0, 0, 0.8)',
                  transition: "background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease, border-color 0.2s ease",
                  ":hover": {
                    bg: "background",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                    transform: "translateY(-2px)",
                    borderColor: "rgba(255,255,255,0.24)",
                    color: "primary",
                    "& *, &:hover *": { color: "primary" },
                  },
                  ":focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary",
                    outlineOffset: "2px",
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    ":hover": { transform: "none" },
                  },
                }}
              >
                <div>
                  <div sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span aria-hidden="true" sx={{ mr: 2, opacity: 0.8 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="1.5" width="4" height="4" />
                        <rect x="8.5" y="1.5" width="4" height="4" />
                        <rect x="1.5" y="8.5" width="4" height="4" />
                        <rect x="8.5" y="8.5" width="4" height="4" />
                      </svg>
                    </span>
                    <span sx={{ fontWeight: "semibold" }}>Modular Shopify Starter Theme</span>
                    <span aria-hidden="true" sx={{ opacity: 0.6 }}>→</span>
                  </div>
                  <p sx={{ mt: 1, mb: 0, color: "muted", fontSize: 1 }}>
                    Vite code-splitting, @theme blocks, and feature scaffolding to ship faster.
                  </p>
                </div>
              </a>
            </div>

            {/* Keep original Intro content below the fold */}
            <div sx={{ mt: 5 }}>
            </div>
          </div>
        </section>
      </Inner>
    </Content>
  </div>
)

export default Hero
