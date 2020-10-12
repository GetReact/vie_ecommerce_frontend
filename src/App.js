import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './containers/Routes';
import Footer from './components/Footer/Footer';
import { auth, createUserProfileDocument } from './firebase/firebase';

const App = () => {
  
  const [ currentUser , setCurrentUser ] = useState(null);

  useEffect(() => {
    onLoad();
  },)

  const onLoad = async () => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        });
      } else setCurrentUser(userAuth);
    })
  }
  
  return (
    <div className="App">
      <header>
        <Navbar currentUser={currentUser}/>
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

export default App;
