import React, { Component } from 'react';
import {Button} from "antd"
interface Props{}
class IndexPage extends Component<Props>{
    render(){
        return(
            <div>
                <Button type='primary'>按钮</Button>
            <div className='container'>IndexPage!</div>
            </div>
        )
    }
}
export default IndexPage;
