import React from 'react'
import styled from 'styled-components'


import { Link } from "react-router-dom";
import Loginform from './Loginform';

const Container = styled.div`
 
    margin-top: 40px;
    height:60px;  
    background-color: #eabbbb;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 15px 50px 30px;

`
const Descr = styled.div`
    
`

const Wrapper = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
    
`

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;

`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    padding: 9px;
    flex: 1;
    display: flex;

    align-items: center;
    justify-content: flex-end;

`
const MenuItem = styled.div`
    
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
`
const Logo = styled.img`
    position: absolute;
    left: 45%;
    top: 3px;
    z-index: 1;
    height:135px;
    width: 170px;
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>

                </Left>
                <Center>
                    <Logo src="http://balticmotors.us/pz.png"></Logo>
                    <Descr></Descr>
                    
                    </Center>
                {/* <Link to="/orderhistory" relative="path">
                    order history
                </Link> */}
                <Right>
                    <MenuItem>
                    
                    </MenuItem>
                </Right>

            </Wrapper>
        </Container>
    )
}