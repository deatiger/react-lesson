import React, { Component } from 'react';
import InputWindow from '../main/searchWindow';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import MediaQuery from "react-responsive";

class FooterContacts extends Component {
    constructor(props) {
        super(props)
    }

    SearchWindow = [
        { icon: <MailOutlineIcon />, placeholderText: 'Your email', buttonText: 'Subscribe*' },
        { icon: <MailOutlineIcon fontSize="small" />, placeholderText: 'Your email', buttonText: 'Subscribe*' }
    ]

    render(){
        return(
            <>
                <MediaQuery query="(max-width: 767px)">
                    <div className="contact-box-sp">
                        <div className="box-top">
                            <h5 className="title">Subscribe to newsletter</h5>
                            <div className="input-window-area">
                                <InputWindow icon={this.SearchWindow[1].icon} 
                                            placeholderText={this.SearchWindow[1].placeholderText} 
                                            buttonText={this.SearchWindow[1].buttonText} />
                            </div>
                            <p className="sub-title">*Receive early discount offers, updates and new products info.</p>
                        </div>
                        <div className="box-bottom">
                            <p className="copy-right">© All rights reserved. Made by Createx Studio</p>
                            <div className="help-links-box">
                                <a href="#" className="help-link">Help Cneter</a>
                                <a href="#" className="help-link">Affiliates</a>
                                <a href="#" className="help-link">Support</a>
                                <a href="#" className="help-link">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <div className="contact-box-pc">
                        <div className="box-top">
                            <h5 className="title">Subscribe to newsletter</h5>
                            <div className="input-window-area">
                                <InputWindow icon={this.SearchWindow[0].icon} 
                                            placeholderText={this.SearchWindow[0].placeholderText} 
                                            buttonText={this.SearchWindow[0].buttonText} />
                            </div>
                            <p className="sub-title">*Receive early discount offers, updates and new products info.</p>
                        </div>
                        <div className="box-bottom">
                            <p className="copy-right">© All rights reserved. Made by Createx Studio</p>
                            <div className="help-links-box">
                                <a href="#" className="help-link">Help Cneter</a>
                                <a href="#" className="help-link">Affiliates</a>
                                <a href="#" className="help-link">Support</a>
                                <a href="#" className="help-link">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </>
        )
    }
}

export default FooterContacts;