export const getCurrentBrigade = (state) => {
    return state.brigades.currentBrigade
}

export const getChannels = (state) => {
    return state.brigades.channels
}

export const getActiveButtonStates = (state) => {
    return state.brigades.ActiveButtonStates
}

export const getCurrentBrigadeChart = (state) => {
    return (state.brigades.currentBrigade ? state.brigades.currentBrigade.chart : null)
}