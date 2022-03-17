import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import InputField from './components/InputField';

function App() {
  return (
    <div className="app">
      <Form>
        <InputField type="text" label="Fullname" />
        <InputField type="email" label="Email" />
        <InputField type="password" label="Password" icon />
        <InputField type="password" label="Confirm Password" icon />
        <Button classname="btn btn--primary btn--full">Sign up</Button>
      </Form>
    </div>
  );
}

export default App;
