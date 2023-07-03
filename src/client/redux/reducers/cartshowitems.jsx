import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



const pizzaItems = [
    // {
    //     id: 1000,
    //     mname: 'Pizza' ,
    //     firstload : true,
    //     numberofloads : 0,
    //     price: 0,

      
    // }
]

function deletefromobject(obj,id)
{
    console.log("BEFORE", obj)
    for(let i = 0; i < obj.length; i++){
        if(obj[i].id === id){
        console.log("FOUND ID", obj[i].id, "INDEX", i)
       obj.splice(i,1)
        }
    }

    console.log("AFTER", obj)
}

export default function cartshowitems(state = {pizzaItems}, action) {

   

    switch (action.type) {

        case 'ADD_TO_CART':
            console.log("ADDING REDUCER", action.items)

           // state.pizzaItems[0].firstload = false;
            
            return {
               
                pizzaItems: [...state.pizzaItems,...action.items] 
            };

        case 'DELETE_ITEM_FROM_CART' :
            console.log("DELETING REDUCER", action.id)
            deletefromobject(state.pizzaItems, action.id)
            return {
                pizzaItems: [...state.pizzaItems] 
            }
            

        default: return state

    }


}
