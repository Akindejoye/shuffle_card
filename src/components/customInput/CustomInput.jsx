import { useState } from "react";
import "./customInput.css";

const CustomInput = (props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="custom-input">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          onChange={props.onChange}
          pattern={props.pattern}
          required={props.required}
          onBlur={handleFocus}
          onFocus={() => props.name === "confirmpassword" && setFocused(true)}
          focused={focused.toString()}
        />
        <span className="input-errorMessage">{props.errorMessage}</span>
      </div>
    </>
  );
};

export default CustomInput;
