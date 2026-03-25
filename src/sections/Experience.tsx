"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import ContentIcon from "@mui/icons-material/Article";
import LeadIcon from "@mui/icons-material/People";
import SEOIcon from "@mui/icons-material/Search";
import SocialIcon from "@mui/icons-material/Share";
import { Box, Container, Grid, Typography } from "@mui/material";

const experiences = [
  {
    title: "Backlink Creation",
    description:
      "Developed high-quality backlink strategies to improve domain authority and search rankings.",
    tags: ["SEO", "Link Building", "Outreach"],
    icon: <SEOIcon />,
  },
  {
    title: "Social Media Management",
    description:
      "Managed and scheduled posts across Facebook, Instagram, LinkedIn, and Twitter platforms.",
    tags: ["Social Media", "Content Calendar", "Engagement"],
    icon: <SocialIcon />,
  },
  {
    title: "Lead Generation",
    description:
      "Implemented effective lead generation strategies resulting in 40% increase in qualified leads.",
    tags: ["Lead Generation", "CRM", "Email Marketing"],
    icon: <LeadIcon />,
  },
  {
    title: "SEO Content Writing",
    description:
      "Created SEO-optimized content that improved organic traffic and user engagement.",
    tags: ["Content Writing", "SEO", "Keyword Research"],
    icon: <ContentIcon />,
  },
];

export const Experience = () => {
  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            Work Experience
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}
          >
            Key projects and achievements in digital marketing
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <AnimatedSection delay={index * 0.2}>
                <ProjectCard
                  title={exp.title}
                  description={exp.description}
                  tags={exp.tags}
                  icon={exp.icon}
                />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
