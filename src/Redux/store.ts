import {createStore, combineReducers} from 'redux'
import { brigadeReducer } from "./brigade-reducer"

let reducers = combineReducers({
    brigades: brigadeReducer
})

let store = createStore(reducers)

export default store

type RootReducersType = typeof reducers
export type StateType = ReturnType<RootReducersType>