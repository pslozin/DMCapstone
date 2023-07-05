import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import Button from '@mui/material/Button';
// import Button from '@mui/material/Button';

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Info_modal = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 2;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    min-height: 300px;
    max-width: 700px;
    min-width: 700px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const Modal_image = styled.div`
    width: 50%;
`
const Modal_info = styled.div`
    width: 50%;
    
`
const Modal_img = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`

const Container = styled.div`
    align-items: center;
    overflow: hidden;
   
    justify-content: center;
    min-height: 500px;
   
    padding: 2px;
    margin: 5px;

    border-radius: 15px 50px 30px;
`

const CardRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  
    
`
const Itemammount = styled.div`
    margin: 0px;
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 15px;
   
`

const Ammount = styled.span`
    width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding:8px;
`

const Priceofitem = styled.div`
font-weight: 900;
font-size: 25px;
`

const Button_to_card = styled.button`
top: 60px;
left: 10px;
  padding: 1px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 400;

  :hover{
      background-color: #f8f4f4;
  }
`;

const Show_more = styled.button`
position: relative;
top: 3px;
left: 90px;
      background-color: #48abe0;
  color: white;
  border: none;
  padding: 5px;
  font-size: 10px;
  height: 30px;
  width: 100px;
  box-shadow: 0 2px 4px darkslategray;
  border-radius: 10%;
  cursor: pointer;
`

const Add_button = styled.button`
    position: relative;
    top: 0px;
    left: 0px;
      background-color: #1eb39f;
  color: white;
  border: none;
  padding: 1px;
  font-size: 20px;
  height: 35px;
  width: 35px;
  box-shadow: 0 2px 4px darkslategray;
  border-radius: 50%;
  cursor: pointer;
`

const Remove_button = styled.button`
    position: relative;
    top: 0px;
    left: 0px;
      background-color: #1eb39f;
  color: white;
  border: none;
  padding: 1px;
  font-size: 20px;
  height: 35px;
  width: 35px;
  box-shadow: 0 2px 4px darkslategray;
  border-radius: 50%;
  cursor: pointer;
`

const Div_for_button = styled.div`
    margin-left: 10px;
    margin-top: 5px;
`
export default function Itemcard({ item }, showCrt) {

    
   
    const [itemquantity, setItemquantity] = useState(0)
    const [showmodal, setShowmodal] = useState(false)

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
                quantity: itemquantity,
                price: item.price,

            }
        ]
        dispatch({ type: 'INCREMENT', ammount: itemquantity })

        let grand_total = item.price * itemquantity
        console.log("UPDATE TOTAL CART PRICE", grand_total)
        dispatch({ type: 'UPDATE_TOTAL_PRICE', grtotal: grand_total })


        if (itemquantity != 0) {
            dispatch({ type: 'ADD_TO_CART', items: itemsForCart, itemq: itemquantity })

        }

        console.log("CLICKED ON ADD TO CARD", item.name)

    }

    const showModal =() =>{
        setShowmodal(!showmodal)
    }


    return (
        <Container>
            {showmodal && <Info_modal>
                <Modal_info>
                <p>{item.description}</p>
                <Button onClick ={showModal} variant="contained" size="small">close</Button>
                </Modal_info>
                <Modal_image>
                    <Modal_img src={item.img} />
                
                </Modal_image>
                
               

                </Info_modal>}

            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="pizza"
                />
                <Show_more onClick={showModal}>more info</Show_more>
                <CardContent>
                    <Typography sx={{height: 65}} gutterBottom variant="h5" component="div">                       
                        {item.name}
                    </Typography>
                    <Priceofitem>$ {item.price}</Priceofitem>
                    <Typography sx={{height: 85}} variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <CardRight>
                        <Add_button onClick={increaseQuantity}>+</Add_button>

                        <Itemammount>
                            <Ammount>{itemquantity}</Ammount>
                        </Itemammount>
                        <Remove_button onClick={dereaseQuantity}>-</Remove_button>

                    </CardRight>
                    <Div_for_button>
                        {/* <Button_to_card onClick={updateCard} variant="outlined" size="small">
                                add to cart
                            </Button_to_card> */}
                        <Button onClick={updateCard} variant="contained" size="small">add to card</Button>

                    </Div_for_button>
                </CardContent>

            </Card>
        </Container>


    )
}
