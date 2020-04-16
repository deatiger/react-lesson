import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioCnt01 from './portfolioCnt01';
import PortfolioCnt02 from './portfolioCnt02';
import Footer from '../../footer/footer';

import MediaQuery from "react-responsive";


function PortfolioMain(props) {

  const portfolioes = [
    { title: 'Central Kitchen', 
      subTitle: 'Ruby on Rails',
      urlWeb: 'https://central-kitchen.herokuapp.com/',
      urlCode: 'https://bitbucket.org/genki_ueno/central_kitchen-made-by-gu/src/master/',
      language: ['Ruby', 'HTML', 'CSS', 'JavaScript'],
      framework: ['Ruby on Rails'],
      cssFramework : ['Bootstrap'],
      jsLibrary: ['jQuery'],
      server: 'Heroku',
      tools: ['Git', 'Bitbucket', 'clubhouse']
    },
    { title: 'Instagram Clone', 
      subTitle: 'Ruby on Rails',
      urlWeb: 'https://central-kitchen.herokuapp.com/',
      urlCode: 'https://bitbucket.org/genki_ueno/central_kitchen-made-by-gu/src/master/',
      language: ['Ruby', 'HTML', 'CSS', 'JavaScript'],
      framework: ['Ruby on Rails'],
      cssFramework : ['Bootstrap'],
      jsLibrary: ['jQuery'],
      server: 'Heroku',
      tools: ['Git', 'Bitbucket', 'clubhouse']
    },
  ]

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
              <PortfolioCnt02 title={ portfolioes[0].language }/>
          </main>
          <Footer />
      </MediaQuery>
    </React.Fragment>
  );
}
        
export default PortfolioMain;
