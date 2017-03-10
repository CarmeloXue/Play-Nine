import React,{ Component } from 'react';

class StarsFrame extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var stars = [];
        for(var i=0;i<this.props.starsNumber;i++)
        {
            stars.push(
                <span className="glyphicon glyphicon-star"></span>
            )
        }


        return(
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        )
    }
}
export default StarsFrame;