
import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class columnTitleIndexComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link className="ColumnTitleIndexA" to="/news">
                <h2 className="ColumnTitleIndex">{this.props.data.title} <img src='../src/img/icon_arrow_o.png'/></h2>
            </Link>
        );
    }
}

export default columnTitleIndexComponent;