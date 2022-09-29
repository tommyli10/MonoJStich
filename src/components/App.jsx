import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header.jsx';
import Oneliner from './Oneliner.jsx';
import Home from './Home.jsx';
import Addline from './Addline.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Gallery from './Gallery.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {firebaseConfig : {
      apiKey: "AIzaSyD_Dn4SrqQGddzYKscHXuxxUdAuv5TpuTI",
      authDomain: "firebasics-b4ace.firebaseapp.com",
      projectId: "firebasics-b4ace",
      storageBucket: "firebasics-b4ace.appspot.com",
      messagingSenderId: "1068267291914",
      appId: "1:1068267291914:web:06c7706618928bf67726f3",
      measurementId: "G-VXH1SVPYHH"
    } }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route path='/addline'>
                <Addline config={this.state.firebaseConfig}/>
              </Route>
              <Route path='/signup'>
                <Signup config={this.state.firebaseConfig}/>
              </Route>
              <Route path='/login'>
                <Login config={this.state.firebaseConfig}/>
              </Route>
              <Route path='/all'>
                <Gallery config={this.state.firebaseConfig}/>
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
