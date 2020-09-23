import {combineReducers} from 'redux'
import navReducer from './reducers/nav'

const allReducers = combineReducers({
    nav: navReducer
})

export default allReducers