import React from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { insertBuy } from "../../../api";

const Form1 = () =>{
    const [values,setValues] = useState({});
    const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name] : e.target.value,
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        insertBuy (values)
          .then(response => {
            if(response.status === 200){
                alert("submitted");
                window.location.reload();
            }
            
          })
          .catch(err => alert("Something Went Wrong"));
      }

    return(
        <div className="container-fluid" style={{backgroundColor: "#ffffff"}}>
            <br/> <br/> <br/>
            <div className="container">
            <p className="buyPageForminfo">Please provide necessary information to claim your <b>Impact Token.</b></p>
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col">
                    <p className="pformBuy">Currency</p>
                            <select  onChange={handleChange} name="currency" className="form-control">
                                <option value="">BNB/BUSD</option>
                                <option value="BNB">BNB</option>
                                <option value="BUSD">BUSD</option>
                            </select>
                       
                    </div>
                    <div class="col">
                    <p className="pformBuy">Total Amount</p>
                    <input type="text" onChange={handleChange} name="totalAmount" class="form-control" placeholder="0.1BNB/10BUSD"/>
                    </div>
                    
                </div>
                <div class="col">
                    <p className="pformBuy">Number of Impact token</p>
                        <input type="text" name="token" onChange={handleChange} class="form-control" placeholder="Number of Impact token"/>
                </div>

                <div class="col">
                    <p className="pformBuy">Your BSC wallet address (Make sure you are sending from the same wallet)</p>
                        <input name="bscWaltetAddress" onChange={handleChange} type="text" class="form-control"/>
                </div>

                <div class="col">
                    <p className="pformBuy">Transaction hash number(i)</p>
                        <input name="transactionHashNumber" onChange={handleChange} type="text" class="form-control"/>
                </div>

                <div class="col">
                    <p className="pformBuy">Your Telegram handle (In case of an error)</p>
                        <input name="telegramHandle" onChange={handleChange} type="text" class="form-control"/>
                </div>
                <div className="row">
                    <div className="col-6">
                         <button type="submit" className="buyresetbtn">Reset</button>
                     </div>
                     <div className="col-6">
                         <button type="submit" className="buySubmitbtn">Submit</button>
                     </div>
                </div>
            </form>
            <br/>
            </div>
        </div>
    )
}

export default Form1;