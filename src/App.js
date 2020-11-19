import React from 'react';
import HomePage from "./pages/HomePage";
import PageTop from "./component/PageTop/PageTop";
import TopNavigation from "./component/topNavigation/TopNavigation";

function App() {
  return (
    <div >
        <TopNavigation/>
        <PageTop pageTitle="About Me"/>
      {/*<HomePage/>*/}
    </div>
  );
}

export default App;
