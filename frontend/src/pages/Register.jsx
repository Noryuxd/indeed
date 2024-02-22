import React from "react";
import { axiosClient } from "../api/axios";
import HomeNavbar from "./HomeNavbar";

// Laravel breeze auth already installed
// Use async arrowed function to make API calls
// const csrf = await axiosClient.get('/sanctum/csrf-cookie')
// const data = await axiosClient.post('/register', values)

const Register = () => {
  return (
    <>
      <HomeNavbar />
      <main className="w-3/4 mx-auto p-4">Register page</main>
    </>
  );
};

export default Register;
