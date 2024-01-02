import React from 'react'
import { Container, Stack, Box, Typography, Divider, Link } from '@mui/material'
import Thesis_Junfeng_Li from './assets/Thesis_Junfeng_Li.pdf'

const App = () => {
  return (
    <Container>
      <Stack spacing={1} direction={"column"}>
        <Typography variant="h3" align="center">Junfeng Li (Mr.)</Typography>
        <Typography variant="h5" align="center">Mobile: 17683881879</Typography>
        <Typography variant="h5" align="center">Email: junfeng1287@gmail.com</Typography>

        <Stack spacing={10} direction={"column"}>
          <Box>
            <Typography variant="h4" align="left" fontWeight="fontWeightBold">EDUCATION</Typography>
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
            <Typography variant="h4" align="left" fontWeight="fontWeightBold">RESEARCH & PROJECT</Typography>
            <Divider />
            <Stack spacing={4} direction={"column"}>
              <Stack spacing={0.5} direction={"column"}>
                <Link href={Thesis_Junfeng_Li} underline="hover" target="_blank" rel="noopener">
                  <Typography variant="h5" align="left">Diffusion Model for Video-Based 2D Human Pose Estimation</Typography>
                </Link>
                <Typography variant="body1" align="left">2023, Postgraduate Individual Project (Thesis)</Typography>
                <Typography variant="body1" align="left">Applied diffusion model as decoder and vision transformer as encoder on video-based 2D human pose estimation task.</Typography>
                <Typography variant="body1" align="left">Conducted ablation study to mainly compared with a simple decoder and a classic decoder.</Typography>
                <Typography variant="body1" align="left">Achieved results of mAP at 81.5%</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">APIAN Drone Order Management App for Medicine Delivery</Typography>
                <Typography variant="body1" align="left">2023, APP Engineering</Typography>
                <Typography variant="body1" align="left">Developed a progressive web app for drone order management, allowing NHS staff place and manage their orders and drone operators accept and reject orders.</Typography>
                <Typography variant="body1" align="left">Technologies: React, ExpressJS, Material UI, Firebase Authentication, MySQL
                </Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h5" align="left">Ant Colony Optimisation for Mobile Robot Path Planning</Typography>
                <Typography variant="body1" align="left">2021, Undergraduate Individual Project</Typography>
                <Typography variant="body1" align="left">Applied Ant Colony Optimisation to search a path for a robot while optimising pathlength and smoothness.</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="h6" align="left">Mechanical Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Design a
                    2-Stroke Engine for Small Aircraft
                  </Box>
                </Typography>
                <Typography variant="h6" align="left">Mechanical Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Stair Lift
                  </Box>
                </Typography>
                <Typography variant="h6" align="left">Integrated Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Future Urban Agricultural: The Vertical Farm
                  </Box>
                </Typography>
                <Typography variant="h6" align="left">Integrated Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Smart Transport: Electric Bus and Its Supporting System
                  </Box>
                </Typography>
                <Typography variant="h6" align="left">Microprocess Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Traffic Lights Controlled by 80C51
                  </Box>
                </Typography>
                <Typography variant="h6" align="left">Microprocess Design Project:
                  <Box component="span" fontWeight="fontWeightBold">Analog to Digital Conversion Based on 80C51
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h4" align="left" fontWeight="fontWeightBold">SKILLS</Typography>
            <Divider />
            <Stack spacing={0.5} direction={"column"}>
              <Typography variant="h6" align="left">Python, PyTorch & Tensorflow: Proficient in coding machine learning with PyTorch and familiar with the Tensorflow.</Typography>
              <Typography variant="h6" align="left">Linux: Proficient in using Linux.</Typography>
              <Typography variant="h6" align="left">Other Coding Language: C/C++, JavaScript/TypeScript, HTML, CSS.</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h4" align="left" fontWeight="fontWeightBold">LANGUAGE</Typography>
            <Divider />
            <Stack spacing={0.5} direction={"column"}>
              <Typography variant="h6" align="left">English: Fluent (IELTS 7.0)</Typography>
              <Typography variant="h6" align="left">Mandarin: Native</Typography>
            </Stack>
          </Box>

        </Stack>
      </Stack>
    </Container>
  )
}

export default App



