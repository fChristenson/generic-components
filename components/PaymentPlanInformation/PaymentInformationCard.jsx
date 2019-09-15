import { compose } from "redux";
import { connect } from "react-redux";
import { PaymentInformationCard as Component } from "./component";

const mapDispatchToProps = () => {
  return {
    onAccept: () => alert("Accepted")
  };
};

export const PaymentInformationCard = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
