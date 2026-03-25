"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const contactInfo = [
  { icon: <PhoneIcon />, label: "Phone", value: "+91 9587198557" },
  { icon: <EmailIcon />, label: "Email", value: "zackiMohammed90@gmail.com" },
  {
    icon: <EmailIcon />,
    label: "Alternate Email",
    value: "mr.jack958719@gmail.com",
  },
  {
    icon: <LocationOnIcon />,
    label: "Address",
    value: "1638 Rata Khet 80 Feet Road, Malla Talai, Udaipur",
  },
];

export const Contact = () => {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h2" align="center" gutterBottom>
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: "600px", mx: "auto", mb: 6 }}
          >
            Let{"'"}s work together! Feel free to reach out for collaborations
            or just a friendly chat.
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimatedSection delay={0.2}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                  >
                    I{"'"}d love to hear from you! Whether you have a question
                    or just want to say hi.
                  </Typography>

                  <Stack spacing={3}>
                    {contactInfo.map((info, index) => (
                      <Box key={index}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <IconButton
                            color="primary"
                            sx={{ border: "1px solid", borderColor: "divider" }}
                          >
                            {info.icon}
                          </IconButton>
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {info.label}
                            </Typography>
                            <Typography variant="body1">
                              {info.value}
                            </Typography>
                          </Box>
                        </Stack>
                        {index < contactInfo.length - 1 && (
                          <Divider sx={{ my: 2 }} />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatedSection delay={0.4}>
              <ContactForm />
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
