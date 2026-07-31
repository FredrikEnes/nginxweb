import { Box, Typography } from "@mui/material";

export default function InfoCard({ title, description, link }) {
  return (
    <Box component="li" className="info-card">
      <Typography variant="h6">{title}</Typography>
      {description && <Typography sx={{ mt: 2 }}>{description}</Typography>}
      {link && (
        <Typography sx={{ mt: 1 }}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </Typography>
      )}
    </Box>
  );
}
