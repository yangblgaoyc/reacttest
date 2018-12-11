import React from 'react';
import ReactDOM from 'react-dom';

class FirstComponent extends React.Component{
    render(){
        return(
            <div>
                this is React code from Components.
            </div>
        );
    }
}
var div=document.createElement("div");
div.setAttribute("id","root");
document.body.insertBefore(div,document.body.childNodes[1]);
ReactDOM.render(<FirstComponent/>,document.getElementById('root'));


