const React = require("react");

class BannerComponent extends React.Component{
    constructor(props){
        super(props);
        this.items = this.props.data.data;
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
                </div>
            </div>

        );
    }
}

module.exports =  BannerComponent;