import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Aboutme from './components/Aboutme/Aboutme'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Profile/>
     <Aboutme/>
     <Projects/>
    </div>
  );
}

export default App;
