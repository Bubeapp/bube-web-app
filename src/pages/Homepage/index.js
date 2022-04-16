import React from 'react';

import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import BecomeAnArtisans from './BecomeAnArtisans';
import DownloadAppSection from './DownloadAppSection';
import MeetArtisansSection from './MeetArtisansSection';
import AppFeaturesSection01 from './AppFeaturesSection01';
import AppFeaturesSection02 from './AppFeaturesSection02';

function Homepage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AppFeaturesSection01 />
      <AppFeaturesSection02 />
      <MeetArtisansSection />
      <BecomeAnArtisans />
      <DownloadAppSection />
    </main>
  );
}

export default Homepage;
