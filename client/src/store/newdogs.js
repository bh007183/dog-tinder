import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice ({
    name: "dogs",
    initialState: [],
    reducers: {
        setDogs: (dogs, action) => {
            dogs.push({dogs: action.payload})
        }
    }
})

export const {setDogs} = slice.action

export default slice.reducer

export const getNewDogs = () => apiCallBegan({
    url: "http://localhost:8080/api/dogs",
    onSuccess: setDogs.type
})