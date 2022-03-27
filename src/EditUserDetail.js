import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory} from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik"; 
import { userdetailValidationSchema } from "./AddUserDetail";


export function EditUserDetail({ userdetailList, setuserdetailList }) {
  const { id } = useParams();  // extracting parameter from the URL
  
  const [userdetail, setuserdetail] = useState(null);

  useEffect(() => {
    fetch(`${API}/userdetails/${id}`,
     {
      method: "GET",
    }) //returns always a promise

      // .then((data) => console.log(data)); // Response object
      // .then((mv) => console.log(mv))
      .then((data) => data.json())
      .then((mv) => setuserdetail(mv))
      .catch((err) => console.log(err));
  }, []);

console.log(userdetail);

  return(
  <div>
   { userdetail ? <EditUserDetailForm userdetail={userdetail} /> : <h2>Loading</h2>}
  </div>
);
}

  function EditUserDetailForm({ userdetail }){
        
    const history = useHistory();
    
    const formik = useFormik({
      initialValues: {
        Image: userdetail.Image,
        FirstName: userdetail.FirstName,
        LastName: userdetail.LastName,
        Email: userdetail.Email,
        Password: userdetail.Password,
        TypeOfuser: userdetail.TypeOfuser, 
      },
       validationSchema: userdetailValidationSchema,
      onSubmit: (updateduserdetail) => {
        // console.log("onSubmit", newuserdetail);
        edituserdetail(updateduserdetail);
      },
    }); 
    
    const edituserdetail = (updateduserdetail) => {
      console.log("Updated", updateduserdetail);
         
          fetch(`${API}/userdetails/${userdetail.id}`, {
            method: "PUT",
            body: JSON.stringify(updateduserdetail),
            headers: {
              "Content-Type": "application/json", 
               },   
               }).then(() => history.push("/userdetails"));
    };

    return (
    <form onSubmit = {formik.handleSubmit} className="add-userdetail-form">
      <TextField
        type = "poster"
        label="Photo"
        id = "Image"
        name="Image"
        variant="outlined"
        // placeholder = "Poster"
        onChange={formik.handleChange}
        value={formik.values.Image}
        onBlur = {formik.handleBlur}
        error = {formik.touched.Image && formik.errors.Image}
        helperText = {
          formik.touched.Image && formik.errors.Image ? formik.errors.Image : ""
        }
         />
     
      <TextField
        label="FirstName"
        name="FirstName"
        id="name"        
        type="text"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.FirstName}
        onBlur = {formik.handleBlur}
        error = {formik.touched.FirstName && formik.errors.FirstName}
        helperText = {formik.touched.FirstName && formik.errors.FirstName ? formik.errors.FirstName : ""}
         // onChange={(event) => setName(event.target.value)}    
        />
              {/* <input
             type = "text"
             onChange = {(event) => setName(event.target.value)}
             placeholder = "Name"
              /> */}
      <TextField
        type = "text"
        label="LastName"
        id = "name"
        name="LastName"
        variant="outlined"
        // placeholder = "Poster"
        onChange={formik.handleChange}
        value={formik.values.LastName}
        onBlur = {formik.handleBlur}
        error = {formik.touched.LastName && formik.errors.LastName}
        helperText = {
          formik.touched.LastName && formik.errors.LastName ? formik.errors.LastName : ""
        }
         />
         
        
      <TextField
        type ="text"
        label="Email"
        id="email"
        name="Email"
        variant="outlined" 
        //placeholder = "Rating" 
        onChange={formik.handleChange}
        value={formik.values.Email}
        onBlur = {formik.handleBlur}
        error = {formik.touched.Email && formik.errors.Email}
        helperText = {formik.touched.Email && formik.errors.Email ? formik.errors.Email : ""}
         />
          <input type="password" name="Password" placeholder="Enter the password" />
        <select id="TypeOfuser" name="TyprOfuser">
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
        
      <Button color="success" type = "submit" variant = "contained">
        Save
      </Button>
    </form>
  );
}


