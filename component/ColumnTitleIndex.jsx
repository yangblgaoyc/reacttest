
import React from 'react';
import {NavLink as Link} from 'react-router-dom';
const arrowImg = 'images/ball.png';

class columnTitleIndexComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link className="ColumnTitleIndexA" to="/news">
                <h2 className="ColumnTitleIndex">{this.props.data.title} <img src={arrowImg} alt=""/></h2>
            </Link>
        );
    }
}

export default columnTitleIndexComponent;