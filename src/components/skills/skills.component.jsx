import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./skills.style.scss"

const Skills = (percentage, text) => {
  const projects = [ 
    {
      project: "React.js Ecommerce", 
      id: 1, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab porro cumque incidunt consectetur dolorem veniam quam ad magnam minus natus, molestias, in odit earum sequi tempora! Blanditiis, ratione commodi?", 
      p_link:"sdfsd",
      skills_used:"React.js , Redux , Firebase ",
      h_color: "rgb(145, 255, 249)"
    },
    {
      project: "PERN STACK User manager", 
      id: 1, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab porro cumque incidunt consectetur dolorem veniam quam ad magnam minus natus, molestias, in odit earum sequi tempora! Blanditiis, ratione commodi?",  
      p_link:"sdfds",
      skills_used:"React.js , Node.js , Express.js, PostgreSQL",
      h_color: "rgb(145, 255, 173)"
    },
    {
      project: "RESELL MARKETPLACE", 
      id: 1, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab porro cumque incidunt consectetur dolorem veniam quam ad magnam minus natus, molestias, in odit earum sequi tempora! Blanditiis, ratione commodi?",   
      p_link:"sdf",
      skills_used:"sdf",
      h_color: "rgb(255, 162, 145)"
    },
    {
      project: "POKEMON WEBSITE", 
      id: 1, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab porro cumque incidunt consectetur dolorem veniam quam ad magnam minus natus, molestias, in odit earum sequi tempora! Blanditiis, ratione commodi?",  
      p_link:"af",
      skills_used:"dsf",
      h_color: "rgb(255, 239, 145)"
    },
    {
      project: "BARBER WEBSITE", 
      id: 1, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab porro cumque incidunt consectetur dolorem veniam quam ad magnam minus natus, molestias, in odit earum sequi tempora! Blanditiis, ratione commodi?",  
      p_link:"sdf",
      skills_used:"sdf",
      h_color: "rgb(193, 145, 255)"
    },
  ]
    
    return ( 
        <div className="projects_sec">
            <h1 className="header">There is best what i did!</h1>
            <div className="projects-container" >
              
               <Carousel showStatus={false} emulateTouch={true} showArrows={false} showThumbs={false} infiniteLoop={true} width="79%" className="carousel" >
                  {projects.map((s)=> (
                    
                  <div className="slider" key={s.id}>
                    <div className='left-side'>
                      <h1 style={{color: s.h_color}}>{s.project}</h1>
                      <h3>I used there: <u><i>{s.skills_used}</i></u>  </h3>
                      <p>{s.description}</p>
                      

                      <button style={{border: '1px solid ' + s.h_color }} className='link_p'><a href={s.p_link} style={{color: s.h_color}} >See LIVE/ CODE</a></button>
                    </div>
                    
                  </div>
                ))}
               </Carousel>
              
            </div>
        </div>
         
     );
}
 
export default Skills;

