import { createStore, isAction } from "redux";

const Initial_Value={
    counter:0
}

const counterReducer=(store=Initial_Value,action)=>{
    return store;
}

const counterStore=createStore(counterReducer);

export default counterStore;