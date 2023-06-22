import React from 'react'


function nameReducer(state = {name: 'Philip'},action){
    switch(action.type)
    {
        case 'CHANGE_FIRST':
            return{
                name: 'JOHN'
            }

        case 'CHANGE_SECOND':
            return{
                name: 'ALEX'
            }
            default:
                return {
                        name: state.name
                    }
    }
}

export default nameReducer