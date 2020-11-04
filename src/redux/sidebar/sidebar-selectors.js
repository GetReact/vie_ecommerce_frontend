import { createSelector } from 'reselect';

const selectSideBar = (state) => state.sidebar;

export const selectSideBarFilters = createSelector(
    [selectSideBar],
    (sidebar) => sidebar.filters,
);

export const selectSideBarDropped = createSelector(
    [selectSideBar],
    (sidebar) => sidebar.dropped,
);