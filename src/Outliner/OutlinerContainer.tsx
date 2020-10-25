import React from 'react'
import { connect } from "react-redux"
import { actions } from '../Redux/brigade-reducer'
import { StateType } from '../Redux/store'
import { BrigadeType } from '../Redux/types-reducers'
import Outliner from "./Outliner"

const OutlinerContainer: React.FC<OutlinerStateType & OutlinerDispatchType> = (props) => {
    return(
        <Outliner 
            brigades={props.brigades}
            setActiveBrigade={props.setActiveBrigade}
        />
    )
}

//mapStateToProps
const mstp = (state: StateType) => {
    return{
        brigades: state.brigades.currentListBrigades
    }
}

const mdtp = {
    setActiveBrigade: actions.setActiveBrigadeAC
}

export default connect<OutlinerStateType, OutlinerDispatchType, {}, StateType>(mstp, mdtp)(OutlinerContainer)

type OutlinerStateType = {
    brigades: BrigadeType[]
}

type OutlinerDispatchType = {
    setActiveBrigade: (key: number) => void
}