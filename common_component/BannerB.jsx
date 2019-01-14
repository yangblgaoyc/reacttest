const React = require("react");
import {BrowserRouter,NavLink as Link} from 'react-router-dom';

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
                        {/*https://segmentfault.com/a/1190000014294604*/}
                        {/*gulp and gulp cli*/}
                    </div>
                </div>
                <Link className="ColumnTitleIndexA" to="/news">
                    <h2 className="ColumnTitleIndex">123</h2>
                </Link>
            </div>
        );
    }
}

module.exports =  BannerComponent;