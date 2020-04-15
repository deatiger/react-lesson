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
import Faker from 'faker';

import MediaQuery from "react-responsive";

function ContentBox03(props) {
    const menuProps = [
        { pic: pic01, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 4, sales: 109, price: 1500 },
        { pic: pic02, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 5, sales: 95, price: 3000 },
        { pic: pic03, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 4, sales: 256, price: 2500 },
        { pic: pic04, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 4, sales: 256, price: 2500 },
        { pic: pic05, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 4, sales: 256, price: 2500 },
        { pic: pic06, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 4, sales: 256, price: 2500 },
        { pic: pic07, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 4, sales: 256, price: 2500 },
        { pic: pic08, title: Faker.address.city(), subTitle: 'by ' + Faker.internet.userName(), stars: 4, sales: 256, price: 2500 },
    ]

    return(
        <>
            <MediaQuery query="(max-width: 767px)">
                <div className="content-box-03">
                    <div className="content-area">
                        <div className="title-box">
                            <h3 className="title">The most recent releases</h3>
                        </div>
                        <div className="horizontal-list">
                            { 
                                [0,1,2,3].map((index) => <MenuCard key={index.toString()} pic={menuProps[index].pic} title={menuProps[index].title} subTitle={menuProps[index].subTitle} stars={menuProps[index].stars} sales={menuProps[index].sales} price={menuProps[index].price} openModal={()=> props.openModal()} />) 
                            }                        </div>
                        <div className="horizontal-list">
                            { 
                                [4,5,6,7].map((index) => <MenuCard key={index.toString()} pic={menuProps[index].pic} title={menuProps[index].title} subTitle={menuProps[index].subTitle} stars={menuProps[index].stars} sales={menuProps[index].sales} price={menuProps[index].price} openModal={()=> props.openModal()} />) 
                            }                        </div>
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
                            { 
                                [0,1,2,3].map((index) => <MenuCard key={index.toString()} pic={menuProps[index].pic} title={menuProps[index].title} subTitle={menuProps[index].subTitle} stars={menuProps[index].stars} sales={menuProps[index].sales} price={menuProps[index].price} openModal={()=> props.openModal()} />) 
                            }
                        </div>
                        <div className="flex-menu-area">
                            { 
                                [4,5,6,7].map((index) => <MenuCard key={index.toString()} pic={menuProps[index].pic} title={menuProps[index].title} subTitle={menuProps[index].subTitle} stars={menuProps[index].stars} sales={menuProps[index].sales} price={menuProps[index].price} openModal={()=> props.openModal()} />) 
                            }                        
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

export default ContentBox03;