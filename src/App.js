import './App.css';
import Navbar from './components/Navbar.js'
// import Learn from './components/Learn'
import TextForm from './components/TextForm.js'
import React, {useState,useEffect } from 'react'
import Alert from './components/Alert.js'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";








function App() {
  const [mode, setmode] = useState({
    bg:"success",
    txt:"dark"
  });

  const [alert, setalert] = useState(null);

  useEffect(() => {
    // Set the initial background color of the body to green when the component mounts
    document.body.style.backgroundColor = "#63a87b";
    document.title="TextUtils- Green Mode"
  }, []);

  const showAlert=(message,type)=>{

    setalert(
      {
        msg:message,
        tp:type,
      }
    )

    setTimeout(() => {

      setalert(null)
      
    }, 1500);

  }

  const toggleStyle=(id)=>{
    if(id==="green")
    {
      setmode({
        bg:"success",
        txt:"dark"
      });

      document.body.style.backgroundColor="#63a87b";

      document.title="TextUtils- Green Mode"

      showAlert("Green mode is enable","success");

      
    }

    else if(id==="blue")
    {
      setmode({
        bg:"primary",
        txt:"light"
      });

      document.body.style.backgroundColor="#70a1b8";
      document.title="TextUtils- Blue Mode"

      showAlert("Blue mode is enable","success");

      
    }

    else if(id==="red")
    {
      setmode({
        bg:"danger",
        txt:"dark"
      });

      document.body.style.backgroundColor="#ed8080";

      document.title="TextUtils- Red Mode"

      showAlert("red mode is enable","success");

      
    }
    else if(id=="yellow")
    {
      setmode({
        bg:"warning",
        txt:"light"
      });

      document.body.style.backgroundColor="#e9f26b";

      document.title="TextUtils- Yellow Mode"

      showAlert("Yellow mode is enable","dark");

    }
    
    // else
    // {
    //   setmode("light")
    //   document.body.style.backgroundColor="white";

    //   showAlert("Light mode is enable","success");
      

    // }

  
   


    
  }

  return (
    <>
  {/* /user-->component 1
     /users/home--> component 2 
     need to use exact */}


    {/* <Router> */}
    <Navbar  title="TextUtils"  mode={mode} toggleStyle={toggleStyle}/>  
    <Alert alert={alert}/>
    <TextForm heading="Enter the text to Analyze below" showAlert={showAlert}  mode={mode} />
    {/* <div className=" container my-3"> */}
     {/* <Routes> */}
          {/* <Route exact path="/learn" element={<Learn />}></Route> */}
         
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to Analyze below" showAlert={showAlert}  mode={mode} />}></Route> */}
         
        {/* </Routes> */}

            
        
    


    {/* </div> */}
   
    {/* </Router> */}

    </>


  );
}

export default App;
