/**
 * Created by yangbolun on 2019/1/14.
 */
window.onload = function(){
    const mySwiper = new Swiper('#banner_swiper', {
        preloadImages: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    });
}