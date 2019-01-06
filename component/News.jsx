import React from 'react';
import Return from './ReturnIndex.jsx';
import Stock from './Stock.jsx';
import Category from './Category.jsx'

class News extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Return />
                <Stock />
                <Category />
            </div>
        );
    }
}

export default News;