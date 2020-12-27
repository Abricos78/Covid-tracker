import { applyMiddleware, combineReducers, createStore } from "redux";
import {headerReducer} from './headerReducer'
import thunkMiddleware from 'redux-thunk'
import { lineGraphReducer } from "./lineGraphReducer";
import { mapReducer } from "./mapReducer";

let reducers = combineReducers({
    header: headerReducer,
    lineGraph: lineGraphReducer,
    map: mapReducer
})


export let store = createStore(reducers, applyMiddleware(thunkMiddleware))