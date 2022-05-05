// we're putting upcoming holidays on this page with Holiday API

import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import logo from '../assets/schedule.png'

import Navigation from "../components/Navigation";

// import Auth from '../utils/auth';
import Auth from "../utils/auth";

// import { upcomingHolidays } from '../utils/API';
import { useMutation } from "@apollo/client";
// import { SAVE_TASK } from '../utils/mutations'

import { upcomingHolidays } from "../utils/API";
// sign in to view schedule?

const Home = () => {
  //     const [data, setData] = useState();
  // //query changes, make API call
  // useEffect(() => {
  //   async function fetchData(){
  //     const response = await fetch("<url>");
  //     setData(response.data);
  //   }
  //   fetchData();

  return (
    // [data]
    <>
      < div className="home-box">
        <img className = "home-img" alt="schedule logo" src={logo} />
        <p>Log in or Sign Up to view your schedule!</p>
      </div >
    </>
  )
}
export default Home;

  // useState
  // const [data, setData] = useState();

  // useEffect( () => {
  //     // async function apiCall() {
  //     //     const response = await fetch("<url>");
  //     //     const result = await response.json();

  //     //     // using useState - set the state with the data you want.
  //     //     // setData();
  //     // }

  //     // apiCall()
  //    console.log(upcomingHolidays());

  // }, [])

/*return (
  <div>
    <p>Hi</p>
  </div>
);
};
*/