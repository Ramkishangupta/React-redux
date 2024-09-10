import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state for the counter
const initialValue = {
  counter: 0
};

// Define the counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment:(state)=>{
        console.log(state);
    },
    decrement:(state)=>{

    },
    add:(state)=>{

    },
    subs:(state)=>{

    }
  }
});

// Create the Redux store with the counter slice reducer
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Export the action creators and store
export const counterActions = counterSlice.actions;
export default counterStore;


// const counterReducer=(store=Initial_Value,action)=>{
//     if(action.type==='INCREMENT'){
//         return {counter:store.counter+1}
//     }
//     else if(action.type==='DECREMENT'){
//         return {counter:store.counter-1}
//     }
//     else if(action.type==='Add'){
//         return {counter:store.counter+action.payload.num}
//     }
//     else if(action.type==='Subs'){
//         return {counter:store.counter-action.payload.num}
//     }
//     return store;
// }