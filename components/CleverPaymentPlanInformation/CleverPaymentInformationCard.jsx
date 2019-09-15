import { compose } from "redux";
import { connect } from "react-redux";
import { CleverPaymentInformationCard as Component } from "./component";

const mapDispatchToProps = () => {
  return {
    onAccept: () => alert("Accepted")
  };
};

export const CleverPaymentInformationCard = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
