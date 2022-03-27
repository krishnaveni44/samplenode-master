import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="FirstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.FirstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="LastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.LastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="Email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.Email}
      />
       <label htmlFor="password">Password</label>
      <input
        id="password"
        name="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.Password}
      />
       {/* <label htmlFor="TypeOfuser">TypeOfuser</label>
      <input
        id="TypeOfuser"
        name="TypeOfuser"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
};