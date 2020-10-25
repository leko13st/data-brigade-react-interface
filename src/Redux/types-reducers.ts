const SET_TIME_FILTER_BRIGADES = 'SET_TIME_FILTER_BRIGADES'
const SET_ACTIVE_BRIGADE = 'SET_ACTIVE_BRIGADE'
const CHANGE_BUTTON_STATE = 'CHANGE_BUTTON_STATE'

export type BrigadeType = {
    id: number
    division: number
    field: string
    cluster: string
    well: string
    startShift: string
    durationShift: number
    chart: string
}

type TimeFilterTypeAC = {
    type: typeof SET_TIME_FILTER_BRIGADES
    payload: {
        start: string
        duration: number
    }
}

type ActiveBrigadeTypeAC = {
    type: typeof SET_ACTIVE_BRIGADE
    payload: {
        key: number
    }
}

type ButtonStateAC = {
    type: typeof CHANGE_BUTTON_STATE
    payload: {
        listButtonStates: string[]
    }
}

export type ActionTypes = TimeFilterTypeAC | ActiveBrigadeTypeAC | ButtonStateAC