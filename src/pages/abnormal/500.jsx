import React, { Component } from 'react'
import { Result, Button } from 'antd';

export default class Comp500 extends Component {
    render() {
        return (
            <Result
                status="500"
                title="Redis服务异常"
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary">Back Home</Button>}
                style={{background: '#FFFFFF'}}
            />
        )
    }
}
