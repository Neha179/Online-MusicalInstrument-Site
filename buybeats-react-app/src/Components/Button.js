import React from 'react';
import "../CSS/Button.css";

const STYLES=[
  "btn--primary--solid",
  "btn--green--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--submit--solid",
  "btn--primary--outline",
  "btn--green--outline",
  "btn--danger--outline",
  "btn--success--outline"
];

const SIZES =[
"btn--large",
"btn--medium",
"btn--small"
];

 const Button =({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle)?
buttonStyle : STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize)?
buttonSize : SIZES[0];

  return(
    <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`}onClick = {onClick}
    type={type}>
      {children}
    </button>
  )
}

export default Button
