import React from 'react'
import TextFields from '../Components/TextFields'
import Button from '@mui/material/Button';
import '../Styles/WorkExperince.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function WorkExperince() {
    return (

        <div>
            <p style={{ display: 'flex', marginLeft: '10%', fontSize: '33px', fontWeight: '600' }}>STEP 3 : Work Experience</p>
            <div className='workfields'>
                <TextFields label='Company' width='700px' />
                <TextFields label='Position' width='700px' />

                <FormControlLabel control={<Checkbox />} label="I Currently  work   here" style={{ display: 'flex', marginLeft: '11%', }} />
                <div className='worktimefields'>
                    <TextFields label='Start  Date ' width='340px' />
                    <TextFields label='End Date' width='340px' />
                </div>
                <TextFields label='Job Location' width='700px' />


            </div>
            <div>
                <div className='bottomworkbutton'>
                    <Button variant="contained" size="medium" style={{ width: '20%', height: '16%', backgroundColor: '#0000FF', color: '#FFFFFF', marginTop: "25px" }}>Save Changes</Button>
                    <div className='workbutton'>
                        <Button variant="contained" size='large' style={{ width: "200px", backgroundColor: '#0000FF', color: '#FFFFFF', marginTop: "25px" }}>Save Changes</Button>
                        <Button variant="outlined" size="large" style={{ width: "150px", backgroundColor: '#384D6C', color: '#FFFFFF', marginTop: "25px", marginLeft: '4%' }}>Next Page</Button>
                    </div>
                </div>



            </div>

        </div>

    )
}
