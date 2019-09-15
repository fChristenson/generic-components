import React from "react";
import {
  cardStyles,
  headerStyles,
  subheaderStyles,
  bodyStyles,
  totalStyles,
  buttonStyles
} from "./styles";

export const DownPaymentInformationCard = ({ payment, onAccept }) => {
  return (
    <div id="DownPaymentInformationCard" style={cardStyles}>
      <h1 style={headerStyles}>Down payment information</h1>
      <div>
        <h2 style={subheaderStyles}>From</h2>
        <div style={bodyStyles}>{payment.from}</div>
      </div>
      <div>
        <h2 style={subheaderStyles}>To</h2>
        <div style={bodyStyles}>{payment.to}</div>
      </div>
      <div style={totalStyles}>Cost per month: {payment.monthlyCost}</div>
      <div style={totalStyles}>Total: {payment.cost}</div>
      <button style={buttonStyles} onClick={onAccept}>
        Accept
      </button>
    </div>
  );
};
