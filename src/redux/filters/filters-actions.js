import { FiltersActionTypes } from './filters-types';

export const setSideBarFilters = (newFilters) => ({
    type: FiltersActionTypes.SET_SIDEBAR_FILTERS,
    payload: newFilters,
});

export const toggleSideBarDropped = () => ({
    type: FiltersActionTypes.TOGGLE_SIDEBAR_DROPPED,
});

export const setSearchBarFilters = (keywords) => ({
    type: FiltersActionTypes.SET_SEARCHBAR_FILTERS,
    payload: keywords,
});

export const setSortBarValue = (value) => ({
    type: FiltersActionTypes.SET_SORTBAR_VALUE,
    payload: value,
});

export const setViewBarValue = (value) => ({
    type: FiltersActionTypes.SET_VIEWBAR_VALUE,
    payload: value,
});