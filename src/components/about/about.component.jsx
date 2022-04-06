import React, {Component} from 'react'
import "./about.styles.scss"
import anime from "../../images/NeoTheMatrix.jpg"
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="about-id">
                <div className="about" >
                    <div className="about_text">
                        <div className="left-side">
                            <h1>
                                Hi I'm Šimon
                            </h1>
                            <div className="about-image">
                                <img src={anime}  alt="" />
                            </div>
                        </div>
                        
                        <p className='right-side'>
                            I'm a Self-Taught <span className="span_the_2">Front-End / Full-stack Developer</span> based in Europe(Slovakia).
                            Since my 2 years journey I created many many websites, 
                            I had chance to do some profesional freelancing job with my 
                            local and internation colleagues, which has usage all around the 
                            world. My products can see everybody cause they are online. In my Journey I learn so much, but the main 
                            skill was <b>discipline</b> because only with a hard work and discipline
                            you can become <br /> <span className="span_the">„The Best"</span>
                        </p>
                    </div>
                    
                </div>
            </div>
            
            
         );
    } 
}
 
export default About;