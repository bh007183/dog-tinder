import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice ({
    name: "liked",
    initialState: [],
    reducers: {
        setLiked: (liked, action) => {
            liked = action.payload
        }
    }
})

export const {setLiked} = slice.actions

export default slice.reducer