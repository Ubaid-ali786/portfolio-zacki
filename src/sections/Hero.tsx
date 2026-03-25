"use client";

import { GradientButton } from "@/components/ui/GradientButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Dynamically import Typewriter with no SSR
const Typewriter = dynamic(
  () => import("typewriter-effect").then((mod) => mod.default),
  { ssr: false },
);

export const Hero = () => {
  const theme = useTheme();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.8]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; scale: number }>
  >([]);

  useEffect(() => {
    setIsClient(true);
    // Generate particles only on client side
    if (typeof window !== "undefined") {
      const newParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.2,
      }));
      setParticles(newParticles);
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ];

  return (
    <Box
      ref={targetRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          theme.palette.mode === "light"
            ? "radial-gradient(circle at 0% 0%, #f8f9ff 0%, #e9ecef 100%)"
            : "radial-gradient(circle at 0% 0%, #0a0a2a 0%, #1a1a3a 100%)",
      }}
    >
      {/* Animated Floating Particles - Only render on client */}
      {isClient && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          }}
        >
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{
                x: particle.x,
                y: particle.y,
                scale: particle.scale,
              }}
              animate={{
                y: [null, -100, 100],
                x: [null, 50, -50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                background: `linear-gradient(135deg, ${theme.palette.primary.main}80, ${theme.palette.secondary.main}80)`,
                borderRadius: "50%",
                opacity: 0.3,
              }}
            />
          ))}
        </Box>
      )}

      {/* Animated Gradient Blobs */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.3)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          filter: "blur(80px)",
          y: y,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.3)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
          filter: "blur(80px)",
          y: y,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div style={{ opacity, scale }}>
              <Stack
                spacing={3}
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                {/* Greeting Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Chip
                    label="👋 Welcome to my portfolio"
                    sx={{
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                      color: "primary.main",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 2,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    }}
                  />
                </motion.div>

                {/* Name with Glow Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.5rem" },
                      fontWeight: 800,
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.3)}`,
                    }}
                  >
                    Mohammed Zacki
                  </Typography>
                </motion.div>

                {/* Animated Title with Typewriter - Only render on client */}
                {isClient && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                        fontWeight: 600,
                      }}
                    >
                      <Typewriter
                        options={{
                          strings: [
                            "Digital Marketing Enthusiast 🚀",
                            "SEO Specialist 📈",
                            "Social Media Expert 💫",
                            "Content Strategist ✍️",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 50,
                          deleteSpeed: 30,
                        }}
                      />
                    </Typography>
                  </motion.div>
                )}

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                    }}
                  >
                    <LocationOnIcon color="primary" />
                    <Typography variant="h6">
                      Udaipur, Rajasthan, India 🇮🇳
                    </Typography>
                  </Stack>
                </motion.div>

                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
                      maxWidth: "600px",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      color: "text.secondary",
                    }}
                  >
                    {"'"}Helping brands grow with SEO, Social Media & Content
                    Strategy{"'"}
                  </Typography>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Stack
                    direction="row"
                    spacing={3}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    sx={{ mt: 2 }}
                  >
                    {stats.map((stat, index) => (
                      <Box key={index} textAlign="center">
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: { xs: "1.5rem", md: "2rem" },
                            fontWeight: 700,
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <GradientButton
                      onClick={scrollToContact}
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: "1.1rem",
                        boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.6)}`,
                        },
                      }}
                    >
                      Let{"'"}s Connect 🚀
                    </GradientButton>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => window.open("/resume.pdf", "_blank")}
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        px: 4,
                        py: 1.5,
                        fontSize: "1.1rem",
                        "&:hover": {
                          borderColor: "secondary.main",
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1,
                          ),
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Download Resume 📄
                    </Button>
                  </Stack>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Column - Profile Photo with Enhanced Design */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ position: "relative" }}>
                {/* Rotating Gradient Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    borderRadius: "50%",
                    background:
                      "conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea)",
                    opacity: 0.6,
                  }}
                />

                {/* Profile Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "260px", sm: "320px", md: "380px" },
                    height: { xs: "260px", sm: "320px", md: "380px" },
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.secondary.main, 0.2)} 100%)`,
                    padding: "12px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: "background.paper",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Avatar
                      src="/profile.jpeg"
                      alt="Mohammed Zacki"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    {/* Animated Rings */}
                    {[1, 2, 3].map((ring, index) => (
                      <motion.div
                        key={ring}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "easeInOut",
                        }}
                        style={{
                          position: "absolute",
                          top: -10,
                          left: -10,
                          right: -10,
                          bottom: -10,
                          borderRadius: "50%",
                          border: `2px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                          pointerEvents: "none",
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Floating Badges */}
                {isClient && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      style={{
                        position: "absolute",
                        top: "20%",
                        left: "-30px",
                        zIndex: 10,
                      }}
                    >
                      <Chip
                        label="✨ SEO Expert"
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          color: "white",
                          fontWeight: 600,
                          px: 1,
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      style={{
                        position: "absolute",
                        bottom: "20%",
                        right: "-30px",
                        zIndex: 10,
                      }}
                    >
                      <Chip
                        label="🚀 Growth Hacker"
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                          color: "white",
                          fontWeight: 600,
                          px: 1,
                        }}
                      />
                    </motion.div>
                  </>
                )}
              </Box>
            </motion.div>

            {/* Social Media Icons with Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{ marginTop: "3rem", textAlign: "center" }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Connect with me on social media
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                {[
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/mohmmed_zacki/",
                    icon: "📸",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com",
                    icon: "💼",
                  },
                  { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
                  { name: "GitHub", href: "https://github.com", icon: "💻" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        width: 48,
                        height: 48,
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        "&:hover": {
                          bgcolor: "primary.main",
                          transform: "translateY(-5px)",
                          boxShadow: `0 5px 15px ${alpha(theme.palette.primary.main, 0.4)}`,
                        },
                      }}
                    >
                      <Typography variant="h6">{social.icon}</Typography>
                    </Avatar>
                  </motion.a>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll Indicator */}
        {isClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              position: "absolute",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
              cursor: "pointer",
            }}
            onClick={() => {
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Typography variant="caption" color="text.secondary">
                Scroll Down
              </Typography>
              <Box sx={{ fontSize: "1.5rem", textAlign: "center" }}>↓</Box>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};
