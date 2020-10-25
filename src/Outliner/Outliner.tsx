import { Tree } from 'antd';
import React from 'react'
import { BrigadeType } from '../Redux/types-reducers';
import styles from './Outliner.module.css'

type PropsType = {
    brigades: BrigadeType[]
    setActiveBrigade: (key: number) => void
}

const Outliner: React.FC<PropsType> = (props) => {

    let data = [...props.brigades]

    const generateOrder = () => {
        const list = []

        const createTreeNode = (name = 'Подразделение', num = 1, key = '1') => {
            return {
                title: name + ' ' + num as string,
                key: key as string,
                children: [] as any
            }
        }

        let treeNode = createTreeNode()
        for (let i = 0; i < data.length; i++){
            if (i !== 0)
                if (data[i].division !== data[i - 1].division){
                    list.push(treeNode)
                    treeNode = createTreeNode('Подразделение', data[i].division, (data[i].division).toString())
                }

            treeNode.children.push(createTreeNode('Бригада', data[i].id, (data[i].division).toString() + '-' + data[i].id))
        }

        if (data.length > 0)
            list.push(treeNode)
        return list
    }

    const treeData = generateOrder();

    const chooseBrigade = (data1: any, data2: any) => {
        if (data2.key.length > 2){
            let key: number = data2.key.slice(2)
            props.setActiveBrigade(+key)
        }        
    }

    return (
        <div className={styles.outliner}>
            <Tree treeData={treeData} defaultExpandAll onClick={chooseBrigade} />
        </div>
    )
}

export default Outliner