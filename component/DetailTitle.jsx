require('../src/css/detailTitle.css')
import React from 'react';

class Detailtitle extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="detail_title">
                <h2>{this.props.data.title}</h2>
                <p>
                    <span>{this.props.data.time}</span> •&nbsp;
                    <span>{this.props.data.times}阅读</span> •&nbsp;
                    <span>预计阅读：</span>
                </p>
            </div>
        );
    }
}

export default Detailtitle;