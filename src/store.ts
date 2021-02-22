import { createStore } from "redux";
import reducer from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension"

export type RootState = ReturnType<typeof reducer>

export default createStore(reducer, composeWithDevTools());
