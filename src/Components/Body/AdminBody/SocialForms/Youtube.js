import AdminNav from "../AdminNav";
import { useEffect, useState } from "react";
import { insertSocialURL } from "../../../../api/apiSocials";

const Youtube = () => {

    const [values, setValues] = useState({
        id: "",
        name: "youtube",
        details: ""
    })

    const {
        id,
        name,
        details
    } = values;

    useEffect(()=>{

    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e)=>{
             e.preventDefault();
            insertSocialURL(values)
                .then(response => {
                    if(response.status === 200){
                        alert("Facebook URL submitted")
                    }else{
                        alert(response.status)
                    }
                })
    }
    return(
        <div>
        <AdminNav/>
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Welcome to Admin of Cause Edit page</h3>
                    </div>
                    <div className="col-12">
        <div>
        <h3>Youtube</h3>
      <form onSubmit={handleSubmit}>
          <div class="form-group">
              <label for="CauseHeadline">Youtube</label>
              <input type="text" class="form-control" id="name" name="name" value="youtube" placeholder="Enter Headline" disabled/>
          </div>
          <div class="form-group">
              <label for="Link">Link</label>
              <input onChange={handleChange} type="url" class="form-control" id="details" name="details" placeholder="Enter Youtube URL"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
  </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Youtube;