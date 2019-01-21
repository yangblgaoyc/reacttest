import React from 'react';
import Return from './ReturnIndex.jsx';

class highOrderC extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }

    render(){
        return(
            <span>最新消息：高阶组件测试</span>
        );
    }
}

export default Return(highOrderC);