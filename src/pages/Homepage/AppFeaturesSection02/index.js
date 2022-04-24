import React from 'react';

import Container from '../../../layouts/Container';

import illustration_02 from '../../../assets/illustration_02.svg';

function AppFeaturesSection02() {
  return (
    <section className="app-features-2__section" id="section--app-features-2">
      <Container>
        <h2 className="app-features-2__caption">
          <span className="accent">Bube</span> search algorithm chooses from 5,000+{' '}
          <span className="accent">artisans.</span>{' '}
        </h2>
      </Container>
      <Container otherClassNames="flex">
        <div className="col-1-of-2">
          <div className="app-features-2__feature">
            <div className="app-features-2__feature-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh
                amet lacus. Facilisis aliquam turpis quis odio sagittis, sed. Semper
                quis sit pharetra sit sagittis. Odio enim id arcu ipsum ac.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh
                amet lacus. Facilisis aliquam turpis quis odio sagittis, sed. Semper
                quis sit pharetra sit sagittis. Odio enim id arcu ipsum ac.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="app-features-2__feature">
            <div className="app-features-2__feature-img">
              <img src={illustration_02} alt="App Screen" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AppFeaturesSection02;
