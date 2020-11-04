import { SideBarActionTypes } from './sidebar-types';

const INITIAL_STATE = {
    filters: {
        brands: [],
        minPrice: 0,
        maxPrice: 1000,
        minSize: 0,
        maxSize: 20,
        conditions: [],
    },
    dropped: true,
}

const sidebarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SideBarActionTypes.RESET_SIDEBAR_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload,
                },
            }
        case SideBarActionTypes.TOGGLE_SIDEBAR_DROPPED:
            return {
                ...state,
                dropped: !state.dropped,
            }
        default:
            return state;
    }
};

export default sidebarReducer;