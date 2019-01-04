require('../src/css/columnTitleIndex.css');
import React from 'react';
import iconArrowO from '../src/img/icon_arrow_o.png';
import {NavLink as Link} from 'react-router-dom';

class columnTitleIndexComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link className="ColumnTitleIndexA" to="/news">
                <h2 className="ColumnTitleIndex">{this.props.data.title} <img src={iconArrowO}/></h2>
            </Link>
        );
    }
}

export default columnTitleIndexComponent;