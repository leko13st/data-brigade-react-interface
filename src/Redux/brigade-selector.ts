import { StateType } from './store';
export const getCurrentBrigade = (state: StateType) => {
    return state.brigades.currentBrigade
}

export const getChannels = (state: StateType) => {
    return state.brigades.channels
}

export const getActiveButtonStates = (state: StateType) => {
    return state.brigades.activeButtonStates
}

export const getCurrentBrigadeChart = (state: StateType) => {
    return (state.brigades.currentBrigade ? state.brigades.currentBrigade.chart : null)
}