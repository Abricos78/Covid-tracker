import React from 'react'
import style from './Header.module.css'
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAllCountries, getAllStatistic, getSpecificStatistic } from '../../../redux/headerReducer';

class Header extends React.Component {

    componentDidMount() {
        this.props.getAllCountries()
        this.props.getAllStatistic()
    }

    onCountryChange = event => {
        const countryCode = event.target.value
        countryCode === 'Worldwide' ? this.props.getAllStatistic() : this.props.getSpecificStatistic(countryCode)
    }

    render = () => {
        return (
            <div className={style.header}>
                <h1>Covid-19 Tracker</h1>
                <div className='header'>
                    
                </div>
                <FormControl className={style.dropdown}>
                    <Select 
                        variant='outlined'
                        value={this.props.country}
                        onChange={this.onCountryChange}
                    >
                        <MenuItem value='Worldwide'>Worldwide</MenuItem>
                        {this.props.countries.map(country => <MenuItem value={country.value}>{country.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        countries: state.header.countries,
        country: state.header.country,
        info: state.header.info
    }
},
    mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => {
            dispatch(getAllCountries())
        },
        getAllStatistic: () => {
            dispatch(getAllStatistic())
        },
        getSpecificStatistic: country => {
            dispatch(getSpecificStatistic(country))
        }
    }
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
