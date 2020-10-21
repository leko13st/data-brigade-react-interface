import React from 'react'
import { connect } from "react-redux"
import Outliner from "./Outliner"

const OutlinerContainer = (props) => {
    return(
        <Outliner brigades={props.brigades}/>
    )
}

//mapStateToProps
const mstp = (state) => {
    return{
        brigades: state.brigades.currentListBrigades
    }
}

const mdtp = {
    //dispatch'и
}

export default connect(mstp, mdtp)(OutlinerContainer)