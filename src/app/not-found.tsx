import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0a0a2a",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          sx={{ fontSize: "6rem", textAlign: "center", mb: 2 }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", mb: 4, color: "text.secondary" }}
        >
          The page you are looking for doesn{"'"}t exist or has been moved.
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Go Home
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
