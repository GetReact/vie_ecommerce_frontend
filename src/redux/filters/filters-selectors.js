import { createSelector } from 'reselect';

const selectFilters = (state) => state.filters

export const selectSideBar = createSelector(
    [selectFilters],
    (filters) => filters.sidebar
);

export const selectSideBarFilters = createSelector(
    [selectSideBar],
    (sidebar) => sidebar.filters
);

export const selectSideBarDropped = createSelector(
    [selectSideBar],
    (sidebar) => sidebar.dropped
);