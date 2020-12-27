import { instance } from "./Instance"

let HeaderAPI = {
    getAllCountries() {
        return (
            instance.get('countries')
            .then(response => response.data)
        )
    },
    getAllStatistic() {
        return (
            instance.get('all')
            .then(response => response.data)
        )
    },
    getSpecificStatistic(country) {
        return (
            instance.get('countries/' + country)
            .then(response => response.data)
        )
    }
}

export default HeaderAPI