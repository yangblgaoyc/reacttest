require('../src/css/banner.css');
require('swiper/dist/css/swiper.min.css');
const React = require("react");
const imgURL1 = require('../src/img/j20.jpeg');
const imgURL2 = require('../src/img/j10.jpeg');
const Swiper = require('swiper/dist/js/swiper.js');


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

    componentDidMount(){
        const mySwiper = new Swiper('#banner_swiper', {
            preloadImages: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        });
    }

    render(){
        return(
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

        );
    }
}

module.exports =  BannerComponent;