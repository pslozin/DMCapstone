import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';


import Cartitemscard from './Cartitemscard';

import { useSelector, useDispatch } from 'react-redux'
import Checkout from './Checkout';

const Container = styled.div`
    margin: 10px;
    background-color: salmon;
   
`
const Desc = styled.h1`

    
`

const Cartitems = styled.div`
    
`


export default function Cart() {

    const showCounter = useSelector(state => state.cartReducer.counter)
    const totalCartPrice = useSelector(state => state.cartReducer.total_price)
    const cartItems = useSelector(state => state.cartshowitems.pizzaItems)
    //const initialCartload = useSelector(state => state.cartshowitems.pizzaItems[0].firstload)
    //const secondCartload = useSelector(state => state.cartshowitems.pizzaItems[0].numberofloads)

    console.log("reducer STATE", cartItems)

  
    const dispatch = useDispatch()


    const emptyCart = () => {
        dispatch({ type: 'RESET' })
        dispatch({ type: 'EMPTY_CART'})
    }

    return (
        <Container>
            <Desc>Items in Cart : {showCounter}</Desc>
            <Desc>Total Price : {totalCartPrice}</Desc>
            <Cartitems >
                {
                    
                cartItems.map((item) => (
  
                    <Cartitemscard key={item.id} items={item}/>

                ))}

                
            </Cartitems>
            <Button onClick={emptyCart} variant="outlined" size="small">
                empty cart
            </Button>        
            <Checkout props = {cartItems}/>        
        </Container>
    )
}
