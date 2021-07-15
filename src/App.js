import react from "react"
import Icons from "./Components/Icons"
import React, {useState} from "react";


// import react toastify

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import "./style.css"
  //import reactstrap 
  import { Button } from 'reactstrap';

//export app
const tictakArray = new Array(9).fill("")
  const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictakArray.fill("")
    }


    return(
        <div>
            <Icons choice="circle"/>
        </div>
    )
}

export default App
 

    