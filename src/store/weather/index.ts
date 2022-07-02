import { RequestStatus } from "../utils"
import { getWeatherConfigFailed, getWeatherConfigSuccess } from "./actions"
import { GET_WEATHER_CONFIG, GET_WEATHER_CONFIG_FAILED, GET_WEATHER_CONFIG_PENDING, GET_WEATHER_CONFIG_SUCCESS } from "./constants"
import { WeatherReducer } from "./reducer.types"

const initialState: WeatherReducer = {
    weather: {
        data: undefined,
        status: RequestStatus.IDLE,
        error: undefined
    },
}

const handlers = {
    [GET_WEATHER_CONFIG_PENDING](state: WeatherReducer): WeatherReducer {
        return {
            ...state,
            weather: {
                ...state.weather,
                status: RequestStatus.PENDING
            }
        }
    },
    [GET_WEATHER_CONFIG_SUCCESS](
        state: WeatherReducer,
        { payload: { data } }: ReturnType<typeof getWeatherConfigSuccess>
    ): WeatherReducer {
        return {
            ...state,
            weather: {
                ...state.weather,
                data
            }
        }
    },
    [GET_WEATHER_CONFIG_FAILED](
        state: WeatherReducer,
        { payload: { error } }: ReturnType<typeof getWeatherConfigFailed>
    ): WeatherReducer {
        return {
            ...state,
            weather: {
                ...state.weather,
                error,
                data: undefined
            }
        }
    }
}

export default { initialState, handlers }