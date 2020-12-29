import { createSelector } from 'reselect';

const selectFilters = (state) => state.filters

export const selectSideBar = createSelector(
    [selectFilters],
    (filters) => filters.sidebar
);

export const selectSearchBar = createSelector(
    [selectFilters],
    (filters) => filters.searchbar
);

export const selectSortBar = createSelector(
    [selectFilters],
    (filters) => filters.sortbar
);

export const selectSideBarFilters = createSelector(
    [selectSideBar],
    (sidebar) => sidebar.filters
);

export const selectSideBarDropped = createSelector(
    [selectSideBar],
    (sidebar) => sidebar.dropped
);

export const selectSearchBarKeywords = createSelector(
    [selectSearchBar],
    (searchbar) => searchbar.keywords  
);