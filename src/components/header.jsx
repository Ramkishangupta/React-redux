import DisplayCounter from './Display'
import Buttons from './Buttons';
const Header=()=>{
    return(
        <>
    <div class="py-2 text-center">
      <h2>Checkout form</h2>
      <DisplayCounter></DisplayCounter>
      <Buttons></Buttons>
    </div>
        </>
    )
}

export default Header;