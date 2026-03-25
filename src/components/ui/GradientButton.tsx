"use client";

import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ display: "inline-block" }}
    >
      <Button
        {...props}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          "&:hover": {
            background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          },
          ...sx,
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};
