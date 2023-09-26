import React, { useState } from 'react'
import profile from '../Images/profile.png'
import bgimage from '../Images/findspecialistbackground.jpg'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../Styles/FindSpecialist.css'
import { Button, Card, CardContent, Typography } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import Header from './Header'
import { useNavigate } from 'react-router-dom';

interface Profile {
  id: number;
  name: string;
  description: string;
  photo: string;
  about: String
}

const top100Films = [
  { title: 'python' },
  { title: 'c++' },
  { title: 'dot net' },
  { title: 'JavaScript' },
  { title: 'Java' },
  { title: "Php" },
  { title: 'Sql' },
  {
    title: 'ReactJs'
  },
  { title: 'NodeJs' },
];

const profileData: Profile[] = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Web Developer',
    photo: profile,
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia'
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'UX Designer',
    photo: profile,
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    description: 'Software Engineer',
    photo: profile,
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia'
  },
  {
    id: 4,
    name: 'Alice Brown',
    description: 'Data Scientist',
    photo: profile,
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia'
  },
];

const FindSpecialist = () => {
  const [selectedOptions, setSelectedOptions] = useState<Profile[]>([]);
  const [showProfileCards, setShowProfileCards] = useState(true);
  const navigation = useNavigate()

  const loadProfileCards = () => {
    setSelectedOptions(profileData);
    setShowProfileCards(false);
  };

  return (
    <div className='Container'>
      {showProfileCards ? (
        <div className='Content'>
          <Stack spacing={3} sx={{ width: 600, marginTop: '10%' }}>
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
          <Button className='searchbutton' variant="contained" size='medium' onClick={loadProfileCards} style={{ marginTop: '10%', marginLeft: '5%' }}>
            <FaSearch></FaSearch>
          </Button>
        </div>
      ) : (
        <div className='profile-card'>
          {selectedOptions.map((option) => (
            <Card key={option.id} className='profile-card-item'>
            <CardContent style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <img src={option.photo} alt={option.name} style={{ maxWidth: '100px' }} className='profile-photo' />
                <Typography variant="h5">{option.name}</Typography>
                <Typography variant="body2">{option.description}</Typography>
              </div>
              <div style={{ flex: 3 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' ,alignSelf:'center',width:'80%'}}>
                  <Typography variant="body2">{option.about}</Typography>
                  <Button variant="contained"  style={{marginTop:'40px'}} onClick={()=>navigation('/ProfileCard')}>
                    Show More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          
          ))}
        </div>
      )}
    </div>
  )
}

export default FindSpecialist