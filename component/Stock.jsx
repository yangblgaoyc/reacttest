require('../src/css/stock.css')
import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class News extends React.Component{

    constructor(props){
        super(props);
        this.stock = [
            {
                name: '上证指数',
                exponent: '3081.18',
                riseorfalldot:'-1.05',
                riseorfallexponent:'-0.03'
            },
            {
                name: '深圳成指',
                exponent: '10081.18',
                riseorfalldot:'1.05',
                riseorfallexponent:'0.03'
            },
            {
                name: '中小板指',
                exponent: '3081.18',
                riseorfalldot:'-1.05',
                riseorfallexponent:'-0.03'
            },
            {
                name: '创业板指',
                exponent: '3081.18',
                riseorfalldot:'0.00',
                riseorfallexponent:'0.00'
            },
        ];
    }

    // componentDidMount(){
    //     const mySwiper = new Swiper('.swiper-container', {
    //         slidesPerView : 3
    //     });
    // }

    render(){
        return(
            <div className='swiper-container' id='stock'>
                <div className='swiper-wrapper'>
                    {
                        this.stock.map((item,index)=>{   // this.state.bag是在state里面定义的数组为了循环数据
                            return(
                                <div key={index} className="swiper-slide">
                                    <p>{item.name}</p>
                                    <p className={if(Math.sign({item.exponent} == '1')){}
                                    }>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default News;