import './index.scss'
import Pp from '../../../assets/images/PP.png'


import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
  
    useEffect(() => {
      
  
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outlineLogoRef.current, {
          
          duration: 20,
        })
  
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      )
    }, [])
    return (
        <div className="logo-container" ref={bgRef}>
          <img
            className="solid-logo"
            ref={solidLogoRef}
            src={Pp}
            alt="JavaScript,  Developer"
          />
    
          <svg
            width="559pt"
            height="897pt"
            version="1.0"
            viewBox="0 0 559 897"
            
          >
            <g
              className="svg-container"
              transform="translate(0 457) scale(.1 -.1)"
              fill="none"
            >
             
            </g>
          </svg>
        </div>
      )
    }
    export default Logo