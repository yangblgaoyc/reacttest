import React from 'react';
import {NavLink as Link} from 'react-router-dom';
class Topic extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>topicText:</h1>
                <Link to="/">jumpe to Main {this.props.data.age}</Link>
            </div>
        );
    }
}

export default Topic;