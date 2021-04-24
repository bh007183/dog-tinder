import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"
import{getNewDogs} from "./newdogs"



const slice = createSlice ({
    name: "liked",
    initialState: {value: []},
    reducers: {
        setLiked: (liked, action) => {
            liked.value.push(action.payload) 
        },

        setLikedArr: (liked, action) => {
            liked.value = action.payload;
            console.log(liked)
            // liked: action.payload
        }
       
    }
})

export const {setLiked, setLikedArr} = slice.actions

export default slice.reducer



export const apiLiked = (data) => apiCallBegan({
    url: "http://localhost:8080/api/liked",
    method: "POST",
    data: data,
    onSuccess: setLiked.type
    
    
})
export const apiGetLiked = () => apiCallBegan({
    url: "http://localhost:8080/api/getliked",
    onSuccess: setLikedArr.type
    
    
})
export const apiRemoveLiked = (id) => apiCallBegan({
    url: `http://localhost:8080/api/deleteliked/${id}`,
    method: "DELETE",
    onSuccess: setLikedArr.type
})