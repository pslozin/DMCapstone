import React from 'react'
import styled from 'styled-components'

import { useState } from 'react'


//------ PIZZA DB ------

const pizzaDB = [
    {
        id: 0,
        name: 'Margharita',
        description: 'lot of Cheese',
        price: 10,
        quiantty: 1
    },
    {
        id: 1,
        name: 'Pepperoni',
        description: 'lot of Meat',
        price: 11,
        quiantty: 1
    },
    {
        id: 3,
        name: 'Russian Pie',
        description: 'lot of Sausages',
        price: 14,
        quiantty: 1
    },
    {
        id: 3,
        name: 'Big Pie',
        description: 'Polish delight',
        price: 7,
        quiantty: 1
    },
    {
        id: 4,
        name: 'Big burger',
        description: 'Classic eats',
        price: 10,
        quiantty: 1
    },

]




//------ END PIZZA DB ------

const Container = styled.div`
    background-color: gray;
  
    padding: 2px;
`
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;


    border: 1px black;
    display: flex;
    margin: 1px;
    background-color: salmon;
`

const Navbar = styled.div`
margin: 20px;
background-color: blue;
height: 100px;
width: 100%;
     border: 1px black;
     
`

const Leftside = styled.div`
display: flex;
flex-wrap: wrap;

border: solid 2px;
background-color: lightcoral;

width: 80%;
flex: 1;

  
`

const Rightside = styled.div`
width: 30%;
height: 800px;
     border: 1px black;
     background-color: teal;
`
const Footer = styled.div`
    background-color: violet;
    height: 100px;
     border: 1px black;
`

const Itemcard = styled.div`
 border: solid 2px grey;
    margin: auto;
    height: 200px;
    width: 220px;
    border: 3px solid black;
    border-radius: 35% 10%;
    background-color: blue;
   
`

const Loginarea = styled.div`
    margin: 10px;
    background-color: lightcyan;
    height: 50%;
    border-radius: 5%;
    border: solid 5px black;
`


const Button = styled.button`
     position: relative;
  font-size: 16px;
  padding: 0 20px;
  display: inline-block;
  border:     none;
  outline:    none;
  background:   #FFF;
  border-radius: 30px;
  border: 1px solid #1F1F1F;

    
`

const Cardimage = styled.div`
    background-color: red;
    height: 30%;
   
`

const Cardinfo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    height: 70%;
`

const Cardinfo_upper = styled.div`

`
const Cardinfo_bottom = styled.div`
    background-color: tan;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`

const Cardinfo_split_left = styled.div`
    background-color: teal;
    width: 50%;
`
const Cardinfo_split_right = styled.div`
    background-color: yellow;
    width: 50%;
`
const Card_bottom_bottom = styled.div`
    width: 100%;
    background-color: lightpink;
  
    right: 0;
    bottom: 0;
`
//--------------------- CART DIV`s ------------------------------------

const Cartarea = styled.div`
    margin: 5px;
    background-color: lightcyan;
    height: 50%;
    border-radius: 5%;
    border: solid 5px black;
`

const Cart_total_items = styled.div`
    background-color: pink;
    height: 40px;

`
const Card_each_item = styled.div`
    background-color: gray;
    display: flex;
    
`

const Item_name = styled.div`
    
`
const Quantity = styled.div`
    
`
const Total_price = styled.div`
    
`
const Delete_item_from_cart = styled.button`
    background-color: silver;
`

//--------------------- END CART DIV`s ------------------------------------

const DisplayItemCard = (obj) => {


    const [itemsCountForCard, setItemsCountForCard] = useState(0)

    const increaseCountForCard = () => {
        setItemsCountForCard(itemsCountForCard + 1)
    }

    const decreaseCountForCard = () => {
        setItemsCountForCard(itemsCountForCard - 1)
    }


    return (
        <Itemcard >
            <Cardimage></Cardimage>
            <Cardinfo>
                <Cardinfo_upper>{obj.description}</Cardinfo_upper>
                <Cardinfo_bottom>
                    <Cardinfo_split_left>LEFT</Cardinfo_split_left>
                    <Cardinfo_split_right>Price: $10</Cardinfo_split_right>
                    <Card_bottom_bottom>
                        <Button onClick = {increaseCountForCard}>+</Button>{itemsCountForCard}
                        <Button onClick = {decreaseCountForCard}>-</Button>
                        <Button>add to card</Button>
                        
                    </Card_bottom_bottom>
                </Cardinfo_bottom>

            </Cardinfo>
        </Itemcard>
    )
}






export default function Single() {
    console.log(pizzaDB)
    return (
        <Container>
            <Wrapper>
                <Leftside>
                    <Navbar />
                {
                    pizzaDB.map((item)=>(
                        <DisplayItemCard item={item}/>
                    ))
                }
              

                </Leftside>
                <Rightside>
                    <Loginarea></Loginarea>
                    <Cartarea>
                        <Cart_total_items>cart total items</Cart_total_items>
                        <Item_name>Cheese</Item_name>
                        <Quantity>1</Quantity>
                        <Total_price>$10</Total_price>
                        <Delete_item_from_cart>delete</Delete_item_from_cart>
                    </Cartarea>
                </Rightside>

            </Wrapper>
            <Footer />
        </Container>
    )
}
