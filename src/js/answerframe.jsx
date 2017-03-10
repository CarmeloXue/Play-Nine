import React,{ Component } from 'react';

class AnswerFrame extends Component{
    constructor(props){
        super(props);
    }



    render(){
        console.log(this.props)
        var props = this.props;
        var numbers = this.props.currentAnswers.map(function (value,index) {
            return (
                <div className="number" onClick={props.unselectNumber.bind(null,value)}>{value}</div>
            )
        })

        return(
            <div id="answer-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        )
    }
}
export default AnswerFrame;