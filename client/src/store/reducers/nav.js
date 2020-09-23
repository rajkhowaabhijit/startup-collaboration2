import * as actionTypes from '../type'

const initialState = {
    mode: 'big-screen', 
    isNavOpen: false
}

const navReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_NAV_MODE: 
            return {
                ...state, 
                mode: action.payload
            }
        case actionTypes.CHANGE_NAV_OPEN:
            return {
                ...state, 
                isNavOpen: !state.isNavOpen
            }
        default: 
        return state
    }
}

export default navReducer