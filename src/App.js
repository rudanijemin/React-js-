
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import React ,{ useState } from 'react';
//import About from './components/About';



function App() {
    const[mode,setMode] = useState('light');

    const toggleMode=()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#18053d'; 
        //document.body.style.backgroundColor
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'; 

      }
    }
  return (
   <>
    <Navbar title="TextUtils" aboutText="AboutUS" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading="enter the text" mode={mode}></TextForm>
      {/* <About/> */}
    
    </div>
    
   
   </>
  );
}

export default App;
