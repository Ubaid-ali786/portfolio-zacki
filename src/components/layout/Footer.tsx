"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="white">
            © {currentYear} Mohammed Zacki. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                color="inherit"
                size="small"
              >
                <GitHubIcon />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                color="inherit"
                size="small"
              >
                <LinkedInIcon />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                color="inherit"
                size="small"
              >
                <TwitterIcon />
              </IconButton>
            </motion.div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
