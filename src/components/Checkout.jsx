import React, { useState } from "react";
import './Modal.css'
import styled from 'styled-components'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'


const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Input = styled.input`
    
`
const Button = styled.button`
    
`
const Items_in_cart = styled.p`
    
`


let total_items = 0;
let total_price = 0;

export default function Checkout(obj) {




  const [modal, setModal] = useState(false);

  const grand_total = useSelector(state => state.cartReducer.total_price)
  const cartItems = useSelector(state => state.cartReducer.counter)

  const [userEmail, setUserEmail] = useState("")
  const [userCc, setUserCc] = useState("")

  //console.log("CHECK OUT ITEMS", obj)

  

function onEmailChangeHandler(e) {
    setUserEmail(e.target.value)
    console.log(e.target.value)
}
function onCcChangeHandler(e) {
    setUserCc(e.target.value)
    console.log(e.target.value)
}

//   obj.props.map((item)=>{
//     total_price = item.price * item.quantity
//     console.log("GRAND TOTAL",total_price)
//   })
    
  

  const toggleModal = () => {
    console.log(grand_total)
    if(grand_total === 0 ) 
    {
    alert("O Items")
    }
   
    else
    setModal(!modal);
  };

  const event = new Date().toLocaleString();
  const currentDate = event.toLocaleString()
 
  const insertToDB = (event) =>{
    event.preventDefault() 
    
    
   
    let body = {

        email: userEmail,
        date: currentDate,
        total: grand_total,
        items: cartItems,
    }
    console.log("TODB",body)

    axios.post('/api/sendorder', body).then(function (response) {

        console.log("GOT BACK INSERT ", response.data)
    })
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        checkout
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>check out</h2>
            <p>
             {currentDate}
            </p>
            <p>toal items : {cartItems}</p>

            {obj.props.map((item)=>(
              <Items_in_cart>{item.name}</Items_in_cart>
               
            ))}
           
            <p>grand total : ${grand_total}</p>

            <Form onSubmit={insertToDB}>
                <Input onChange = {onEmailChangeHandler} placeholder="enter email"
                    type="email"
                    name="email"

                />
                <Input onChange = {onCcChangeHandler} placeholder="enter credit card info"
                    type="text"
                    name="cc"

                />
                
                <Button>place order</Button>
               
            </Form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
  </>
  );
}