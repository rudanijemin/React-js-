
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
//import About from './components/About';

function App() {
  return (
   <>
    <Navbar title="TextUtils" aboutText="AboutUS"/>
    <div className="container">
      <TextForm heading="enter the text"></TextForm>
      {/* <About/> */}
    
    </div>
    
   
   </>
  );
}

export default App;
