import React from 'react'
import image from '../Assets/login.svg'
import Button from '../Components/Button'
import Form from '../Components/Form'
import Illustration from '../Components/Illustration'
import TextInput from '../Components/TextInput'

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={image} alt="login" />

        <Form formType="login">
          <TextInput
            type={'text'}
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput
            type={'password'}
            placeholder="Enter password"
            icon="lock"
          />

          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Don &apos t have an account? <a href="signup.html">Signup</a>{' '}
            instead.
          </div>
        </Form>
      </div>
    </>
  )
}
