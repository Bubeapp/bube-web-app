import React from 'react';
import Button from '../../components/Button';
import Container from '../../layouts/Container';

import bube_logo from '../../assets/bube_logo.svg';
import external_icon from '../../assets/external_icon.svg';
import FaqsCard from '../../components/FaqsCard';

function FAQs() {
  return (
    <div className="faqs">
      <nav className="faqs__navbar navbar">
        <div className="container">
          <div className="navbar__nav">
            <img className="navbar__logo" src={bube_logo} alt="Bube logo" />
            <Button classname="faqs__goto btn btn--bg-none">
              <img src={external_icon} alt="External link icon" />
              <span>Go to bube</span>
            </Button>
          </div>
        </div>
      </nav>

      <header className="faqs__header">
        <Container>
          <h3>FAQs & Support</h3>
        </Container>
      </header>

      <main>
        <Container>
          <FaqsCard
            title="How can I subscribe?"
            summary=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
              esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
              aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
              deserunt nisi."
          />
          <FaqsCard
            title="How can I subscribe?"
            summary=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
              esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
              aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
              deserunt nisi."
            readMore={true}
          />
          <FaqsCard
            title="How can I subscribe?"
            summary=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
              esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
              aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
              deserunt nisi."
            readMore={true}
          />

          <FaqsCard
            title="How can I subscribe?"
            summary=" Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
              esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
              aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
              deserunt nisi."
          />
        </Container>

        <Container>
          <div className="faqs__questions">
            <h2>Still have questions</h2>
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
              esse pariatur duis deserunt mollit dolore cillum minim tempor enim.{' '}
            </p>
            <Button classname="btn btn--primary">Contact customer support</Button>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default FAQs;
