import { useState } from "react";
import {useFormik} from "formik";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } else if (values.fusername.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }
 
  
 
   return errors;
 };

export default function CommentsForm({addNewComment}){
    // let [formData,setFormData] = useState({
    //     username:"",
    //     remarks:"",
    //     rating:5
    // });

    const formik = useFormik({
     initialValues: {
        username:'',
        remarks:'',
        rating: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });


    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData,[event.target.name] : event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //     username:"",
    //     remarks:"",
    //     rating:5
    // })
    // };


    return (
        <div className="">
            <h4>Give a Comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input name="username" placeholder="username" type="text" value={formik.values.username} onChange={formik.handleChange} id="username"/>

                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                
                <br></br><br></br>
                <label htmlFor="remark">Remarks</label>
                <textarea name="remarks" value={formik.values.remarks} placeholder="Add new remarks" onChange={formik.handleChange} id="remark">Remarks</textarea>
                <br></br> <br></br>
                <label htmlFor="rating">Rating</label>
                <input name="rating" id="rating" placeholder="rating" type="number" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}/>
                <br></br> <br></br>
                <button type="submit">Add Comment!!!</button>
            </form>
        </div>
    )
}