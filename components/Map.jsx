const MapView = require('react-native-maps');

export function Map()
{
    return (
        <MapView Region={{
            latitude: 33.75288009643555,
            longitude: -84.3924331665039,
            latitudeDelta: 0.4301,
            longitudeDelta: 0.4301,
        }}/>
    )
}