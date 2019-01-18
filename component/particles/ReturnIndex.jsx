import React from 'react';
import {NavLink as Link} from 'react-router-dom';
const arrowImage = 'images/ball.png';

class BannerComponent extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Link id="return" to="/home">
                    <img src={arrowImage} alt=""/> 返回首页
            </Link>
        );
    }
}

export default BannerComponent;