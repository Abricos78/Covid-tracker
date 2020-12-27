import LineGraphAPI from "../api/LineGraphAPI"

const SET_DATA = 'SET_DATA'

let initialState = {
    data: null
}

export let lineGraphReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

const setData = data => {
    return {
        type: SET_DATA,
        data
    }
}

export const getData = casesType => dispatch => {
    LineGraphAPI.getData(casesType)
    .then(data => {
        dispatch(setData(data))
    })
}


