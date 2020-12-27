import HeaderAPI from "../api/HeaderAPI"
import { sortData } from "../utils/util"
import { setCenter, setZoom } from "./mapReducer"

const SET_COUNTRIES = 'SET_COUNTRIES',
    SET_COUNTRY = 'SET_COUNTRY',
    SET_STATISTIC = 'SET_STATISTIC',
    SET_TABLE_DATA = 'SET_TABLE_DATA',
    SET_MAP_COUNTRIES = 'SET_MAP_COUNTRIES',
    SET_CASES_TYPE = 'SET_CASES_TYPE'

let initialState = {
    countries: [],
    country: 'Worldwide',
    info: {},
    tableData: null,
    mapCountries: [],
    casesType: 'cases'
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.countries
            }
        case SET_COUNTRY:
            return {
                ...state,
                country: action.country
            }
        case SET_STATISTIC:
            return {
                ...state,
                info: action.info
            }
        case SET_TABLE_DATA:
            return {
                ...state,
                tableData: action.tableData
            }
        case SET_MAP_COUNTRIES: 
            return {
                ...state,
                mapCountries: action.countries
            }
        case SET_CASES_TYPE:
            return {
                ...state,
                casesType: action.casesType
            }
        default:
            return state
    }
}

const setCountries = countries => {
    return {
        type: SET_COUNTRIES,
        countries
    }
}

const setStatistic = info => {
    return {
        type: SET_STATISTIC,
        info
    }
}

const setCountry = (country = 'Worldwide') => {
    return {
        type: SET_COUNTRY,
        country
    }
}

const setTableData = tableData => {
    return {
        type: SET_TABLE_DATA,
        tableData
    }
}

const setMapCountries = countries => {
    return {
        type: SET_MAP_COUNTRIES,
        countries
    }
}

export const setCasesType = casesType => {
    return {
        type: SET_CASES_TYPE,
        casesType
    }
}

export const getAllCountries = () => dispatch => {
    HeaderAPI.getAllCountries()
    .then(data => {
        let countries = data.map(country => ({
            name: country.country,
            value: country.countryInfo.iso2,
            info: country.countryInfo
        }))
        const sortedData = sortData(data)
        dispatch(setTableData(sortedData))
        dispatch(setMapCountries(data))
        dispatch(setCountries(countries))
    })
}

export const getAllStatistic = () => dispatch => {
    HeaderAPI.getAllStatistic()
    .then(data => {
        dispatch(setCountry())
        dispatch(setStatistic(data))
    })
}

export const getSpecificStatistic = country => dispatch => {
    HeaderAPI.getSpecificStatistic(country)
    .then(data => {
        dispatch(setCountry(country))
        dispatch(setStatistic(data))
        dispatch(setCenter([
            data.countryInfo.lat,
            data.countryInfo.long
        ]))
        dispatch(setZoom(5))
    })
}