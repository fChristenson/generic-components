import { compose } from "redux";
import { connect } from "react-redux";
import { InfoCard1 as Component } from "./component";

const mapDispatchToProps = (_, { payment }) => {
  return {
    title: "Payment information",
    subtitle1: "From",
    subtitle1Value: payment.from,
    subtitle2: "To",
    subtitle2Value: payment.to,
    bodyText2: `Total: ${payment.cost}`,
    buttonText: "Accept",
    onClick: () => alert("Accepted")
  };
};

export const PaymentInfoCard1 = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
