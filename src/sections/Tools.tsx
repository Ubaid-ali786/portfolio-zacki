"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Brush as DesignIcon,
  Insights as AnalyticsIcon,
  Description as DocumentIcon,
  SmartToy as AiIcon,
} from "@mui/icons-material";

const tools = [
  {
    name: "Canva",
    image: "/canva.webp",
    description: "Graphic Design",
    longDescription:
      "Create stunning visuals, social media graphics, and marketing materials with intuitive drag-and-drop design tools.",
    category: "design",
    icon: DesignIcon,
    color: "#00C4CC",
    tags: ["Graphic Design", "Social Media Graphics", "Brand Assets"],
    stats: "500+ designs created",
  },
  {
    name: "Meta Business Suite",
    image: "/meta.jpg",
    description: "Social Media Management",
    longDescription:
      "Schedule posts, analyze performance, and manage all social media accounts from one centralized dashboard.",
    category: "social",
    icon: AnalyticsIcon,
    color: "#1877F2",
    tags: ["Content Scheduling", "Analytics", "Cross-Platform"],
    stats: "98% engagement rate",
  },
  {
    name: "Google Docs",
    image: "/doc.png",
    description: "Document Creation",
    longDescription:
      "Collaborate in real-time, create detailed content calendars, and maintain brand consistency across all documents.",
    category: "productivity",
    icon: DocumentIcon,
    color: "#0F9D58",
    tags: ["Collaboration", "Content Planning", "Real-time Editing"],
    stats: "200+ documents",
  },
  {
    name: "ChatGPT",
    image: "/ChatGPT.png",
    description: "AI Content Generation",
    longDescription:
      "Generate creative content ideas, draft copy, and optimize marketing messages with advanced AI assistance.",
    category: "ai",
    icon: AiIcon,
    color: "#10A37F",
    tags: ["Content Writing", "Ideation", "Optimization"],
    stats: "10x faster content creation",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const Tools = () => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="My Toolkit"
              color="primary"
              sx={{
                mb: 2,
                px: 2,
                py: 0.5,
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
            />
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              Tools I Use
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              Essential tools for professional digital marketing — carefully
              selected to deliver exceptional results
            </Typography>
          </Box>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Grid container spacing={4} justifyContent="center">
            {tools.map((tool, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div variants={itemVariants}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <Paper
                      elevation={hoveredIndex === index ? 8 : 2}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        background:
                          hoveredIndex === index
                            ? `linear-gradient(135deg, ${alpha(tool.color, 0.1)} 0%, ${alpha(tool.color, 0.05)} 100%)`
                            : "background.paper",
                        border: `1px solid ${alpha(tool.color, hoveredIndex === index ? 0.3 : 0.1)}`,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: `linear-gradient(90deg, ${tool.color} 0%, ${alpha(tool.color, 0.5)} 100%)`,
                          transform:
                            hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                          transition: "transform 0.3s ease",
                          transformOrigin: "left",
                        },
                      }}
                    >
                      {/* Icon Background Effect */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: -20,
                          right: -20,
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          background: alpha(tool.color, 0.1),
                          filter: "blur(20px)",
                          transition: "all 0.3s ease",
                          transform:
                            hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                        }}
                      />

                      {/* Image Container with Animation */}
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? 1.05 : 1,
                          rotate: hoveredIndex === index ? 3 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: 80,
                            height: 80,
                            mx: "auto",
                            mb: 2,
                          }}
                        >
                          <Image
                            src={tool.image}
                            alt={tool.name}
                            fill
                            sizes="80px"
                            style={{
                              objectFit: "contain",
                              borderRadius: "16px",
                            }}
                          />
                        </Box>
                      </motion.div>

                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color:
                            hoveredIndex === index ? tool.color : "inherit",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {tool.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {tool.description}
                      </Typography>

                      {/* Extended Info on Hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          height: hoveredIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mt: 1,
                            mb: 1.5,
                            color: "text.secondary",
                            lineHeight: 1.5,
                          }}
                        >
                          {tool.longDescription}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 0.5,
                            justifyContent: "center",
                            mb: 1.5,
                          }}
                        >
                          {tool.tags.map((tag, tagIndex) => (
                            <Chip
                              key={tagIndex}
                              label={tag}
                              size="small"
                              sx={{
                                fontSize: "0.65rem",
                                height: "20px",
                                backgroundColor: alpha(tool.color, 0.1),
                                color: tool.color,
                              }}
                            />
                          ))}
                        </Box>

                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            fontWeight: 600,
                            color: tool.color,
                          }}
                        >
                          {tool.stats}
                        </Typography>
                      </motion.div>
                    </Paper>
                  </motion.div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
