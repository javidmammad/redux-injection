export function injectReducer(initialState: any, handlers: any) {
    return (state = initialState, action: any) => {
        const _state = state === undefined ? initialState : state;
        if(action && handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](_state, action)
        }
        return null
    }
}

export enum RequestStatus {
    IDLE = 'IDLE',
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}