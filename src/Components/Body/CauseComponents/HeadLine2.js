import causeh2image1 from '../../../images/causeh2image1.png'
import causeh2image2 from '../../../images/causeh2image2.png'
import causeh2image3 from '../../../images/causeh2image3.png'
import causeh2image4 from '../../../images/causeh2image4.png'
import causeh2image5 from '../../../images/causeh2image5.png'
import causeh2image6 from '../../../images/causeh2image6.png'
import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { getAllCause } from '../../../api';

const Headline2 = () => {
    const [cause, setCause] = useState([]);
    var women;
    var womenH1;
    var school;
    var schoolH1;
    var water;
    var waterH1;
    var wildlife;
    var wildlifeH1;
    var Project;
    var ProjectH1;
    var Eco;
    var EcoH1;

    useEffect(()=>{
        getAllCause()
          .then(response => {
            setCause(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
    return (
        <div className="headdivCauseHeadline2">
             {cause.map((item) =>{
              if(item.name==="Impact.women"){
                women = item.details;
                womenH1 = item.name1;
              }
              if(item.name==="Impact.school"){
                school = item.details;
                schoolH1 = item.name1;
            }
                if(item.name==="Impact.water"){
                    water = item.details;
                    waterH1 = item.name1;
                }

                if(item.name==="Impact.wildlife"){
                    wildlife = item.details;
                    wildlifeH1 = item.name1;
                  }
                  if(item.name==="Project-Tuvalu"){
                    Project = item.details;
                    ProjectH1 = item.name1;
                }
                if(item.name==="Eco-summit"){
                    Eco = item.details;
                    EcoH1 = item.name1;
                }
              
           })}
            <br/><br/>
            <h2 className="headlinesinCause">Headline</h2>
            <br/><br/><br/>
           
                <div className="container">
                    <div className="row">
                   
                    <div className="col-4">
                        <div className="cause3">
                        <h2 className="causeh1h1">Impact.women</h2>
                            <p className="causeh1p1">{womenH1}</p>
                            <p className="causeh1p1">{women}</p>
                            <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}}  src={causeh2image1} alt="causeh2image1"/>
                        </div>
                        </div>

                        <div className="col-4">
                        <div className="cause3">
                        <h2 className="causeh1h1">Impact.school</h2>
                            <p className="causeh1p1">{schoolH1}</p>
                            <p className="causeh1p1">{school}
                            </p>
                            <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image2} alt="causeh2image1"/>
                        </div>
                        </div>

                        <div className="col-4">
                        <div className="cause3">
                        <h2 className="causeh1h1">Impact.water</h2>
                            <p className="causeh1p1">{waterH1}</p>
                            <p className="causeh1p1">{water}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image3} alt="causeh2image1"/>
                        </div>
                        </div>
                    </div>

                    <br/><br/><br/>

                    <div className="row">
                   
                   <div className="col-4">
                       <div className="cause3">
                       <h2 className="causeh1h1">Impact.wildlife</h2>
                            <p className="causeh1p1">{wildlifeH1}</p>
                           <p className="causeh1p1">{wildlife}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image4} alt="causeh2image1"/>
                       </div>
                       </div>

                       <div className="col-4">
                       <div className="cause3">
                       <h2 className="causeh1h1">Project-Tuvalu</h2>
                            <p className="causeh1p1">{ProjectH1}</p>
                           <p className="causeh1p1">{Project}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image5} alt="causeh2image1"/>
                       </div>
                       </div>

                       <div className="col-4">
                       <div className="cause3">
                       <h2 className="causeh1h1">Eco-summit</h2>
                            <p className="causeh1p1">{EcoH1}</p>
                           <p className="causeh1p1">{Eco}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image6} alt="causeh2image1"/>
                       </div>
                       </div>
                   </div>
                </div>
             

        </div>
    )
}

export default Headline2;