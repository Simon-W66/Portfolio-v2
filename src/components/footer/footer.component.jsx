import React from "react"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./footerstyles.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

//GET current year for copyrights
const d = new Date()
const c_year = d.getFullYear()

const Footer = () => {
    return ( 
        <div className="footer">
            <a href="#"><ArrowUpwardIcon className="arrow btn-save"/></a>
            
            <div className="medias">
                <a href="https://www.linkedin.com/"><LinkedInIcon className="icon" style={{color: "rgb(145, 255, 249)"}}/></a>
                <a href="https://github.com/Simon-W66"><GitHubIcon className="icon" style={{color: "rgb(145, 255, 173)"}}/></a>
                <a href="patrixstar565@gmail.com"><EmailIcon className="icon" style={{color: "rgb(255, 162, 145)"}} /></a>
                <a href="#"><TwitterIcon className="icon" style={{color: "rgb(255, 239, 145)"}}/></a>
                <a href="#"><InstagramIcon className="icon" style={{color: "rgb(193, 145, 255)"}} /></a>
                    
            </div>
            <div className="footer-inf">
                <hr className="line" />
                <h3>&copy; {c_year} Designed and Developed by Šimon Hančak| PatriX&#9733; </h3>
                <p>I'm not perfect but discipline helps me updating to even better version of me!</p>
            </div>
        </div>
     );
}
 
export default Footer;