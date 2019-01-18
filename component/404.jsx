import React from 'react';
require('../src/styles/nopage.css');

class News extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="nopage">
                地球上找不到这个页面了！
                <span>404</span>
            </div>
        );
    }
}

export default News;