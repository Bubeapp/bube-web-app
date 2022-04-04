import React from 'react';
import DownloadAppCta from '../../../components/DownloadAppCta';
import Container from '../../../layouts/Container';

import illustration_03 from '../../../assets/illustration_03.png';

function DownloadAppSection() {
  return (
    <section className="download__section">
      <Container>
        <div className="download__download flex">
          <div className="col-1-of-2">
            <div className="download__app-illustration">
              <img src={illustration_03} alt="App Screen" />
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="download__cta">
              <h2>Get started with Bube, Download App</h2>
              <div className="download__btns">
                <DownloadAppCta />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DownloadAppSection;
