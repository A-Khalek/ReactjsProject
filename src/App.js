import React from 'react';
import TopBanner from "./component/topBanner/TopBanner";
import Services from "./component/services/Services";
import TopNavigation from "./component/topNavigation/TopNavigation";
import Analysis from "./component/Analysis/Analysis";
import Summary from "./component/Summary/Summary";
import RecentProjects from "./component/RecentProjects/RecentProjects";


function App() {
  return (
    <div >
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProjects/>
    </div>
  );
}

export default App;
