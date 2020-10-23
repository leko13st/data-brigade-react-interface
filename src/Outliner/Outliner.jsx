import { Tree } from 'antd';
import React from 'react'
import styles from './Outliner.module.css'

const Outliner = (props) => {

    let data = [...props.brigades]

    const generateOrder = () => {
        const list = []

        const createTreeNode = (name = 'Подразделение', num = '1', key = '1') => {
            return {
                title: name + ' ' + num,
                key: key,
                children: []
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

    const chooseBrigade = (data1, data2) => {
        if (data2.key.length > 2){
            let key = data2.key.slice(2)
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