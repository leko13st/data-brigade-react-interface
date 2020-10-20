import { Select } from 'antd'
import React from 'react'
import styles from './Date.module.css'

const {Option} = Select

const Date = (props) => {
    debugger
    const startTimeList = props.startTime.map(startTime => {
        return (<Option key={startTime} value={startTime}>{startTime}</Option>)
    })

    const durationTimeList = props.durationTime.map(durationTime => {
        return (<Option key={durationTime} value={durationTime}>{durationTime} часа(ов)</Option>)
    })

    return (
        <div className={styles.date}>
            <p className={styles.title}>Рабочая смена</p>
            <Select value="Сегодня" style={{ width: "100%", textAlign: "center"}}>
                <Option value="today">Сегодня</Option>
                <Option value="yesterday">Вчера</Option>
                <Option value="week">Неделя</Option>
            </Select>
            <Select defaultValue={'init'} style={{ width: "100%", textAlign: "center"}}>
                <Option disabled value='init'>...Укажите начало</Option>
                {startTimeList}
            </Select>
            <Select defaultValue={'init'} style={{ width: "100%", textAlign: "center"}}>
                <Option disabled value="init">...Укажите длительность</Option>
                {durationTimeList}
            </Select>
        </div>
    )
}

export default Date