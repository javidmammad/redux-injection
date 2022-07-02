import { applyMiddleware, combineReducers, createStore } from 'redux'
import { injectReducer } from './utils'
import weatherReducer from '../store/weather'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const allReducers = combineReducers({
    weatherReducer: injectReducer(weatherReducer.initialState, weatherReducer.handlers)
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers,applyMiddleware(...[sagaMiddleware]))

sagaMiddleware.run(sagas)

export const getStoreState = () => store.getState();

export default store;
