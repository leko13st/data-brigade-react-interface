import img1 from './../images/1.png'
import img2 from './../images/2.png'
import img3 from './../images/3.png'
import img4 from './../images/4.jpg'
import img5 from './../images/5.png'
import img6 from './../images/6.png'
import img7 from './../images/7.jpg'
import img8 from './../images/8.jpg'

let initialState = {
    brigades: [
        {id: 1, division: 1, field: 'Месторождение №1', cluster: 'Куст №2', well: 'Скважина №1', startShift: '00:00', durationShift: 6, chart: img1},
        {id: 2, division: 1, field: 'Месторождение №2', cluster: 'Куст №3', well: 'Скважина №2', startShift: '12:00', durationShift: 12, chart: img5},
        {id: 3, division: 1, field: 'Месторождение №1', cluster: 'Куст №5', well: 'Скважина №3', startShift: '06:00', durationShift: 6, chart: img2},
        {id: 4, division: 1, field: 'Месторождение №3', cluster: 'Куст №2', well: 'Скважина №2', startShift: '00:00', durationShift: 18, chart: img1},
        {id: 5, division: 2, field: 'Месторождение №5', cluster: 'Куст №6', well: 'Скважина №9', startShift: '18:00', durationShift: 24, chart: img5},
        {id: 6, division: 2, field: 'Месторождение №2', cluster: 'Куст №4', well: 'Скважина №4', startShift: '06:00', durationShift: 24, chart: img4},
        {id: 7, division: 2, field: 'Месторождение №1', cluster: 'Куст №3', well: 'Скважина №3', startShift: '18:00', durationShift: 18, chart: img8},
        {id: 8, division: 2, field: 'Месторождение №3', cluster: 'Куст №2', well: 'Скважина №6', startShift: '06:00', durationShift: 24, chart: img3},
        {id: 9, division: 2, field: 'Месторождение №7', cluster: 'Куст №6', well: 'Скважина №8', startShift: '18:00', durationShift: 6, chart: img4},
        {id: 10, division: 2, field: 'Месторождение №4', cluster: 'Куст №8', well: 'Скважина №6', startShift: '00:00', durationShift: 12, chart: img1},
        {id: 11, division: 3, field: 'Месторождение №5', cluster: 'Куст №9', well: 'Скважина №4', startShift: '00:00', durationShift: 12, chart: img2},
        {id: 12, division: 3, field: 'Месторождение №3', cluster: 'Куст №5', well: 'Скважина №3', startShift: '18:00', durationShift: 6, chart: img6},
        {id: 13, division: 3, field: 'Месторождение №9', cluster: 'Куст №2', well: 'Скважина №4', startShift: '06:00', durationShift: 24, chart: img7},
        {id: 14, division: 3, field: 'Месторождение №8', cluster: 'Куст №1', well: 'Скважина №9', startShift: '18:00', durationShift: 18, chart: img3}
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
    ],
    channels: [
        'Канал 1',
        'Канал 2',
        'Канал 3',
        'Канал 4',
        'Канал 5'
    ]
}

export const brigadeReducer = (state = initialState, action) => {

    const getBrigadeByKey = (key) => {
        for (let i = 0; i < state.brigades.length; i++){
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