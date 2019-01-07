require('../src/font/css/font-awesome.css');
require('../src/css/category.css');
import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import ImgIconJ20 from '../src/img/icon_j20.jpg';
import ImgIcon81 from '../src/img/icon_81.jpeg';

class Category extends React.Component{

    constructor(props){
        super(props);
        this.state = {curr:0};

        //todo 此处数据将来用redux实现
        this.category = [
            {
                'name' : '早知道',
                'imgIcon': 'book'
            },
            {
                'name' : '投条号',
                'imgIcon': 'credit-card'
            },
            {
                'name' : '大视野',
                'imgIcon': 'signal'
            },
            {
                'name' : '名家谈',
                'imgIcon': 'user'
            }
        ];
        this.category.unshift({
            'name' : '全部',
            'imgIcon': 'windows'
        });

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

    handleClick(index) {
        this.setState({curr: index})
    }

    componentDidMount(){
        const mySwiper = new Swiper('#category', {
            slidesPerView : 4.5,
            slideToClickedSlide: true,
        });
    }

    render(){
        return(
            <div className='swiper-container' id='category'>
                <div className='swiper-wrapper'>
                    {
                        this.category.map((item,index)=>{   // this.state.bag是在state里面定义的数组为了循环数据
                            const className =  'fa fa-' + item.imgIcon + ' fa-2x';
                            const swiperSlideStatusOn = 'swiper-slide on';
                            const swiperSlideStatusNo = 'swiper-slide';
                            return(
                                <div key={index} className={index === this.state.curr ? swiperSlideStatusOn : swiperSlideStatusNo} onClick={this.handleClick.bind(this, index)}>
                                    <i className={className} />
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Category;