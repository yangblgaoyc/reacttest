import React from 'react';
import {NavLink as Link} from 'react-router-dom';
const arrowImage = 'images/ball.png';

const RenturnComponent = WrappedComponent => {
    return class  extends React.Component{
        constructor(props){
            super(props);
            this.props.info = '最新消息：高阶组件测试';
        }

        render(){
            return(
                <Link id="return" to="/home">
                    <img src={arrowImage} alt=""/> 返回首页 <WrappedComponent></WrappedComponent>
                </Link>
            );
        }
    }
}

export default RenturnComponent;