import * as React from "react"
import ProjectCard from "./project-card"

const MdxComponents = {
  ProjectCard: ({ link, title, bg, children, caseStudy, ...props }: any) => (
    <ProjectCard 
      link={link}
      title={title}
      bg={bg}
      caseStudy={caseStudy}
      {...props}
    >
      {children}
    </ProjectCard>
  ),
}

export default MdxComponents
