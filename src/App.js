import './App.css';
import Header from './components/header/header';
import Collector from './components/collector/collector';
import User from './components/user/user'

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Collector></Collector> */}
      <User></User>
    </div> 
  );
}

export default App;
