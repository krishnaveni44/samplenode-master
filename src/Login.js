import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik"; 
import * as yup from "yup";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export const userdetailValidationSchema = yup.object({

 // Image: yup.string().required("Why not fill this Image? 😀"),
  FirstName: yup.string().required("Why not fill this FirstName? 😀"),
  LastName: yup
      .string()
      .required("Why not fill this LastName? 😀")
      .min(4, "Need a longer LastName 😀"),
  Email: yup.string().required("Why not fill this  Email? 😀"),
  Password: yup
  .string()
  .required("Why not fill this Password 😀")
  .min(8, "Need a longer Password 😀"),
  TypeOfuser: yup
  .string()
  .required("Why not fill this TypeOfuser? 😀")
  .min(4, "Need a longer TypeOfuser 😀"),
});

// export function AddMovie({ movieList, setMovieList }) {
export function Login() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      Image: "",
     FirstName: "",
     LastName: "",
      Email: "",
    Password: "",
    TypeOfuser: "",
    },
    validateOnBlur: true,
     validationSchema: userdetailValidationSchema,
    onSubmit: (newuserdetail) => {
       adduserdetail(newuserdetail);
    },
  }); 
// https://cdn.123telugu.com/content/wp-content/uploads/2022/02/FIR-2.jpg
<iframe width="1280" height="720" src="https://www.youtube.com/embed/eVKIjoK7FnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  const adduserdetail = (newuserdetail) => { 
   
       console.log("onSubmit", newuserdetail);

       fetch(`${API}/userdetails/`, {
       method: "POST",
       body: JSON.stringify(newuserdetail),
       headers: {
         "Content-Type": "application/json", 
          },   
          }).then(() => 
          
          history.push("/userdetails"));
         if(adduserdetail){
          alert("Welcome back in. Authenticating..."); 
         }
        };
   return (
    <form onSubmit = {formik.handleSubmit} className="add-userdetail-form">
          
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
       
      {/* <TextField
        type= "text"
        label="Password"
        id="password"
        name="Password"
        variant="outlined"
        // placeholder = "Summary"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur = {formik.handleBlur}
        error = {formik.touched.password && formik.errors.password}
        helperText = {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
        />

        <input type="email" name="email" placeholder="Enter the Email" /> */}

        <input type="password" name="Password" placeholder="Enter the password" />
        <select id="TypeOfuser" name="TyprOfuser">
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>

        {/* <InputLabel id="TypeOfuser">Type Of User</InputLabel>
        <Select
          labelId="TypeOfuser"
          id="TypeOfuser"
          value={formik.values.TypeOfuser}
          label="TypeOfuser"
          variant="outlined"
          onChange={formik.handleChange}
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Manager"}>Manager</MenuItem>
          <MenuItem value={"Employee"}>Employee</MenuItem>
        </Select> */}


      {/* <TextField
        type="text"
        label="TypeOfuser"
        id="TypeOfuser"
        name="TypeOfuser"
        onChange={formik.handleChange}
        value={formik.values.TypeOfuser}
        onBlur = {formik.handleBlur}
        // onChange={(event) => setTrailer(event.target.value)}
        variant="outlined" 
        error = {formik.touched.TypeOfuser && formik.errors.TypeOfuser}
        helperText = {formik.touched.TypeOfuser && formik.errors.TypeOfuser ? formik.errors.TypeOfuser : ""}
        /> */}
      {/* <button onClick = {() => console.log(name, poster, rating, summary)}>Add Movie</button> */}
      {/* Copy the movieList and add new movie to it */}
     {/* <Button onClick = {() => addMovie()} variant = "contained"> */}
     <Button type="submit" variant = "contained">
        Login
      </Button>
      {/* <a href="#" onClick={swithToSignup}>Sign Up</a> */}
  </form>
);
}



