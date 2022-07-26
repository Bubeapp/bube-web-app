import React, { useContext, useEffect, useState } from 'react';
import Checkbox from '../Checkbox';

import request_img from '../../assets/request_img.png';
import RequestCard from '../RequestCard';
import { UserContext } from '../../contexts/user/userContext';

function RequestList() {
  const { getRequest, requests, getActiveRequest } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);
  const [activeRequest, setActiveRequest] = useState(false);

  console.log(requests);

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="request__container">
      <div className="request__header">
        <Checkbox
          label="Show active"
          handleOnChange={() => {
            setActiveRequest(getActiveRequest());
            setIsActive(prev => !prev);
          }}
        />
      </div>

      <div className="request__grid">
        {isActive && activeRequest
          ? activeRequest.map(request => (
              <RequestCard
                key={request._id}
                title="Plumbing"
                image={request.photos[0]}
                summary={request.description}
                amount={request.budget}
                datetime={request.date}
              />
            ))
          : requests &&
            requests.map(request => (
              <RequestCard
                key={request._id}
                title="Plumbing"
                image={request.photos[0]}
                summary={request.description}
                amount={request.budget}
                datetime={request.date}
              />
            ))}

        {/* <RequestCard
          title="Plumbing"
          image={request_img}
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati, perspiciatis omnis incidunt illum? Culpa laboriosam quod dolores
          mollitia vel."
          amount={500}
          datetime="15 May 2020 8:30 am"
        /> */}
      </div>
    </div>
  );
}

export default RequestList;
