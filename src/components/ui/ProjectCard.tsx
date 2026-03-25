"use client";

import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          height: "100%",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            {icon && <Box sx={{ fontSize: "2rem" }}>{icon}</Box>}
            <Typography variant="h5" component="h3">
              {title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
