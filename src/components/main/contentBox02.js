import React, { Component } from 'react';
import MenuCard from './menuCard';
import pic01 from '../../images/content02-1.jpg';
import pic02 from '../../images/content02-2.jpg';
import pic03 from '../../images/content02-3.jpg';

import MediaQuery from "react-responsive";

class ContentBox02 extends Component {
    constructor(props) {
        super(props)
    }

    menuProps = [
        { pic: pic01, title: 'Central Kitchen (Ruby on Rails)', subTitle: 'by Genki Ueno', stars: 4, sales: 109, price: 1500 },
        { pic: pic02, title: 'Project Devices Showcase', subTitle: 'by Createx Std. in Graphics', stars: 5, sales: 95, price: 3000 },
        { pic: pic03, title: 'Business Card Branding Mockup', subTitle: 'by pixels in Graphics', stars: 4, sales: 256, price: 2500 }
    ]

    render(){
        return(
            <>
                <MediaQuery query="(max-width: 767px)">
                    <div className="content-box-02">
                        <div className="content-area">
                            <div className="text-box">
                                <h3 className="title">
                                    Discover featured products
                                </h3>
                                <p className="sub-title">
                                    Every week we hand-pick some of the best items from our collection
                                </p>
                            </div>
                            <ul className="horizontal-list">
                                <MenuCard pic={this.menuProps[0].pic} title={this.menuProps[0].title} subTitle={this.menuProps[0].subTitle} stars={this.menuProps[0].stars} sales={this.menuProps[0].sales} price={this.menuProps[0].price} />
                                <MenuCard pic={this.menuProps[1].pic} title={this.menuProps[1].title} subTitle={this.menuProps[1].subTitle} stars={this.menuProps[1].stars} sales={this.menuProps[1].sales} price={this.menuProps[1].price} />
                                <MenuCard pic={this.menuProps[2].pic} title={this.menuProps[2].title} subTitle={this.menuProps[2].subTitle} stars={this.menuProps[2].stars} sales={this.menuProps[2].sales} price={this.menuProps[2].price} />
                            </ul>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <div className="content-box-02">
                        <div className="content-area">
                            <div className="text-box">
                                <h3 className="title">
                                    Discover featured products
                                </h3>
                                <p className="sub-title">
                                    Every week we hand-pick some of the best items from our collection
                                </p>
                            </div>
                            <div className="flex-menu-area">
                                <MenuCard pic={this.menuProps[0].pic} title={this.menuProps[0].title} subTitle={this.menuProps[0].subTitle} stars={this.menuProps[0].stars} sales={this.menuProps[0].sales} price={this.menuProps[0].price} />
                                <MenuCard pic={this.menuProps[1].pic} title={this.menuProps[1].title} subTitle={this.menuProps[1].subTitle} stars={this.menuProps[1].stars} sales={this.menuProps[1].sales} price={this.menuProps[1].price} />
                                <MenuCard pic={this.menuProps[2].pic} title={this.menuProps[2].title} subTitle={this.menuProps[2].subTitle} stars={this.menuProps[2].stars} sales={this.menuProps[2].sales} price={this.menuProps[2].price} />
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </>
        )
    }
}

export default ContentBox02;