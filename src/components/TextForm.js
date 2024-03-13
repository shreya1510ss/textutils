import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
   const handleUpClick=()=>{
    // console.log("uppercase was Clicked "+text);
    let newtext=text.toUpperCase()
    setText(newtext)

    props.showAlert("upper case converted","success")
   }

   const handlelowClick=()=>{
    // console.log("lowercase was Clicked "+text);
    let newtext=text.toLowerCase();
    setText(newtext);

    props.showAlert(" case converted","success")
   }

   const handleOnChange=(event)=>{
    // console.log("Onchange was cliecked");
    setText(event.target.value)
   }

   

   const clearTexts=()=>{
    
        setText("");
    
   }

   const copyText=()=>{
    let text=document.getElementById("myBox");
    text.select();
    
    navigator.clipboard.writeText(text.value);

}

const reverseText=()=>{
let newText=text.split("").reverse().join('');
setText(newText)
}


  

    const [text,setText]= useState("");
    //cannot change text like that
    //text="shreya it is"-> wrong
    // setText("new text");

    //text->state variable

  return (
    <>
    <div className="container">
    <h1 style={{color: props.mode.bg === "success"  || props.mode.bg === "danger" ? "white" : "black"}}
    >{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}  style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"? "white":"black"}} ></textarea>
    </div>
    <button className="btn btn-primary mx-3 my-2 border border-dark" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-success mx-3 my-2 border border-dark" onClick={handlelowClick}>convert to lowercase</button>
    <button className="btn btn-danger mx-3 my-2 border border-dark" onClick={clearTexts}>Clear text</button>

    <button className="btn btn-info mx-3 my-2 border border-dark" onClick={reverseText}>Reverse text</button>

    <button className="btn btn-warning mx-3 my-2 border border-dark" onClick={copyText}>Copy Text</button>
      
    </div>
    <div className="container">
        <h1 style={{color: props.mode.bg === "success"  || props.mode.bg === "danger" ? "white" : "black"}}>text summary</h1>
        <p style={{color: props.mode.bg === "success" || props.mode.bg === "danger" ? "white" : "black"}}>  {text.split(" ").length-1} words and {text.length} characters</p>

    </div>

    <div className="container">
        <h1 style={{color: props.mode.bg === "success"  || props.mode.bg === "danger" ? "white" : "black"}}>Preview </h1>
        <p style={{color: props.mode.bg === "success"  || props.mode.bg === "danger" ? "white" : "black"}}>  {text.length>0? text:"enter something to preview"}</p>

    </div>
    </>
  )
}


//how to handle event
//how to set state

