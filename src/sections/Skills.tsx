'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { SkillCard } from '@/components/ui/SkillCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const skills = [
  { name: 'SEO (On-page & Off-page)', level: 90 },
  { name: 'Backlink Creation', level: 85 },
  { name: 'Social Media Marketing', level: 88 },
  { name: 'Lead Generation', level: 82 },
  { name: 'Content Writing', level: 87 },
  { name: 'Meta Business Suite', level: 85 },
  { name: 'Timestamp Creation', level: 80 },
];

export const Skills = () => {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            My Skills
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: '600px', mx: 'auto', mb: 6 }}>
            Professional expertise and technical proficiency
          </Typography>
        </AnimatedSection>

        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <AnimatedSection delay={index * 0.1}>
                <SkillCard name={skill.name} level={skill.level} />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};