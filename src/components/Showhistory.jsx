import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`

    margin: 25px;
    
`

export default function Showhistory() {

let email = 'pslozin@gmail.com'

    const showHistory = () =>{
        axios.post("/api/showorders", email).then(function (response) {
            console.log("GOT BACK FROM SERVER", response.data)
        })
    }


  return (
    <Container>
        <Button>show history</Button>
    </Container>
  )
}
