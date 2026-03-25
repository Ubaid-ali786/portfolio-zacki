"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
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
                href="https://www.instagram.com/mohmmed_zacki/"
                target="_blank"
                color="inherit"
                size="small"
              >
                <InstagramIcon />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/zacki.hussain?rdid=X3his7h7GLdYq3eR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LDRgutkTJ%2F#"
                target="_blank"
                color="inherit"
                size="small"
              >
                <FacebookIcon />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component="a"
                href="https://x.com/Mohammed_Zacki"
                target="_blank"
                color="inherit"
                size="small"
              >
                <XIcon />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/mohammed-zacki-25961a34b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                color="inherit"
                size="small"
              >
                <LinkedInIcon />
              </IconButton>
            </motion.div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
