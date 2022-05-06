import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import ButtonBack from '../../../components/Button/ButtonBack';
import Form from '../../../components/Form';
import CustomModal from '../../../components/Modal';
import PasswordField from '../../../components/PasswordField';
import CustomSwitch from '../../../components/Switch';

function Settings() {
  const [openPreference, setOpenPreference] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const handleOpenPreference = () => setOpenPreference(true);
  const handleClosePreference = () => setOpenPreference(false);

  const handleOpenChangePassword = () => setOpenChangePassword(true);
  const handleCloseChangePassword = () => setOpenChangePassword(false);

  const validationSchema = Yup.object().shape({
    oldpassword: Yup.string().required('Password field is required'),
    newpassword: Yup.string().min(8).required('Password field is required'),
    confirmnewpassword: Yup.string()
      .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
      .required('Please confirm password'),
  });

  const initialValues = {
    newpassword: '',
    confirmnewpassword: '',
  };

  const onSubmit = values => {
    console.log('Form Data:', values);
  };

  const { values, errors, handleChange, handleSubmit, setFieldTouched, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <div className="settings">
      <div className="settings__container">
        <ButtonBack />

        <div className="settings__header">
          <h2>Settings</h2>
        </div>

        <div className="settings__card">
          <h3>Change Password</h3>
          <Button onClick={handleOpenChangePassword} classname="btn btn--grey">
            Change
          </Button>
        </div>

        <div className="settings__card">
          <h3>Preferred Currency</h3>
          <Button onClick={handleOpenPreference} classname="btn btn--badge">
            USD
          </Button>
        </div>

        <div className="settings__card">
          <h3>Notification sounds</h3>
          <CustomSwitch />
        </div>

        <div className="settings__card">
          <h3>Version</h3>
          <span>1.0</span>
        </div>
      </div>

      <CustomModal open={openPreference} handleClose={handleClosePreference}>
        <Form>
          <h3>Send Request</h3>

          <div className="">
            <FormControl>
              <RadioGroup
                column
                aria-labelledby="demo-column-radio-buttons-group-label"
                name="payment-method"
              >
                <FormControlLabel value="USD" control={<Radio />} label="USD" />
                <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
                <FormControlLabel value="NGN" control={<Radio />} label="NGN" />
                <FormControlLabel value="JPY" control={<Radio />} label="JPY" />
              </RadioGroup>
            </FormControl>
          </div>

          <Button classname="btn btn--primary btn--full">Select</Button>
        </Form>
      </CustomModal>

      <CustomModal open={openChangePassword} handleClose={handleCloseChangePassword}>
        <Form onSubmit={handleSubmit}>
          <h3>Change Password</h3>

          <PasswordField
            type="password"
            label="Old password"
            icon
            value={values.newpassword}
            handleOnChange={handleChange}
            errormessage={errors.newpassword}
            onBlur={() => setFieldTouched('newpassword')}
            visible={touched.newpassword}
          />

          <PasswordField
            type="password"
            label="New password"
            icon
            value={values.newpassword}
            handleOnChange={handleChange}
            errormessage={errors.newpassword}
            onBlur={() => setFieldTouched('newpassword')}
            visible={touched.newpassword}
          />
          <PasswordField
            type="password"
            label="Confirm new password"
            icon
            value={values.confirmnewpassword}
            handleOnChange={handleChange}
            errormessage={errors.confirmnewpassword}
            onBlur={() => setFieldTouched('confirmnewpassword')}
            visible={touched.confirmnewpassword}
          />

          <Button classname="btn btn--primary btn--full">Change Password</Button>
        </Form>
      </CustomModal>
    </div>
  );
}

export default Settings;
