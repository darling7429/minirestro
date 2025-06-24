import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    additem: (state, action) => {
      const existing = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (existing) {
        existing.quantity=existing.quantity+1
      } else {
        state.items.push({...action.payload,quantity:1});
       
      }
    },
    removeitem: (state, action) => {},
    clearcart: (state, action) => {
      state.items.length = 0;
    },
    increment:(state,action)=>{
      const existing=state.items.find((item)=>item.name==action.payload.name)
if(existing){
  existing.quantity+=1
}

    },
    decrement:(state,action)=>{
      const existing=state.items.find((item)=>item.name==action.payload.name)
if(existing){
  if(existing.quantity==0){
    return;
  }
  else{
    existing.quantity-=1
  }
  
}

    }
  },
});
export const { additem, removeitem, clearcart,increment,decrement } = cartslice.actions;

export default cartslice.reducer;
