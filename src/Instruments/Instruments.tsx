import { Button, Col, Descriptions, Row, Select } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../Redux/brigade-reducer'
import { getChannels, getCurrentBrigade } from '../Redux/brigade-selector'
import styles from './Instruments.module.css'

const Instruments = () => {

    //ant-design properties
    const { Option } = Select

    //css-styles
    const styleButton: React.CSSProperties = { width: "20%", textAlign: "center", color: "black" }

    //selecting cannals
    const channels = useSelector(getChannels)

    const channelList = channels.map((channel: string) => {
        return <Option key={channel} value={channel}>{channel}</Option>
    })

    //hook useDispatch for sending action to Redux
    const dispatch = useDispatch()

    //change button's state (active/passive)
    const buttonEnabled = (event: React.MouseEvent<HTMLButtonElement>): void => {
        
        let index = +event.currentTarget.dataset.num!
        let newStateButtons = [...stateButtons]
        newStateButtons[index] = (stateButtons[index] === 'default') ? 'primary' : 'default'
        
        setActiveButtons(newStateButtons)
        dispatch(actions.changeButtonStateAC(newStateButtons))
    }

    type StateType = 'default' | 'primary'

    let [stateButtons, setActiveButtons] = useState<StateType[]>(['default', 'default', 'default', 'default', 'default'])

    const ButtonList = []
    for (let i = 0; i < 5; i++){
        ButtonList.push(<Button key={i} data-num={i} disabled={false} type={stateButtons[i]} style={styleButton} onClick={buttonEnabled}>Кнопка {i + 1}</Button>)
    }

    //get data's brigade from Redux (by using the hook: useSelector)
    const currentBrigade = useSelector(getCurrentBrigade)

    return (
        <div className={styles.instruments}>
            <Row gutter={[16, 4]}>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Бригада" style={{width: "30px"}}>{currentBrigade && ('Бригада ' + currentBrigade.id)}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Месторождение" style={{width: "30px"}}>{currentBrigade && currentBrigade.field}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Куст" style={{width: "30px"}}>{currentBrigade && currentBrigade.cluster}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Descriptions size="small" bordered>
                        <Descriptions.Item label="Скважина" style={{width: "30px"}}>{currentBrigade && currentBrigade.well}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6}>
                    <Select defaultValue="Каналы" style={{ width: "100%", textAlign: "center"}}>
                        {channelList}
                    </Select>
                </Col>
                <Col span={6}>
                    <Button style={{ width: "100%", backgroundColor: "#53abdf", color: "white" }}>Построить</Button>
                </Col>
                <Col span={6}>
                    {ButtonList}
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