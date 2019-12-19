import {apartmentsApi} from '../../utils/api';

const apartmentsLoaded = (items) => {
    return {
        type: 'FETCH_APARTMENTS_SUCCESS',
        payload: items
    }
};

const apartmentsRequested = () => {
    return {
        type : 'FETCH_APARTMENTS_REQUEST'
    }
};

const apartmentsError = (error) => {
    return {
        type: 'FETCH_APARTMENTS_FAILURE',
        payload: error
    }
};

const fetchApartments = () => (dispatch) =>{

    dispatch(apartmentsRequested());

    apartmentsApi.getAll().then(({data}) => {
        console.log(data);
        dispatch(apartmentsLoaded(data));
    }).catch((error) => {
        dispatch(apartmentsError(error))
    });
};

const incVisibleCount = (count) => (dispatch) =>{
    dispatch({
        type: 'INC_VISIBLE_COUNT',
        payload: count
    })
};

const setSort = (sort) => (dispatch) =>{
    dispatch({
        type: 'SET_APARTMENTS_SORT',
        payload: sort
    })
};

const resetAll = () => (dispatch) => {
    dispatch({
        type: 'RESET_APARTMENTS_ALL'
    })
};

const setFinish = (finish) => (dispatch) => {
    dispatch({
        type: 'SET_APARTMENTS_FINISH',
        payload: finish
    })
};

const setRoomsCount = (roomsCount) => (dispatch) => {
    dispatch({
        type: 'SET_APARTMENTS_ROOMS_COUNT',
        payload: roomsCount
    })
};

const unSetRoomsCount = (roomsCount) => (dispatch) => {
    dispatch({
        type: 'UNSET_APARTMENTS_ROOMS_COUNT',
        payload: roomsCount
    })
};

const setRangeValue = (value) => (dispatch) => {
    dispatch({
        type: 'SET_APARTMENTS_RANGE_VALUE',
        payload: value
    })
};

const setFilterCalc = () => (dispatch) => {
    dispatch({
        type: 'SET_APARTMENTS_CALC_STATUS'
    })
};

const setFilterByPrice = () => (dispatch) => {
    dispatch({
        type: 'SET_APARTMENTS_FILTER_BY_PRICE'
    })
};

const setFilterByInitialFee = () => (dispatch) => {
    dispatch({
        type: 'SET_APARTMENTS_FILTER_BY_INITIAL_FEE'
    })
};

export {
    fetchApartments,
    incVisibleCount,
    setSort,
    setFinish,
    setRoomsCount,
    unSetRoomsCount,
    setRangeValue,
    setFilterCalc,
    setFilterByPrice,
    setFilterByInitialFee,
    resetAll
}