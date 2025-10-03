import { IoIosArrowRoundForward } from "react-icons/io";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './App.css'
import imgg from '/image1.png';
import Button from '@mui/material/Button';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Doctors from '../components/Doctors.jsx';
import Testimonals from '../components/Testimonals.jsx';
function App() {


  return (
    <>
     <div className="container">
      <div className="imge">
        <img src="" alt="logo" />
      </div>
      
        <ul className='nav'>
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
        </ul>
      
      <div className="butt"><button className='butto'>Login</button>
      <button className='butto'>Make Appoinments</button></div>
     </div>
     <div className='app'>
     <div className="main">
      <div className='text'>
      <h4  className='health'>Health comes first</h4>
      <h1>Protect and take care of your Health by E-Patient </h1>
      <p>
        Your digital healthcare companion. Manage patient history, appointments,
        Health suggestions ,Insurances and medical records with ease.
      </p>
              <button className='dec'>Make Apointment</button>
      </div>
      <div className='doctor'>
        <img src={imgg} className='imgg' alt="doctor" />
      </div>
      
     </div>
  <div className="cards">
   <div className="small">
      <div className="head-row">
      <img src="/consultant.png" className="conn" alt="consultant" />
      <h2>Find Doctor's</h2>
      </div>
      <p className='pp'>Get most affordable doctor at your doorsteps. </p>
      <div className="l"><IoIosArrowRoundForward /></div>
    </div>
    <div className="small">
      <div className="head-row">
      <img src="/appointments.png" className="conn" alt="consultant" />
      <h2>Make Apointments</h2>
      </div>
      <p className='pp'>Make easy apointments in hospital for your convience.   </p>
      <div className="l"><IoIosArrowRoundForward /></div>
    </div>
    <div className="small">
      <div className="head-row">
  <img src="/healthy.png" className="conn" alt="consultant" />
  <h2>Healthy habbits </h2>
</div>
      <p className='pp'>Know the good habits for your life          </p>
      <div className="l"><IoIosArrowRoundForward /></div>
    </div>
  </div>

  <Services />

  <Doctors />

  <div className="making">
    <p>make easier way for your appointments ,it may take less than 5 minutes of time for your health</p>
    <span ><button className='decc'>Make Apointment</button></span>
  </div>
    <Testimonals />
    
<div className="about-section"><About /></div>

  </div>
</>
  );}
export default App;
