import React from 'react'
import { Container, Stack, Box, Typography, Divider, Link } from '@mui/material'
import Thesis_Junfeng_Li from './assets/Thesis_Junfeng_Li.pdf'

const App = () => {
  return (
    <Container>
      <Stack spacing={1} direction={"column"}>
        <Stack spacing={2} direction={"column"}>
          <Typography variant="title1" align="left">Junfeng Li</Typography>
          <Box>
            <Typography variant="body1" align="left">Mobile:&nbsp;+86 17683881879</Typography>
            <Typography variant="body1" align="left">Email:&nbsp;
              <Link href="mailto:junfeng1287@gmail.com" underline="hover" target="_blank" rel="noopener">junfeng1287@gmail.com</Link>
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={6} direction={"column"}>
          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">EDUCATION</Typography>
            <Divider />
            <Stack spacing={2} direction={"column"}>
              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">University College London (UK)</Typography>
                <Typography variant="body1" align="left">MSc. Computer Science</Typography>
                <Typography variant="body1" align="left">Sep. 2022 - Oct. 2023</Typography>
                <Typography variant="body1" align="left">Classification: Distinction</Typography>
                <Typography variant="body1">GPA: 3.75</Typography>
                {/* <Typography variant="body1" align="left">Modules: Machine Learning with Big Data, Functional Programming, Perception and Interface, APP Engineering</Typography> */}
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">University of Birmingham (UK)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2019 - July. 2021</Typography>
                <Typography variant="body1" align="left">Classification: with Honours, Class I</Typography>
                <Typography variant="body1">GPA: 3.75</Typography>
                {/* <Typography variant="body1" align="left">Modules: Control Engineering, Mechatronics, Mechanics, Mechanical Design, Computational Fluid Dynamics & Finite Element Analysis, Control Engineering, Powertrain & Vehicle Engineering</Typography> */}
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">Wuhan University of Technology (China)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2017 - July. 2019</Typography>
                <Typography variant="body1" align="left">Average Point: 84</Typography>
                {/* <Typography variant="body1" align="left">Modules: Foundation of C Programming, Microprocess Principle and Application, Advanced Mathematics, Physics.</Typography> */}
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">RESEARCH & PROJECT</Typography>
            <Divider />
            <Stack spacing={2} direction={"column"}>
              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">
                  <Link href={Thesis_Junfeng_Li} underline="hover" target="_blank" rel="noopener">
                    Diffusion Model for Video-Based 2D Human Pose Estimation
                  </Link>
                </Typography>
                <Typography variant="body1" align="left">2023, Postgraduate Individual Project</Typography>
                <Typography variant="body1" align="left">Applied diffusion model as decoder and vision transformer as encoder on video-based 2D human pose estimation task.</Typography>
                <Typography variant="body1" align="left">Conducted ablation study to mainly compared with a simple decoder and a classic decoder.</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">APIAN Drone Order Management App for Medicine Delivery</Typography>
                <Typography variant="body1" align="left">2023, APP Engineering</Typography>
                <Typography variant="body1" align="left">Developed a progressive web app for drone order management, allowing NHS staff place and manage their orders and drone operators accept and reject orders.</Typography>
                <Typography variant="body1" align="left">Technologies: React, ExpressJS, Material UI, Firebase Authentication, MySQL
                </Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">Ant Colony Optimisation for Mobile Robot Path Planning</Typography>
                <Typography variant="body1" align="left">2021, Undergraduate Individual Project</Typography>
                <Typography variant="body1" align="left">Applied Ant Colony Optimisation to search a path for a robot while optimising pathlength and smoothness.</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="body1" align="left">Mechanical Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Design a
                    2-Stroke Engine for Small Aircraft
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Mechanical Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Stair Lift
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Integrated Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Future Urban Agricultural: The Vertical Farm
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Integrated Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Smart Transport: Electric Bus and Its Supporting System
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Microprocess Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Traffic Lights Controlled by 80C51
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Microprocess Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Analog to Digital Conversion Based on 80C51
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">HONOR & REWARD</Typography>
            <Divider />
            <Stack spacing={0.5} direction={"column"}>
              <Typography variant="body1" align="left">Title of Excellent Student Cadre of Wuhan University of Technology (2018-2019)</Typography>
              <Typography variant="body1" align="left">Scholarship for College Students of Wuhan University of Technology (2018-2019)</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">SKILLS</Typography>
            <Divider />
            <Stack spacing={0.5} direction={"column"}>
              <Typography variant="body1" align="left">Python, PyTorch & Tensorflow: Proficient in coding machine learning with PyTorch and familiar with the Tensorflow.</Typography>
              <Typography variant="body1" align="left">Linux: Proficient in using Linux.</Typography>
              <Typography variant="body1" align="left">Other Coding Language: C/C++, JavaScript/TypeScript, HTML, CSS.</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">LANGUAGE</Typography>
            <Divider />
            <Stack spacing={0.5} direction={"column"}>
              <Typography variant="body1" align="left">English: Fluent (IELTS 7.0)</Typography>
              <Typography variant="body1" align="left">Mandarin: Native</Typography>
            </Stack>
          </Box>

        </Stack>
      </Stack>
    </Container>
  )
}

export default App



