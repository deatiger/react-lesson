import React, { Component } from 'react';
import topImage from '../../images/top-image.jpg';
import SearchWindow from './searchWindow';
import SearchIcon from '@material-ui/icons/Search';

import MediaQuery from "react-responsive";

class ContentBox01 extends Component {
    constructor(props) {
        super(props)
    }

    SearchWindow = [
        { icon: <SearchIcon />, placeholderText: 'Start your search', buttonText: 'Search' }
    ]

    render(){
        return(
            <>
                <MediaQuery query="(max-width: 767px)">
                    <div className="content-box-01">
                        <div className="text-box">
                            <h1 className="title">
                                Over 1,500 curated Dsign resources, Images, Graphic & Website templates
                            </h1>
                            <h2 className="sub-title">
                                High quality items created by our global community
                            </h2>
                            <div className="search-window-area">
                                <SearchWindow icon={this.SearchWindow[0].icon} 
                                            placeholderText={this.SearchWindow[0].placeholderText} 
                                            buttonText={this.SearchWindow[0].buttonText} />
                            </div>
                        </div>
                        <img src={topImage} className="top-image" alt="top-image" />
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <div className="content-box-01">
                        <div className="text-box">
                            <div className="left-box">

                            </div>
                            <div className="right-box">
                                <h1 className="title">
                                    Over 1,500 curated Dsign resources, Images, Graphic & Website templates
                                </h1>
                                <h2 className="sub-title">
                                    High quality items created by our global community
                                </h2>
                                <div className="search-window-area">
                                    <SearchWindow icon={this.SearchWindow[0].icon} 
                                                placeholderText={this.SearchWindow[0].placeholderText} 
                                                buttonText={this.SearchWindow[0].buttonText} />
                                </div>
                            </div>
                        </div>
                        <img src={topImage} className="top-image" alt="top-image" />
                    </div>
                </MediaQuery>
            </>    
        )
    }
}

export default ContentBox01;