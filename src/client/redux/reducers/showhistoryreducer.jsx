export default function showhistoryreducer(state = { showbtn: false, email: '' }, action) {
    switch (action.type) {
        case 'SHOW_BTN':
            return {
                showbtn: state.showbtn = true,

            }
        case 'SET_EMAIL':
            return {
                email: state.email = action.email,
                showbtn: state.showbtn,

            }


        default:
            return {
                showbtn: state.showbtn

            }

    }

}