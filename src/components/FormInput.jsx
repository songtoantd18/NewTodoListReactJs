import React from "react";

const FormInput = (props) => {
  //   const [nameLabel, placeholder, onChange] = props;
  return (
    <div>
      <label>{props.nameLabel}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
      />
      <p className="errors">{props.errors}</p>
    </div>
  );
};

export default FormInput;
