import React from 'react'
import { Container, Stack, Box, Typography, Divider } from '@mui/material'

const App = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={1} direction={"column"}>
        <Typography variant="h3" align="center">Junfeng Li (Mr.)</Typography>
        <Typography variant="h5" align="center">Mobile: 17683881879</Typography>
        <Typography variant="h5" align="center">Email: junfeng1287@gmail.com</Typography>

        <Stack spacing={10} direction={"column"}>
          <Box>
            <Typography variant="h4" align="left">Education</Typography>
            <Divider />
            <Stack spacing={4} direction={"column"}>
              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">University College London (UK)</Typography>
                <Typography variant="body1" align="left">Msc. Computer Science</Typography>
                <Typography variant="body1" align="left">Sep. 2022 - Oct. 2023</Typography>
                <Typography variant="body1" align="left">Classification: Distinction</Typography>
                <Typography variant="body1">GPA: 3.75/4.25</Typography>
                <Typography variant="body1" align="left">Modules: Machine Learning with Big Data, Functional Programming, Perception and Interface, APP Engineering</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">University of Birmingham (UK)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2019 - July. 2021</Typography>
                <Typography variant="body1" align="left">Classification: with Honours, Class I</Typography>
                <Typography variant="body1">GPA: 3.75/4.25</Typography>
                <Typography variant="body1" align="left">Modules: Control Engineering, Mechatronics, Mechanics, Mechanical Design, Computational Fluid Dynamics & Finite Element Analysis, Control Engineering, Powertrain & Vehicle Engineering</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">Wuhan University of Technology (China)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2017 - July. 2019</Typography>
                <Typography variant="body1" align="left">Average Point: 84/100</Typography>
                <Typography variant="body1" align="left">Modules: Foundation of C Programming, Microprocess Principle and Application, Advanced Mathematics, Physics.</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h4" align="left">Reaserch & Project</Typography>
            <Divider />
            <Stack spacing={4} direction={"column"}>
              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">University College London (UK)</Typography>
                <Typography variant="body1" align="left">Msc. Computer Science</Typography>
                <Typography variant="body1" align="left">Sep. 2022 - Oct. 2023</Typography>
                <Typography variant="body1" align="left">Classification: Distinction</Typography>
                <Typography variant="body1">GPA: 3.75/4.25</Typography>
                <Typography variant="body1" align="left">Modules: Machine Learning with Big Data, Functional Programming, Perception and Interface, APP Engineering</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">University of Birmingham (UK)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2019 - July. 2021</Typography>
                <Typography variant="body1" align="left">Classification: with Honours, Class I</Typography>
                <Typography variant="body1">GPA: 3.75/4.25</Typography>
                <Typography variant="body1" align="left">Modules: Control Engineering, Mechatronics, Mechanics, Mechanical Design, Computational Fluid Dynamics & Finite Element Analysis, Control Engineering, Powertrain & Vehicle Engineering</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">Wuhan University of Technology (China)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2017 - July. 2019</Typography>
                <Typography variant="body1" align="left">Average Point: 84/100</Typography>
                <Typography variant="body1" align="left">Modules: Foundation of C Programming, Microprocess Principle and Application, Advanced Mathematics, Physics.</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App



