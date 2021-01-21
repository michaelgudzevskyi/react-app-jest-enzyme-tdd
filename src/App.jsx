import { Component } from 'react'
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}/>
      </div>
    );
  }
  
}

export default App;
