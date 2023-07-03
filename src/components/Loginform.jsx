import styled from 'styled-components'
import axios from 'axios'


import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'




const Container = styled.div`
    
    
`

const Wrapper = styled.div`
`

const Form = styled.form`
  margin: 0 auto;
  width: 90%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  
`

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  
`
const SaySignUp = styled.button`
padding: 10px;
    color: gray;
    font-size: 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    :focus{
        outline: none;
        border: none;
    }
    
     :hover {
        outline: none;
        border: none;
     }
   
`


let userInfo = {
    username: '',
    password: ''
}

let signupInfo = {
    
}


export default function Loginform() {

    const showHistorybtn = useSelector(state => state.showhistoryreducer.showbtn)
  
    const [showField, setShowField] = useState(false)
    const [signUpstatus, setSignUpstatus] = useState('sign up')

    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState('')

    const dispatch = useDispatch()


    function onSignUPclick(e) {
        e.preventDefault()
        setShowField(true)
        if (signUpstatus === 'sign up')
            setSignUpstatus('back to login')
        else {
            setSignUpstatus('sign up')
            setShowField(false)
        }


    }
    function onNameChangeHandler(e) {
        setUserName(e.target.value)
        console.log(e.target.value)
    }
    function onPasswordChangeHandler(e) {
        setUserPassword(e.target.value)
        console.log(e.target.value)
    }

    function onConfirmPasswordHandler(e) {
        setConfirmUserPassword(e.target.value)
        console.log(e.target.value)
    }



    function onLoginSend(e) {

        e.preventDefault()
        userInfo.username = userName
        userInfo.password = userPassword

        if (signUpstatus === "sign up") {
            
            axios.post("/api/login", userInfo).then(function (response) {
                if(response.data.length === 0)
                alert("USER NOT FOUND")
                else if(response.data === 'ok'){
                    console.log("USER LOGGED IN EMAIL",userName)
                    dispatch({ type: 'SHOW_BTN' })
                    dispatch({ type: 'SET_EMAIL', email: userName})
                    alert('LOGGED IN !!!!!')
                }
                else if(response.data === 'wrong password'){
                    alert("wrong password")
                console.log("GOT BACK FROM SERVER", response.data)
                }
            })
        }
        else {

            if(userPassword === confirmUserPassword)
            {
            console.log("sign up")
            axios.post("/api/signup", userInfo).then(function (response) {
                if(response.data === 'user registered')
                alert('REGISTERED')
                else if(response.data != 0 )
                alert('already registerd')
                console.log("GOT BACK FROM SERVER", response.data)
            })
        }
        else alert("PASSWORDS DONT MATCH")
        }

        



    }


    return (
        <Container>
            <Form onSubmit={onLoginSend}>
                <Input onChange={onNameChangeHandler} placeholder="enter email"
                    type="email"
                    name="email"

                />
                <Input onChange={onPasswordChangeHandler} placeholder="enter password"
                    type="password"
                    name="password"

                />
                {showField && <Input onChange={onConfirmPasswordHandler} placeholder="confirm password"
                    type="password"
                    name="password"

                />}
                <Button>Enter</Button>
                <SaySignUp onClick={onSignUPclick}>{signUpstatus}</SaySignUp>
            </Form>
        </Container>
    )
}