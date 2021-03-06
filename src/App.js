import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Homepage from './components/page/homepage';
import Signin from './components/page/signin';
import Signup from './components/page/signup';
import Verify from './components/page/verify';
import Forget from './components/page/forget';
import Transport from './components/page/transport';
import About from './components/page/about';
import Analytics from './components/page/analytics';

import Highcharts from 'highcharts';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './asset/css/mapbox.min.css';
import './asset/css/default.min.css';

var colorList = ['#006284', '#1B813E', '#E3916E', '#FAD689', '#7DB9DE', '#00896C', '#FFBA84'];
const shuffled = colorList.sort(() => .5 - Math.random());
Highcharts.theme = {
  colors: shuffled
};
Highcharts.setOptions(Highcharts.theme);

class App extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="main-app">

            <Route component={Header}/>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/verify" component={Verify} />
            <Route exact path="/forget" component={Forget} />
            <Route exact path="/transport" component={Transport} />
            <Route exact path="/analytics" component={Analytics} />
            <Footer />

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
