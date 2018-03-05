import React, { Component } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TransitionGroup>
          <CSSTransition
              timeout={500}
              classNames="slide-in"
              key={this.props.location.pathname}
              >
              <div>
                {this.props.children}
              </div>       
          </CSSTransition>
      </TransitionGroup>
      </div>
    );
  }
}

export default App;
