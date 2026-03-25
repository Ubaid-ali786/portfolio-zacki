"use client";

import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface SkillCardProps {
  name: string;
  level?: number;
  icon?: React.ReactNode;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  name,
  level = 85,
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
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            {icon && <Box sx={{ fontSize: "2rem" }}>{icon}</Box>}
            <Typography variant="h6" component="h3">
              {name}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={level}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: "rgba(102, 126, 234, 0.2)",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: 4,
              },
            }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {level}% Mastery
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
