import React, { Component } from 'react';
import FooterLinks from './footerLinks';
import FooterContact from './footerContact';

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <footer>
                <FooterLinks />
                <FooterContact />
            </footer>
        )
    }
}

export default Footer;