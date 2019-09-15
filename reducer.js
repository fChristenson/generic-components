import { combineReducers } from "redux";
import { reducer as payments } from "./components/PaymentPlanInformation/reducer";

export const reducer = combineReducers({ payments });
