import React from 'react'
import '../Styles/ProfileCard.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ProfileCard() {
    const dp = require('../Images/profile.png')
    const [value, setValue] = React.useState<number | null>(5);
    return (
        <div>
            <div className='profilecard'>
                <div className='dp'>
                    <img src={dp} style={{ width: 100, height: 100, marginLeft: '15px', border: '1px solid white', borderBottomColor: '#C3AFAF' }} />
                    <div className='det'>
                        <p style={{ color: '#0000FF', fontSize: 20, fontWeight: 500 }}>Hourly Rate:</p>
                        <p style={{ fontSize: 20, fontWeight: 500 }}>2000/-</p>
                    </div>
                    <div className='det'>
                        <p style={{ color: '#0000FF', fontSize: 20, fontWeight: 500 }}>Weekly Availability:</p>
                        <p style={{ fontSize: 20, fontWeight: 500, }}>25Hrs</p>
                    </div>
                    <Button variant="contained" size="medium" style={{ height: '26px', backgroundColor: '#0000FF', color: '#FFFFFF', marginTop: "25px", }}>Book now</Button>
                </div>
                {/* //<div className='line'></div> */}
                <div className='detapro'>
                    <div style={{ marginLeft: '10px', }}>
                        <p style={{ fontSize: '40px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start" }}>Luke Wright</p>
                        <p style={{ display: "flex", alignContent: "flex-start", marginLeft: "30px" }}>Software Developer</p>
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start", border: '1px solid white', borderBottomColor: '#C3AFAF', width: '90px' }}>Skills</p>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Python</p>
                                <p style={{ paddingLeft: 10, fontWeight: '600' }}>C++</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start", border: '1px solid white', borderBottomColor: '#C3AFAF', width: '250px' }}>Work Experience</p>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Amazon</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Microsoft</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start", border: '1px solid white', borderBottomColor: '#C3AFAF', width: '250px' }}>Education</p>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Lorem</p>
                                <p style={{ paddingLeft: 10, }}>(Dates)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>

                        <div>
                            <p style={{ fontSize: '30px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start", border: '1px solid white', borderBottomColor: '#C3AFAF', width: '250px' }}>Projects</p>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Lorem</p>
                                {/* <p style={{ paddingLeft: 10, }}>(6 Years)</p> */}
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start", border: '1px solid white', borderBottomColor: '#C3AFAF', width: '250px' }}>Social Presence</p>
                            {/* <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Amazon</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '20px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p> */}
                        </div>
                        <div>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Microsoft</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start", border: '1px solid white', borderBottomColor: '#C3AFAF', width: '250px' }}>Certifications</p>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Amazon</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Microsoft</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: '400', marginLeft: '30px', display: "flex", alignContent: "flex-start", border: '1px solid white', borderBottomColor: '#C3AFAF', width: '250px' }}>Reviews</p>
                            {/* <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Amazon</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            
                            <p style={{ textAlign: 'left', marginLeft: '20px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p> */}
                            <div style={{display:'flex',flexDirection:'row',marginLeft: '20px'}}>

                            <Typography component="legend" >5.0</Typography>
                            <Rating name="read-only" value={value} readOnly style={{paddingLeft:'10px'}} />
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', marginLeft: '10px', }}>
                                <p style={{ marginLeft: '20px', fontWeight: '600' }}>Microsoft</p>
                                <p style={{ paddingLeft: 10, }}>(6 Years)</p>
                            </div>
                            <p style={{ textAlign: 'left', marginLeft: '40px', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales neque, et pulvinar dolor. Nulla facilisi. Cras lacinia tortor ac elit blandit, sit amet maximus tortor ullamcorper. </p>
                        </div>

                    </div>
                    <div style={{ display: "flex", marginTop: '30px', marginRight: '20px' }}>
                        <Button variant="contained" size="medium" style={{ height: 'fit-content', backgroundColor: '#7A7CFF', color: '#FFFFFF', marginTop: "25px", width: '150px' }}>Tap to chat</Button>
                        <Button variant="contained" size="medium" style={{ height: 'fit-content', backgroundColor: '#FFFFFF', color: '#202020', marginTop: "25px", marginLeft: '10px', width: '200px' }}>Add to wishlist</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
