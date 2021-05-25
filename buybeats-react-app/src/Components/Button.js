import React from 'react';
import "../CSS/Button.css";

const STYLES=[
  "btn--primary--solid",
  "btn--green--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--grey--solid",
  "btn--pink--solid",
  "btn--primary--outline",
  "btn--green--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--grey--outline",
  "btn--pink--outline"
];

const SIZES =[
"btn--extra",
"btn--large",
"btn--medium",
"btn--small",
"btn--mini"
];

 const Button =({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  value,
  disabled
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle)?
buttonStyle : STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize)?
buttonSize : SIZES[1];

  return(
    <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`}onClick = {onClick}
    type={type} value={value} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
