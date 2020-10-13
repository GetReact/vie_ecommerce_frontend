import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { UserContext } from './libs/contextLib';

class App extends Component {
  
  state = {
    currentUser : null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data(),
            }
          }, () => {
            this.props.history.push('/')
          })
        });
      } else this.setState({ currentUser : userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <UserContext.Provider value={ this.state.currentUser }>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes />
          </main>
          <div className="footer-distributed">
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </UserContext.Provider>
    );
  }
  
}

export default withRouter(App);
