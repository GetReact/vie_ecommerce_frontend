import { createSelector } from 'reselect';

// const SHOP_DATA_ID_MAP = {
//     shoesCollection : 0,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections,
);

export const selectShoesCollection = createSelector(
    [selectCollections],
    collections => collections[0].shoes,
)
