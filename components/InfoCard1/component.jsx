import React from "react";
import {
  cardStyles,
  headerStyles,
  subheaderStyles,
  bodyStyles,
  totalStyles,
  buttonStyles
} from "./styles";

/**
 * From the perspective of the component nothing about our business logic matters.
 *
 * There is no reason for the component to know what a payment is because next time
 * someone likes how this card looks, how do we know they want to show payment information
 * and not something else?
 */
export const InfoCard1 = ({
  title,
  subtitle1,
  subtitle1Value,
  subtitle2,
  subtitle2Value,
  buttonText,
  bodyText1,
  bodyText2,
  onClick
}) => {
  return (
    <div style={cardStyles}>
      <h1 style={headerStyles}>{title}</h1>
      <div>
        <h2 style={subheaderStyles}>{subtitle1}</h2>
        <div style={bodyStyles}>{subtitle1Value}</div>
      </div>
      <div>
        <h2 style={subheaderStyles}>{subtitle2}</h2>
        <div style={bodyStyles}>{subtitle2Value}</div>
      </div>
      {bodyText1 && <div style={totalStyles}>{bodyText1}</div>}
      <div style={totalStyles}>{bodyText2}</div>
      <button style={buttonStyles} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
