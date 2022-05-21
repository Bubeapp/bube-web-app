import React from 'react';
import Checkbox from '../Checkbox';

import request_img from '../../assets/request_img.png';
import RequestCard from '../RequestCard';

function RequestList({ data }) {
  return (
    <div className="request__container">
      <div className="request__header">
        <Checkbox label="Show active" />
      </div>

      <div className="request__grid">
        <RequestCard
          title="Plumbing"
          image={request_img}
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati, perspiciatis omnis incidunt illum? Culpa laboriosam quod dolores
          mollitia vel."
          amount={500}
          datetime="15 May 2020 8:30 am"
        />
        <RequestCard
          title="Plumbing"
          image={request_img}
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati."
          amount={500}
          datetime="15 May 2020 8:30 am"
        />
        <RequestCard
          title="Plumbing"
          image={request_img}
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati."
          amount={500}
          datetime="15 May 2020 8:30 am"
        />
        <RequestCard
          title="Plumbing"
          image={request_img}
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati, perspiciatis omnis incidunt illum? Culpa laboriosam quod dolores
          mollitia vel."
          amount={500}
          datetime="15 May 2020 8:30 am"
        />
      </div>
    </div>
  );
}

export default RequestList;
