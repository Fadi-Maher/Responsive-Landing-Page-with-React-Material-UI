import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import SimpleForm from './form';
import { ColorModeContext } from '../themeContext.jsx';
import { Container, Grid, Avatar } from '@mui/material';
import Footer from './footer.jsx';

export default function HomePage() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', paddingTop: '90px', backgroundColor: isDarkMode ? theme.palette.background.default : 'white' }}>
      {/* Header Section */}
      <AppBar position="fixed" sx={{ backgroundColor: isDarkMode ? theme.palette.background.paper : theme.palette.primary.main }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', marginRight: 2 }}>
              T
            </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ marginRight: 4 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginRight: 4 }}>
            Create Team
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginRight: 4 }}>
            Find Talent
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginRight: 4 }}>
            About Us
          </Typography>
          <MailOutlineOutlinedIcon fontSize="large" sx={{ ml: 'auto', marginRight: 2 }} />
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ display: 'flex', backgroundColor: isDarkMode ? theme.palette.background.default : '#1976d2', color: isDarkMode ? 'white' : 'black', padding: 4 }}>
        <Box
          component="img"
          sx={{
            height: 'auto',
            width: '40%',
            marginRight: '2%',
          }}
          alt="Your image description"
          src="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/features1.jpg"
        />
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop:10 }}>
            Recruiting Agency
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 2 , marginTop:5}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam sit temporibus modi, delectus a nemo et molestiae.
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 5 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quibusdam sit temporibus modi, delectus a nemo et molestiae.
          </Typography>
          <Button sx={{ fontSize: 20, width: 200, marginTop: 15 }} variant="contained">
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 5, color: isDarkMode ? 'white' : 'black' }}>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: isDarkMode ? theme.palette.background.paper : 'white' }}>
              <CardMedia
                sx={{ height: 300 }}
                image="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/features1.jpg"
                title="Middle and high-level management roles"
              />
              <CardContent sx={{ backgroundColor: isDarkMode ? theme.palette.background.paper : '#1976d2', color: isDarkMode ? 'white' : 'black' }}>
                <Typography gutterBottom variant="h4" sx={{ fontWeight: 'bold' }}>
                  Middle and high-level management
                </Typography>
                <Typography variant="h6">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                </Typography>
                <Button sx={{ fontSize: 20, width: 200, marginTop: 5 }} variant="contained">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: isDarkMode ? theme.palette.background.paper : 'white' }}>
              <CardMedia
                sx={{ height: 300 }}
                image="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/features2.jpg"
                title="International roles or multilingual roles"
              />
              <CardContent sx={{ backgroundColor: isDarkMode ? theme.palette.background.paper : '#1976d2', color: isDarkMode ? 'white' : 'black' }}>
                <Typography gutterBottom variant="h4" sx={{ fontWeight: 'bold' }}>
                  International roles or multilingual roles
                </Typography>
                <Typography variant="h6">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                </Typography>
                <Button sx={{ fontSize: 20, width: 200, marginTop: 5 }} variant="contained">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: isDarkMode ? theme.palette.background.paper : 'white' }}>
              <CardMedia
                sx={{ height: 300 }}
                image="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/team2.jpg"
                title="Complex and niche skill profiles"
              />
              <CardContent sx={{ backgroundColor: isDarkMode ? theme.palette.background.paper : '#1976d2', color: isDarkMode ? 'white' : 'black' }}>
                <Typography gutterBottom variant="h4" sx={{ fontWeight: 'bold' }}>
                  Complex and niche skill profiles
                </Typography>
                <Typography variant="h6">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                </Typography>
                <Button sx={{ fontSize: 20, width: 200, marginTop: 5 }} variant="contained">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container sx={{ marginTop: 10 , marginBottom:10 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 5, color: isDarkMode ? 'white' : 'black' }}>
          Testimonials
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', backgroundColor: isDarkMode ? theme.palette.background.paper : 'white' }}>
              <CardContent>
                <Avatar
                  sx={{ width: 100, height: 100, margin: '0 auto' }}
                  src="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/team1.jpg"
                />
                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, color: isDarkMode ? 'white' : 'black' }}>
                  John Doe
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2, color: isDarkMode ? 'white' : 'black' }}>
                  This recruiting agency helped me find my dream job. Their professionalism
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', backgroundColor: isDarkMode ? theme.palette.background.paper : 'white' }}>
              <CardContent>
                <Avatar
                  sx={{ width: 100, height: 100, margin: '0 auto' }}
                  src="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/team2.jpg"
                />
                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, color: isDarkMode ? 'white' : 'black' }}>
                  Jane Smith
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2, color: isDarkMode ? 'white' : 'black' }}>
                  The team was incredibly supportive and attentive to my needs. Highly recommend.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', backgroundColor: isDarkMode ? theme.palette.background.paper : 'white' }}>
              <CardContent>
                <Avatar
                  sx={{ width: 100, height: 100, margin: '0 auto' }}
                  src="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/team3.jpg"
                />
                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, color: isDarkMode ? 'white' : 'black' }}>
                  Michael Lee
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2, color: isDarkMode ? 'white' : 'black' }}>
                  Great experience! The agency helped me navigate through the job market.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <SimpleForm />
      <Footer />
    </Box>
  );
}
