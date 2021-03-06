import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./reducer"
import {api} from "./apiMiddleWare/api.js"

export default function(){
    return configureStore({
        reducer,
        middleware:[...getDefaultMiddleware(), api]
    })
}