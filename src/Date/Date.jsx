import { Select } from 'antd'
import React from 'react'
import styles from './Date.module.css'

const {Option} = Select

const Date = () => {
    return (
        <div className={styles.date}>
            <Select defaultValue="Сегодня" style={{ width: "100%", textAlign: "center"}}>
                <Option value="today">Сегодня</Option>
                <Option value="yesterday">Вчера</Option>
                <Option value="week">Неделя</Option>
            </Select>
            <Select defaultValue="Начало 00:00" style={{ width: "100%", textAlign: "center"}}>
                <Option value="starttime0">00:00</Option>
                <Option value="starttime6">06:00</Option>
                <Option value="starttime12">12:00</Option>
                <Option value="starttime18">18:00</Option>
            </Select>
            <Select defaultValue="24 часа" style={{ width: "100%", textAlign: "center"}}>
                <Option value="duration0">0 часов</Option>
                <Option value="duration6">6 часов</Option>
                <Option value="duration12">12 часов</Option>
                <Option value="duration18">18 часов</Option>
                <Option value="duration24">24 часа</Option>
            </Select>
        </div>
    )
}

export default Date