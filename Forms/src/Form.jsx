import { useState } from "react"

export default function Form(){
    
    let [formData,setFormData]=useState({
        fullName : "",
        username : ""
    });

    // let handleNameChange = (event) => {
    //     console.log(event.target.value);
    //     setFullName(event.target.value);
    // }

    // let handleUserName = (event) => {
    //     console.log(event.target.value);
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData(
            (currData) => {
                currData[fieldName] = newValue;
                return{...currData,[fieldName] : newValue};
            }
        );
    };

let handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
        fullName : "",
        username : ""
    });
};

    return(

        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">FullName</label>
            <input placeholder="Enter full name" id="fullname" type="text" value={formData.fullName} onChange={handleInputChange} name="fullName"/>

            <br /><br />
        
            <label htmlFor="username">username</label>
            <input placeholder="Enter username" id="username" type="text" value={formData.username} onChange={handleInputChange} name="username"/>
            <button>Submit</button>
        </form>
    )
}