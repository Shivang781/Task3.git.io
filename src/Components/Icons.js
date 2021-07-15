import React from "react"
import { FaTimes, FaCircle, FaPen}from "react-icons/fa";

const Icons = ({choice}) =>{
    switch(choice){
        case "cross":
            return<FaTimes className="icon"/>;
        case "circle":
            return<FaCircle className="icon"/>;
        default:
            return<FaPen className="icon"/>;
    
    }
}
export default Icons