import { compose } from "redux";
import { connect } from "react-redux";
import { InfoCard1 as Component } from "./component";

const mapDispatchToProps = () => {
  return {
    title: "Party time",
    subtitle1: "Where",
    subtitle1Value: "My house",
    subtitle2: "From",
    subtitle2Value: "18.00",
    bodyText2: "Click the button to register",
    buttonText: "Register",
    onClick: () => alert("See you at the party")
  };
};

export const PartyInfoCard1 = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
