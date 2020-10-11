import { Tree } from 'antd';
import React from 'react'
import styles from './Outliner.module.css'

const Outliner = () => {
    function dig(path = '0', level = 1) {
        const list = [];
        for (let i = 0; i < 3; i += 1) {

            let name = (level === 1 ? "Подразделение " : "Бригада ")

            const key = `${path}-${i}`;
            name += i
            const treeNode = {
                title: name,
                key,
            };
        
            if (level > 0) {
                treeNode.children = dig(key, level - 1);
            }
        
            list.push(treeNode);
        }
        return list;
    }
      
    const treeData = dig();

    const chooseBrigade = (event) => {
        debugger
    }

    return (
        <div className={styles.outliner}>
            <Tree treeData={treeData} defaultExpandAll onClick={(e) => chooseBrigade(e)} />
        </div>
    )
}

export default Outliner