import React from "react";

function Noted(props) {

  return (
    <div className="note mcard">
      <h1 className="userc">{props.User}</h1>
      <img src={props.url} alt="gg" className="" style={{width:"320px",textAlign:"center"}} />
      <div className="write">
      <h1>{props.title}</h1>
      <p className="darkF">{props.content}</p>
      </div>
      
    </div>
  );
}

export default Noted;
