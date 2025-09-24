import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

  function App() {
  const[mode , setMode] = useState('light');// whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled" , "success");
      // document.title = 'TextUtils-DarkMode';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success");
      // document.title = 'TextUtils-LightMode';


    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar /> */}
        
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm  heading="Try TextUtils -" mode={mode} showAlert={showAlert} />} />
          <Route path="*" element={<TextForm heading="Try TextUtils -" mode={mode} showAlert={showAlert} />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
