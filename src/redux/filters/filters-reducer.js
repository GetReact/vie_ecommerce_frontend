import { FiltersActionTypes } from './filters-types';

const INITIAL_STATE = {
    sidebar: {
        filters: {
            brands: [],
            staticBrands: [],
            minPrice: 0,
            maxPrice: 1000,
            minSize: 0,
            maxSize: 20,
            conditions: [],
        },
        dropped: false,
    },
    seachbar: {
        keywords: [],
    }
}

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FiltersActionTypes.SET_SIDEBAR_FILTERS:
            console.log(action.payload);
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    filters: {
                        ...state.sidebar.filters,
                        ...action.payload,
                    }
                },
            }
        case FiltersActionTypes.TOGGLE_SIDEBAR_DROPPED:
            console.log(state.sidebar);
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    dropped: !state.sidebar.dropped,
                },
            }
        default:
            return state;
    }
};

export default filtersReducer;