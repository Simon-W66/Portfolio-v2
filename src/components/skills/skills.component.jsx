import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./skills.style.scss"

const Skills = (percentage, text) => {
  const projects = [ 
    {
      project: "React.js Ecommerce", 
      id: 1, 
      description: "This ecommerce was one of my first one project which i had built. It required to learn all basics of React.js, Redux, Restful API and styling in React. By this project I achieved and learned all required basics which are neseccery for future projects !", 
      p_link:"sdfsd",
      skills_used:"React.js , Redux , Firebase, Context API, Styled Component, SCSS ",
      h_color: "rgb(145, 255, 249)"
    },
    {
      project: "PERN STACK User manager", 
      id: 1, 
      description: "Before a 2 months I started learning backend and I started with Node.js and Express.js I suggest It's easy to use and really really clear to write, the proof of this is my project. It's user managment system with CRUD, ability to CREATE, READ, UPDATE, DELETE user and see user on personal user page...",  
      p_link:"sdfds",
      skills_used:"React.js , Node.js , Express.js, PostgreSQL",
      h_color: "rgb(145, 255, 173)"
    },
    {
      project: "RESELL MARKETPLACE - IN PROGRESS", 
      id: 1, 
      description: "This is my latest/current project, it's my own ecommerce/marketplace based on React.js and Laravel/Node.js(I'm still thinking about which is better for this project :D )I'm using PostgreSQL database. It's my largest and hardest project what i have been working on, I'm sure I will see you once there ;) ",   
      p_link:"https://github.com/Simon-W66",
      skills_used:"React.js, Node.js, Laravel, Redux, Restful API, SCSS",
      h_color: "rgb(255, 162, 145)"
    },
    {
      project: "POKEMON WEBSITE", 
      id: 1, 
      description: "Pokemom APP had been created and used as the lesson project for Germany student from Berlin. This project contain a name filter. Pokemon page with details of every pokemon.",  
      p_link:"af",
      skills_used:"React.js, Poke API, Redux",
      h_color: "rgb(255, 239, 145)"
    },
    {
      project: "next.js pwd generator", 
      id: 1, 
      description: "Next.js Password generator app had been developed for client from Freelancing platform, it' part of the real code which use thousands of people from Asia to USA.Pokemon page with details of every pokemon.",  
      p_link:"https://github.com/Simon-W66/next.js",
      skills_used:"Next.js, JavaScript, SCSS, P_GENERATOR API",
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
                      <h1 style={{color: s.h_color}}>{s.project.toUpperCase()}</h1>
                      <h3>I used there: <u><i>{s.skills_used}</i></u>  </h3>
                      <p>{s.description}</p>
                      

                      <button style={{border: '1px solid ' + s.h_color }} className='link_p btn-save'><a href={s.p_link} style={{color: s.h_color}} >See LIVE/ CODE</a></button>
                    </div>
                    
                  </div>
                ))}
               </Carousel>
              
            </div>
        </div>
         
     );
}
 
export default Skills;

