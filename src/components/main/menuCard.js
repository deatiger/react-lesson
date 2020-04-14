import React, { Component } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';

import MediaQuery from "react-responsive";

class MenuCard extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <>
                <MediaQuery query="(max-width: 767px)">
                    <div className="menu-box">
                        {/* <img src={topImage} className="menu-card-image" alt="image" /> */}
                        <div className="content-top">
                            <img src={this.props.pic} className="image" alt="picture" />
                            <div className="hover-view-box">
                                <div className="hover-view-row">
                                    <a href="#" className="view-btn">
                                        <span className="icon-view"><VisibilityIcon /></span>
                                    </a>
                                    <a href="#" className="view-btn">
                                        <span className="icon-like"><FavoriteIcon /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="content-bottom">
                            <div className="row01">
                                <p className="sub-title">{this.props.subTitle}</p>
                                <div className="review-stars">stars: {this.props.stars}</div>
                            </div>
                            <h5 className="row02">{this.props.title}</h5>
                            <div className="row03">
                                <div className="sales-num">{this.props.sales} Sales</div>
                                <div className="price">¥{this.props.price}</div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <div className="menu-box">
                        {/* <img src={topImage} className="menu-card-image" alt="image" /> */}
                        <div className="content-top">
                            <img src={this.props.pic} className="image" alt="picture" />
                            <div className="hover-view-box">
                                <div className="hover-view-row">
                                    <a href="#" className="view-btn">
                                        <span className="icon-view"><VisibilityIcon /></span>
                                    </a>
                                    <a href="#" className="view-btn">
                                        <span className="icon-like"><FavoriteIcon /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="content-bottom">
                            <div className="row01">
                                <p className="sub-title">{this.props.subTitle}</p>
                                <div className="review-stars">stars: {this.props.stars}</div>
                            </div>
                            <h5 className="row02">{this.props.title}</h5>
                            <div className="row03">
                                <div className="sales-num">{this.props.sales} Sales</div>
                                <div className="price">¥{this.props.price}</div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </>
        )
    }
}

export default MenuCard;