import { Map } from "maplibre-gl"

let map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-74.5, 40]
}).on('move', ev => {
    console.log(map.getCenter())
})