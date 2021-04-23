import {combineReducers} from 'redux'
import likedReducer from "./Liked"
import dogsReducer from "./newdogs"

export default combineReducers({
    liked: likedReducer,
    dogs: dogsReducer,
})