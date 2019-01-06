require('../src/css/stock.css')
import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class News extends React.Component{

    constructor(props){
        super(props);
        //todo 此处数据将来用redux实现
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

        this.stock.forEach((item,index)=>{   // this.state.bag是在state里面定义的数组为了循环数据
            const exponent = item.exponent;
            const riseorfalldot = item.riseorfalldot;
            const riseorfallexponent = item.riseorfallexponent;

            this.name = <p className='up'>{item.name}</p>

            if(Math.sign(exponent) == 1) {
                this.exponentStr = (<p className='up'>{exponent}</p>)
            }
            else if(Math.sign(exponent) == -1){
                this.exponentStr = (<p className='down'>{exponent}</p>)
            }
            else{
                this.exponentStr = (<p>{exponent}</p>)
            }

            if(Math.sign(riseorfalldot) == 1) {
                this.riseorfalldotStr = (<span className='up'>{riseorfalldot}</span>)
            }
            else if(Math.sign(riseorfalldot) == -1){
                this.riseorfalldotStr = (<span className='down'>{riseorfalldot}</span>)
            }
            else{
                this.riseorfalldotStr = (<span>{riseorfalldot}</span>)
            }

            if(Math.sign(riseorfallexponent) == 1) {
                this.riseorfallexponentStr = (<em className='up'>{riseorfalldot}</em>)
            }
            else if(Math.sign(riseorfallexponent) == -1){
                this.riseorfallexponentStr = (<em className='down'>{riseorfalldot}</em>)
            }
            else{
                this.riseorfallexponentStr = (<em>{riseorfalldot}</em>)
            }

            this.stock[index] = {
                name: this.name,
                exponent: this.exponentStr,
                riseorfalldot:this.riseorfalldotStr,
                riseorfallexponent:this.riseorfallexponentStr
            }
        })

    }

    componentDidMount(){
        const mySwiper = new Swiper('#stock', {
            slidesPerView : 3
        });
    }

    render(){
        return(
            <div className='swiper-container' id='stock'>
                <div className='swiper-wrapper'>
                    {
                        this.stock.map((item,index)=>{   // this.state.bag是在state里面定义的数组为了循环数据
                            return(
                                <div key={index} className="swiper-slide">
                                    {item.name}
                                    {item.exponent}
                                    <p>{item.riseorfalldot} {item.riseorfallexponent}</p>
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