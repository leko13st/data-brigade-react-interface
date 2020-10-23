import { Button, Select } from 'antd'
import React from 'react'
import { useState } from 'react'
import styles from './Date.module.css'

const {Option} = Select
const commonStyle = { width: "100%", textAlign: "center" }

const Date = (props) => {

    const [filter, setFilter] = useState({start: null, duration: null})
    const [typeButton, setTypeButton] = useState('default')

    const startTimeList = props.startTime.map(startTime => {
        return (<Option key={startTime} value={startTime}>{startTime}</Option>)
    })

    const durationTimeList = props.durationTime.map(durationTime => {
        return (<Option key={durationTime} value={durationTime}>{durationTime} часа(ов)</Option>)
    })

    const setStartTimeShift = (value) => {
        setFilter({...filter, start: value})
        setTypeButton('primary')
    }

    const setDurationTimeShift = (value) => {
        setFilter({...filter, duration: value})
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