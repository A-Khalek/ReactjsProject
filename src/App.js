import React from 'react';
import PageTop from "./component/PageTop/PageTop";
import TopNavigation from "./component/topNavigation/TopNavigation";
import Footer from "./component/Footer/Footer";
import PortfolioDescription from "./component/PortfolioDescription/PortfolioDescription";


function App() {
  return (
    <div >

     <TopNavigation/>
     <PageTop pageTitle="Portfolio"/>
     <PortfolioDescription/>
      <Footer/>
    </div>
  );
}

export default App;
