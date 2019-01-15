const React = require("react");
import {StaticRouter,NavLink as Link,HashRouter} from 'react-router-dom';

class BannerComponent extends React.Component{
    constructor(props){
        super(props);
        this.items = this.props.data.data;
    }

    render(){
        return(
            <div>
                <div id="banner">
                    <div className='swiper-container' id='banner_swiper'>
                        <div className='swiper-wrapper'>
                            {
                                this.items.map((item,index)=>{   // this.state.bag是在state里面定义的数组为了循环数据
                                    return(
                                        <div key={index} className="swiper-slide" >
                                            <img src={item.image} alt={item.title}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <StaticRouter >
                    <Link className="ColumnTitleIndexA" to="/infomation">
                        <h2 className="ColumnTitleIndex">123</h2>
                    </Link>
                </StaticRouter>
            </div>
        );
    }
}

module.exports =  BannerComponent;