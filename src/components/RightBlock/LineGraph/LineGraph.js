import numeral from 'numeral'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { getData } from '../../../redux/lineGraphReducer'

class LineGraph extends React.Component {

    componentDidMount = () => {
        this.props.getData(this.props.casesType)
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.casesType !== prevProps.casesType) {
            this.props.getData(this.props.casesType)
        }
    }

    render = () => {
        const options = {
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (tooltipItem, data) {
                        return numeral(tooltipItem.value).format('+0,0')
                    }
                }
            },
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            format: 'MM/DD/YY',
                            tooltipFormat: 'll'
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            callback: function (value, index, values) {
                                return numeral(value).format('0a')
                            }
                        }
                    }
                ]
            }
        }
        return (
            <div className={this.props.className}>
                {this.props.data?.length > 0 && (
                    <Line 
                        options={options}
                        data={{
                            datasets: [{
                            backgroundColor: 'rgba(204, 16, 52, .5)',
                            borderColor: '#CC1034',
                            data: this.props.data
                            }]
                        }} 
                    />
                )}

            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        data: state.lineGraph.data,
        casesType: state.header.casesType
    }
},
    mapDispatchToProps = dispatch => {
        return {
            getData: casesType => {
                dispatch(getData(casesType))
            }
        }
    }

let LineGraphContainer = connect(mapStateToProps, mapDispatchToProps)(LineGraph)

export default LineGraphContainer
