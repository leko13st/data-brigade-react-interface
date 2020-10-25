import React from 'react'
import { connect } from "react-redux"
import { actions } from '../Redux/brigade-reducer'
import { StateType } from '../Redux/store'
import Date from './Date'

const DateContainer: React.FC<DateStateType & DateDispatchType> = (props) => {
    return (
        <Date startTime={props.startTime}
              durationTime={props.durationTime}

              setTimeFilter={props.setTimeFilter}
        />
    )
}

const mstp = (state: StateType) => {
    return {
        startTime: state.brigades.startShiftTimes,
        durationTime: state.brigades.durationShiftTimes
    }
}

const mdtp = {
    setTimeFilter: actions.setTimeFilterBrigadesAC
}

export default connect<DateStateType, DateDispatchType, {}, StateType>(mstp, mdtp)(DateContainer)

type DateStateType = {
    startTime: string[]
    durationTime: number[]
}

type DateDispatchType = {
    setTimeFilter: (filter: {start: string, duration: number}) => void
}