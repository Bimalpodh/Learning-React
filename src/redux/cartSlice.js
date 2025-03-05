import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice=createSlice(
  {
    name:"cart",
    initialState:{
      items:[],
    },
    reducers:{


      addItem:(state,actions)=>{
        // Mutating the state here
        // Redux Tolkit uses immer BTS
        state.items.push(actions.payload);

      },
      removeItem:(state)=>{
        state.items.pop();
      },

      clearCart:(state)=>{
        console.log(state);
        console.log(current(state));
          // RTK-either mutate the existing state or return a new state
        state.items.length=0; //[]
        
        // return {items:[]}
      },
    },

  }
)


export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;