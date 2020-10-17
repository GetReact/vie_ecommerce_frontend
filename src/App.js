import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';
import { auth, createUserProfileDocument } from './firebase/firebase';
// import { UserContext } from './libs/contextLib';
import { setCurrentUser } from './redux/user/user-action';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data(),
            }
          }, () => {
            this.props.history.push('/')
          })
        });
      } else setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      // <UserContext.Provider value={ this.state.currentUser }>
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
      // </UserContext.Provider>
    );
  }
  
}

const mapDispathtoProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispathtoProps)(App);
