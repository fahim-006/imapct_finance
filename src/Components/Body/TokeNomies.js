
import totalsupply from '../../images/totalsupply.png'
import burn from '../../images/pie/burn.png'
import aid from '../../images/pie/aid.png'
import investment from '../../images/pie/investment.png'
import marketing from '../../images/pie/marketing.png'
import presale from '../../images/pie/presale.png'
import publicPic from '../../images/pie/public.png'
import { useState } from 'react'

const TokeNomies = ()=> {
    const [active, setActive] = useState('totalsupply')
    return(       
        <div className="container-fluid">
            <div className="row">
               
        <div className="tokenomies">
            <p className="TokemoniesHead" onClick={()=>setActive('totalsupply')}>Tokenomies</p>
            <div className="col-lg-6 col-md-12 col-sm-12" style={{float: "right"}}>
            {active === 'totalsupply' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage1" src={totalsupply} alt="totalsupply"/>
                </div>
                : ""
            }
             {active === 'Burn' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={burn} alt="Burn"/>
                </div>
                : ""
            }

            {active === 'Marketing' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={marketing} alt="marketing"/>
                </div>
                : ""
            }

            {active === 'Aid' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={aid} alt="aid"/>
                </div>
                : ""
                }

                {active === 'Privet' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={investment} alt="investor"/>
                </div>
                : ""
                }

            {active === 'Presale' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={presale} alt="investor"/>
                </div>
                : ""
                }

            {active === 'Public' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={publicPic} alt="investor"/>
                </div>
                : ""
                }
          </div>
          
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="flex-container-tokenomies">
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Burn')} style={{ backgroundColor: "#BB2205"}}>Burn 150</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Marketing')} style={{ backgroundColor: "#01937C"}}>Marketing 50</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Aid')} style={{backgroundColor: "#01937C"}}>AiD 100</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Privet')} style={{ backgroundColor: "#035397"}}>Privet Investor</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Presale')} style={{backgroundColor: "#035397"}}>Presale: 200</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Public')} style={{ backgroundColor: "#035397"}}>Public: 400</button>
                </div>
                </div>
                <div>
                    <p className="underbuttonstokemonies">NB. Private investment will be locked for a year</p>
                   
                </div>
               
            </div>
          
            <div>  
    
              
              
            </div>
            <div >
            
            </div>
           
            <br/>
            <div>
                
                <p style={{fontFamily: "'Poppins Light', 'sans-serif'", 
                color: "#000000", marginLeft: "25px"
                }}> All transactions will have following tax</p>
            <ul class="c">
                      
                        <li style={{marginLeft: "10px"}}>4% Aid Wallet</li>
                        <li>2% Liquidity</li>
                        <li style={{marginRight: "10px"}}>  1% Holder</li>
                </ul>
                </div>
                <br/> <br/>
        </div>
        </div>
        </div>
    );
}

export default TokeNomies;