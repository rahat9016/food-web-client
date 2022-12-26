import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        className={props.className}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
