import { RequestStatus } from "../utils";

export type WeatherReducer = {
    weather: {
        data: [] | undefined,
        status: RequestStatus,
        error: Error | undefined
    };
}