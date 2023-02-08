import React from "react";



const Slidebar = ({ id, name, value, onChange}) => {

  return (
    <div className={"Slide-bar"}>
      {/* <input
        type="number"
        name={name}
        className="slide-bar-input"
        id={id}
        onChange={e => onChange(e.target.checked)}
        value={value}
        /> */}
        <input
        type="number"
        placeholder="Your fav number"
        value={value}
        onChange={onChange}
      />
      </div>
    );
}




export default Slidebar;