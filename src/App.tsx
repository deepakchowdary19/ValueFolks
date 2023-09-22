import React,{useState} from 'react';
import './App.css';
import Mainscreen from './Screens/Mainscreen';
import PersonalInfoUpload from './Screens/PersonalInfoUpload';
import ProfileCard from './Components/ProfileCard';

function App() {
  return (
    <div className="App">
     <ProfileCard/>
    </div>
  );
}

export default App;
