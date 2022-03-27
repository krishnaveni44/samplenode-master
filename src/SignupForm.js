import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import * as yup from "yup";

export const userdetailValidationSchema = yup.object({

  Image: yup.string().required("Why not fill this Image? 😀"),
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


export const SignupForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      TypeOfuser: '',
    },
    validationSchema: userdetailValidationSchema,
    onSubmit: values => {

      fetch(`http://localhost:4000/userdetails`, {
       method: "POST",
       body: JSON.stringify(values),
       headers: {
         "Content-Type": "application/json", 
          },   
          }).then(() => 
          
          history.push("/userdetails"));
     // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="add-userdetail-form">
     
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
          
      <div className='field-row'>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="Email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.Email}
      />
      </div>
      <div className='field-row'>
       <label htmlFor="password">Password</label>
      <input
        id="password"
        name="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.Password}
      />
      </div>
       <div className='field-row'>
      <select id="TypeOfuser" name="TyprOfuser">
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
        </div>
       
      <button type="submit">Submit</button>
    </form>
  );
};
