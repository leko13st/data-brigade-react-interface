import React from 'react'
import { connect } from "react-redux"
import { actions } from '../Redux/brigade-reducer'
import Outliner from "./Outliner"

const OutlinerContainer = (props) => {
    return(
        <Outliner 
            brigades={props.brigades}
            setActiveBrigade={props.setActiveBrigade}
        />
    )
}

//mapStateToProps
const mstp = (state) => {
    return{
        brigades: state.brigades.currentListBrigades
    }
}

const mdtp = {
    setActiveBrigade: actions.setActiveBrigadeAC
}

export default connect(mstp, mdtp)(OutlinerContainer)