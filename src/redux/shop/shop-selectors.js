import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections,
);

export const selectShoesCollection = createSelector(
    [selectCollections],
    collections => collections ? collections : [],
);

export const selectShoes = params => createSelector(
    [selectShoesCollection],
    shoesCollection => shoesCollection.find(
        item => item.id === params
    ),
);