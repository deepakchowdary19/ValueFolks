import React, { useState } from 'react'
import profile from '../Images/profile.png'
import bgimage from '../Images/findspecialistbackground.jpg'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../Styles/FindSpecialist.css'
import { Button, Card , CardContent, Typography } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import Header from './Header'

interface Profile {
  id: number;
  name: string;
  description: string;
  photo: string; // Assuming 'profile' is a string URL
}

const top100Films = [
    { title: 'python'},
    { title: 'c++'},
    { title: 'dot net'},
    { title: 'JavaScript'},
    { title: 'Java'},
    { title: "Php"},
    { title: 'Sql'},
    {
      title: 'ReactJs'},
    { title: 'NodeJs'},
  ];

  const profileData:Profile[] = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Web Developer',
      photo: profile,
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'UX Designer',
      photo: profile,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      description: 'Software Engineer',
      photo: profile,
    },
    {
      id: 4,
      name: 'Alice Brown',
      description: 'Data Scientist',
      photo: profile,
    },
  ];  

const FindSpecialist = () => {
  const [selectedOptions, setSelectedOptions] = useState<Profile[]>([]);
  const [showProfileCards, setShowProfileCards] = useState(true);

  const loadProfileCards = () => {
    setSelectedOptions(profileData);
    setShowProfileCards(false);
  };

  return (
      <div className='Container'>
        {showProfileCards? (
              <div className='Content'>
                 <Stack spacing={3} sx={{ width: 600 }}>
                   <Autocomplete
                     multiple
                     id="tags-outlined"
                     options={top100Films}
                     getOptionLabel={(option) => option.title}
                     defaultValue={[top100Films[0]]}
                     filterSelectedOptions
                     renderInput={(params) => (
                       <TextField
                         {...params}
                         label="Select Technologies"
                         placeholder="Favorites"
                       />
                     )}
                   />
                 </Stack>
                 <Button className='searchbutton' variant="contained" size='medium' onClick={loadProfileCards}>
                   <FaSearch></FaSearch>
                 </Button>
               </div>
      ): (
          <div className='profile-card'>
              {selectedOptions.map((option) => (
                <Card key={option.id} className='profile-card-item'>
                  <CardContent>
                    <img src={option.photo} alt={option.name} style={{ maxWidth: '100px' }} className='profile-photo'/>
                    <Typography variant="h5">{option.name}</Typography>
                    <Typography variant="body2">{option.description}</Typography>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}
      </div>
  )
}

export default FindSpecialist