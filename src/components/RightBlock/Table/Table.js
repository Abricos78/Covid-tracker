import React from 'react'
import { connect } from 'react-redux'
import style from './Table.module.css'
import numeral from 'numeral'

function Table({tableData}) {
    return tableData ? 
        <div className={style.table}>
            {tableData.map(({country, cases}) => (
                <tr>
                    <td>{country}</td>
                    <td><strong>{numeral(cases).format('0,0')}</strong></td>
                </tr>
            ))}
        </div>
    : <div>Preloader</div>

}

let mapStateToProps = state => {
	return {
		tableData: state.header.tableData
	}
}

let TableContainer = connect(mapStateToProps, null)(Table)


export default TableContainer
