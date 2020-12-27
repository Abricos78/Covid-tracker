import React from 'react'
import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'
import style from '../components/LeftBlock/Map/Map.module.css'


export const sortData = data => {
    const sortedData = [...data]

    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1)
}

export const buildChartData = (data, casesType = 'cases') => {
    const chartData = []
    let lastDataPoint;

    for(let date in data[casesType]) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            }
            chartData.push(newDataPoint)
        }
        lastDataPoint = data[casesType][date]
    }
    return chartData
}

export const prettyPrintStat = stat => stat ? `+${numeral(stat).format('0.0a')}` : ''

const casesTypeColors = {
    cases: {
        hex: '#CC1034',
        multiplier: 800
    },
    recovered: {
        hex: '#7dd71d',
        multiplier: 1200
    },
    deaths: {
        hex: '#fb4443',
        multiplier: 2000
    }
}

export const showDataOnMap = (data, casesType) => 
    data.map((country, key) => (
        <Circle
            key={key}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.6}
            color={ casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType] * casesTypeColors[casesType].multiplier) * 6
            }
            stroke={false}
        >
            <Popup>
                <div className={style.infoContainer}>
                    <div className={style.flag} style={{backgroundImage: `url(${country.countryInfo.flag})`}}></div>
                    <div className={style.name}>{country.country}</div>
                    <div className={style.confirmed}>Cases: {numeral(country.cases).format('0,0')}</div>
                    <div className={style.recovered}>Recovered: {numeral(country.recovered).format('0,0')}</div>
                    <div className={style.deaths}>Deaths: {numeral(country.deaths).format('0,0')}</div>
                </div>
            </Popup>
        </Circle>
        ))



