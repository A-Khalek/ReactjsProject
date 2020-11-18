import React from 'react';
import TopBanner from "./component/topBanner/TopBanner";
import Services from "./component/services/Services";
import TopNavigation from "./component/topNavigation/TopNavigation";
import Analysis from "./component/Analysis/Analysis";
import Summary from "./component/Summary/Summary";
import RecentProjects from "./component/RecentProjects/RecentProjects";
import Courses from "./component/Courses/Courses";
import Video from "./component/Video/Video";
import ClientReview from "./component/ClientReview/ClientReview";
import Footer from "./component/Footer/Footer";


function App() {
  return (
    <div >
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProjects/>
      <Courses/>
      <Video/>
      <ClientReview/>
      <Footer/>
    </div>
  );
}

export default App;
