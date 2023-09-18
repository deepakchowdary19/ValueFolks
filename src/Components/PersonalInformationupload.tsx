import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../Styles/PersonalInformationupload.css';
import Button from '@mui/material/Button';
import TextFields from './TextFields'

export default function AlignItemsList() {
  const profile = require('../Images/profile.png');
  return (
    <div>
       <p style={{display:'flex',marginLeft:'10%',fontSize:'33px',fontWeight:'600'}}>STEP 1 : Personal Information</p>
      <div className='Image'>
       
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={profile} sx={{ width: '70%', height: '70%' }} />
            </ListItemAvatar>
            <ListItemText
              primary="Alaa Mohamed"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Product Design
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ width: '100%' }}
                  >
                    Eastern European Time (EET), Cairo UTC +3
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <Button variant="contained" size="medium" style={{ width: '20%', height: '16%', backgroundColor: '#0000FF', color: '#FFFFFF',marginTop:"25px" }}>Upload New Photo</Button>
        <Button variant="outlined" size="medium" style={{ width: '20%', height: '16%', backgroundColor: '#FFFFFF', color: '#384D6C',marginTop:"25px" }}>Outlined</Button>
      </div>
      <div className='textfields'>
        <TextFields  label='name' width='400px'/>
        <TextFields  label='Last name' width='400px'/>
      </div>
      <div style={{marginLeft:'10%',marginTop:'14px',display:'flex'}}>
      <TextFields  label='User name' width='810px' />
      </div>
        
      <div className='textfields'>
        <TextFields  label='Email Address' width='400px'/>
        <TextFields  label='Phone Number' width='400px'/>
      </div>
      <div className='continuebutton'>

      <Button variant="contained" size="medium" style={{ width: '20%', height: '16%', backgroundColor: '#0000FF', color: '#FFFFFF',marginTop:"25px" }}>Upload New Photo</Button>
       <Button variant="outlined" size="medium" style={{ width: '20%', height: '16%', backgroundColor: '#FFFFFF', color: '#384D6C',marginTop:"25px" ,marginLeft:'10%'}}>Outlined</Button>
      </div>
      
    </div>
  );
}
