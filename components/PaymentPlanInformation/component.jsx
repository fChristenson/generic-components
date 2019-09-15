import React from "react";
import {
  cardStyles,
  headerStyles,
  subheaderStyles,
  bodyStyles,
  totalStyles,
  buttonStyles
} from "./styles";

export const PaymentInformationCard = ({ payment, onAccept }) => {
  return (
    <div id="PaymentInformationCard" style={cardStyles}>
      <h1 style={headerStyles}>Payment information</h1>
      <div>
        <h2 style={subheaderStyles}>From</h2>
        <div style={bodyStyles}>{payment.from}</div>
      </div>
      <div>
        <h2 style={subheaderStyles}>To</h2>
        <div style={bodyStyles}>{payment.to}</div>
      </div>
      <div style={totalStyles}>Total: {payment.cost}</div>
      <button style={buttonStyles} onClick={onAccept}>
        Accept
      </button>
    </div>
  );
};
