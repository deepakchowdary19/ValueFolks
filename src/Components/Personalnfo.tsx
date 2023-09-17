import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type InsetDividersProps = {
  setComponentName: (name: string) => void;
};

const InsetDividers: React.FC<InsetDividersProps> = ({ setComponentName }) => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactEmergencyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Personal Information" style={{cursor:"pointer"}} onClick={() => { setComponentName("Personal Information") }} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GroupsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Expertise" style={{cursor:"pointer"}} onClick={() => { setComponentName("Expertise") }} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work Experience" style={{cursor:"pointer"}} onClick={() => { setComponentName("Work Experience") }} />
      </ListItem>
    </List>
  );
}

export default InsetDividers;
