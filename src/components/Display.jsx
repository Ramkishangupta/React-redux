import { useSelector } from "react-redux";
const DisplayCounter=()=>{
    const counter = useSelector((store)=>store.counter);
    return(
        <div className="Display">
            <p className="lead">Counter current value : {counter}</p>
        </div>
    )
}
export default DisplayCounter;