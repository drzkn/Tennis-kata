import React from "react";
import ReactDOM from "react-dom";
import Start from "./Start";
import Match from "./Match";
import TennisGame from "./TennisGame.ts";
import { Router, Route } from "react-router-dom";
import "./styles.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchStarted: false,
      tennisGame: '',
      score: [{id:Date.now() ,content: 'Love all'}]
    };
  }

  endMatch = () => {
    this.setState({
        matchStarted: false
    });

    history.push("/");
  };

  startMatch = (namePlayer1, namePlayer2) => {
    this.setState({
      matchStarted: true,
      tennisGame: new TennisGame(namePlayer1, namePlayer2),
      score: [{id:Date.now() ,content: 'Love all'}]
    });

    history.push("/match")
  };

  updateScore = () => prevState => {
    const { score } = prevState;
    const newScore = [...score, {id: Date.now(), content: this.state.tennisGame.getScore()}];
    return { score: newScore };
  };
  
  wonPlayer1 = () => {
    this.state.tennisGame.wonPoint(this.state.tennisGame.name1);
    this.setState(this.updateScore());
  }

  wonPlayer2 = () => {
    this.state.tennisGame.wonPoint(this.state.tennisGame.name2);
    this.setState(this.updateScore());
  }

  render() {
    return  (
      <Router history={history}>
        <Route 
          path="/match"
          render={(props) => 
            <Match 
              onWonPlayer1={this.wonPlayer1} 
              onWonPlayer2={this.wonPlayer2}
              namePlayer1={this.state.tennisGame.name1}
              namePlayer2={this.state.tennisGame.name2}
              score={this.state.score}
              anyoneHasWon={this.state.tennisGame.anyoneHasWon}
            />}
        />
        <Route 
          path="/" exact
          render={(props) => <Start {...props} onStartMatch={this.startMatch}/>} 
        />

      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);