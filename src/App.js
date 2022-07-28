
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
    <Navbar title="TextUtils" aboutText="AboutUS"/>
    <div className="container">
      <TextForm heading="enter the text"></TextForm>
    
    </div>
    
   
   </>
  );
}

export default App;
