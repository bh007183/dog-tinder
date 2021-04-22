import {combineReducers} from 'redux'
import likedReducer from "./Liked"
import dogsReducer from "./newdogs"

export default combineReducers({
    Liked: likedReducer,
    Dogs: dogsReducer,
})