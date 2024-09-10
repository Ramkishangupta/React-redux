import { useSelector } from "react-redux";
const DisplayCounter=()=>{
    const {counterVal} = useSelector((store)=>store.counter);
    return(
        <div className="Display">
            <p className="lead">Counter current value : {counterVal}</p>
        </div>
    )
}
export default DisplayCounter;