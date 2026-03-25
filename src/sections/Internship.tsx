"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkIcon from "@mui/icons-material/Work";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export const Internship = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            Internship Experience
          </Typography>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card sx={{ maxWidth: "800px", mx: "auto", mt: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Stack spacing={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <WorkIcon color="primary" sx={{ fontSize: 40 }} />
                    <Typography variant="h4">
                      Digital Marketing Intern
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarTodayIcon color="action" />
                    <Typography variant="body1" color="text.secondary">
                      27 November – 5 March
                    </Typography>
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Key Responsibilities:
                  </Typography>

                  <Stack spacing={1}>
                    {[
                      "Social Media Management across multiple platforms",
                      "SEO optimization and keyword research",
                      "Lead generation campaigns",
                      "Content writing and blog management",
                      "Analytics and performance tracking",
                    ].map((item, index) => (
                      <Chip
                        key={index}
                        label={item}
                        variant="outlined"
                        sx={{
                          justifyContent: "flex-start",
                          py: 2,
                          "& .MuiChip-label": {
                            width: "100%",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedSection>
      </Container>
    </Box>
  );
};
