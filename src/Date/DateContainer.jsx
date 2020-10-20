import React from 'react'
import { connect } from "react-redux"
import Date from './Date'

const DateContainer = (props) => {
    return (
        <Date startTime={props.startTime}
              durationTime={props.durationTime}
        />
    )
}

const mstp = (state) => {
    return {
        startTime: state.brigades.startShiftTimes,
        durationTime: state.brigades.durationShiftTimes
    }
}

export default connect(mstp, {})(DateContainer)