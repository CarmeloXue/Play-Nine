import React,{ Component } from 'react';

class NumbersFrame extends Component{
    constructor(props){
        super(props);
    }

    render(){

        var numbers = [];

        for(var i = 1;i<=9;i++)
        {
            var className = "number" + (this.props.currentAnswers.indexOf(i) >= 0? " selected" :"");
            className += (this.props.usedNumbers.indexOf(i) >= 0 ? " used":"");
            numbers.push(
                <div className={className} onClick={this.props.selectNumbers.bind(null,i)}>{i}</div>
            )
        }

        return(
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        )
    }
}
export default NumbersFrame;