"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const tools = [
  { name: "Canva", icon: "🎨", description: "Graphic Design" },
  {
    name: "Meta Business Suite",
    icon: "📊",
    description: "Social Media Management",
  },
  { name: "Google Docs", icon: "📄", description: "Document Creation" },
  { name: "ChatGPT", icon: "🤖", description: "AI Content Generation" },
];

export const Tools = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            Tools I Use
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}
          >
            Essential tools for professional digital marketing
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4} justifyContent="center">
          {tools.map((tool, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <AnimatedSection delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      cursor: "pointer",
                      background:
                        "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)",
                    }}
                  >
                    <Typography variant="h1" sx={{ fontSize: "3rem", mb: 2 }}>
                      {tool.icon}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {tool.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tool.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
