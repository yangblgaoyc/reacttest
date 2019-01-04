import React from 'react';
import Return from './ReturnIndex.jsx';
import Stock from './Stock.jsx'

class News extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Return />
                <Stock />
            </div>
        );
    }
}

export default News;