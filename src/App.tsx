import React from 'react'
import AboutPage from './Components/Aboutus'
import Mainscreen from './Screens/Mainscreen'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import PersonalInfoUpload from './Screens/PersonalInfoUpload';
import ProfileCard from './Components/ProfileCard';
import FindSpecialistScreen from './Screens/FindSpecialistScreen';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/" Component={FindSpecialistScreen}/>
        <Route  path="/Mainscreen" Component={Mainscreen}/>
        <Route path="/ProfileCard" Component={ProfileCard}/>
        <Route  path="/about" Component={AboutPage}/>
        <Route  path="/PersonalInfoUpload"  Component={PersonalInfoUpload}/>
      </Routes>
    </Router>

   
  )
}
