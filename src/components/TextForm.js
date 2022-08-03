import React,{useState} from 'react'


export default function TextForm(props) {
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }

  const convertUpCase=()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }

  const convertLowCase=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const [text,setText] = useState();



  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#18053d'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#18053d'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertUpCase}>Convert to Upper case</button>
        <button className="btn btn-primary mx-4" onClick={convertLowCase}>Convert to Lower case</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#18053d'}} > 
    <h3> your text summary</h3>
    {/* <p>  {text.split(' ').length}word and {text.length} character</p>

    <p>{0.008*text.split(' ').length} minutes read</p> */}
    <p>word and character</p>
    </div>
    </>
  )
}
