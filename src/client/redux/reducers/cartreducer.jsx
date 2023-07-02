import React from 'react'


function cartReducer(state = { counter: 0, total_price: 0 }, action) {


    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + action.ammount,
                total_price: state.total_price,
            }

        case 'DECREMENT':
            console.log("ACTION QUANT", action.quant)
            return {
                counter: state.counter - action.quant,

            }
        case 'RESET':
            return {
                counter: state.counter = 0
            }
        case 'UPDATE_TOTAL_PRICE':
            console.log("REDUCER GRAND TOTAL", action.grtotal)
            return {
                // total_price: state.total_price + action.ammount,
                total_price: state.total_price + action.grtotal,
                counter: state.counter,
            }


        default:
            return {
                counter: state.counter,
                total_price: state.total_price,


            }

    }


}
export default cartReducer