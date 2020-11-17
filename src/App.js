import React from 'react';
import TopBanner from "./component/topBanner/TopBanner";
import Services from "./component/services/Services";
import TopNavigation from "./component/topNavigation/TopNavigation";
import Analysis from "./component/Analysis/Analysis";


function App() {
  return (
    <div >
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
    </div>
  );
}

export default App;
