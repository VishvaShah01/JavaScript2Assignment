/*
    Assignment #4
    Vishva Shah
    0784026
*/

$(function () {
    navigator.geolocation.getCurrentPosition(success, () => {
        console.log("Please enable geolocation in order to see your coordinates");

    });

});

    function success(position) {
        console.log("Position object: ", position);
        console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
        var latitudeVal = position.coords.latitude;
        var longitudeVal = position.coords.longitude;
        $("div#locationhere").html("Latitude: " + latitudeVal + "<br>" + "  Longitude: " + longitudeVal);

        if (localStorage.getItem("Latitude") && localStorage.getItem("Longitude")) {
            let latitudeValueObject = localStorage.getItem("Latitude");
            let longitudeValueObject = localStorage.getItem("Longitude");

            let latitudeObject = JSON.parse(latitudeValueObject);
            let longitudeObject = JSON.parse(longitudeValueObject);

            localStorage.setItem("Latitude", JSON.stringify(latitudeObject));
            localStorage.setItem("Longitude", JSON.stringify(longitudeObject));
            //console.log("Latitude object: ", latitudeValueObject + " Longitude object: ", latitudeValueObject);
            
           $('#content').append("<h2>Old Location!!</h2>" , "Latitude: " , latitudeValueObject , "<br>" , "Longitude: " , longitudeValueObject);
           $('#content').append("<h2>Welcome Back to the page</h2>");

           var saveDistance = calcDistanceBetweenPoints(latitudeValueObject,longitudeValueObject,latitudeVal,longitudeVal);
           var saveDistanceKM = calcDistanceBetweenPoints(latitudeValueObject,longitudeValueObject,latitudeVal,longitudeVal)/1000;
           $('#content').append("<h4>You travelled this much: " + saveDistance.toFixed(3) + " meters" + "</h4>");
           $('#content').append("<h4>You travelled this much: " + saveDistanceKM.toFixed(4) + " km" + "</h4>");
   
        } else {
            $('#content').append("<h2>Welcome to the page for the First Time</h2>");
            //console.log("Local storage is empty!!!");

            localStorage.setItem("Latitude", JSON.stringify(latitudeVal));
            localStorage.setItem("Longitude", JSON.stringify(longitudeVal));
        }
    }
   // $('#locationhere').accordion();


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }

