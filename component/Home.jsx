import React from 'react';
import Banner from '../spaSsrcomponent/Banner.jsx';
import ColumnTitle from '../spaSsrcomponent/ColumnTitleIndex.jsx';
import ListLi from './particles/ListLi.jsx';
require('../src/styles/home.css');
require('../src/styles/particles/columnTitleIndex.css');
require('../src/styles/particles/listli.css');
require('../src/styles/particles/banner.css');
require('swiper/dist/css/swiper.min.css');

// import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';
class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        //todo 有数据后将下列数据替换
        this.list = [
            {
                'img':"images/icon_j20.jpg",
                'title':'漂亮的歼20',
                'category':'军事--空军',
                'times':'50',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':"images/icon_81.jpeg",
                'title':'八一图标',
                'category':'军事--中国军队',
                'times':'20',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':"images/icon_j20.jpg",
                'title':'漂亮的歼20',
                'category':'军事--空军',
                'times':'50',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':"images/icon_81.jpeg",
                'title':'八一图标',
                'category':'军事--中国军队',
                'times':'20',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':"images/icon_j20.jpg",
                'title':'漂亮的歼20',
                'category':'军事--空军',
                'times':'50',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':"images/icon_81.jpeg",
                'title':'八一图标',
                'category':'军事--中国军队',
                'times':'20',
                'categoryId':'1',
                'id':'1'
            },
        ]
    }
    render(){
        return(
            <div id="container">
                <Banner />
                <ColumnTitle data={{title:'最新资讯',url:'/news'}}/>
                <ul>
                    {
                        this.list.map(item => <ListLi data={item}></ListLi>)
                    }
                </ul>
            </div>
        )
    }
}

export default HomeComponent;