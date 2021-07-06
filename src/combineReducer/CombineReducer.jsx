// import Increment from '../reducer/Increment'
// import Decrement from '../reducer/Decrement'
import Reducer from '../reducer/Reducer'
import {combineReducers} from 'redux'

const CombineReducers = combineReducers({
    reducer: Reducer
    // increment: Increment,
    // decrement: Decrement
})

export default CombineReducers