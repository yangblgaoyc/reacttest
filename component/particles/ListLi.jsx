import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class ListLi extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className="list_li">
                {/*<Link to={'/details/'+this.props.data.categoryId+'/'+ this.props.data.id}>*/}
                {/*这里传参不能用restful api风格，否则去到的页面刷新后js路径有问题，导致无法获取参数*/}
                {/*这里传参不能用参数query的写法，否则去到的页面刷新后js loaction对象的query值将丢失*/}
                <Link to={{pathname:"/details",state:{categoryId: this.props.data.categoryId, id:this.props.data.id}}}>
                    <img src={this.props.data.img}/>
                    <dl>
                        <dt>{this.props.data.title}</dt>
                        <dd>
                            <span>{this.props.data.category}</span>
                            <em>{this.props.data.times}阅读</em>
                        </dd>
                    </dl>
                </Link>
            </li>
        );
    }
}

export default ListLi;

