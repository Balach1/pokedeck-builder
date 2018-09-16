import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';


class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path= "/" component={Home} />
          <Route exact={true} path= "/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
