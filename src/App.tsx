import React,{useState} from 'react';
import './App.css';
import Mainscreen from './Screens/Mainscreen';
import PersonalInfoUpload from './Screens/PersonalInfoUpload';
import FindSpecialist from './Screens/FindSpecialist';


type PersonalinfoProps = {
  setComponentName: (name: string) => void;
  componentname: string;
}

function App() {
  return (
    <div className="App">
     <FindSpecialist/>
    </div>
  );
}

export default App;
