import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink as Link} from 'react-router-dom';
class MainComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>mainText</h1>

                <Link to="/topic">jumpe to Topic</Link>
            </div>
        );
    }
}

export default MainComponent;