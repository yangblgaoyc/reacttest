require('../src/css/banner.css');
import React from 'react';
import imgURL1 from '../src/img/j20.jpeg';
import imgURL2 from '../src/img/j10.jpeg';
import ReactSwiper from 'reactjs-swiper';
class BannerComponent extends React.Component{
    constructor(props){
        super(props);
        this.items = [
            {
                image: imgURL1,
                title: '图片1',
                // link: 'http://jd.com'
            },
            {
                image: imgURL2,
                title: '图片2',
                // link: 'http://jd.com'
            }
        ];

        this.swiperOptions = {
            preloadImages: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false
        };
    }

    render(){
        return(
            <div id="banner">
                <ReactSwiper swiperOptions={this.swiperOptions} showPagination items={this.items} className="banner_swiper" />
            </div>

        );
    }
}

export default BannerComponent;