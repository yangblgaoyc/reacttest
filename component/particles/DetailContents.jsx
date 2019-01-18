import React from 'react';

class DetailContents extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="detail_contents">
                {this.props.data}
            </div>
        );
    }
}

export default DetailContents;