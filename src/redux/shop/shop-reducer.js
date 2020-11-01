import collection from'../../containers/ShopPage/ShopData';

const INITIAL_STATE = {collection};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;   
    }
}

export default shopReducer;

