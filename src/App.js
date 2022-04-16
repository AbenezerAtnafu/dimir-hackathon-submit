import "./App.css";
import Navbar from "./components/common/Navbar";
import { useState } from "react";
import MobileNavbar from "./components/common/MobileNav";
import TrackSection from "./components/sections/trackSection";

import HeroSection from "./components/sections/hero-section";
import MoreCourseSection from "./components/sections/moreCourseSection";
import CourseSection from "./components/sections/courseSection";
import RecentVideos from "./components/sections/recent-videos";
import Footer from "./components/common/Footer";
import ProGroupSection from "./components/sections/proGroupSection";
import CounterSection from "./components/sections/counterSection";
import LearnAndCollaborate from "./components/sections/learnAndCollaborate";

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="App">
      <Navbar
        isMobileNavOpen={isMobileNavOpen}
        showMobileNav={setIsMobileNavOpen}
      />
      <MobileNavbar
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      {/* <Navbar />
      {/* <HeroSection />
      <TrackSection /> */}
      <HeroSection />
      <TrackSection />
      <CourseSection />
      <MoreCourseSection />
      <ProGroupSection />
      <CounterSection />
      <RecentVideos title="Recent Videos" />
      <RecentVideos title="Business Fundamentals" />
      <RecentVideos title="Design Fundamentals" />
      <RecentVideos title="Podcast" />
      <RecentVideos title="Blog" />
      <LearnAndCollaborate />

      <Footer />
    </div>
  );
}

export default App;
