import { takeLatest } from 'redux-saga/effects';
import { GET_WEATHER_CONFIG } from './constants';

export function* getWeatherData() {
    yield;
}

export default [takeLatest(GET_WEATHER_CONFIG, getWeatherData)]