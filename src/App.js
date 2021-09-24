import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    Person : {
      fullName : "OMAR SERGHINI",
      bio : `My name is OMAR SERGHINI and I am a full-stack Web.
      Application Developer and Software Developer, currently living in Morocco. 
      I'm really interested in technology & solving technical problems .
      My primary focus and inspiration for my studies is Web Development .
      For business inquiries feel free to get in touch with me at : serghini.omar00@gmail.com`,
      imgSrc : "https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png",
      profession :"Full-Stack web developer"
    },
    show :true,
    date: new Date()
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="myImage"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        <h2> {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default App
