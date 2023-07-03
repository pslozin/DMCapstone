export default function showhistoryreducer(state = {showbtn: false}, action)
{
    switch (action.type) {
        case 'SHOW_BTN':
            return {
                showbtn: state.showbtn = true,
                
            }


        default:
            return {
                showbtn: state.showbtn

            }

    }

}