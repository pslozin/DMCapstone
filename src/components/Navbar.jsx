import React from 'react'
import styled from 'styled-components'


import { Link } from "react-router-dom";
import Loginform from './Loginform';

const Container = styled.div`
 
    height:60px;  
    background-color: #7b4c4c;

`
const Descr = styled.h1`
    
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


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>

                </Left>
                <Center><Descr>Pizza Store</Descr></Center>
                <Link to="/orderhistory" relative="path">
                    order history
                </Link>
                <Right>
                    <MenuItem>
                    
                    </MenuItem>
                </Right>

            </Wrapper>
        </Container>
    )
}