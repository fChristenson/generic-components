const React = require("react");
const ReactDom = require("react-dom");
const { Provider } = require("react-redux");
const { createStore } = require("redux");
const { reducer } = require("./reducer");
const {
  PaymentInformationCard
} = require("./components/PaymentPlanInformation/PaymentInformationCard");
const {
  DownPaymentInformationCard
} = require("./components/DownPaymentPlanInformation/DownPaymentInformationCard");
const {
  CleverPaymentInformationCard
} = require("./components/CleverPaymentPlanInformation/CleverPaymentInformationCard");
const {
  DownPaymentInfoCard1,
  PaymentInfoCard1,
  PartyInfoCard1
} = require("./components/InfoCard1");

const store = createStore(reducer);

const payment = {
  from: "2019-12-12",
  to: "2020-05-12",
  cost: "200 USD"
};

const monthlyPayment = {
  from: "2019-12-12",
  to: "2020-05-12",
  cost: "200 USD",
  monthlyCost: "33 USD"
};

const App = () => (
  <Provider store={store}>
    <div id="grid">
      <h1>No reuse</h1>
      <PaymentInformationCard payment={payment} />
      <DownPaymentInformationCard payment={monthlyPayment} />
      <h1>Some reuse</h1>
      <CleverPaymentInformationCard payment={payment} />
      <CleverPaymentInformationCard payment={monthlyPayment} />
      <h1>Generic</h1>
      <PaymentInfoCard1 payment={payment} />
      <DownPaymentInfoCard1 payment={monthlyPayment} />
    </div>
    <PartyInfoCard1 />
  </Provider>
);

ReactDom.render(<App />, document.getElementById("root"));
