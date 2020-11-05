import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument, firestore, convertCollectionsSnapshottoMap } from './firebase/firebase';
// import { auth, createUserProfileDocument, addCollectionandDocuments } from './firebase/firebase';

import { setCurrentUser } from './redux/user/user-action';
import { setLoading } from './redux/spinner/spinner-actions';
import { updateCollections } from './redux/shop/shop-actions';
import { resetFilters } from './redux/sidebar/sidebar-actions';

import { selectCurrentUser } from './redux/user/user-selectors';
import { selectCollections } from './redux/shop/shop-selectors';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, setLoading } = this.props;
    setLoading(true);
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
        
        const brands = [];
        collectionsMap.shoes.items.map(
          item => brands.includes(item.seller.toLowerCase()) ? null : brands.push(item.seller.toLowerCase())
        );  

        this.props.updateCollections(collectionsMap);
        this.props.resetFilters({ 
          brands: brands,
          staticBrands: brands,
        });
      });

      setLoading(false);

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
          <Navbar/>
        </header>
        <main>
          <div id='content-wrap'><Routes/></div>
          <Footer/>
        </main>
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
  setLoading: loadingState => dispatch(setLoading(loadingState)),
  resetFilters: newValues => dispatch(resetFilters(newValues)),
});

export default connect(mapStatetoProps, mapDispathtoProps)(App);
