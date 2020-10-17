import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import AuthenticationPage from './AuthenticationPage/AuthenticationPage';
import NotFound from './NotFound/NotFound';
import ProductPage from './ShopPage/ShopPage';
import DetailPage from './DetailPage/DetailPage';
import SellPage from './SellPage/SellPage';
import StandardPage from './HowToSellPage/Standard/ImageStandard';
import HowToShipPage from './HowToSellPage/HowToShip';
import HowToSell from './HowToSellPage/HowToSell';
import ProfilePage from './ProfilePage/ProfilePage';
import CartPage from './CartPage/CartPage';
import { connect } from 'react-redux';

const Routes = (props) => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route 
            exact path="/signin" 
            render= {() => 
                props.currentUser ? (
                    <Redirect to="/" />
                ) : (
                    <AuthenticationPage />
                )}>
        </Route>
        <Route exact path="/shop">
            <ProductPage />
        </Route>
        <Route exact path="/details/:id">
            <DetailPage/>
        </Route>
        <Route exact path="/sell-now">
            <SellPage />
        </Route>
        <Route exact path="/how-to-sell">
            <HowToSell />
        </Route>
        <Route exact path="/image-standards">
            <img 
                alt="background"
                className="background" 
                src="assets/images/how-to-sell/standard/standard-background.jpg"
                style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
            />
            <StandardPage />
        </Route>
        <Route exact path="/how-to-ship">
            <img 
                alt="background"
                className ="background"
                src="assets/images/how-to-sell/ship/backgroundship.jpg"
                style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
            />
            <HowToShipPage />
        </Route>
        <Route exact path="/profile">
            <ProfilePage/>
        </Route>
        <Route exact path="/cart">
            <CartPage/>
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
);

const mapStatetoProps = (state) => ({
    currentUser: state.user.currentUser,
})

export default connect(mapStatetoProps)(Routes);
