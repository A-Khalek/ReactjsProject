import React from 'react';
import HomePage from "./pages/HomePage";
import PageTop from "./component/PageTop/PageTop";
import TopNavigation from "./component/topNavigation/TopNavigation";
import AboutDescription from "./component/AboutDescription/AboutDescription";

function App() {
  return (
    <div >
        <TopNavigation/>
        <PageTop pageTitle="About Me"/>
        <AboutDescription/>
      {/*<HomePage/>*/}
    </div>
  );
}

export default App;
