import React from 'react';
import './App.css';
import Mainscreen from './Screens/Mainscreen';
import Footer  from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Mainscreen/>
     <div>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
