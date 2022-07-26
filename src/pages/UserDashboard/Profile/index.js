import React, { useContext, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import ButtonBack from '../../../components/Button/ButtonBack';

import Container from '../../../layouts/Container';
import CustomModal from '../../../components/Modal';
import Form from '../../../components/Form';
import PasswordField from '../../../components/PasswordField';

import { UserContext } from '../../../contexts/user/userContext';
import { IoPersonCircle } from 'react-icons/io5';

function Profile() {
  const { currentUser } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email(),
    firstname: Yup.string(),
    lastname: Yup.string(),
    phone: Yup.number(),
  });

  const initialValues = {
    username: currentUser.username,
    email: currentUser.email,
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    phone: 234 + currentUser.phone,
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    setTimeout(() => onSubmitProps.setSubmitting(false), 5000);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    isValid,
    errors,
    dirty,
    isSubmitting,
    setFieldTouched,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const fileInputRef = useRef();
  const userAvatarRef = useRef();

  const handleFileUpload = () => {
    const readUrl = input => {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          userAvatarRef.current.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    fileInputRef.current.onchange = function () {
      readUrl(this);
    };

    fileInputRef.current.click();
  };

  // useEffect(() => {}, [fileUpload]);

  return (
    <div className="profile">
      <Container>
        <div className="profile__container">
          <div className="profile__side">
            <ButtonBack />
            <h2>Profile</h2>
          </div>
          <div className="profile__main">
            <form onSubmit={handleSubmit} className="profile__form">
              <div className="profile__form-group">
                <div className="profile__change-photo">
                  {currentUser?.photo ? (
                    <img
                      ref={userAvatarRef}
                      className="profile__user-photo"
                      src={currentUser?.photo}
                      alt="User profile avatar"
                    />
                  ) : (
                    <IoPersonCircle
                      ref={userAvatarRef}
                      color="#9284A4"
                      className="profile__user-photo"
                    />
                  )}

                  <input
                    ref={fileInputRef}
                    className="profile__upload"
                    type="file"
                    id="profile-photo"
                    name="profile-photo"
                  />
                  <Button
                    onClick={handleFileUpload}
                    type="button"
                    classname="btn btn--ghost"
                  >
                    Change Photo
                  </Button>
                </div>
              </div>

              <div className="profile__form-group">
                <InputField
                  type="text"
                  label="Username"
                  value={values.username}
                  handleOnChange={handleChange}
                  onBlur={() => setFieldTouched('username')}
                  errormessage={errors.username}
                />
                <InputField
                  type="email"
                  label="Email"
                  value={values.email}
                  handleOnChange={handleChange}
                  onBlur={() => setFieldTouched('email')}
                  errormessage={errors.email}
                />
              </div>

              <div className="profile__form-group">
                <InputField
                  type="text"
                  label="Firstname"
                  value={values.firstname}
                  handleOnChange={handleChange}
                  onBlur={() => setFieldTouched('firstname')}
                  errormessage={errors.firstname}
                />
                <InputField
                  type="text"
                  label="Lastname"
                  value={values.lastname}
                  handleOnChange={handleChange}
                  onBlur={() => setFieldTouched('lastname')}
                  errormessage={errors.lastname}
                />
              </div>

              <div className="profile__form-group">
                <InputField
                  type="number"
                  label="Phone"
                  value={values.phone}
                  handleOnChange={handleChange}
                  onBlur={() => setFieldTouched('phone')}
                  errormessage={errors.phone}
                />
                <div>&nbsp;</div>
              </div>

              <div className="profile__form-actions">
                <div className="profile__edit-btns">
                  <Button
                    type="submit"
                    classname="btn btn--primary"
                    disabled={!(dirty && isValid) || isSubmitting}
                  >
                    Save Changes
                  </Button>
                  <Button type="reset" classname="btn btn--cancel">
                    Cancel
                  </Button>
                </div>
                <Button type="button" onClick={handleOpen} classname="btn btn--gmail">
                  Delete Account
                </Button>
              </div>
            </form>

            <CustomModal open={openModal} handleClose={handleClose}>
              <Form>
                <h3>Delete Account</h3>
                <PasswordField type="password" label="Password" />
                <PasswordField type="password" label="Confirm Password" />
                <div className="profile__delete-btn">
                  <Button classname="btn btn--cancel">Cancel</Button>
                  <Button classname="btn btn--gmail">Delete account</Button>
                </div>
              </Form>
            </CustomModal>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
