require('../src/css/listli.css')
import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class ListLi extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="list_li">
                <Link to={'/details/'+this.props.data.categoryId+'/'+ this.props.data.id}>
                {/*<Link to={{pathname:"/details/",query:{categoryId: this.props.data.categoryId, id:this.props.data.id}}}>*/}
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

