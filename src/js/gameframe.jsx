import React, { Component } from 'react';
import ReactDom from 'react-dom';
import StarsFrame from './starsframe.jsx';
import AnswerFrame from './answerframe.jsx';
import ButtonFrame from './buttonframe.jsx';
import NumbersFrame from './numbersframe.jsx';
import BottomFrame from './bottomframe.jsx';


class GameFrame extends Component {
    constructor(props){
        super(props);
        this.initState = {
            currentAnswers:[],
            usedNumber:[],
            starsNumber:Math.floor(Math.random()*9) + 1,
            checkAnswer:null,
            leftRedraw:5
        }

        this.state = this.initState;

        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.redraw = this.redraw.bind(this);
        this.playAgain = this.playAgain.bind(this);
        this.hasCombination = this.hasCombination.bind(this);

    }

    possibleCombination(arr,n){
        if(arr.indexOf(n) >= 0 ){return true;}
        if(arr[0] > n) {return false;}
        if(arr[arr.length -1] >n)
        {
            arr.pop();
            return this.possibleCombination(arr,n);
        }

        var listSize = arr.length, combinationsCount = (1 << listSize)
        for(var i = 1;i<combinationsCount;i++)
        {
            var combinationSum = 0;
            for(var j=0; j<listSize;j++)
            {
                if(i & (1<<j)){combinationSum += arr[j];}
            }
            if(n === combinationSum){return true;}
        }
        return false;
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

   acceptAnswer(){
       this.setState({
           usedNumber:this.state.usedNumber.concat(this.state.currentAnswers),
           checkAnswer:null,
           starsNumber:Math.floor(Math.random()*9) + 1,
           currentAnswers:[]
       })
   }

   redraw(){
       if(this.state.leftRedraw >0)
       {
           this.setState({
               currentAnswers:[],
               starsNumber:Math.floor(Math.random()*9) + 1,
               checkAnswer:null,
               leftRedraw:this.state.leftRedraw - 1
           })
       }
   }

   playAgain(){
       this.setState(this.initState);
   }

    hasCombination(arr,n){
       var origin = [1,2,3,4,5,6,7,8,9];
       arr.forEach(function (value,index) {
           var originIndex = origin.indexOf(value);
           origin.splice(originIndex,1);
       });

       return this.possibleCombination(origin,n);

    }

    render() {
       var pageButtom;
       if(this.state.usedNumber.length === 9)
       {
           pageButtom =  <BottomFrame playAgain={this.playAgain}
                                      playInfo="You Win The Game"/>
       }
       else if(this.state.leftRedraw === 0 && !this.hasCombination(this.state.usedNumber,this.state.starsNumber))
       {
           pageButtom =  <BottomFrame playAgain={this.playAgain}
                                      playInfo="Game Over"/>
       }
       else
       {
           pageButtom =  <NumbersFrame selectNumbers={this.selectNumber}
                                       currentAnswers={this.state.currentAnswers}
                                       usedNumbers={this.state.usedNumber}/>
       }

        return (
            <div id="game-frame">
                <h1>Play Nine</h1>
                <hr/>
                <div className="clearfix">

                    <StarsFrame starsNumber={this.state.starsNumber}/>
                    <ButtonFrame checkAnswer={this.checkAnswer}
                                 isAnswerRight={this.state.checkAnswer}
                                 acceptAnswer={this.acceptAnswer}
                                 redraw={this.redraw}
                                 leftRedraw={this.state.leftRedraw}/>
                    <AnswerFrame  currentAnswers={this.state.currentAnswers}
                                  unselectNumber={this.unselectNumber}/>

                </div>
                {pageButtom}
            </div>
        )
    }
}
ReactDom.render(<GameFrame/>,document.getElementById("root"))
