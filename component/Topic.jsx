import React from 'react';
import {NavLink as Link} from 'react-router-dom';
class Topic extends React.Component{
    render(){
        return(
            <div>
                <h1>topicText:</h1>
                <Link to="/">jumpe to Main</Link>
            </div>
        );
    }
}

export default Topic;