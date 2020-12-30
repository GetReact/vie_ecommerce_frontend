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
    searchbar: {
        keywords: '',
    },
    sortbar: 'none',
    viewbar: 1,
}

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FiltersActionTypes.SET_SIDEBAR_FILTERS:
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
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    dropped: !state.sidebar.dropped,
                },
            }
        case FiltersActionTypes.SET_SEARCHBAR_FILTERS:
            return {
                ...state,
                searchbar: {
                    ...state.searchbar,
                    keywords: action.payload
                }
            }
        case FiltersActionTypes.SET_SORTBAR_VALUE:
            return {
                ...state,
                sortbar: action.payload
            }

        case FiltersActionTypes.SET_VIEWBAR_VALUE:
            return {
                ...state,
                viewbar: action.payload
            }
        default:
            return state;
    }
};

export default filtersReducer;