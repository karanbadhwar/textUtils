import "./App.css";
// import AboutUs from "./components/AboutUs";
import { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// let name = "Karan";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = 'TextUtils - Dark Mode'
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title={'TextUtils'} about={'About Us'} mode={mode} setMode={setMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
        <TextForm  heading='Enter The Text To Analyze' mode={mode} showAlert={showAlert}/>
        {/* <Route path='/aboutus' element={<AboutUs />}/> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
