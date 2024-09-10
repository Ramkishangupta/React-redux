import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { counterActions } from '../store';
const CounterComponent = () => {
  const dispatch = useDispatch();
  
  // Create separate refs for the add and subtract input elements
  const addInputElement = useRef(null);
  const subsInputElement = useRef(null);

  // Handle addition using the value from the 'add' input
  const handleAdd = () => {
    // dispatch({
    //   type: "Add",
    //   payload: { num: parseInt(addInputElement.current.value) }
    // });
    dispatch(counterActions.add());
  };

  // Handle subtraction using the value from the 'subtract' input
  const handleSubs = () => {
    // dispatch({
    //   type: "Subs",
    //   payload: { num: parseInt(subsInputElement.current.value) }
    // });
    dispatch(counterActions.subs());
  };

  return (
    <>
      {/* +1 and -1 buttons */}
      <button
        type="button"
        className="btn btn-primary button-gap"
        onClick={() => dispatch(counterActions.increment())}
      >
        +1
      </button>

      <button
        type="button"
        className="btn btn-success button-gap"
        onClick={() => dispatch(counterActions.subs())}
      >
       -1 
      </button>

      {/* Input for Addition */}
      <input
        type="number"
        placeholder="addition"
        ref={addInputElement}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
      />
      <button
        type="button"
        className="btn btn-info"
        onClick={handleAdd}
      >
        Add
      </button>

      <input
        type="number"
        placeholder="subtraction"
        ref={subsInputElement}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginLeft: "10px",
          marginRight: "10px"
        }}
      />
      <button
        type="button"
        className="btn btn-warning"
        onClick={handleSubs}
      >
        Subtract
      </button>
    </>
  );
};

export default CounterComponent;