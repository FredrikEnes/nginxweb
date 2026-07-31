import { Box, Grid, Typography } from "@mui/material";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <Grid container spacing={1} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Box className="project-card">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <Typography variant="h5" component="h1" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
              {project.link && (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link.label}
                </a>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
