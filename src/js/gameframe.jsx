import React, { Component } from 'react';
import ReactDom from 'react-dom';
import StarsFrame from './starsframe.jsx';
import AnswerFrame from './answerframe.jsx';
import ButtonFrame from './buttonframe.jsx';
import NumbersFrame from './numbersframe.jsx';


class GameFrame extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentAnswers:[],
            starsNumber:Math.floor(Math.random()*9) + 1,
            checkAnswer:null
        }

        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);

    }

   selectNumber(number){
        if(this.state.currentAnswers.indexOf(number) < 0)
        {
            this.setState({
                currentAnswers:this.state.currentAnswers.concat(number),
                checkAnswer:null
            })
        }
   }

   unselectNumber(number){
       var numberIndex = this.state.currentAnswers.indexOf(number);
       var numbers = this.state.currentAnswers;
       numbers.splice(numberIndex,1);
        this.setState({
            currentAnswers:numbers,
            checkAnswer:null
        })
   }

   checkAnswer(){
       if(this.state.starsNumber === this.state.currentAnswers.reduce(function (x,y) {
               return x+y;
           },0))
       {
            this.setState({
                checkAnswer:"true"
            })
       }
       else
       {
           this.setState({
               checkAnswer:"false"
           })
       }
   }

    render() {

        return (
            <div id="game-frame">
                <h1>Play Nine</h1>
                <hr/>
                <StarsFrame starsNumber={this.state.starsNumber}/>
                <ButtonFrame checkAnswer={this.checkAnswer}
                             isAnswerRight={this.state.checkAnswer}/>
                <AnswerFrame  currentAnswers={this.state.currentAnswers}
                              unselectNumber={this.unselectNumber}/>
                <NumbersFrame selectNumbers={this.selectNumber}
                              currentAnswers={this.state.currentAnswers}/>
            </div>
        )
    }
}
ReactDom.render(<GameFrame/>,document.getElementById("root"))
