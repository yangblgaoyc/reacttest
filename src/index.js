require('./styles/common.css');
require('../src/styles/home.css');
require('../src/styles/particles/columnTitleIndex.css');
require('../src/styles/particles/listli.css');
require('swiper/dist/css/swiper.min.css');
require('../src/styles/particles/banner.css');
require('../src/img/icon_j20.jpg');
require('../src/img/icon_81.jpeg');
require('../src/img/j20.jpeg');
require('../src/img/j10.jpeg');
require('../src/img/arrow.png');
require('../src/img/ball.png');

import Swiper from 'swiper/dist/js/swiper.js';

window.onload = function(){
    const mySwiper = new Swiper('#banner_swiper', {
        preloadImages: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    });
};






