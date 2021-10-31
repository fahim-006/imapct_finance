import { Link } from 'react-router-dom'
import social1 from '../../images/socials1.png'
import social2 from '../../images/socials2.png'
import social3 from '../../images/socials3.png'
import social4 from '../../images/socials4.png'
import social5 from '../../images/socials5.png'
import social6 from '../../images/socials6.png'
import social7 from '../../images/socials7.png'
import social8 from '../../images/socials8.png'

import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { getAllSocial } from '../../api'

const Socials = () => {
    const [social, setSocial] = useState([]);
    var facebook;
    var youtube;
    var btok;
    var instagram;
    var telegram;
    var discord;
    var twitter;
    var reddit;

    useEffect(()=>{
        getAllSocial()
          .then(response => {
            setSocial(response.data)
          }
               
            )
          .catch(err => alert("Something went wrong!"))
      },[])
    return (
        <div className="partnerdiv">
           {social.map((item) =>{
              if(item.name==="facebook"){
                  facebook = item.details;
              }
              if(item.name==="youtube"){
                youtube = item.details;
            }
            if(item.name==="btok"){
                btok = item.details;
            }
            if(item.name==="instagram"){
                instagram = item.details;
            }
            if(item.name==="telegram"){
                telegram = item.details;
            }
            if(item.name==="twitter"){
                twitter = item.details;
            }
            if(item.name==="reddit"){
                reddit = item.details;
            }
            if(item.name==="discord"){
                discord = item.details;
            }
              
           })}
           
            <div className="flex-container-socials">
                <div className="flex-item-socials">
                   <Link className="footerLink" to="/termsandconditions"> Terms and conditions </Link>
                </div>
                <div className="flex-item-socials" style={{marginRight:"100px"}}>
                   <Link className="footerLink" to="/privacy"> Pricavy and Cookies Policy </Link>
                </div>
             
                <div className="socials-img-div">
                <a href={telegram} target="_blank"> 
                <div className="flex-item-social-image">
                     <img className="social-image" src= {social1} alt="social1 Image"/>
                 </div>
                </a>

                <a href={twitter} target="_blank"> 
                <div className="flex-item-social-image">
                    <img className="social-image" src= {social2} alt="social2 Image"/>
                </div>
                </a>

                <a href={reddit} target="_blank"> 
                <div className="flex-item-social-image">
                    <img className="social-image" src= {social3} alt="social3 Image"/>
                </div>
                </a>
                <a href={instagram} target="_blank"> 
                <div className="flex-item-social-image">
                    <img className="social-image" src= {social4} alt="social4 Image"/>
                </div>
                </a>
                <a href={btok} target="_blank"> 

                <div className="flex-item-social-image">
                    <img className="social-image" src= {social5} alt="social5 Image"/>
                </div>
                </a>
                <a href={discord} target="_blank"> 
                <div className="flex-item-social-image">
                    <img className="social-image" src= {social6} alt="social6 Image"/>
                </div>
                </a>
                <a href={youtube} target="_blank"> 
                <div className="flex-item-social-image">
                    <img className="social-image" src= {social7} alt="social7 Image"/>
                </div>
                </a>
                <a href={facebook} target="_blank"> 
                    <div className="flex-item-social-image">
                        <img className="social-image" src= {social8} alt="social8 Image"/>
                    </div>
                </a>
            </div>
            </div>
            <br/><br/><br/>
        </div>
    )
}

export default Socials;