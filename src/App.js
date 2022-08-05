
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import React ,{ useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';



function App() {
    const[mode,setMode] = useState('light');
    const[alert,setAlert] = useState(null);

    const showAlert=(massage,type)=>{
      setAlert({
        msg:massage,
        type:type,
      })
      setTimeout(() => {
        setAlert(null)
      }, 3000);
    }

    const toggleMode=()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#18053d'; 
        //document.body.style.backgroundColor
        showAlert('dark mode has been enable','success');
        document.title='TextUtils - Dark Mode'
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'; 
        showAlert('light mode has been enable','success');
        document.title='TextUtils - Light Mode'
        setInterval(() => {
          document.title='TextUtils install now'
        },1000 );

        setInterval(() => {
          document.title='TextUtils is amazing'
        },15000 );

      }
    }
  return (
   <>
    <Navbar title="TextUtils" aboutText="AboutUS" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> 
    <div className="container">
     
      <TextForm heading="enter the text" mode={mode} showAlert={showAlert}></TextForm>
      {/* <About/> */}
    
    </div>
    
   
   </>
  );
}

export default App;
