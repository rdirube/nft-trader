import './App.css';
import Header from './components/header/header';
import Collector from './components/collector/collector';
import User from './components/user/user';
import React, {useState} from 'react';

function App() {

  const [userModeOn, userModeSetter] = useState(false);


  return (
    <div className="App">
      <Header userModeOn={userModeOn}  userModeSetter={userModeSetter}></Header>
      {userModeOn &&  <User></User>}
      {!userModeOn && <Collector></Collector>}
     
    </div> 
  );
}

export default App;
