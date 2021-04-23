import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice ({
    name: "dogs",
    initialState: {},
    reducers: {
        setDogs: (dogs, action) => {
            
           dogs["payload"] = action.payload
        }
    }
})

export const {setDogs} = slice.actions

export default slice.reducer

export const getNewDogs = () => apiCallBegan({
    url: "https://dog.ceo/api/breeds/image/random",
    onSuccess: setDogs.type
})