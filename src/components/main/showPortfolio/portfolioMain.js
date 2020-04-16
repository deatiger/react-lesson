import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioCnt01 from './portfolioCnt01';
import PortfolioCnt02 from './portfolioCnt02';
import Footer from '../../footer/footer';

import MediaQuery from "react-responsive";


function PortfolioMain(props) {
  return (
    <React.Fragment>
      <MediaQuery query="(max-width: 767px)">
          <></>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
          <main className="portfolio-main-area-pc">
              <div className="header-default">
                <Link to='/'>Topへ</Link>
              </div>
              <PortfolioCnt01 />
              <PortfolioCnt02 />
          </main>
          <Footer />
      </MediaQuery>
    </React.Fragment>
  );
}
        
export default PortfolioMain;
