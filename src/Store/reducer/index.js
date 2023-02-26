import {combineReducers} from 'redux'
import cart from "./cart"
const rootReducer = combineReducers({
    all : cart,
})

export default rootReducer