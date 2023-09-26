import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '2rem',
  },
  image: {
    width: '300px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    marginBottom: '1rem',
  },
  card: {
    width: '100%',
    maxWidth: '100%',
    textAlign: 'left',
  },
  cardContent: {
    paddingBottom: '2rem',
  },
};

const AboutPage = () => {
  return (
    <Box sx={styles.container}>
      <img src={require('../Images/iconImage.png')} alt="ValueFolks Logo" style={styles.image} />
      <Card sx={styles.card}>
        <CardActionArea>
          <CardContent sx={styles.cardContent}>
            <Typography variant="h5" component="div" fontWeight="bold" gutterBottom > 
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Who We Are
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Welcome to ValueFolks, your gateway to a diverse community of professionals and developers eager to bring your ideas to life. We understand the importance of finding the right expertise to fuel your projects, and that's why we've created a platform that seamlessly connects clients with skilled professionals.
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Empowering Collaboration
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Our platform is designed to bridge the gap between clients with unique visions and skilled professionals across various domains. Whether you're an entrepreneur, a startup, or an established business, we provide a space for you to explore and engage with professionals who are passionate about transforming your ideas into reality.
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Unleashing Innovation
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              For professionals, ValueFolks offers an opportunity to showcase your skills and expertise. Register with us, create your profile, share your projects, and connect with potential clients seeking your specialized skills. Showcase your portfolio, highlight your achievements, and let your work speak for itself.
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Our Vision
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              At ValueFolks, we envision a world where collaboration is effortless and where talent meets opportunity. We strive to create a community that fosters growth, innovation, and success for both our clients and professionals. Together, we can build amazing products, spark groundbreaking ideas, and drive progress.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Join us on this journey and let's revolutionize the way projects come to life.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default AboutPage;
