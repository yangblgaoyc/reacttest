import React from 'react';
const Banner = require('./Banner.jsx');
import ColumnTitle from './ColumnTitleIndex.jsx';
import ListLi from './ListLi.jsx';
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
                <ColumnTitle data={{title:'最新资讯'}}/>
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