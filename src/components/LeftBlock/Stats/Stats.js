import React from 'react'
import { connect } from 'react-redux'
import { prettyPrintStat } from '../../../utils/util'
import InfoBlock from './InfoBlock/InfoBlock'
import style from './Stats.module.css'
import {setCasesType} from '../../../redux/headerReducer'

function Stats({info, setCasesType, casesType}) {
    return (
        <div className={style.stats}>
            <InfoBlock isRed={true} active={casesType === 'cases'} onClick={e => setCasesType('cases')} title='Coronavirus Cases' cases={prettyPrintStat(info.todayCases)} total={prettyPrintStat(info.cases)} />
            <InfoBlock isRed={false} active={casesType === 'recovered'} onClick={e => setCasesType('recovered')} title='Recovered' cases={prettyPrintStat(info.todayRecovered)} total={prettyPrintStat(info.recovered)} />
            <InfoBlock isRed={true} active={casesType === 'deaths'} onClick={e => setCasesType('deaths')} title='Deaths' cases={prettyPrintStat(info.todayDeaths)} total={prettyPrintStat(info.deaths)} />
        </div>
    )
}

let mapStateToProps = state => {
    return {
        info: state.header.info,
        casesType: state.header.casesType
    }
},
    mapDispatchToProps = dispatch => {
        return {
            setCasesType: cases => {
                dispatch(setCasesType(cases))
            }
        }
    }

let StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats)

export default StatsContainer
