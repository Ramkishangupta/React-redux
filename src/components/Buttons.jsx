import { useDispatch } from "react-redux";
const Buttons = ()=> {
    const dispatch = useDispatch();
    const handleIncreament=()=>{
        dispatch({type:"INCREMENT"})
    }
    const handleDecrement=()=>{
        dispatch({type:"DECREMENT"});
    }
    return (
        <>
           <button type="button" className="btn btn-primary button-gap" onClick={handleIncreament}>+1</button>
           <button type="button" className="btn btn-success button-gap" onClick={handleDecrement}>-1</button>
        </>
    )
}
export default Buttons;