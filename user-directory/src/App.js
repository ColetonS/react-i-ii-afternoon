import React, {Component} from 'react';
import './App.css';
import data from './data'
import Header from './Header'
import Card from './Card'

class App extends Component {
  
  constructor() {
    super() 

    this.state = {
      userinfo: [],
      index: 0
    }

  }

  handleNextClick() {
    if (this.state.index < data.length -1) {
      this.setState({index: this.state.index + 1})
    } else {
      this.setState({index: 0})
    }
    console.log(this.state.index)
  }

  handlePrevClick() {
    if (this.state.index >= 1) {
    this.setState({index: this.state.index - 1})
    } else if (this.state.index === 0) {
      this.setState({index: data.length - 1})
    }
    else {
      this.setState({index: data.length})
    }
    console.log(this.state.index)
  }

  render() {
    let myArr = data.map(el => {
      return(
        <Card cardInfo={el}/>
      )
    })
    return (
      <div>
        <Header />
        <div className="flex">
        <div className='wrapper flex'>
        {myArr[this.state.index]}
        <div id='button-container'>
        <button onClick = {()=>this.handlePrevClick()}>Previous</button>
        <button onClick = {()=>this.handleNextClick()}>Next</button>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App;
