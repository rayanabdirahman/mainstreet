import React from 'react'
import { AuthTemplate, Button, Input, Text, Title } from '../../components'

const SignUpPage = () => (
  <AuthTemplate>
    <div className="mb-10">
      <Title>Lets get started!</Title>
      <Text>Enter your name to continue</Text>
    </div>
    <form action="">
      <Input icon="user" placeholder="Name" />
      <Input icon="user" placeholder="Username" />
      <Input icon="mail" type="email" placeholder="Email" />
      <Input icon="lock" type="password" placeholder="Password" />
    </form>
    <Button success>Sign up</Button>
  </AuthTemplate>
)

export default SignUpPage