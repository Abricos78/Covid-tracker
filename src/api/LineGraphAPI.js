import { buildChartData } from "../utils/util";
import { instance } from "./Instance";



let LineGraphAPI = {
    getData(casesType) {
        return (
            instance.get('historical/all')
            .then(response => {
                const chartData = buildChartData(response.data, casesType)
                return chartData
            })
        ) 
    }
}

export default LineGraphAPI