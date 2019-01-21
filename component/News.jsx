import React from 'react';
import Return from './particles/highOrderC.jsx';
import Stock from './particles/Stock.jsx';
import Category from './particles/Category.jsx'
require('../src/styles/news.css');
require('../src/styles/particles/category.css');
require('../src/styles/particles/return.css');
require('../src/styles/particles/stock.css');
require('../src/font/css/font-awesome.css');

class News extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="news_container">
                <Return />
                <Stock />
                <Category />

            </div>
        );
    }
}

export default News;