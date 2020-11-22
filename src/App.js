import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { firestore, convertCollectionsSnapshottoMap } from './firebase/firebase';
// import { addCollectionandDocuments } from './firebase/firebase';

import { setCurrentUser } from './redux/user/user-action';
import { setLoading } from './redux/spinner/spinner-actions';
import { updateCollections } from './redux/shop/shop-actions';
import { resetFilters } from './redux/sidebar/sidebar-actions';

import { selectCurrentUser } from './redux/user/user-selectors';
import { selectCollections } from './redux/shop/shop-selectors';

import { axios_instance as axios } from './config';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, setLoading } = this.props;
    console.log('component did mount');
    setLoading(true);
    
    this.unsubscribeFromAuth = async () => {
      
      let userAuth = null;
      userAuth = await axios({
        url: '/me',
        method: 'get',
        withCredentials: true,
      }).then(response => {
        console.log(response.data.message)
        return response.data.message;
      }).catch( error => {
        // console.log(error.response.data.error)
        return null;
      });

      if (userAuth) {
        setCurrentUser(userAuth, () => {
          this.props.history.push('/')
        })
      } else setCurrentUser(userAuth);

      await axios({
        url: '/shoes',
        method: 'get',
        withCredentials: true,
      }).then(response => {
        console.log(response.data.message)
        const shoesCollection = response.data.message;
        const brands = [];
        shoesCollection.map(
          item => brands.includes(item.seller.toLowerCase()) ? null : brands.push(item.seller.toLowerCase())
        );  

        this.props.updateCollections(shoesCollection);
        this.props.resetFilters({ 
          brands: brands,
          staticBrands: brands,
        });
      }).catch(error => {
        // console.log(error.response.data.error)
        return null;
      });
      setLoading(false);
    }

    this.unsubscribeFromAuth();
  }

  componentWillUnmount() {
    console.log('componentwillunmount')
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
