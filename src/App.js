import React from 'react';
import PageTop from "./component/PageTop/PageTop";
import AboutPage from "./pages/AboutPage";
import TopNavigation from "./component/topNavigation/TopNavigation";
import TopBanner from "./component/topBanner/TopBanner";
import ContactDescription from "./component/ContactDescription/ContactDescription";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div >
    <TopNavigation/>
    <PageTop pageTitle="Contact"/>
    <ContactDescription />
    <Footer/>
    </div>
  );
}

export default App;
