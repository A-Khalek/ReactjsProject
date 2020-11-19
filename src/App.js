import React from 'react';
import PageTop from "./component/PageTop/PageTop";
import TopNavigation from "./component/topNavigation/TopNavigation";
import Footer from "./component/Footer/Footer";
import PortfolioDescription from "./component/PortfolioDescription/PortfolioDescription";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesDescription from "./component/ServicesDescription/ServicesDescription";


function App() {
  return (
    <div >

     <TopNavigation/>
     <PageTop pageTitle="Portfolio"/>
     <ServicesDescription/>
      <Footer/>
    </div>
  );
}

export default App;
