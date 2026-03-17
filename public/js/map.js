{/* let mapToken = mapToken;
    console.log(mapToken); */}
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",  // Map style URL
    center: listing.geometry.coordinates, // starting position [long, lat] (opposite is there in mapbox apart from (lat, long))
    zoom: 8 // starting zoom
});

// console.log(coordinates);

// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({color: 'red'})
    .setLngLat(listing.geometry.coordinates)   // Listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup({offset: 25})  // Marker Popup
    .setHTML(`<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`))
    .addTo(map);     
    
// const popup = new mapboxgl.
//     .setLngLat(coordinates)
//     .setHTML("<h1>Hello World!</h1>")
//     .setMaxWidth("300px")
//     .addTo(map);    