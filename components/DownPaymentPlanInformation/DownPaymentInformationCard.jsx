import { compose } from "redux";
import { connect } from "react-redux";
import { DownPaymentInformationCard as Component } from "./component";

const mapDispatchToProps = () => {
  return {
    onAccept: () => alert("Accepted")
  };
};

export const DownPaymentInformationCard = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
