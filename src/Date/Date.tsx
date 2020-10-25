import { Button, Select } from 'antd'
import React, { CSSProperties } from 'react'
import { useState } from 'react'
import styles from './Date.module.css'

type PropsType = {
    startTime: string[]
    durationTime: number[]

    setTimeFilter: (filter: FilterType) => void
}

type FilterType = {
    start: string
    duration: number
}

type ButtonStateType = 'default' | 'primary'

const {Option} = Select
const commonStyle: CSSProperties = { width: "100%", textAlign: "center" }

const Date: React.FC<PropsType> = (props) => {

    const [filter, setFilter] = useState<FilterType>({start: '0', duration: 0})
    const [typeButton, setTypeButton] = useState<ButtonStateType>('default')

    const startTimeList = props.startTime.map(startTime => {
        return (<Option key={startTime} value={startTime}>{startTime}</Option>)
    })

    const durationTimeList = props.durationTime.map(durationTime => {
        return (<Option key={durationTime} value={durationTime}>{durationTime} часа(ов)</Option>)
    })

    const setStartTimeShift = (value: string) => {
        setFilter({...filter, start: value})
        setTypeButton('primary')
    }

    const setDurationTimeShift = (value: string) => {
        setFilter({...filter, duration: +value})
        setTypeButton('primary')
    }

    const applyFilterTime = () => {
        if (filter.start !== null && filter.duration !== null){
            props.setTimeFilter(filter)
            setTypeButton('default')
        }
        else
            alert('Укажите корректно параметры')
    }

    return (
        <div className={styles.date}>
            <p className={styles.title}>Рабочая смена</p>
            {/* <Select value="Сегодня" style={commonStyle}>
                <Option value="today">Сегодня</Option>
                <Option value="yesterday">Вчера</Option>
                <Option value="week">Неделя</Option>
            </Select> */}
            <Select key='startTime' defaultValue={'init'} style={commonStyle} onChange={setStartTimeShift}>
                <Option disabled value='init'>...Укажите начало</Option>
                {startTimeList}
            </Select>
            <Select key='durationTime' defaultValue={'init'} style={commonStyle} onChange={setDurationTimeShift}>
                <Option disabled value="init">...Укажите длительность</Option>
                {durationTimeList}
            </Select>
            <p className={styles.button}>
                <Button type={typeButton} style={commonStyle} onClick={applyFilterTime}>Принять</Button>
            </p>
        </div>
    )
}

export default Date