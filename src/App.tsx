import React,{useState} from 'react';
import './App.css';
import Mainscreen from './Screens/Mainscreen';
import PersonalInfoUpload from './Screens/PersonalInfoUpload';
type PersonalinfoProps = {
  setComponentName: (name: string) => void;
  componentname: string;
}

function App() {
  return (
    <div className="App">
     <PersonalInfoUpload/>
    </div>
  );
}

export default App;
