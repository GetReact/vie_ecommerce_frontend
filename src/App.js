import React, { Component } from 'react';
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user-action';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';

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
    );
  }
  
}

const mapDispathtoProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispathtoProps)(App);
