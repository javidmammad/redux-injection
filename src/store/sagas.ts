import { all } from "redux-saga/effects";
import weatherSaga from '../store/weather/saga'

export default function* () {
    yield all([...weatherSaga])
}