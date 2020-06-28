import React from 'react';
import {Input} from "antd";
import { UserOutlined } from '@ant-design/icons';

function ImageSearch(props) {
    const onInputChanges = (event) => {
        props.updateImageList(event.target.value);
    }

    return (
        <Input
            size='large'
            placeholder='Search images by Author'
            prefix={<UserOutlined />}
            allowClear
            onChange={onInputChanges}
        />
    )
}


export default ImageSearch;
