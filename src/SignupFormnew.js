import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
// import { Field } from 'formik'
import TextField from '@mui/material/TextField';
import * as yup from "yup";

// export const userdetailValidationSchema = yup.object({

//   Image: yup.string().required("Why not fill this Image? 😀"),
//   FirstName: yup.string().required("Why not fill this FirstName? 😀"),
//   LastName: yup
//       .string()
//       .required("Why not fill this LastName? 😀")
//       .min(4, "Need a longer LastName 😀"),
//   Email: yup.string().required("Why not fill this  Email? 😀"),
//   Password: yup
//   .string()
//   .required("Why not fill this Password 😀")
//   .min(8, "Need a longer Password 😀"),
//   TypeOfuser: yup
//   .string()
//   .required("Why not fill this TypeOfuser? 😀")
//   .min(4, "Need a longer TypeOfuser 😀"),
// });


export const SignupFormnew = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      TypeOfuser: '',
    },
   
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
  const handleChangeSelect = (event) => {
  formik.setFieldValue('TypeOfuser', event.target.value);

  }
  return (
    <form onSubmit={formik.handleSubmit}>
       <input
         id="FirstName"
         name="FirstName"
         type="text"
         placeholder='First Name'
         onChange={formik.handleChange}
         value={formik.values.FirstName}
       />
       <input
         id="LastName"
         name="LastName"
         type="text"
         placeholder='Last Name'
         onChange={formik.handleChange}
         value={formik.values.LastName}
       />
       <input
         id="email"
         name="Email"
         type="email"
         placeholder='Email Address'
         onChange={formik.handleChange}
         value={formik.values.Email}
       />
      <input
        id="password"
        name="Password"
        type="password"
        placeholder='Password'
        onChange={formik.handleChange}
        value={formik.values.Password}
      />
      
       <div className='field-row'>
       {/* <Field component="select" name="TypeOfuser" >
  <option value="Admin">Admin</option>
  <option value="Manager">Manager</option>
  <option value="Employee">Employee</option>
</Field> */}

      <select id="TypeOfuser" name="TypeOfuser" onChange={handleChangeSelect}
        value={formik.values.TypeOfuser}>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
        </div>
       <button type="submit">Submit</button>
     </form>
       
  );
};