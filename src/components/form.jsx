import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    textArea: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
       justifyContent:"center",
        alignItems: 'center',
        padding: '20px',
      }}
    >
     
      <Box
        component="img"
        src="https://mobirise.com/extensions/teamm4/recruiting-agency/assets/images/features1.jpg" // Replace with your image URL
        alt="Placeholder"
        sx={{
          width: '40%',
          height: 'auto',
          borderRadius: '8px',
          marginRight: '20px',
        }}
      />
      
      {/* Form Section */}
      <Box
        sx={{
          width: '48%',
          padding: '20px',
          borderRadius: '8px',
        
        }}
      >
        <Typography gutterBottom variant="h3" component="div" sx={{ color: 'blue', textAlign: 'center' }}>
          <CheckIcon sx={{ fontSize: 50, color: 'black' }} /> Write us a message
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            margin="normal"
            sx={{ border: '1px solid blue' }}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
            sx={{ border: '1px solid blue' }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            sx={{ border: '1px solid blue' }}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            sx={{ border: '1px solid blue' }}
          />
          <TextField
            fullWidth
            label="Text Area"
            name="textArea"
            value={formData.textArea}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
            sx={{ border: '1px solid blue' }}
          />

          <Button
            sx={{
              fontSize: 20,
              width: 200,
              marginTop: 5,
              color: 'blue',
              backgroundColor: 'white',
              border: '2px solid blue',
            }}
            variant="contained"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
