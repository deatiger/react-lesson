import React from 'react';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import Image01 from '../../../images/portfolio01-2.jpg';
import Image02 from '../../../images/portfolio01-1.jpg';
import Image03 from '../../../images/portfolio01-3.jpg';


export default function PortfolioCnt02(props) {
    return(
        <React.Fragment>
            <div className="cnt-box-02">
                <div className="portfolio-box">
                    <div className="left-box">
                        <div className="row01">
                            <img src={Image01} alt="portfolio-image" />
                        </div>
                        <div className="row02">
                            <div className="left">
                                <img src={Image02} alt="portfolio-image" />
                            </div>
                            <div className="right">
                                <img src={Image03} alt="portfolio-image" />
                            </div>
                        </div>
                        <div className="row03">
                            row03
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="row01">
                            <a href="https://central-kitchen.herokuapp.com/"　target="_blank">
                                <div class="to-portfolio">ポートフォリオサイトへ</div>
                            </a>
                            <a href="https://bitbucket.org/genki_ueno/central_kitchen-made-by-gu/src/master/"　target="_blank">
                                <div class="to-portfolio">ソースコードへ（Bitbucket）</div>
                            </a>
                        </div>
                        <div className="row02">
                            <div className="title"><div><RadioButtonCheckedIcon /></div><p>言語</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>Ruby</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>HTML</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>CSS</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>JavaScript</p></div>
                            <div className="title"><div><RadioButtonCheckedIcon /></div><p>フレームワーク</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>Ruby on Rails</p></div>
                            <div className="title"><div><RadioButtonCheckedIcon /></div><p>CSSフレームワーク</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>Bootstrap</p></div>
                            <div className="title"><div><RadioButtonCheckedIcon /></div><p>JSライブラリ</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>jQuery</p></div>
                            <div className="title"><div><RadioButtonCheckedIcon /></div><p>サーバー</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>Heroku</p></div>
                            <div className="title"><div><RadioButtonCheckedIcon /></div><p>その他ツールなど</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>Git</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>Bitbucket</p></div>
                            <div className="list-title"><div><CheckCircleOutlineIcon /></div><p>clubhouse</p></div>
                        </div>
                        <div className="row03">
                            row03
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}