import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Itemcard from './Itemcard';

import { useState, useEffect } from 'react'

import Cart from './Cart';
import Loginform from './Loginform';
import Showhistory from './Showhistory';

const Container = styled.div`
 
 display: flex;
    flex-wrap: wrap;
     height: 100%;
     margin: 20px;
     width: 80%;
    

`

const Card_and_login_container = styled.div`

    background-color: #f1f5eb;
   
    display:flex;
    flex-direction: column;
     padding: 5px;
     width: 30%;
     
`


const Login_container = styled.div`
    height: 25%;
    background-color: lightblue;
`

const Wrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
     height: 100%;
     margin: 20px;
   
   
`


const Filteritems = styled.div`
    width: 100%;
    background-color: gray;
    
`

const Inputform = styled.form`
    
`
const Searchfield = styled.input`
    padding: 10px;
    margin: 10px;
`

const CardContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    width: 80%;
    background-color: #f8e6e6;
    margin: 1px;  
    padding: 1px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`



let pizzaObj = [
    {
        description: "Cheese",
        id: 1,
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550',
        name: "Margherita",
        price: 10,
        quantity: 1
    },
    {
        description: "Cheese",
        id: 2,
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550',
        name: "Regular",
        price: 10,
        quantity: 1
    },
    {
        description: "Cheese",
        id: 3,
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550',
        name: "Burger",
        price: 10,
        quantity: 1
    },
    {
        description: "Cheese",
        id: 4,
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550',
        name: "Russian pie",
        price: 10,
        quantity: 1
    },
    {
        description: "Cheese",
        id: 5,
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550',
        name: "Margherita",
        price: 10,
        quantity: 1
    },
    {
        description: "Cheese",
        id: 6,
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550',
        name: "Margherita",
        price: 10,
        quantity: 1
    }
]


export default function Showallpizzaitems() {


    const [pizzaMenu, setPizzaMenu] = useState({})
    const [items, setItems] = useState([])

    const showHistorybtn = useSelector(state => state.showhistoryreducer.showbtn)
  

    useEffect(() => {

        const fetchData = async () => {

            console.log("LIST FETCHED")

            const options = {
                method: 'GET',
                url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
                headers: {
                    'X-RapidAPI-Key': '768975fbf8msh43ceaa3a66249cbp1dc7f8jsn8cedd4f87949',
                    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setItems(response.data)
                console.log("FROM API", items);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData() 

    }, [pizzaMenu])

    return (

        <Wrapper>
            <Filteritems>
                <Inputform>
                    <Searchfield>
                    </Searchfield>
                </Inputform>
            </Filteritems>

            <CardContainer>
                {items.map((item) => (
                    <Itemcard key={item.id} item={item} />
                ))
                }

            </CardContainer>

            <Card_and_login_container>
                <Cart></Cart>
                <Login_container>
                    <Loginform></Loginform>
                </Login_container>
                {showHistorybtn && <Showhistory></Showhistory>}
                
            </Card_and_login_container>

        </Wrapper>


    )

}
