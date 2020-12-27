import React from 'react'
import { MapContainer as LeafletMap, TileLayer, useMap} from 'react-leaflet'
import { connect } from 'react-redux'
import style from './Map.module.css'
import numeral from 'numeral'
import { setColor } from '../../../redux/mapReducer'
import 'leaflet/dist/leaflet.css'
import { showDataOnMap } from '../../../utils/util'




function ChangeMap({center, zoom}) {
    const map = useMap()
    map.setView(center, zoom)
    return null
}

function Map ({center, zoom, mapCountries, casesType}) {

        return (
                <div className={style.map}>
                    <LeafletMap className={style.container} >
                        <ChangeMap center={center} zoom={zoom} />
                        <TileLayer
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {showDataOnMap(mapCountries, casesType)}
                    </LeafletMap>
    
                </div>
            )
        }


let mapStateToProps = state => {
    return {
        center: state.map.center,
        zoom: state.map.zoom,
        mapCountries: state.header.mapCountries,
        casesType: state.header.casesType,
        color: state.map.color
    }
},
    mapDispatchToProps = dispatch => {
        return {
            setColor: color => {
                dispatch(setColor(color))
            }
        }
    }

let MapContain = connect(mapStateToProps, mapDispatchToProps)(Map)



export default MapContain
