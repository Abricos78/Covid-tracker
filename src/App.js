import { Card, CardContent } from '@material-ui/core';
import './App.css';
import HeaderContainer from './components/LeftBlock/Header/Header';
import MapContain from './components/LeftBlock/Map/Map';
import StatsContainer from './components/LeftBlock/Stats/Stats';
import LineGraphContainer from './components/RightBlock/LineGraph/LineGraph';
import TableContainer from './components/RightBlock/Table/Table';
import { connect } from 'react-redux';

function App({casesType}) {
	return (
		<div className='app'>
			<div className='leftBlock'>
				<HeaderContainer />
				<StatsContainer />
				<MapContain />
			</div>

			<Card className='rightBlock'>
				<CardContent>
					<h3>Live cases by Country</h3>
					<TableContainer />
					<h3 className='graphTitle'>Worldwide new {casesType}</h3>
					<LineGraphContainer className='graph' />
				</CardContent>
			</Card>
		</div>
	);
}

let mapStateToProps = state => {
	return {
		casesType: state.header.casesType
	}
}

let AppContainer = connect(mapStateToProps, null)(App)



export default AppContainer;
