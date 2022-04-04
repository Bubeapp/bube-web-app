import React from 'react';

import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AppFeaturesSection01 from './AppFeaturesSection01';
import AppFeaturesSection02 from './AppFeaturesSection02';
import MeetArtisansSection from './MeetArtisansSection';

function Homepage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AppFeaturesSection01 />
      <AppFeaturesSection02 />
      <MeetArtisansSection />
    </main>
  );
}

export default Homepage;
