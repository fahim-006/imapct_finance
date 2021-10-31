
import { useState } from 'react/cjs/react.development'
import aid1 from '../../images/aid1.png'
import aid2 from '../../images/aid2.png'
import switch1 from '../../images/switch1.png'
import switch2 from '../../images/switch2.png'
import switch3 from '../../images/switch3.png'
import switch4 from '../../images/switch4.png'

const AidProject = () => {
    var [active, setActive] = useState('');

    return (
         <div className="AidMainDiv">
                <img className="Roadmappic" src={aid1} alt="Roadmappic" />
                    <br/><br/><br/><br/><br/>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                {active === "" ?
                                  <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                    <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Community Driven</p>
                                  <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                    </div> :
                              <div className="divofSwichindpic" onClick={()=>setActive("Community")}>
                                 <p className="headOf2ndAidDiv">Community Driven</p>
                                <p className="paraOf2ndAidDiv">In first phase we will plant 2 million trees in Philippines after<br/>  achieving 10 million in market cap.</p>
                             </div>

                            }
                                  {/* <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                       <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Community Driven</p>
                                       <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                    </div>*/} 

                                
                                   {active === "Automatic" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Automictic LP</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Automatic")}>
                                    <p className="headOf2ndAidDiv">Automictic LP</p>
                                    <p className="paraOf2ndAidDiv">In first phase we will plant 2 million trees in Philippines after<br/>  achieving 10 million in market cap.</p>
                                </div>
                                    }

                                {active === "Passive" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Passive income</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Passive")}>
                                    <p className="headOf2ndAidDiv">Passive income</p>
                                    <p className="paraOf2ndAidDiv">In first phase we will plant 2 million trees in Philippines after<br/>  achieving 10 million in market cap.</p>
                                </div>
                                    }

                                {active === "Audited" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Audited</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Audited")}>
                                    <p className="headOf2ndAidDiv">Audited</p>
                                    <p className="paraOf2ndAidDiv">In first phase we will plant 2 million trees in Philippines after<br/>  achieving 10 million in market cap.</p>
                                </div>
                                    }
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                {active === "Community" ?
                                        <img className="switchImage" src={switch1} alt="switch1"/>
                                : "" }

                                {active === "Automatic" ?
                                        <img className="switchImage" src={switch2} alt="switch1"/>
                                : "" }
                                {active === "Passive" ?
                                        <img className="switchImage" src={switch3} alt="switch1"/>
                                : "" }  
                                {active === "Audited" ?
                                        <img className="switchImage" src={switch4} alt="switch1"/>
                                : "" }    
                                </div>
                            </div>
                        
                        </div>
                        <br/><br/>
            </div>
              
             
        
       
    );
}

{/*
                <div className="container-fluid">
                
                <div style={{minHeight:"380px"}}>  
                    <div>
                        <p className="pinkPortionLeftParagraph"><b>Impact <br/>AiD Projects</b></p>
                        <p className="pinkPortionRightParagraph">‘’A donation makes you feel great, a sustainable donation makes you remembered to millions’’<br/>
                            <span className="founder">-Founder, Impact Finance</span></p>
                            </div>
                            <div>
                         
                </div>

                
                </div>
              
              <div className="container">
                <div className="flex-containerofaid">
                    <div className="flex-itemofaid">
                        <p className="headofCardhomeAid">Impact.plant</p>
                        <p>Target Market cap $25M </p>
                        <p>In first phase we will plant 2 million trees in Philippines after achieving 10 million in market cap. </p>
                        <img src={aid1} alt="Avatar" className="imgofAIDcard"/>
                    </div>
                    <div className="flex-item-aid">
                    flex item1
                    </div>
                    <div className="flex-item-aid">
                    flex item1
                    </div>
                </div>
              </div>

                <div className="aid2">   
              
                </div>
            </div>
*/

}

export default AidProject;