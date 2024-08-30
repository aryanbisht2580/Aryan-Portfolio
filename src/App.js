import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import MainSc from "./components/mainScreen/MainSc.js"
import AboutDetail from './components/About/aboutDetail.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
function App() {
  return (
    < div className='w-screen overflow-hidden'>
          <div className='h-screen w-screen fixed z-[-2]'>
            <div className="overflow-x-hidden h-full w-full flex flex-col absolute top-0  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            </div>
          </div>
          <div >

            <Navbar/>
            <MainSc/>
            <AboutDetail/>
            <Projects/>
            <Contact/>

          </div>
    </div>
  );
}

export default App;
