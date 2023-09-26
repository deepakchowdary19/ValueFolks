import React from 'react'
import '../Styles/Display.css'
import Displaylogo from '../Images/Displaylogo.jpg'
import GoogleIcon from '../Images/GoogleIcon.png'
import Button from '@mui/material/Button';
import JourneyFields from './JourneyFields';
import Content from './Content';
import achivements from '../Images/achivements.jpg'
import CardsData from './CardsData';
import Bottom from '../Components/Bottom';


export default function Display() {
    const videocall = require('../Images/Videocall.png')
    const Web = require('../Images/web.png')
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
                    <p style={{ color: '#121212', fontWeight: '600', fontSize: '20px', textAlign: 'center', paddingTop: "0px" }}>Transform your career with our expert mentorship services.</p>
                    <div className='JourneyFields'>
                        <JourneyFields image={videocall} title='1:1 Video Call Sessions' content='Personalized virtual meetings connecting you with experienced mentors for focused guidance' />
                        <JourneyFields image={Web} title='Expert Help in Various Fields' content='Access specialized assistance from industry experts across diverse domains' />
                        <JourneyFields image={mentor} title='Access to Great Mentors' content='Connect with top-tier mentors who are committed to your growth and success' />
                    </div>
                </div>
            </div>
            <div className='Works'>
                <div className='WorksContainer'>
                    <p style={{ color: '#121212', fontWeight: '600', fontSize: '28px', textAlign: 'center' }}> Targeted Progress and Guidance</p>
                    <span style={{ color: '#121212', fontWeight: '600', fontSize: '20px', paddingTop: "0px" }}>Same process but tailored to you.You wont be swarmed with proposals,only relevant quality leads</span>
                    <div className='JourneyFields'>
                        <JourneyFields image={post} title='Post' content='We hand pick our Professinals so that you are only ever trapping into Australias best' />
                        <JourneyFields image={collaborate} title='collaborate' content='We hand pick our Professinals so that you are only everi=git  tapping into Australias best' />
                        <JourneyFields image={match} title='match' content='Connect with top-tier mentors who are committed to your gr' />
                        <JourneyFields image={support} title='support' content='Connect with top-tier mentors who are committed to your growth and success' />
                    </div>
                </div>
            </div>

            <div className='Contentcss'>
                <Content flex_direction="row" matterPText='Connecting Ambition with Experience: Find Your Mentor' matterSpanText='Discover the power of mentorship and propel your ambition towards success. At Value Folks, we believe in connecting aspiring individuals with experienced mentors who can guide them on their journey'/>
            </div>
            <div className='Contentcss1'>
                <Content flex_direction="row-reverse"  matterPText='Building Confidence and Resilience' matterSpanText='Guidance and support from a mentor can significantly boost your confidence and resilience. They share their experiences of overcoming obstacles, instilling in you the determination to face challenges head-on. This empowerment is fundamental in fortifying your journey.'/>
            </div>
            <div className='about'>
                <div style={{display:'flex',flexDirection:'column'}}>
                <p style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '28px', textAlign: 'left',marginLeft:'30px' }}>Accelerating Growth and Learning</p>   
                <p style={{ color: '#FFFFFF', fontWeight: '400', fontSize: '18px', textAlign: 'center',width:'90%' }}>Your journey is an expedition towards growth, learning, and self-improvement. Through mentorship, we facilitate an accelerated growth trajectory. Mentors, with their wealth of knowledge and experiences, act as catalysts, propelling you towards your objectives with speed and precision.</p>   
                </div>

                <img src={achivements} alt='achivements' className='achivements' />
            </div>

            <div className='Cardsdatacss'>
                <p style={{ color: '#121212', fontWeight: '600', fontSize: '28px', textAlign: 'center' }}> Your Journey, Amplified</p>
                <div className='boxesdata'>
                    <CardsData />
                    <CardsData />
                    <CardsData />
                </div>
                <p style={{ color: '#121212', fontWeight: '600', fontSize: '18px', textAlign: 'center' }}> Love Your Experience</p>
            </div>
            <div className='ContainerBotom'>
                <div className='Content'>
                <img src={Displaylogo} alt='logo' className='Displaylogo1' />
                    <div className='Title'>
                        <p style={{ color: '#121212', fontWeight: '600', fontSize: '28px', width: '100%', textAlign: 'center' }}> Connecting Ambition with Experience Find Your Mentor </p>
                        <span style={{ color: '#121212', fontWeight: '600', fontSize: '20px', width: '100%', textAlign: 'center', paddingTop: "0px" }}>Your journey to Excellence starts with handpicked mentors</span>
                        <Button variant="contained" size='large' style={{ width: '25%', height: '22%', marginTop: '10%',alignSelf:'center' }}>Get Started</Button>
                    </div>
                    
                </div>
            </div>
            <div>
                <Bottom/>
            </div>


        </div>
    )
}
