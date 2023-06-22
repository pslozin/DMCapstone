import { useState } from "react";
import axios from 'axios'

import Loginform from "../components/Loginform";

import reactLogo from "./assets/react.svg";
import styled from 'styled-components'

import "./App.css";
// import { Console } from "console";
// import { response } from "express";

const Container = styled.div`

`

function App() {

  // axios.get("/menuitems").then(function(response){
  //   console.log(response.data)
  // })



  return (
    <Container>
      <Loginform></Loginform>
    </Container>
  );
}

export default App;
