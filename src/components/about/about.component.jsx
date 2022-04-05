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
                        <h1>
                            Hi I'm Šimon
                        </h1>
                        <p>
                            I'm a Self-Taught <span className="span_the_2">Front-End Developer</span> based in Europe.
                            Since my 2 years journey I created many many websites, 
                            I had chance to do some freelancing job with my 
                            local and internation colleagues, with usage all around the 
                            world. In my Journey I learn so much, but the main 
                            skill was <b>discipline</b> because only with a hard work and discipline
                            you can become <span className="span_the">„The Best"</span>
                        </p>
                    </div>
                    
                    <div className="about-image">
                        <img src={anime}  alt="" />
                    </div>
                </div>
            </div>
            
            
         );
    } 
}
 
export default About;