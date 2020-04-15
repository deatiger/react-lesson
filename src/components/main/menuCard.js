import React, { Component } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

import MediaQuery from "react-responsive";

function MenuCard(props) {
    return(
        <>
            <MediaQuery query="(max-width: 767px)">
                <div className="menu-box">
                    {/* <img src={topImage} className="menu-card-image" alt="image" /> */}
                    <div className="content-top">
                        <img src={props.pic} className="image" alt="picture" />
                        <div className="hover-view-box">
                            <div className="hover-view-row">
                                <a href="#" className="view-btn">
                                    <span className="icon-view"><VisibilityIcon /></span>
                                </a>
                                <div className="view-btn" onClick={()=> {props.openModal()}}>
                                    <span className="icon-like"><FavoriteIcon /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="row01">
                            <p className="sub-title">{props.subTitle}</p>
                            <div className="review-stars">stars: {props.stars}</div>
                        </div>
                        <h5 className="row02">{props.title}</h5>
                        <div className="row03">
                            <div className="sales-num">{props.sales} Sales</div>
                            <div className="price">¥{props.price}</div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)">
                <div className="menu-box">
                    {/* <img src={topImage} className="menu-card-image" alt="image" /> */}
                    <div className="content-top">
                        <img src={props.pic} className="image" alt="picture" />
                        <div className="hover-view-box">
                            <div className="hover-view-row">
                                <Link to="/portfolio" className="view-btn">
                                    <span className="icon-view"><VisibilityIcon /></span>
                                </Link>
                                <div className="view-btn" onClick={()=> {props.openModal()}}>
                                    <span className="icon-like"><FavoriteIcon /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="row01">
                            <p className="sub-title">{props.subTitle}</p>
                            <div className="review-stars">stars: {props.stars}</div>
                        </div>
                        <h5 className="row02">{props.title}</h5>
                        <div className="row03">
                            <div className="sales-num">{props.sales} Sales</div>
                            <div className="price">¥{props.price}</div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    )
}

export default MenuCard;