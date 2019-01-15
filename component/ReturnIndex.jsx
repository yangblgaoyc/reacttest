import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class BannerComponent extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Link id="return" to="/">
                    <img src='../src/img/icon_arrow_o.png'/> 返回首页
            </Link>
        );
    }
}

export default BannerComponent;