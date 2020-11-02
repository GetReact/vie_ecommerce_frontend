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
import WithSpinner from '../hoc/WithSpinner';

const HomeWithSpinner = WithSpinner(Home);
const ProductPageWithSpinner = WithSpinner(ProductPage);

const Routes = (props) => {
    const { isLoading } = props;
    return (
        <Switch>
            <Route 
                exact path="/" 
                render={() => <HomeWithSpinner isLoading={ isLoading }/>}
            />
            <Route 
                exact path="/signin" 
                render={() => 
                    props.currentUser ? (
                        <Redirect to="/"/>
                    ) : (
                        <AuthenticationPage/>
                    )}
            />
            <Route 
                exact path="/shop" 
                render={() => <ProductPageWithSpinner isLoading={ isLoading }/>}
            />
            <Route exact path="/details/:id" component={DetailPage}/>
            <Route exact path="/sell-now" component={SellPage}/>
            <Route exact path="/how-to-sell" component={HowToSell}/>
            <Route exact path="/image-standards">
                <img 
                    alt="background"
                    className="background" 
                    src="assets/images/how-to-sell/standard/standard-background.jpg"
                    style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                />
                <StandardPage/>
            </Route>
            <Route exact path="/how-to-ship">
                <img 
                    alt="background"
                    className ="background"
                    src="assets/images/how-to-sell/ship/backgroundship.jpg"
                    style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                />
                <HowToShipPage/>
            </Route>
            <Route exact path="/profile" component={ProfilePage}/>
            <Route exact path="/cart" component={CartPage}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

const mapStatetoProps = (state) => ({
    currentUser: state.user.currentUser,
})

export default connect(mapStatetoProps)(Routes);
