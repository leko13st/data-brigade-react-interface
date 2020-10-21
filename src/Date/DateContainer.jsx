import React from 'react'
import { connect } from "react-redux"
import { actions } from '../Redux/brigade-reducer'
import Date from './Date'

const DateContainer = (props) => {
    return (
        <Date startTime={props.startTime}
              durationTime={props.durationTime}

              setTimeFilter={props.setTimeFilter}
        />
    )
}

const mstp = (state) => {
    return {
        startTime: state.brigades.startShiftTimes,
        durationTime: state.brigades.durationShiftTimes
    }
}

const mdtp = {
    setTimeFilter: actions.setTimeFilterBrigadesAC
}

export default connect(mstp, mdtp)(DateContainer)