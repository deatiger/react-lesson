import React, { Component } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

import MediaQuery from "react-responsive";

class MenuCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.setState({
            count: Math.floor( Math.random() * 300),
        })
    }

    // componentWillUnmount() {
    //     document.getElementById('like-count').removeEventListener('click', this.countUp)
    // }

    countUp = () => {
        this.setState({
            count: this.state.count + 1
        });
        // console.log("hola!");
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
                                    <div className="view-btn" onClick={()=> {this.props.openModal()}}>
                                        <span className="icon-like"><FavoriteIcon /></span>
                                    </div>
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
                                    <Link to="/portfolio" className="view-btn">
                                        <span className="icon-view"><VisibilityIcon /></span>
                                    </Link>
                                    <div className="view-btn" onClick={()=> this.countUp()}>
                                        <span className="icon-like"><FavoriteIcon /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-bottom">
                            <div className="row01">
                                <p className="sub-title">{this.props.subTitle}</p>
                                <div className="icon-like-box">
                                    <div className="icon-like"><FavoriteIcon /></div>
                                    <div className="like-count">{this.state.count}</div>
                                </div>
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