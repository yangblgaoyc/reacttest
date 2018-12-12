import React from 'react';
import {NavLink as Link} from 'react-router-dom';
// import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';
class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>mainText1</h1>

                <Link to="/topic">jumpe to Topi {this.props.data.name}</Link>
            </div>
        );
    }
}

export default MainComponent;