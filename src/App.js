import logo from './logo.svg';
import './App.css';
import Button from './components/Button' ;
import Input from './components/Input' ;
import ClearButton from './components/ClearButton'
import { Component } from 'react';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber:"",
      currentNumber:"",
      operator:""
    };
  }

  
  addToInput = val =>{
    this.setState({input: this.state.input + val});
  }


  addDecimal = val => {
    //only add decimal if there is no curent decimal point present in the input area
    if(this.state.input.indexOf(".") === -1)
    {
      this.setState({ input: this.state.input + val})
    }
  }

  addZeroToInput = val =>{
    //if this.state.input is ont empty then add zero
    if(this.state.input !== "0")
    {
      this.setState({input :  this.state.input + val})
    }
  }

  clearInput = val =>{
    this.setState({input : ""})
  }



  //operations
  add = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""})
    this.state.operator = "plus"
  }


  subtract = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""})
    this.state.operator = "subtract"
  }


  mlt = () =>
  {
    this.state.previousNumber = this.state.input;
    this.setState({input:""});
    this.state.operator = "mlt"
  }


  dev = () =>
  {
    this.state.previousNumber = this.state.input;
    this.setState({input:""});
    this.state.operator = "dev"
  }








evaluate = () => {
  this.state.currentNumber = this.state.input;

  if(this.state.operator == "plus")
  {
    this.setState({
      input:
      parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
    });
  }
  if(this.state.operator == "subtract")
  {
    this.setState({
      input:
      parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
    });
  }

  if(this.state.operator == "mlt")
  {
    this.setState({
      input:
      parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
    })
  }

  if(this.state.operator == "dev")
  {
    this.setState({
      input:
      parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
    })
  }
}





  render(){
  return (
    <div className="App">
      <div className="calc-wrapper">

        <div className="row">
          <Input >{this.state.input}</Input>
        </div>

        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.dev}>/</Button>
        </div>

        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.mlt}>*</Button>
        </div>



        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
        </div>



        <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.evaluate}>=</Button>
          <Button handleClick={this.subtract}>-</Button>
        </div>


        <div className="row">
          <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
        </div>
      </div>
      

    </div>
  );
  }
}

export default App;
