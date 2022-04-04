import React from 'react';
import Button from '../../../components/Button';

import Container from '../../../layouts/Container';

function BecomeAnArtisans() {
  return (
    <section className="become-an-artisan__section">
      <Container otherClassNames="flex">
        <div className="col-1-of-2">
          <div className="become-an-artisan__content">
            <h2>Become an artisan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor at nibh
              amet lacus.
            </p>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="become-an-artisan__cta">
            <Button classname="btn btn--primary btn--lg">Submit an application</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BecomeAnArtisans;
