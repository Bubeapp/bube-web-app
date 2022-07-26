import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Button from '../../../components/Button';
import ButtonBack from '../../../components/Button/ButtonBack';
import DashboardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';
import CustomRatings from '../../../components/Ratings';

import service_avatar from '../../../assets/service_avatar_01.png';
import ReviewCard from '../../../components/ReviewCard';
import axios from '../../../util/axios';
import { AuthContext } from '../../../contexts/auth/authContext';

import * as L from 'leaflet';

function ServicesDetails() {
  const [business, setBusiness] = useState();
  const { token } = useContext(AuthContext);
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    let container = L.DomUtil.get('service__map');

    const getBusiness = async id => {
      try {
        const {
          data: {
            data: { business: result },
          },
        } = await axios.get(`/businesses/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setBusiness(result);

        const loadMap = async coords => {
          console.log(coords);
          // const [latitude, longitude] = coords;
          const map = L.map('service__map').setView(coords, 13.5);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);

          // L.marker(coords)
          //   .addTo(map)
          //   .bindPopup(
          //     L.popup({
          //       maxWidth: 250,
          //       minWidth: 100,
          //       autoClose: false,
          //       closeOnClick: false,
          //       className: `running-popup`,
          //     })
          //   );
        };

        loadMap(result.location.coordinates);

        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };

    getBusiness(params.businessId);

    return () => {
      if (container != null) {
        container._leaflet_id = null;
      }
    };
  }, [params, token]);

  return (
    <div>
      <DashboardHeader>
        <div className="dashboard__top">
          <ButtonBack />
        </div>

        <div className="dashboard__bottom">
          <div className="dashboard__service">
            <h3>{business?.name}</h3>
            <div>
              <CustomRatings name="read-only" value={4.5} />
              <Link className="service__reviews" to="/">
                Read Reviews
              </Link>
            </div>
          </div>
          <div className="dashboard__info">
            <div className="linear--gradient">
              <div>
                <span>{business?.requests}</span>
              </div>
              <span>Completed Request</span>
            </div>

            <div className="linear--gradient">
              <div>
                <span>20%</span>
              </div>
              <span>Response Rate</span>
            </div>

            <div className="linear--gradient">
              <div>
                <span>5</span>
              </div>
              <span>Trust Point</span>
            </div>
          </div>
        </div>
      </DashboardHeader>

      <DashboardBody>
        {business && (
          <>
            <Stack direction="row" spacing={1}>
              <Chip label={business?.service?.name} />
            </Stack>
            <div className="service__desc">
              <h3>Description</h3>
              <p>{business?.description}</p>
            </div>

            <div className="service__info">
              <img src={business?.user?.photo} alt="" />
              <div className="service__flex flex-dir-cl">
                <p className="service__name">{business?.user?.fullName}</p>
                {business?.position && (
                  <p className="service__type">{business?.position}</p>
                )}
              </div>
            </div>

            <div className="service__btn">
              <Button classname="btn btn--primary btn--full">Make Request</Button>
            </div>

            <div className="service__top-reviews">
              <h4>Top Reviews</h4>

              <div className="service__review-grid">
                {business?.reviews.length > 0
                  ? business?.reviews.map(review => (
                      <ReviewCard
                        avatar={service_avatar}
                        name="Julie Sam"
                        rating={3.5}
                        review="Nunc, neque arcu sed purus arcu lectus maecenas egestas molestie. In id commodo,
        scelerisque nulla."
                      />
                    ))
                  : 'No Reviews'}

                {/* <ReviewCard
              avatar={service_avatar}
              name="Julie Sam"
              rating={3.5}
              review="Nunc, neque arcu sed purus arcu lectus maecenas egestas molestie. In id commodo,
        scelerisque nulla."
            />
            <ReviewCard
              avatar={service_avatar}
              name="Julie Sam"
              rating={3.5}
              review="Nunc, neque arcu sed purus arcu lectus maecenas egestas molestie. In id commodo,
        scelerisque nulla."
            />
            <ReviewCard
              avatar={service_avatar}
              name="Julie Sam"
              rating={3.5}
              review="Nunc, neque arcu sed purus arcu lectus maecenas egestas molestie. In id commodo,
        scelerisque nulla."
            />
            <ReviewCard
              avatar={service_avatar}
              name="Julie Sam"
              rating={3.5}
              review="Nunc, neque arcu sed purus arcu lectus maecenas egestas molestie. In id commodo,
        scelerisque nulla."
            /> */}
              </div>

              <div className="service__see-more">
                <Link to="/">See more reviews</Link>
              </div>
            </div>

            <div className="service__location">
              <h4>Location</h4>

              <div
                className="service__map"
                id="service__map"
                // style={{ width: '500px', height: '100%' }}
              ></div>

              <address className="service__address">
                {business?.location.address}
              </address>
            </div>
          </>
        )}
      </DashboardBody>
    </div>
  );
}

export default ServicesDetails;
