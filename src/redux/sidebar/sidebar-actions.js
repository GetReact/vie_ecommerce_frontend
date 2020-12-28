import { SideBarActionTypes } from './sidebar-types';

export const setFilters = (newFilters) => ({
    type: SideBarActionTypes.RESET_SIDEBAR_FILTERS,
    payload: newFilters,
});

export const toggleSideBarDropped = () => ({
    type: SideBarActionTypes.TOGGLE_SIDEBAR_DROPPED,
});