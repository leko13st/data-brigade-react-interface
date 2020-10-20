

let initialState = {
    brigades: [
        {id: 1, division: 1, name: 'brigade1', field: 'field1', cluster: 'cluster1', well: 'well1', startShift: '00:00', durationShift: '12'},
        {id: 2, division: 1, name: 'brigade2', field: 'field1', cluster: 'cluster2', well: 'well1', startShift: '00:00', durationShift: '12'},
        {id: 3, division: 2, name: 'brigade3', field: 'field1', cluster: 'cluster2', well: 'well2', startShift: '00:00', durationShift: '12'},
        {id: 4, division: 2, name: 'brigade4', field: 'field2', cluster: 'cluster2', well: 'well2', startShift: '00:00', durationShift: '12'},
        {id: 5, division: 2, name: 'brigade5', field: 'field2', cluster: 'cluster3', well: 'well3', startShift: '00:00', durationShift: '12'},
        {id: 6, division: 3, name: 'brigade6', field: 'field2', cluster: 'cluster3', well: 'well3', startShift: '00:00', durationShift: '12'},
        {id: 7, division: 3, name: 'brigade7', field: 'field3', cluster: 'cluster3', well: 'well3', startShift: '00:00', durationShift: '12'},
        {id: 8, division: 3, name: 'brigade8', field: 'field3', cluster: 'cluster3', well: 'well3', startShift: '00:00', durationShift: '12'},
        //Пример заполнения стейта.
    ]
}

export const brigadeReducer = (state = initialState, action) => {
    return state
}