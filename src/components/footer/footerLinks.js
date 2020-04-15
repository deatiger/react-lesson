import React from 'react';
import SnsBox from './snsLinkBox';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import { Link } from 'react-router-dom';

import MediaQuery from "react-responsive";


function FooterLinks(props) {
    // constructor(props) {
        // super(props)
    // }

    const icons = [
        { twitter: <TwitterIcon /> },
        { facebook: <FacebookIcon />},
        { instagram: <InstagramIcon />},
        { linkedIn: <LinkedInIcon />},
        { mail: <MailOutlineIcon />},
        { twitter: <TwitterIcon fontSize="small"/> },
        { facebook: <FacebookIcon fontSize="small"/>},
        { instagram: <InstagramIcon fontSize="small"/>},
        { linkedIn: <LinkedInIcon fontSize="small"/>},
        { mail: <MailOutlineIcon fontSize="small"/>}
    ]
    
    // render(){
        return(
            <>
                <MediaQuery query="(max-width: 767px)">
                    <div className="links-box-sp">
                        <div className="title-area">
                            <div className="text-box">
                                <h5 className="title">Cartzilla <span>Maarketplace</span></h5>
                                <p className="sub-title">High quality items created by our global community.</p>
                            </div>
                            <div className="numbers-box">
                                <p><span className="number">65,478</span>Products</p>
                                <p><span className="number">2,521</span>Members</p>
                                <p><span className="number">897</span>Vendors</p>
                            </div>
                            <div className="sns-links-area">
                                <SnsBox icon={icons[5].twitter} fontSize="small"/>
                                <SnsBox icon={icons[6].facebook} />
                                <SnsBox icon={icons[7].instagram} />
                                <SnsBox icon={icons[8].linkedIn} />
                                <SnsBox icon={icons[9].mail} />
                            </div>
                        </div>
                        <div className="bottom-box">
                            <div className="links">
                                <h5 className="title">Categories</h5>
                                <a href="#" className="sub-title">Photos</a>
                                <a href="#" className="sub-title">Graphics</a>
                                <a href="#" className="sub-title">UI Design</a>
                                <a href="#" className="sub-title">Web Theme</a>
                                <a href="#" className="sub-title">Fonts</a>
                                <a href="#" className="sub-title">Add-Ons</a>
                            </div>
                            <div className="links">
                                <h5 className="title">For members</h5>
                                <a href="#" className="sub-title">Licenses</a>
                                <a href="#" className="sub-title">Return policy</a>
                                <a href="#" className="sub-title">Payment methods</a>
                                <a href="#" className="sub-title">Become a vendor</a>
                                <a href="#" className="sub-title">Become an affiliate</a>
                                <a href="#" className="sub-title">Marketplace benbefits</a>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <div className="links-box-pc">
                        <div className="left-box">
                            <div className="text-box">
                                <h5 className="title">Cartzilla <span>Maarketplace</span></h5>
                                <p className="sub-title">High quality items created by our global community.</p>
                            </div>
                            <div className="numbers-box">
                                <span className="number">65,478</span>Products<span className="break">|</span>
                                <span className="number">2,521</span>Members<span className="break">|</span>
                                <span className="number">897</span>Vendors
                            </div>
                            <div className="sns-links-area">
                                <SnsBox icon={icons[0].twitter} />
                                <SnsBox icon={icons[1].facebook} />
                                <SnsBox icon={icons[2].instagram} />
                                <SnsBox icon={icons[3].linkedIn} />
                                <SnsBox icon={icons[4].mail} />
                            </div>
                        </div>
                        <div className="right-box-01">
                            <h5 className="title">Categories</h5>
                            <a href="#portfolios" className="sub-title">Portfolios</a>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Graphics</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">UI Design</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Web Theme</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Fonts</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Add-Ons</p>
                        </div>
                        <div className="right-box-02">
                            <h5 className="title">For members</h5>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Licenses</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Return policy</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Payment methods</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Become a vendor</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Become an affiliate</p>
                            <p onClick={()=>{ props.openModal() }} className="sub-title">Marketplace benbefits</p>
                        </div>
                    </div>
                </MediaQuery>
            </>
        )
    // }
}

export default FooterLinks;