import todoReducer from './reducer'

import {combineReducers} from 'redux'

const rootreducer = combineReducers({
    todoReducer
})

export default rootreducer