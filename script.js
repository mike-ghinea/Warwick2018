var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(52.2823,1.5849),
    mapTypeId: 'terrain'
    });

    getCrimeData(52.2823, 1.5849, '2017-02')
        .then(addMarkers);
}

function addMarkers(crime) {
    crime.forEach(result => {
        const coords = result.location;
        const latLng = new google.maps.LatLng(coords.latitude,coords.longitude);
        const marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    });
}

function getCrimeData(latitude, longitude, date) {
    return new Promise((resolve, reject) => {
        const POLICE_URL = 'https://data.police.uk/api/crimes-street/all-crime';
        $.ajax({
            type: 'GET',
            data: {
                lat: latitude,
                lng: -longitude,
                date: date,
            },
            url: POLICE_URL,
            success: resolve,
            error: reject
        })
    })
}
