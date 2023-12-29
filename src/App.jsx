import React from 'react'
import { Container, Stack } from '@mui/material'

const App = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} direction={"column"}>
        <h1>Hello World</h1>
        <p>My name is <strong>Junfeng Li</strong></p>
        <p>I'm a <strong>Front-End Developer</strong></p>
      </Stack>
    </Container>
  )
}

export default App



