import React from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

const Container = styled.div`
    background-color: gray;
`
const Wrapper = styled.div`
    
`
const Itemname = styled.div`
    
`
const Quantity = styled.div`
    
`
const Deletebutton = styled.button`
    
`
const Price = styled.div`
    
`

const Total_price = styled.div`

`
let total_checkout_price = 0;


export default function Cartitemscard(obj) {

    total_checkout_price = total_checkout_price + obj.items.price * obj.items.quantity;
    

    const dispatch = useDispatch()

    const deleteFromCart = (e) => {
        console.log("DELETIN ID FROM CART", e.target.id)
        console.log("DELETIN QUANITY ID FROM CART", obj.items.quantity)
        dispatch({ type: 'DELETE_ITEM_FROM_CART', id: e.target.id })
        dispatch({ type: 'DECREMENT', quant: obj.items.quantity})

    }

    const grand_total = useSelector(state => state.cartReducer.total_price)
    const cartItems = useSelector(state => state.cartshowitems.pizzaItems)
    const initialCartload = useSelector(state => state.cartshowitems.pizzaItems[0].firstload)
    
    
    


    return (


        <Container>
            {!initialCartload && <Itemname>{obj.items.name}

                <Quantity>
                    {obj.items.quantity}               
                </Quantity>
                <Price>Price - 
                {obj.items.price * obj.items.quantity}   
                </Price>
                <Total_price>Total - 
                    {grand_total}
                </Total_price>
                <Deletebutton id={obj.items.id} onClick={deleteFromCart}>
                        X
                    </Deletebutton>
            </Itemname>}
           



        </Container>

    )
}
