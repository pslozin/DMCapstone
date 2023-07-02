import React from 'react'
import styled from 'styled-components'
import Showallpizzaitems from './Showallpizzaitems'
import Navbar from './navbar'
import Cart from './Cart'
import Single from './single'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Wrapper = styled.div`
height: 100%;
  display: flex;
`

const Leftside = styled.div`
    width: 700px;
    background-color: red;
`

const Rightside = styled.div`
    background-color: blue;
`

export default function Homepage() {
    return (
        <div>

        {/* <Single>

        </Single> */}
            <Navbar />
            
            <Showallpizzaitems />
            
           
            
     


        </div>
    )
}
