import React from 'react';

import Button from '../Button';

import google_play from '../../assets/google_play.svg';
import apple_store from '../../assets/app_store.svg';

function DownloadAppCta() {
  return (
    <>
      <Button>
        <img src={google_play} alt="Download on Google play button" />
      </Button>
      <Button>
        <img src={apple_store} alt="Download on Google play button" />
      </Button>
    </>
  );
}

export default DownloadAppCta;
