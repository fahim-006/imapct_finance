import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { getAllCause } from "../../../api";
import CauseCover from '../../../images/causeCover.png'

const CoverofCause = () => {
    const [cause, setCause] = useState([]);
    var cover;

    useEffect(()=>{
        getAllCause()
          .then(response => {
            setCause(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
    return(
       
        <div className="cover2">
             {cause.map((item) =>{
              if(item.name==="cover"){
                cover = item.details;
              }
            })}
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <img className="donate-image" src={CauseCover} alt="donate"/>
                </div>
                <div className="col-8" id="causep1div">
                    <p className="causep1">{cover}</p>
                </div>             
            </div>

        </div>
    </div>
    )
}

export default CoverofCause;