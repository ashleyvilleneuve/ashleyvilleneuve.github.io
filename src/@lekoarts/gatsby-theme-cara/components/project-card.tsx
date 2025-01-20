/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import React from "react"
import { useState } from "react"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  caseStudy: React.ReactNode
}

const ProjectCard = ({ link, title, children, bg, caseStudy }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleFlip = () => {
    setIsTransitioning(true)
    setIsFlipped(!isFlipped)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  return (
    <div sx={{ position: 'relative' }}>
      {isFlipped && (
        <div
          sx={{
            position: 'fixed',
            inset: 0,  
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9998,
          }}
          onClick={handleFlip}
        />
      )}
      <div
        sx={{
          perspective: `2000px`,
          minHeight: `300px`,
          position: isFlipped ? 'fixed' : 'relative',
          left: isFlipped ? '50%' : 'auto',
          top: isFlipped ? '50%' : 'auto',
          transform: isFlipped ? 'translate(-50%, -50%)' : 'none',
          width: isFlipped ? '75%' : '100%',
          height: isFlipped ? '600px' : '300px', 
          zIndex: isFlipped ? 9999 : 1,
          transformOrigin: 'center',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          sx={{
            width: `100%`,
            height: `100%`,
            position: `relative`,
            transformStyle: `preserve-3d`,
            transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
            transform: isFlipped ? `rotateY(180deg)` : `rotateY(0deg)`,
          }}
        >
          {/* Front of card */}
          <div
            sx={{
              position: `absolute`,
              inset: 0,
              backfaceVisibility: `hidden`,
              WebkitBackfaceVisibility: `hidden`,
              backgroundColor: `#141821`,
              borderRadius: `lg`,
              p: 4,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `flex-end`,
              transform: `rotateY(0deg)`,
              overflow: 'hidden',
              "&:before": {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundImage: `${bg}`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(7px)',
                transform: 'scale(1.1)',
                zIndex: -1,
              },
              "&:after": {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.2)',
                zIndex: -1,
              },
              "&:hover": {
                transform: `translateY(-5px)`,
              },
            }}
            onClick={handleFlip}
          >
            <div 
              sx={{ 
                opacity: 0.85, 
                textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
                marginBottom: '0.5rem',
              }}
            >
              {children}
            </div>
            <div
              sx={{
                textTransform: `uppercase`,
                letterSpacing: `wide`,
                pt: 4,
                fontSize: [4, 5],
                fontWeight: `medium`,
                lineHeight: 1.125,
                textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
              }}
            >
              {title}
            </div>
          </div>

          {/* Back of card */}
          <div
            sx={{
              position: `absolute`,
              inset: 0,
              backfaceVisibility: `hidden`,
              WebkitBackfaceVisibility: `hidden`,
              transform: `rotateY(180deg)`,
              background: `linear-gradient(145deg, #141821 0%, #202432 100%)`,
              color: `white`,
              boxShadow: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`,
              borderRadius: `lg`,
              p: 4,
              display: `flex`,
              flexDirection: `column`,
              overflowY: 'auto',
            }}
          >
            <button
              sx={{
                alignSelf: `flex-end`,
                background: `transparent`,
                border: `none`,
                fontSize: 6,
                cursor: `pointer`,
                mb: 2,
                position: 'sticky',
                top: 0,
                right: 0,
                color: `white`,
                opacity: 0.8,
                transition: `opacity 0.2s`,
                "&:hover": { opacity: 1 },
                zIndex: 1,
              }}
              onClick={handleFlip}
            >
              ×
            </button>
            {caseStudy}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard