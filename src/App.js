import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './firebase/firebase';

import { setCurrentUser } from './redux/user/user-action';
import { setLoading } from './redux/spinner/spinner-actions';
import { updateCollections } from './redux/shop/shop-actions';
import { setSideBarFilters, setViewBarValue } from './redux/filters/filters-actions';

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
    this.unsubscribeFromAuth = async () => {
      setLoading(true);
      auth.onAuthStateChanged(async userCredentials => {
        if (userCredentials) {
          console.log(userCredentials);
          const { uid, displayName, email } = userCredentials;
          setCurrentUser({
            id: uid,
            displayName,
            email
          });
        } else { setCurrentUser(null) }
      });

      await axios({
        url: '/shoes',
        method: 'get',
      }).then(response => {
        console.log(response.data.collection)
        const shoesCollection = response.data.collection;
        const brands = [];
        shoesCollection.map(
          item => brands.includes(item.seller.toLowerCase()) ? null : brands.push(item.seller.toLowerCase())
        );  

        this.props.updateCollections(shoesCollection);
        this.props.setSideBarFilters({ 
          staticBrands: [...brands],
        });
        if (shoesCollection.length > 10) this.props.setViewBarValue(5);
        else this.props.setViewBarValue(shoesCollection.length)
      }).catch(error => {
        console.log(error)
        return null;
      });
      setLoading(false);
    }
    this.unsubscribeFromAuth();
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
  setSideBarFilters: newValues => dispatch(setSideBarFilters(newValues)),
  setViewBarValue: value => dispatch(setViewBarValue(value))
});

export default connect(mapStatetoProps, mapDispathtoProps)(App);
