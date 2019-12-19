const initialState = {
    items: [],
    loading: true,
    error: null,
    visible: 6,
    step: 3,
    filters: {
        rooms_count: [],
        finish: false,
        floor: [0, 99],
        area: [10 , 999],
        price: [1000000, 13000000],
        price_per_meter: [0, 300000],
        payment: 10000000,
        initial_fee: 12000000,
        period: 30,
        calc: false,
        by_price: true,
        by_initial_fee: true,
    },
    sortBy: {
        type: null,
        direction: null
    }
};

const apartmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_APARTMENTS_REQUEST':
            return {
                ...state,
                items: [],
                loading: true,
                error: null,
            };
        case 'FETCH_APARTMENTS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_APARTMENTS_FAILURE':
            return {
                ...state,
                items: [],
                loading: false,
                error: action.payload,
            };
        case 'INC_VISIBLE_COUNT':
            return {
                ...state,
                visible: state.step + action.payload
            };
        case 'SET_APARTMENTS_SORT':
            return {
                ...state,
                sortBy: {...action.payload}
            };
        case 'RESET_APARTMENTS_ALL':
            return {
                ...state,
                sortBy: {...initialState.sortBy},
                filters: {...initialState.filters}
            };
        case 'SET_APARTMENTS_FILTERS':
            return {
                ...state
            };
        case 'SET_APARTMENTS_FINISH':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    finish: action.payload
                }
            };
        case 'SET_APARTMENTS_ROOMS_COUNT':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    rooms_count: [...state.filters.rooms_count, action.payload]
                }
            };
        case 'UNSET_APARTMENTS_ROOMS_COUNT':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    rooms_count: [
                        ...state.filters.rooms_count.slice(0, state.filters.rooms_count.indexOf(action.payload)),
                        ...state.filters.rooms_count.slice(state.filters.rooms_count.indexOf(action.payload) + 1)
                    ]
                }
            };
        case 'SET_APARTMENTS_RANGE_VALUE':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.name]: action.payload.value
                }
            };
        case 'SET_APARTMENTS_CALC_STATUS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    calc: !state.filters.calc
                }
            };

        case 'SET_APARTMENTS_FILTER_BY_PRICE':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    by_price: !state.filters.by_price
                }
            };
        case 'SET_APARTMENTS_FILTER_BY_INITIAL_FEE':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    by_initial_fee: !state.filters.by_initial_fee
                }
            };
        default:
            return state;
    }
};

export default apartmentReducer;