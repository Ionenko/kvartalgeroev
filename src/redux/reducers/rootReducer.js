import {combineReducers} from "redux";
import apartmentReducer from "./apartmentsReducer";

const rootReducer = combineReducers({
    apartments:  apartmentReducer
});

export default rootReducer;