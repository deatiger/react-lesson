import React, { Component } from 'react';
import MediaQuery from "react-responsive";

function Header(props) {
    return(
        <React.Fragment>
            <MediaQuery query="(max-width: 767px)">
                {/* スマホ版は固定ヘッダーなし */}
                {/* <div>ここにスマートフォン向けの要素を書く</div> */}
                <></>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)">
                <div style={{display: "none"}}>ここにパソコン向けの要素を書く</div>
            </MediaQuery>
        </React.Fragment>
    )
}

export default Header; 