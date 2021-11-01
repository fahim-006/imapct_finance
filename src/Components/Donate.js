import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import donate  from '../images/donateCover.png'
import qrdonate from '../images/qrdonate.png'
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { getAllToken } from "../api";

const Donate = () =>{
    const [token, setToken] = useState([]);


    useEffect(()=>{
        getAllToken()
          .then(response => {
            setToken(response.data)
          })
          .catch(err => alert("Something went wrong!"))
        //{phase.month} {phase.date}, {phase.year} {phase.hour}:{phase.minute}:{phase.second}
        
      },[]) 
    return(
        <div>
        <Header/>
        <div className="cover1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <img className="donate-image" src={donate} alt="donate"/>
                    </div>
                    <div className="col-8">
                        <p className="donatep1">We share few common concern by donating</p>
                        <div className="divofdonatep2">
                            <p className="donatep2">All donations will go to supporting all the causes and initiatives! Scan the QR code or copy the address below to donate today! IMP, BNB, and stable coins are accepted!</p>
                        </div>
                        <img className="donate-image1" src={qrdonate} alt="qrdonate"/>
                        <br/><br/><br/>
                        <div class="input-group mb-5">
                        <div class="input-group mb-3">
                        {token.map(item => (
                            item.tokenPage == "donate"?
                            <>
                            <b className="HTBaddress">Address</b><input type="text" class="form-control" value={item.tokenNo} placeholder="0xe4DF421286fDD2cE2eF9E766e2E0Bc6D3217082a" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button onClick={() => {navigator.clipboard.writeText(item.tokenNo)}} class="btn btn-info" 
                                style={{color: "#ffffff", height:"2.2vw"}} t
                                ype="button">Copy</button>
                            </div>
                            </>
                            :""
                        ))}
                        </div>
                    </div>

                </div>

            </div>
          
        </div>
       
    </div>
    <Footer/>
    </div>
    );
    }

export default Donate;