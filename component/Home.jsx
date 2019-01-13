require('../src/css/home.css')
import React from 'react';
import {NavLink as Link} from 'react-router-dom';
const Banner = require('../common_component/BannerC.jsx');
import ColumnTitle from './ColumnTitleIndex.jsx';
import ListLi from './ListLi.jsx';
import ImgIconJ20 from '../src/img/icon_j20.jpg';
import ImgIcon81 from '../src/img/icon_81.jpeg';
// import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';
class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        //todo 有数据后将下列数据替换
        this.list = [
            {
                'img':ImgIconJ20,
                'title':'漂亮的歼20',
                'category':'军事--空军',
                'times':'50',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':ImgIcon81,
                'title':'八一图标',
                'category':'军事--中国军队',
                'times':'20',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':ImgIconJ20,
                'title':'漂亮的歼20',
                'category':'军事--空军',
                'times':'50',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':ImgIcon81,
                'title':'八一图标',
                'category':'军事--中国军队',
                'times':'20',
                'categoryId':'1',
                'id':'1'
            },
            {
                'img':ImgIconJ20,
                'title':'漂亮的歼20',
                'category':'军事--空军',
                'times':'50',
                'categoryId':'1',
                'id':'1'
            }
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