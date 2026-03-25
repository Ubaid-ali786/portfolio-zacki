'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const certifications = [
  { name: 'Digital Marketing Course', issuer: 'Arvana Mall, Udaipur', year: '2023' },
  { name: 'SEO Certification', issuer: 'Google Digital Garage', year: '2023' },
  { name: 'Social Media Marketing', issuer: 'HubSpot Academy', year: '2023' },
  { name: 'Graphic Design (Canva)', issuer: 'Canva Design School', year: '2023' },
];

export const Certifications = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            Certifications
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: '600px', mx: 'auto', mb: 6 }}>
            Professional certifications and achievements
          </Typography>
        </AnimatedSection>

        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <AnimatedSection delay={index * 0.1}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />
                        <Typography variant="h6">{cert.name}</Typography>
                      </Box>
                      <Chip
                        label={cert.issuer}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                      <Chip
                        label={cert.year}
                        size="small"
                        variant="outlined"
                      />
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