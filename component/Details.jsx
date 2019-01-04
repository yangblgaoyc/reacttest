require('../src/css/details.css')
import React from 'react';
import DetailTitle from './DetailTitle.jsx';
import DetailContents from './DetailContents.jsx';

class Detail extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.location.query);
        console.log(this.props.match.params);
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