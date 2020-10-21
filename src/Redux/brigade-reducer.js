

let initialState = {
    brigades: [
        {id: 1, division: 1, field: 'field1', cluster: 'cluster2', well: 'well1', startShift: '00:00', durationShift: 6},
        {id: 2, division: 1, field: 'field2', cluster: 'cluster3', well: 'well2', startShift: '12:00', durationShift: 12},
        {id: 3, division: 1, field: 'field1', cluster: 'cluster5', well: 'well3', startShift: '06:00', durationShift: 6},
        {id: 4, division: 1, field: 'field3', cluster: 'cluster2', well: 'well2', startShift: '00:00', durationShift: 18},
        {id: 5, division: 2, field: 'field5', cluster: 'cluster6', well: 'well9', startShift: '18:00', durationShift: 24},
        {id: 6, division: 2, field: 'field2', cluster: 'cluster4', well: 'well4', startShift: '06:00', durationShift: 24},
        {id: 7, division: 2, field: 'field1', cluster: 'cluster3', well: 'well3', startShift: '18:00', durationShift: 18},
        {id: 8, division: 2, field: 'field3', cluster: 'cluster2', well: 'well6', startShift: '06:00', durationShift: 24},
        {id: 9, division: 2, field: 'field7', cluster: 'cluster6', well: 'well8', startShift: '18:00', durationShift: 6},
        {id: 10, division: 2, field: 'field4', cluster: 'cluster8', well: 'well6', startShift: '00:00', durationShift: 12},
        {id: 11, division: 3, field: 'field5', cluster: 'cluster9', well: 'well4', startShift: '00:00', durationShift: 12},
        {id: 12, division: 3, field: 'field3', cluster: 'cluster5', well: 'well3', startShift: '18:00', durationShift: 6},
        {id: 13, division: 3, field: 'field9', cluster: 'cluster2', well: 'well4', startShift: '06:00', durationShift: 24},
        {id: 14, division: 3, field: 'field8', cluster: 'cluster1', well: 'well9', startShift: '18:00', durationShift: 18}
        //Пример заполнения стейта.
    ],
    currentListBrigades: [],
    currentBrigade: {},
    startShiftTimes: [
        '00:00',
        '06:00',
        '12:00',
        '18:00'
    ],
    durationShiftTimes: [
        6,
        12,
        18,
        24
    ]
}

export const brigadeReducer = (state = initialState, action) => {

    const getBrigadeByKey = (key) => {
        debugger
        for (let i = 0; i < state.brigades.length; i++){
            debugger
            if ((i + 1) === +key){
                return state.brigades[i]        
            }

        }
    }

    switch (action.type) {
        case 'SET_TIME_FILTER_BRIGADES': {
            const {start, duration} = action.payload

            return {
                ...state,
                currentListBrigades: state.brigades.filter(brigade => (brigade.startShift === start && brigade.durationShift === duration))
            }
        }
        case 'SET_ACTIVE_BRIGADE': {
            return {
                ...state,
                currentBrigade: getBrigadeByKey(action.payload)
            }
        }
        default:
            return state
    }
}

export const actions = {
    setTimeFilterBrigadesAC: (filter) => ({type: 'SET_TIME_FILTER_BRIGADES', payload: filter}),
    setActiveBrigadeAC: (key) => ({type: 'SET_ACTIVE_BRIGADE', payload: key})
}