import React from 'react'
import '../Styles/Expertise.css'
import TextFields from './TextFields'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Expertise() {
  return (

    <div>
      <p style={{ display: 'flex', marginLeft: '10%', fontSize: '33px', fontWeight: '600' }}>STEP 2 : Expertise</p>
      <div className='skillfields'>
        <TextFields label='Skill name' width='400px' />
        <TextFields label='Number  of  years  Experience' width='400px' />
        <TextFields label='Description' width='400px' />



      </div>
      <div>
        <div className='bottomskillbutton'>
          <Button variant="contained" size="medium" style={{ width: '20%', height: '16%', backgroundColor: '#0000FF', color: '#FFFFFF', marginTop: "25px"}}>Save Changes</Button>
          <div className='skillsbutton'>
            <Button variant="contained" size='large' style={{width:"200px",  backgroundColor: '#0000FF', color: '#FFFFFF', marginTop: "25px" }}>Save Changes</Button>
            <Button variant="outlined" size="large" style={{width:"150px",  backgroundColor: '#384D6C', color: '#FFFFFF', marginTop: "25px", marginLeft: '4%' }}>Next Page</Button>
          </div>
        </div>



      </div>

    </div>
  )
}
