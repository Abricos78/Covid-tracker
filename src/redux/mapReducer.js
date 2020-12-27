const SET_CENTER = 'SET_CENTER',
    SET_ZOOM = 'SET_ZOOM',
    SET_COLOR = 'SET_COLOR'

let initialState = {
    center: {
        lat: 54.80746,
        lng: -10.4796
    },
    zoom: 3,
    color: '#CC1034'
}

export let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CENTER:
            return {
                ...state,
                center: action.data
            }
        case SET_ZOOM:
            return {
                ...state,
                zoom: action.zoom
            }
        case SET_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}

export const setCenter = data => {
    return {
        type: SET_CENTER,
        data
    }
}

export const setZoom = zoom => {
    return {
        type: SET_ZOOM,
        zoom
    }
}

export const setColor = color => {
    return {
        type: SET_COLOR,
        color
    }
}

