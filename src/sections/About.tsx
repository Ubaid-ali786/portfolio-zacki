"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import ChatIcon from "@mui/icons-material/Chat";
import SchoolIcon from "@mui/icons-material/School";
import SpeedIcon from "@mui/icons-material/Speed";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: <SpeedIcon />,
    title: "Quick Learner",
    description: "Adapt quickly to new technologies and trends",
  },
  {
    icon: <SchoolIcon />,
    title: "Responsible",
    description: "Committed to delivering quality work on time",
  },
  {
    icon: <ChatIcon />,
    title: "Communication",
    description: "Excellent verbal and written communication skills",
  },
];

export const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}
          >
            Digital Marketing enthusiast with expertise in SEO, Social Media
            Marketing, Content Writing, backlink creation, and lead generation.
            Passionate about helping businesses grow their online presence
            through strategic digital marketing solutions.
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4}>
          {strengths.map((strength, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <AnimatedSection delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{ textAlign: "center", height: "100%" }}>
                    <CardContent>
                      <Box
                        sx={{ fontSize: "3rem", mb: 2, color: "primary.main" }}
                      >
                        {strength.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom>
                        {strength.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {strength.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
