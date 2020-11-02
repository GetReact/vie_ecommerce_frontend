import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument, firestore, convertCollectionsSnapshottoMap } from './firebase/firebase';
// import { auth, createUserProfileDocument, addCollectionandDocuments } from './firebase/firebase';

import { setCurrentUser } from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selectors';
import { selectCollections } from './redux/shop/shop-selectors';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';
import { updateCollections } from './redux/shop/shop-actions';

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

      const collectionRef = firestore.collection('shop_data');
      collectionRef.onSnapshot(async snapshot => {
        const collectionsMap = convertCollectionsSnapshottoMap(snapshot);
        this.props.updateCollections(collectionsMap);
        // console.log(collectionsMap);
      });


      // console.log(this.props.shoesCollection);
      // addCollectionandDocuments('shop_data', this.props.shoesCollection);
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

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  shoesCollection: selectCollections,
});

const mapDispathtoProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStatetoProps, mapDispathtoProps)(App);
