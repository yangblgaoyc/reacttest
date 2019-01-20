import React from 'react';
import DetailTitle from './particles/DetailTitle.jsx';
import DetailContents from './particles/DetailContents.jsx';
require('../src/styles/details.css');
require('../src/styles/particles/detailTitle.css');
require('../src/styles/particles/detailContents.css');

class Detail extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        console.log(this.props.location.state);
        this.data = {
            titleContents:{
                title:'测试暂存',
                time:'12-12',
                times:'50',
            },
            //todo 过后用获取来的参数用ajax重写contents
            contents:'测试内容，测试内容，测试内容'
        }
    }

    render(){
        return(
            <div id='detail_container'>
                <DetailTitle data={this.data.titleContents}/>
                <DetailContents data={this.data.contents}/>
            </div>
        );
    }
}

export default Detail;