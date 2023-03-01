import React from 'react'
import image from '../Assets/signup.svg'
import Button from '../Components/Button'
import Form from '../Components/Form'
import Illustration from '../Components/Illustration'
import TextInput from '../Components/TextInput'

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={image} alt="signup" />
        <Form type="signup">
          <TextInput type={'text'} placeholder="Enter name" icon={'person'} />
          <TextInput
            type={'text'}
            placeholder="Enter email"
            icon={'alternate_email'}
          />
          <TextInput
            type={'password'}
            placeholder="Enter password"
            icon={'lock'}
          />
          <TextInput
            type={'password'}
            placeholder="Confirm password"
            icon={'lock_clock'}
          />

          <label>
            <input type="checkbox" />
            <span> I agree to the Terms & Conditions</span>
          </label>
          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  )
}
