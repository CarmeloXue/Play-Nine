import React, { Component } from 'react';

export default class BottomFrame extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
           <div id="bottom-frame">
               <div className="well">
                    <h1>{this.props.playInfo}</h1>
                   <button className="btn btn-lg btn-default" onClick={this.props.playAgain}>Play Again</button>
               </div>
           </div>
        )
    }
}