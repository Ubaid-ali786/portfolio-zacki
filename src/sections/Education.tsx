"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Box,
  Container,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

const education = [
  {
    degree: "10th Standard",
    school: "St. Xavier Secondary School",
    percentage: "55.83%",
    year: "2018",
  },
  {
    degree: "12th Standard",
    school: "Guru Nanak Public School",
    percentage: "76.40%",
    year: "2020",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Vidya Bhawan Rural Institute",
    percentage: "Pursuing",
    year: "2021 - Present",
  },
];

export const Education = () => {
  return (
    <Box
      component="section"
      id="education"
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            Education
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}
          >
            Academic journey and qualifications
          </Typography>
        </AnimatedSection>

        <Paper elevation={3} sx={{ maxWidth: "800px", mx: "auto", p: 4 }}>
          <Stepper orientation="vertical" activeStep={-1}>
            {education.map((edu, index) => (
              <Step key={index} active={true}>
                <StepLabel>
                  <Typography variant="h6">{edu.degree}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body1">{edu.school}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.year} | {edu.percentage}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Container>
    </Box>
  );
};
