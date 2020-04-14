import React from 'react';

import MediaQuery from "react-responsive";


export default function SearchWindow(props) {
    return(
        <>
            <MediaQuery query="(max-width: 767px)">
                <div className="search-window-box-sp">
                    <div className="search-icon">
                        {props.icon}
                    </div>
                    <input className="search-window" placeholder={props.placeholderText} />
                    <div className="search-btn-box">
                        <button className="search-btn">
                            {props.buttonText}
                        </button>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)">
                <div className="search-window-box-pc">
                    <div className="search-icon">
                        {props.icon}
                    </div>
                    <input className="search-window" placeholder={props.placeholderText} />
                    <div className="search-btn-box">
                        <button className="search-btn">
                            {props.buttonText}
                        </button>
                    </div>
                </div>
            </MediaQuery>
        </>
    )
}