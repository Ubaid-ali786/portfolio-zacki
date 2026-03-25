"use client";

import { useTheme } from "@/theme/ThemeProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme as useMuiTheme,
  alpha,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const { mode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section for highlighting
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        if (section === "#") {
          if (scrollPosition < 100) {
            setActiveSection("#");
          }
          continue;
        }
        
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  const isActive = (href: string) => activeSection === href;

  const drawer = (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component="button"
            onClick={() => scrollToSection(item.href)}
            sx={{
              textAlign: "center",
              justifyContent: "center",
              borderRadius: 2,
              mb: 1,
              backgroundColor: isActive(item.href) 
                ? alpha(muiTheme.palette.primary.main, 0.1)
                : "transparent",
              "&:hover": {
                backgroundColor: alpha(muiTheme.palette.primary.main, 0.05),
              },
            }}
          >
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                sx: {
                  fontWeight: isActive(item.href) ? 600 : 400,
                  color: isActive(item.href) ? "primary.main" : "text.primary",
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 1 : 0}
        sx={{
          backgroundColor: scrolled
            ? mode === "light"
              ? alpha("#ffffff", 0.85)
              : alpha("#0a0a2a", 0.85)
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled 
            ? `1px solid ${alpha(muiTheme.palette.divider, 0.1)}`
            : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: 1, minHeight: "70px" }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <Box
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#");
                }}
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-block",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    background: "radial-gradient(circle, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0) 70%)",
                    transform: "translate(-50%, -50%) scale(0)",
                    transition: "transform 0.3s ease",
                    borderRadius: "50%",
                    zIndex: -1,
                  },
                  "&:hover::before": {
                    transform: "translate(-50%, -50%) scale(1.5)",
                  },
                }}
              >
                MZ
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.href)}
                      sx={{
                        position: "relative",
                        color: isActive(item.href) ? "primary.main" : "text.primary",
                        fontWeight: isActive(item.href) ? 600 : 400,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          width: isActive(item.href) ? "70%" : 0,
                          height: "3px",
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          transition: "all 0.3s ease",
                          transform: "translateX(-50%)",
                          borderRadius: "3px",
                        },
                        "&:hover": {
                          backgroundColor: alpha(muiTheme.palette.primary.main, 0.08),
                          transform: "translateY(-2px)",
                        },
                        "&:hover::after": {
                          width: "70%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                
                {/* Theme Toggle Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    onClick={toggleTheme}
                    sx={{
                      ml: 1,
                      transition: "all 0.3s ease",
                      backgroundColor: alpha(muiTheme.palette.primary.main, 0.1),
                      "&:hover": {
                        backgroundColor: alpha(muiTheme.palette.primary.main, 0.2),
                        transform: "rotate(15deg)",
                      },
                    }}
                  >
                    {mode === "light" ? (
                      <Brightness4Icon sx={{ color: "primary.main" }} />
                    ) : (
                      <Brightness7Icon sx={{ color: "warning.main" }} />
                    )}
                  </IconButton>
                </motion.div>
              </Box>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    onClick={toggleTheme}
                    sx={{
                      transition: "all 0.3s ease",
                      backgroundColor: alpha(muiTheme.palette.primary.main, 0.1),
                      "&:hover": {
                        backgroundColor: alpha(muiTheme.palette.primary.main, 0.2),
                      },
                    }}
                  >
                    {mode === "light" ? (
                      <Brightness4Icon sx={{ color: "primary.main" }} />
                    ) : (
                      <Brightness7Icon sx={{ color: "warning.main" }} />
                    )}
                  </IconButton>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                      transition: "all 0.3s ease",
                      backgroundColor: alpha(muiTheme.palette.primary.main, 0.1),
                      "&:hover": {
                        backgroundColor: alpha(muiTheme.palette.primary.main, 0.2),
                      },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </motion.div>
              </Box>
            )}
          </Toolbar>
        </Container>

        {/* Mobile Drawer with Animation */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
              backgroundColor: mode === "light" ? "#ffffff" : "#1a1a3a",
              backgroundImage: mode === "light" 
                ? "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
                : "linear-gradient(135deg, #1a1a3a 0%, #0f0f2a 100%)",
              borderLeft: `1px solid ${alpha(muiTheme.palette.divider, 0.1)}`,
            },
          }}
        >
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                {drawer}
              </motion.div>
            )}
          </AnimatePresence>
        </Drawer>
      </AppBar>

      {/* Spacer to prevent content from hiding under navbar */}
      <Box sx={{ height: "70px" }} />
    </>
  );
};