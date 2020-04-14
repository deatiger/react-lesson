import React, { Component } from 'react';
import ContentBox01 from './contentBox01';
import ContentBox02 from './contentBox02';
import ContentBox03 from './contentBox03';
import MediaQuery from "react-responsive";

class Main extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <MediaQuery query="(max-width: 767px)">
                    <main className="main-area-sp">
                        <div className="header-default"></div>
                        <ContentBox01 />
                        <ContentBox02 />
                        <ContentBox03 />
                    </main>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <main className="main-area-pc">
                        <div className="header-default"></div>
                        <ContentBox01 />
                        <ContentBox02 />
                        <ContentBox03 />
                    </main>
                </MediaQuery>
            </React.Fragment>
        )
    }
}

export default Main;