import React,{ Component } from 'react';

class ButtonFrame extends Component{
    constructor(props){
        super(props);
    }

    render(){

        var button;
        switch (this.props.isAnswerRight)
        {
            case "true":
                button =(
                    <button className="btn btn-success btn-lg" >
                        <span className="glyphicon glyphicon-ok" onClick={this.props.acceptAnswer}></span>
                    </button>
                )
                break;
            case "false":
                button =(
                    <button className="btn btn-danger btn-lg" >
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                )
                break;
            default:
                button = <button className="btn btn-default btn-lg" onClick={this.props.checkAnswer}> = </button>
        }


        return(
            <div id="button-frame">
                {button}
                <br/>
                <button className="btn btn-warning" onClick={this.props.redraw}>
                    <span className="glyphicon glyphicon-refresh">{this.props.leftRedraw}</span>
                </button>
            </div>
        )
    }
}
export default ButtonFrame;