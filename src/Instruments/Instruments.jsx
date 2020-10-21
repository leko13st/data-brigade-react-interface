import { Button, Col, Descriptions, Row, Select } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentBrigade } from '../Redux/brigade-selector'
import styles from './Instruments.module.css'

const Instruments = () => {

    const {Option} = Select
    const styleButton = { width: "20%", textAlign: "center", backgroundColor: "#53abdf", color: "white" }

    const buttonEnabled = (event) => {
        event.currentTarget.style.backgroundColor = "#115070"
    }
    
    const currentBrigade = useSelector(getCurrentBrigade)

    return (
        <div className={styles.instruments}>
            <Row gutter={[16, 4]}>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Бригада" style={{width: "30px"}}>{currentBrigade.id ? ('Бригада ' + currentBrigade.id) : ''}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Месторождение" style={{width: "30px"}}>{currentBrigade.field}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Куст" style={{width: "30px"}}>{currentBrigade.cluster}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Скважина" style={{width: "30px"}}>{currentBrigade.well}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Select defaultValue="Каналы" style={{ width: "100%", textAlign: "center"}}>
                        <Option value="Channel 1">Канал 1</Option>
                        <Option value="Channel 2">Канал 2</Option>
                        <Option value="Channel 3">Канал 3</Option>
                        <Option value="Channel 4">Канал 4</Option>
                        <Option value="Channel 5">Канал 5</Option>
                    </Select>
                </Col>
                <Col span={6}>
                    <Button style={{ width: "100%", backgroundColor: "#53abdf", color: "white" }}>Построить</Button>
                </Col>
                <Col span={6}>
                    <Button style={styleButton} onClick={(e) => buttonEnabled(e)}>1</Button>
                    <Button style={styleButton} onClick={(e) => buttonEnabled(e)}>2</Button>
                    <Button style={styleButton} onClick={(e) => buttonEnabled(e)}>3</Button>
                    <Button style={styleButton} onClick={(e) => buttonEnabled(e)}>4</Button>
                    <Button style={styleButton} onClick={(e) => buttonEnabled(e)}>5</Button>
                </Col>
                <Col span={6}>
                    <Button style={{width: "33.3%", textAlign: "center", backgroundColor: "#53abdf"}}>1</Button>
                    <Button style={{width: "33.3%", textAlign: "center", backgroundColor: "#53abdf"}}>2</Button>
                    <Button style={{width: "33.3%", textAlign: "center", backgroundColor: "#53abdf"}}>3</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Instruments