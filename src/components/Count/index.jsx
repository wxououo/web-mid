import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Space, Switch } from 'antd';
import { useState } from 'react';
import styles from './count.module.css'

const ButtonGroup = Button.Group;
const Count = () => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    const increase = () => {
        setCount(count + 1);
    };
    const decline = () => {
        let newCount = count - 1;
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount);
    };


    return (
        <Space direction="vertical">

            <ButtonGroup>
                <Button onClick={decline} icon={<MinusOutlined />} />
                <div className={styles.block}>
                    
                    <Badge count={count} color="none" style={{color: 'white'}}/>
                </div>
                <Button onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>

        </Space>
    );
};
export default Count;