import React from 'react'
import '../Styles/Display.css'
import Displaylogo from '../Images/Displaylogo.jpg'
import GoogleIcon from '../Images/GoogleIcon.png'
import Button from '@mui/material/Button';
import JourneyFields from './JourneyFields';
import mentor from '../Images/mentor.png'


export default function Display() {
    const videocall = require('../Images/Videocall.png')
    const Web  = require('../Images/web.png')
    const mentor = require('../Images/mentor.png')
    const post = require('../Images/post.png')
    const collaborate = require('../Images/collaborate.png')
    const match = require('../Images/match.png')
    const support = require('../Images/support.png')
    return (
        <div >
            <div className='Container'>
                <div className='Content'>
                    <div className='Title'>
                        <p style={{ color: '#121212', fontWeight: '600', fontSize: '28px', width: '80%', textAlign: 'left' }}> Connecting Ambition with Experience Find Your Mentor </p>
                        <span style={{ color: '#121212', fontWeight: '600', fontSize: '20px', width: '100%', textAlign: 'left', paddingTop: "0px" }}>Your journey to Excellence starts with handpicked mentors</span>

                        <Button variant="contained" size='medium' style={{ width: '25%', height: '12%', marginTop: '10%' }}>Get Started</Button>
                    </div>
                    <img src={Displaylogo} alt='logo' className='displaylogo' />
                </div>
            </div>

            <div className='subcontainer'>
                <div className='card'>
                    <p style={{ color: '#121212', fontWeight: '600', fontSize: '28px', textAlign: 'center' }}> Your Journey, Amplified </p>
                    <span style={{ color: '#121212', fontWeight: '600', fontSize: '20px', textAlign: 'center', paddingTop: "0px" }}>Transform your career with our expert mentorship services.</span>
                    <div className='JourneyFields'>
                        <JourneyFields image={videocall} title='1:1 Video Call Sessions' content='Personalized virtual meetings connecting you with experienced mentors for focused guidance' />
                        <JourneyFields image={Web} title='Expert Help in Various Fields' content='Access specialized assistance from industry experts across diverse domains' />
                        <JourneyFields image={mentor} title='Access to Great Mentors' content='Connect with top-tier mentors who are committed to your growth and success' />
                    </div>
                </div>
            </div>
            <div className='Works'>
            <div className='WorksContainer'>
                    <p style={{ color: '#121212', fontWeight: '600', fontSize: '28px', textAlign: 'center' }}> Your Journey, Amplified</p>
                    <span style={{ color: '#121212', fontWeight: '600', fontSize: '20px', paddingTop: "0px" }}>Same process but tailored to you.You wont be swarmed with proposals,only relevant quality leads</span>
                    <div className='JourneyFields'>
                        <JourneyFields image={post} title='Post' content='We hand pick our Professinals so that you are only ever trapping into Australias best' />
                        <JourneyFields image={collaborate} title='collaborate' content='We hand pick our Professinals so that you are only everi=git  tapping into Australias best' />
                        <JourneyFields image={match} title='match' content='Connect with top-tier mentors who are committed to your gr' />
                        <JourneyFields image={support} title='support' content='Connect with top-tier mentors who are committed to your growth and success' />
                    </div>
                </div>

            </div>
        </div>
    )
}
