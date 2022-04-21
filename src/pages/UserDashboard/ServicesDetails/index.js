import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Button from '../../../components/Button';
import ButtonBack from '../../../components/Button/ButtonBack';
import DashboardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';
import CustomRatings from '../../../components/Ratings';

import service_avatar from '../../../assets/service_avatar_01.png';
import ReviewCard from '../../../components/ReviewCard';

function ServicesDetails() {
  return (
    <div>
      <DashboardHeader>
        <div className="dashboard__top">
          <ButtonBack />
        </div>

        <div className="dashboard__bottom">
          <div className="dashboard__service">
            <h3>Kola Painting & Company</h3>
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
                <span>50</span>
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
        <Stack direction="row" spacing={1}>
          <Chip label="Carpentry" />
          <Chip label="Furniture" />
          <Chip label="Interior Design" />
        </Stack>

        <div className="service__desc">
          <h3>Description</h3>
          <p>
            Urna imperdiet egestas suscipit quis magna tellus at massa nisl. Amet,
            fermentum ultricies feugiat mattis elementum luctus viverra mauris lectus.
            Vel morbi orci, et facilisis ac libero. Elementum nunc pellentesque eget
            nascetur nec vitae in id quis. Mattis semper hac lectus adipiscing dolor.
            Porta accumsan platea nulla amet donec augue. Est et sit nibh suscipit amet
            lectus convallis maecenas. Sed feugiat tempor nisl molestie. Ornare eu ac
            sed neque rhoncus egestas. Urna sit sit lacus lacus dolor erat vestibulum.
          </p>
        </div>

        <div className="service__info">
          <img src={service_avatar} alt="" />
          <div className="service__flex flex-dir-cl">
            <p className="service__name">Jaye Olowo</p>
            <p className="service__type">Carpenter</p>
          </div>
        </div>

        <div className="service__btn">
          <Button classname="btn btn--primary btn--full">Connect</Button>
        </div>

        <div className="service__top-reviews">
          <h4>Top Reviews</h4>

          <div className="service__review-grid">
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
            />
            <ReviewCard
              avatar={service_avatar}
              name="Julie Sam"
              rating={3.5}
              review="Nunc, neque arcu sed purus arcu lectus maecenas egestas molestie. In id commodo,
        scelerisque nulla."
            />
          </div>

          <div className="service__see-more">
            <Link to="/">See more reviews</Link>
          </div>
        </div>
      </DashboardBody>
    </div>
  );
}

export default ServicesDetails;
