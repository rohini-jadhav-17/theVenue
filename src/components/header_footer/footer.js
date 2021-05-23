import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = ()=>{
    return(
        <footer className="bck_black">
            <Fade>
                <div className="font_righteous header_logo_venue">The venue</div>
                <div className="footer_copyright">The venue copyright 2021</div>
            </Fade>
        </footer>
    )
}

export default Footer;