import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Container = styled.div`
    background-color: lightskyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`



    margin: 55px;
    
`
const Show_order_data = styled.div`
    background-color: gold;
`

const philipdata = [
    {
        id: 'Slozin',
        name: 'Philip',
        age: 50
    },
    {
        id: 'Slozin',
        name: 'Philip',
        age: 50
    },
    {
        id: 'Slozin',
        name: 'Philip',
        age: 50
    }
]

const Constiner_history = styled.div`
width: 90%;

margin: 20px;
 display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: gray;
       
`
const Order_data = styled.div`

`
const Order_items = styled.div`

 `
const Order_total = styled.div`

 `
const Wrapper = styled.div`
    
`
const Returndiv = ({ props }) => {

    console.log("PROPS", props.email)
    return (

        <Constiner_history>
            <Order_data>date : {props.id}</Order_data>
            <Order_items>items :{props.items}</Order_items>
            <Order_total>total : {props.total}</Order_total>
        </Constiner_history>

    )


}




export default function Showhistory() {

    const [orderItems, setOrderItems] = useState([])
    const [orderHistory, setOrderhistoty] = useState([])
    const [showHistory, setShowHistory] = useState(false)

    let body = {
        email: 'pslozin@gmail.com'
    }

    const handleButtonClick = () => {
        setShowHistory(!showHistory)
    }

    useEffect(() => {

        const showOrderHistory = () => {
            console.log("SHOW HISTORY", body)
            axios.post("/api/showorders", body).then(function (response) {
                if(response.data.length === 0 ){
                    alert('no orders found')
                }
                else{
                console.log("GOT BACK FROM SERVER", response.data)
                setOrderhistoty(response.data)
                }


            })
        }
        showOrderHistory()
    }, [orderItems])

    console.log("BEFORE", orderHistory)




    return (

        <Container>
            <Button onClick={handleButtonClick}>show history</Button>
            {showHistory && <Wrapper>
            {orderHistory.map((item) => (
                <Returndiv props={item} />
            ))}
            </Wrapper>}



        </Container>
    )
}
