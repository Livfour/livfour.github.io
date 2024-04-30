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
            <Typography variant="body1" align="left">GitHub:&nbsp;
              <Link href="https://github.com/Livfour"
                underline="hover" target="_blank" rel="noopener">
                  https://github.com/Livfour
              </Link>
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
                <Typography variant="body1">GPA: 3.75 (Distinction)</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">University of Birmingham (UK)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2019 - July. 2021</Typography>
                <Typography variant="body1">GPA: 3.75 (with Honours, Class I)</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">Wuhan University of Technology (China)</Typography>
                <Typography variant="body1" align="left">BEng. Mechanical Engineering</Typography>
                <Typography variant="body1" align="left">Sep. 2017 - July. 2019</Typography>
                <Typography variant="body1" align="left">Average Point: 84</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">RESEARCH & PROJECTS</Typography>
            <Divider />
            <Stack spacing={2} direction={"column"}>
              <Stack spacing={0.5} direction={"column"}>
                <Stack direction={"row"} justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle2" align="left">
                    Diffusion Model for Video-Based 2D Human Pose Estimation
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    <Typography variant="body1" align="right">
                      <Link href={Thesis_Junfeng_Li} underline="hover" target="_blank" rel="noopener">
                        [PDF]
                      </Link>
                    </Typography>
                    <Typography variant="body1" align="right">
                      <Link href={"https://github.com/Livfour/COMP0073_2023_Junfeng"} underline="hover" target="_blank" rel="noopener">
                        [Code]
                      </Link>
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="subtle1" align="left">2023, Postgraduate Individual Project</Typography>
                <Typography variant="body1" align="left"> • Proposed a novel decoder leveraging diffusion model, applied to the task of human pose estimation.</Typography>
                <Typography variant="body1" align="left"> • Adapted Vision Transformer for video input, utilized as the encoder in this project.</Typography>
                <Typography variant="body1" align="left"> • Conducted extensive ablation studies to explore the functionality of the diffusion decoder's mechanisms, comparing its performance with a simple and a classical decoder.</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="left">APIAN Drone Order Management App for Medicine Delivery</Typography>
                <Typography variant="subtle1" align="left">2023, APP Engineering</Typography>
                <Typography variant="body1" align="left"> • Developed a progressive web app for drone order management, allowing NHS staff place and manage their orders and drone operators accept and reject orders.</Typography>
                <Typography variant="body1" align="left"> • Technologies: React, ExpressJS, Material UI, Firebase Authentication, MySQL.
                </Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="subtitle2" align="les dft">Ant Colony Optimisation for Mobile Robot Path Planning</Typography>
                <Typography variant="subtle1" align="left">2021, Undergraduate Individual Project</Typography>
                <Typography variant="body1" align="left"> • Applied Ant Colony Optimisation to search a path for a robot while optimising pathlength and smoothness.</Typography>
              </Stack>

              <Stack spacing={0.5} direction={"column"}>
                <Typography variant="body1" align="left">Mechanical Design Project:&nbsp;
                  <Box component="span" fontWeight="fontWeightBold">Design a
                    2-Stroke Engine for Small Aircraft.
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Mechanical Design Project:&nbsp;
                  <Box component="span" fontWeight="fontWeightBold">Stair Lift.
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">FEA & CFD Project:&nbsp;
                  <Box component="span" fontWeight="fontWeightBold">Aerodynamic Analysis and Optimization of a Classic Car.
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Integrated Design Project:&nbsp;
                  <Box component="span" fontWeight="fontWeightBold">Future Urban Agricultural: The Vertical Farm.
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Integrated Design Project:&nbsp;
                  <Box component="span" fontWeight="fontWeightBold">Smart Transport: Electric Bus and Its Supporting System.
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Microprocess Design Project:&nbsp;
                  <Box component="span" fontWeight="fontWeightBold">Traffic Lights Controlled by 80C51.
                  </Box>
                </Typography>
                <Typography variant="body1" align="left">Microprocess Design Project:&nbsp;
                  <Box component="span" fontWeight="fontWeightBold">Analog to Digital Conversion Based on 80C51.
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">HONORS & AWARDS</Typography>
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
              <Typography variant="body1" align="left">
                <Box component="span" fontWeight="fontWeightBold">Programming Expertise:&nbsp;
                </Box>
                Procedural, objected-oriented, and functional programming.
              </Typography>
              <Typography variant="body1" align="left">
                <Box component="span" fontWeight="fontWeightBold">Programming Languages:&nbsp;
                </Box>
                C/C++, Python, Rust, Miranda, Matlab, JavaScript/TypeScript, HTML, CSS.
              </Typography>
              <Typography variant="body1" align="left">
                <Box component="span" fontWeight="fontWeightBold">Opertaing System:&nbsp;
                </Box>
                Linux; experienced in deploying and managing cloud servers with Microsoft Azure and Google Cloud.
              </Typography>
              <Typography variant="body1" align="left">
                <Box component="span" fontWeight="fontWeightBold">Software:&nbsp;
                </Box>
                SolidWorks, AutoCAD, MATLAB, Simulink, ROS2 Iron (Self-directed Learning), Git, Docker etc.
              </Typography>
              <Typography variant="body1" align="left">
                <Box component="span" fontWeight="fontWeightBold">Machine Learning:&nbsp;
                </Box>
                Proficient in Pytorch with experience in research project; familiar with TensorFlow with experience in some simple projects.
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" align="left" fontWeight="fontWeightBold">LANGUAGES</Typography>
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



