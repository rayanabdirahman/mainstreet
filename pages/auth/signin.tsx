import React from 'react'
import { AuthTemplate, Button, Input, Text, Title } from '../../components'

const SignInPage = () => (
  <AuthTemplate>
    <div className="mb-10">
      <Title>Welcome back!</Title>
      <Text>Enter your credentials to continue</Text>
    </div>
    <form action="">
      <Input icon="user" placeholder="Username or Email" />
      <Input icon="lock" type="password" placeholder="Password" />
    </form>
    <Button>Login</Button>
  </AuthTemplate>
)

export default SignInPage
