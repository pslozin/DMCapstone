import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
// import Button from '@mui/material/Button';

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Container = styled.div`
    align-items: center;
    justify-content: center;
    height: 420px;
    padding: 2px;
    margin: 2px;
`

const CardRight = styled.div`
    display: flex;
    justify-content: right;
    align-items: right;
  
    
`
const Itemammount = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 1px;
   
`

const Ammount = styled.span`
    width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Priceofitem = styled.div`
font-size: 20px;    

    

`

const Button = styled.button`
  padding: 1px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 400;

  :hover{
      background-color: #f8f4f4;
  }
`;


export default function Itemcard({ item }) {

    const [itemquantity, setItemquantity] = useState(0)

    const increaseQuantity = () => {
        setItemquantity(itemquantity + 1)
    }
    const dereaseQuantity = () => {
        if (itemquantity === 0) {
            setItemquantity(0)
        }
        else {
            setItemquantity(itemquantity - 1)
        }
    }

    // const showCounter = useSelector(state => state.cartReducer.counter)
    const dispatch = useDispatch()




    const updateCard = (ammount) => {

        let itemsForCart = [
            {
                id: item.id,
                name: item.name,
                quantity : itemquantity,
                price: item.price,
              
            }
        ]
        dispatch({ type: 'INCREMENT', ammount: itemquantity })
        
        let grand_total = item.price * itemquantity
        console.log("UPDATE TOTAL CART PRICE", grand_total)
        dispatch({ type: 'UPDATE_TOTAL_PRICE', grtotal: grand_total})


        if (itemquantity != 0) {
            dispatch({ type: 'ADD_TO_CART', items: itemsForCart, itemq: itemquantity })

        }

        console.log("CLICKED ON ADD TO CARD", item.name)
    }



    return (
        <Container>
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="pizza"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Priceofitem>${item.price}</Priceofitem>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <CardRight>
                        <Add onClick={increaseQuantity} />
                        <Itemammount>
                            <Ammount>{itemquantity}</Ammount>
                        </Itemammount>
                        <Remove onClick={dereaseQuantity} />

                        <Button onClick={updateCard} variant="outlined" size="small">
                            add to cart
                        </Button>
                    </CardRight>
                </CardContent>

            </Card>
        </Container>


    )
}
