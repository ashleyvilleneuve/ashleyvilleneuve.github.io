import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Seo from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/components/seo"

const Cara = () => (
  <Layout>
    <Parallax pages={2.7}>  
      <Hero offset={0} factor={0.7} /> 
      <Projects offset={0.7} factor={1} />  
      <About offset={1.7} factor={0.5} />  
      <Contact offset={2.2} factor={0.5} />  
    </Parallax>

  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />
