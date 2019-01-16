const React = require("react");
import Swiper from 'swiper/dist/js/swiper.js'

class BannerComponent extends React.Component{
    constructor(props){
        super(props);
        this.items = [
            {
                image: "images/j20.jpeg",
                title: '图片1',
                // link: 'http://jd.com'
            },
            {
                image: "images/j10.jpeg",
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