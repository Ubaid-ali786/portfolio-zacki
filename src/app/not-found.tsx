import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 10 }}>
      <Typography variant="h1" sx={{ fontSize: "6rem", mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        The page you are looking for doesn{"'"}t exist or has been moved.
      </Typography>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Typography
          component="span"
          sx={{
            display: "inline-block",
            px: 4,
            py: 1.5,
            borderRadius: "50px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 5px 15px rgba(102,126,234,0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Go Home
        </Typography>
      </Link>
    </Container>
  );
}
