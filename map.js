//define places on earth
let wallCoord = [37.8808718,-122.236439]
let schoolCoord =  [37.8724961,-122.2579945]
let coffeeCoord = [37.8696448,-122.2560644]

//define zoom
let myZoom = 14;

// make map object
let myMap = L.map('map');

// provide map values
myMap.setView( schoolCoord, myZoom );
L.control.locate().addTo(myMap);

// get map title provider - OpenStreetMap
let myTiles = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreettmap.org/copyright">OpenStreetMap</a>'
    }
);

//connect tile layer to map object
myTiles.addTo(myMap);

//create markers
let wallMarker = L.marker( wallCoord );
let schoolMarker = L.marker( schoolCoord );
let coffeeMarker = L.marker( coffeeCoord );

//place marker on map
wallMarker.addTo( myMap );
schoolMarker.addTo( myMap );
coffeeMarker.addTo( myMap );

//make marker clickable
let wallPopUp = wallMarker.bindPopup('<strong>The Best Place To Watch Sunset</strong>')
let schoolPopUp = schoolMarker.bindPopup('<strong>Where I Studied</strong>')
let coffeePopUp = coffeeMarker.bindPopup('<strong>Where I spent my mornings having coffee while studying</strong>')

// add vector shapes
let myCircle = L.circle(
    [37.8808718,-122.236439],
    {
        color: 'red',
        fillColor: '#ff0033',
        fillOpacity: 0.5,
        radius: 100
    }
);

//add to map
myCircle.addTo(myMap);

//add popup
myCircle.bindPopup('Great View')

//polygon
let myPoly = L.polygon(
    [
        [37.884347,-122.2489919],
        [37.895335,-122.2378069],
        [37.761883,-122.0902679],
        [37.735065,-122.1006779]
    ]
);

myPoly.addTo(myMap);
myPoly.bindPopup('Where I hike and ride motorcycles with friends')

// get the browser's geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(addUserToMap);
} else {
    console.log("Somethings not right...");
}

// add the geolocation to the userCoord, and add it to the map
function addUserToMap(position) {
    // put the lat and lng into userCoord
    let userCoord = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    // add user's location as a marker on the map
    let userMarker = L.marker([userCoord.lat, userCoord.lng]);
    userMarker.addTo(myMap);
    let userPopUp = userMarker.bindPopup('You Are Here :)');
    userPopUp.addTo(myMap);
}