import React from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

const Container = styled.div`
    background-color: #f0e3e3;
    margin: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius: 15px 50px 30px;
`
const Wrapper = styled.div`
    
`
const Itemname = styled.div`
 margin: 3px;
 margin-top: 13px;
 padding: 15px;
    
`
const Quantity = styled.div`
    margin: 3px;
`
const Deletebutton = styled.button`
    margin: 10px 10px 10px 210px;
    background-color: salmon;
    color: white;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 50%;
    cursor: pointer;
`
const Price = styled.div`
     margin: 3px;
`

const Total_price = styled.div`
 margin: 3px;
`
let total_checkout_price = 0;


export default function Cartitemscard(obj) {

    total_checkout_price = total_checkout_price + obj.items.price * obj.items.quantity;
    

    const dispatch = useDispatch()

    const deleteFromCart = (e) => {
        console.log("IS BUTTON ID STRING", typeof e.target.id)
        
        console.log("DELETIN ID FROM CART", e.target.id)
        console.log("DELETIN QUANITY ID FROM CART", obj.items.quantity)
        dispatch({ type: 'DELETE_ITEM_FROM_CART', id: e.target.id })
        dispatch({ type: 'DECREMENT', quant: obj.items.quantity})
        dispatch({ type: 'DECREASE_TOTAL_PRICE', grtotal: obj.items.price * obj.items.quantity})

    }

    const grand_total = useSelector(state => state.cartReducer.total_price)
    const cartItems = useSelector(state => state.cartshowitems.pizzaItems)
    const initialCartload = useSelector(state => state.cartshowitems.pizzaItems[0].firstload)
    
    
    


    return (


        <Container>
            {!initialCartload && <Itemname>{obj.items.name}

                <Quantity>Quantity - 
                    {obj.items.quantity}               
                </Quantity>
                <Price>Price per item - ${obj.items.price} </Price>
                <Price>Total Price - 
                ${obj.items.price * obj.items.quantity}   
                </Price>
               
                <Total_price>
                </Total_price>
                <Deletebutton id={obj.items.id} onClick={deleteFromCart}>
                        X
                    </Deletebutton>
            </Itemname>}
           



        </Container>

    )
}
