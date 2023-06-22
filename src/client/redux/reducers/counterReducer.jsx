import React from 'react'


function counterReducer(state = { counter : 0}, action) {

    console.log("IN FUNC", state.showCounter)
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1,
            }

        case 'DECREMENT':
            return {
                counter: state.counter - 1,

            }

        case 'INCREASE':
            return {
                counter: state.counter + action.ammount,
            }

        case 'TOGGLE':
        {
        if (state.showCounter === false){
            console.log("IsFalse", state.showCounter)
            return {               
                counter: state.counter,
                showCounter: state.showCounter = true
            }
        }

        else if(state.showCounter === true)
        {
            console.log("IsTrue", state.showCounter)
        return {               
            counter: state.counter,
            showCounter: state.showCounter = false
        }
    }
    }

        default:
            return {
                    counter: state.counter,
                    showCounter: state.showCounter
                }

            }


    }
export default counterReducer