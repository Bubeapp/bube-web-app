import React from 'react';

import Button from '../../../components/Button';
import FeaturesCard from '../../../components/FeaturesCard';

import Container from '../../../layouts/Container';

import right_arrow_icon from '../../../assets/right-arrow-alt_icon.svg';
import search_icon from '../../../assets/search-alt-2_icon.svg';
import command_icon from '../../../assets/command_icon.svg';
import badge_check_icon from '../../../assets/badge-check_icon.svg';

function FeaturesSection() {
  return (
    <section className="features__section" id="section--features">
      <Container otherClassNames="flex">
        <div className="col-1-of-3">
          <div className="features__content">
            <h2>
              Modern way of <span>hiring</span>{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh
              amet lacus. Facilisis aliquam turpis.
            </p>
            <Button type="button" classname="flex btn btn--bg-none">
              <span className="margin-btm-0">Try now</span>
              <img src={right_arrow_icon} alt="target lock icon" />
            </Button>
          </div>
        </div>
        <div className="col-2-of-3">
          <div className="features">
            <FeaturesCard
              icon={search_icon}
              title="Marketplace matching"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis."
              bgColor={true}
            />

            <FeaturesCard
              icon={command_icon}
              title="Easy use"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis."
            />

            <FeaturesCard
              icon={badge_check_icon}
              title="Verified Artisans"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis."
            />

            <FeaturesCard
              icon={search_icon}
              title="Marketplace matching"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh amet lacus. Facilisis aliquam turpis."
              bgColor
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;
