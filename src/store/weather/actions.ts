import { 
    GET_WEATHER_CONFIG, 
    GET_WEATHER_CONFIG_PENDING, 
    GET_WEATHER_CONFIG_SUCCESS, 
    GET_WEATHER_CONFIG_FAILED 
} from "./constants";

export const getWeatherConfig = () => ({
    type: GET_WEATHER_CONFIG,
})
export const getWeatherConfigPending = () => ({
    type: GET_WEATHER_CONFIG_PENDING,
})
export const getWeatherConfigSuccess = (data: any) => ({
    type: GET_WEATHER_CONFIG_SUCCESS,
    payload: {
        data
    }
})
export const getWeatherConfigFailed = (payload: any) => ({
    type: GET_WEATHER_CONFIG_FAILED,
    payload
})