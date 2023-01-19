import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col">
      {props.header && <p className="my-1 font-nunito">{props.header}</p>}
      <input
        className={`${props.className} `}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
};

export default Input;
