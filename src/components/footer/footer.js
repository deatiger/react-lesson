import React from 'react';
import FooterLinks from './footerLinks';
import FooterContact from './footerContact';

function Footer(props) {
    return(
        <footer>
            <FooterLinks openModal={()=>{props.openModal()}}/>
            <FooterContact />
        </footer>
    )
}

export default Footer;