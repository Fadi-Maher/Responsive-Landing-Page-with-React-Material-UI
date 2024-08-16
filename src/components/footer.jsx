import React, { useContext } from 'react';
import { Box, Typography, IconButton, Container, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../themeContext.jsx';

export default function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? theme.palette.background.default : '#1976d2',
        color: isDarkMode ? 'white' : 'white',
        padding: '2rem 0',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2">
              We are dedicated to helping you find the perfect talent for your company. Our team is committed to providing exceptional service and support.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a><br />
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Create Team</a><br />
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Find Talent</a><br />
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <IconButton href="https://facebook.com" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://instagram.com" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
