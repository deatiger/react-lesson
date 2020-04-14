import React, { Component } from 'react';
import MenuCard from './menuCard';
import pic01 from '../../images/cnt-01.jpg';
import pic02 from '../../images/cnt-02.jpg';
import pic03 from '../../images/cnt-03.jpg';
import pic04 from '../../images/cnt-04.jpg';
import pic05 from '../../images/cnt-05.jpg';
import pic06 from '../../images/cnt-06.jpg';
import pic07 from '../../images/cnt-07.jpg';
import pic08 from '../../images/cnt-08.jpg';

import MediaQuery from "react-responsive";

class ContentBox03 extends Component {
    constructor(props) {
        super(props)
    }

    menuProps = [
        { pic: pic01, title: 'Floating Phone and Tablet Mockup (PSD)', subTitle: 'by Createx Std. in Graphics', stars: 4, sales: 109, price: 1500 },
        { pic: pic02, title: 'Project Devices Showcase', subTitle: 'by Createx Std. in Graphics', stars: 5, sales: 95, price: 3000 },
        { pic: pic03, title: 'Business Card Branding Mockup', subTitle: 'by pixels in Graphics', stars: 4, sales: 256, price: 2500 },
        { pic: pic04, title: 'Business Card Branding Mockup', subTitle: 'by pixels in Graphics', stars: 4, sales: 256, price: 2500 },
        { pic: pic05, title: 'Business Card Branding Mockup', subTitle: 'by pixels in Graphics', stars: 4, sales: 256, price: 2500 },
        { pic: pic06, title: 'Floating Phone and Tablet Mockup (PSD)', subTitle: 'by pixels in Graphics', stars: 4, sales: 256, price: 2500 },
        { pic: pic07, title: 'Business Card Branding Mockup', subTitle: 'by pixels in Graphics', stars: 4, sales: 256, price: 2500 },
        { pic: pic08, title: 'Brighting Phone and Tablet Mockup (PSD)', subTitle: 'by pixels in Graphics', stars: 4, sales: 256, price: 2500 },
    ]


    render(){
        return(
            <>
                <MediaQuery query="(max-width: 767px)">
                    <div className="content-box-03">
                        <div className="content-area">
                            <div className="title-box">
                                <h3 className="title">The most recent releases</h3>
                            </div>
                            <div className="horizontal-list">
                                <MenuCard pic={this.menuProps[0].pic} title={this.menuProps[0].title} subTitle={this.menuProps[0].subTitle} stars={this.menuProps[0].stars} sales={this.menuProps[0].sales} price={this.menuProps[0].price} />
                                <MenuCard pic={this.menuProps[1].pic} title={this.menuProps[1].title} subTitle={this.menuProps[1].subTitle} stars={this.menuProps[1].stars} sales={this.menuProps[1].sales} price={this.menuProps[1].price} />
                                <MenuCard pic={this.menuProps[2].pic} title={this.menuProps[2].title} subTitle={this.menuProps[2].subTitle} stars={this.menuProps[2].stars} sales={this.menuProps[2].sales} price={this.menuProps[2].price} />
                                <MenuCard pic={this.menuProps[3].pic} title={this.menuProps[3].title} subTitle={this.menuProps[3].subTitle} stars={this.menuProps[3].stars} sales={this.menuProps[3].sales} price={this.menuProps[3].price} />
                            </div>
                            <div className="horizontal-list">
                                <MenuCard pic={this.menuProps[4].pic} title={this.menuProps[4].title} subTitle={this.menuProps[4].subTitle} stars={this.menuProps[4].stars} sales={this.menuProps[4].sales} price={this.menuProps[4].price} />
                                <MenuCard pic={this.menuProps[5].pic} title={this.menuProps[5].title} subTitle={this.menuProps[5].subTitle} stars={this.menuProps[5].stars} sales={this.menuProps[5].sales} price={this.menuProps[5].price} />
                                <MenuCard pic={this.menuProps[6].pic} title={this.menuProps[6].title} subTitle={this.menuProps[6].subTitle} stars={this.menuProps[6].stars} sales={this.menuProps[6].sales} price={this.menuProps[6].price} />
                                <MenuCard pic={this.menuProps[7].pic} title={this.menuProps[7].title} subTitle={this.menuProps[7].subTitle} stars={this.menuProps[7].stars} sales={this.menuProps[7].sales} price={this.menuProps[7].price} />
                            </div>
                            <div className="view-more-area">
                                <a href="#" className="view-more-link">
                                    View more service >
                                </a>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <div className="content-box-03">
                        <div className="content-area">
                            <div className="title-box">
                                <h3 className="title">The most recent releases</h3>
                            </div>
                            <div className="flex-menu-area">
                                <MenuCard pic={this.menuProps[0].pic} title={this.menuProps[0].title} subTitle={this.menuProps[0].subTitle} stars={this.menuProps[0].stars} sales={this.menuProps[0].sales} price={this.menuProps[0].price} />
                                <MenuCard pic={this.menuProps[1].pic} title={this.menuProps[1].title} subTitle={this.menuProps[1].subTitle} stars={this.menuProps[1].stars} sales={this.menuProps[1].sales} price={this.menuProps[1].price} />
                                <MenuCard pic={this.menuProps[2].pic} title={this.menuProps[2].title} subTitle={this.menuProps[2].subTitle} stars={this.menuProps[2].stars} sales={this.menuProps[2].sales} price={this.menuProps[2].price} />
                                <MenuCard pic={this.menuProps[3].pic} title={this.menuProps[3].title} subTitle={this.menuProps[3].subTitle} stars={this.menuProps[3].stars} sales={this.menuProps[3].sales} price={this.menuProps[3].price} />
                            </div>
                            <div className="flex-menu-area">
                                <MenuCard pic={this.menuProps[4].pic} title={this.menuProps[4].title} subTitle={this.menuProps[4].subTitle} stars={this.menuProps[4].stars} sales={this.menuProps[4].sales} price={this.menuProps[4].price} />
                                <MenuCard pic={this.menuProps[5].pic} title={this.menuProps[5].title} subTitle={this.menuProps[5].subTitle} stars={this.menuProps[5].stars} sales={this.menuProps[5].sales} price={this.menuProps[5].price} />
                                <MenuCard pic={this.menuProps[6].pic} title={this.menuProps[6].title} subTitle={this.menuProps[6].subTitle} stars={this.menuProps[6].stars} sales={this.menuProps[6].sales} price={this.menuProps[6].price} />
                                <MenuCard pic={this.menuProps[7].pic} title={this.menuProps[7].title} subTitle={this.menuProps[7].subTitle} stars={this.menuProps[7].stars} sales={this.menuProps[7].sales} price={this.menuProps[7].price} />
                            </div>
                            <div className="view-more-area">
                                <a href="#" className="view-more-link">
                                    View more service >
                                </a>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </>
        )
    }
}

export default ContentBox03;