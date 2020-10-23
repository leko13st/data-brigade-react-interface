import { Image, PageHeader } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentBrigadeChart } from '../Redux/brigade-selector'
import styles from './Chart.module.css'

const Chart = () => {
    const currentChart = useSelector(getCurrentBrigadeChart)  

    return (
        <div className={styles.chart}>
            {currentChart 
            ?
                <div>
                    <PageHeader
                        className="site-page-header"
                        title="График смены"
                    />
                    <Image src={currentChart} width='50%' />

                </div>
            : 
                <div></div>}
        </div>        
    )
}

export default Chart