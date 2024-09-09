import React from "react";

const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "80%", marginTop:"50px"  , marginLeft:"10px"}}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Container;
