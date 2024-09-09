import { createStore, isAction } from "redux";

const Initial_Value={
    counter:0
}

const counterReducer=(store=Initial_Value,action)=>{
    if(action.type==='INCREMENT'){
        return {counter:store.counter+1}
    }
    else if(action.type==='DECREMENT'){
        return {counter:store.counter-1}
    }
    else if(action.type==='Add'){
        return {counter:store.counter+action.payload.num}
    }
    else if(action.type==='Subs'){
        return {counter:store.counter-action.payload.num}
    }
    return store;
}

const counterStore=createStore(counterReducer);

export default counterStore;