import React,{useState} from 'react';
import './App.css';
import Mainscreen from './Screens/Mainscreen';
import PersonalInfoUpload from './Screens/PersonalInfoUpload';
import FindSpecialist from './Components/FindSpecialist';
import FindSpecialistScreen from './Screens/FindSpecialistScreen';


type PersonalinfoProps = {
  setComponentName: (name: string) => void;
  componentname: string;
}

function App() {
  return (
    <div className="App">
     <FindSpecialistScreen/>
    </div>
  );
}

export default App;
