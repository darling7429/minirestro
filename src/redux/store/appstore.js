import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../cart/Cartslice"

const appstore=configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default appstore;