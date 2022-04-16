import React from 'react';
import Button from '../Button';

import bookmark_icon from '../../assets/bookmark_icon.svg';

function FaqsCard({ title, summary, readMore }) {
  return (
    <div className="faqs__card ">
      <img src={bookmark_icon} alt="Bookmark Icon" />
      <h4>{title}</h4>
      <p>{summary}</p>
      {readMore && <Button classname="btn btn--bg-none">Read more</Button>}
    </div>
  );
}

export default FaqsCard;
