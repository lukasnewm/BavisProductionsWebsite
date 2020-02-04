$(document).ready(function() {

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&appid=754d7a143c1f0fcf23f1b1e803ecff10",
        type: "GET",
        dataType: "json",
        success: function(data) {
            var weather = data.weather[0].main;
            var description = data.weather[0].description;
            var temp = Math.floor(data.main.temp);
            var humidity = data.main.humidity;

            var html = "<p>Description: " + weather + ", " + description + "<br>" +
                        "Tempature: " + temp + "<br>" +
                        "Humidity: " + humidity + " </p>";
            
            document.getElementById("weather").innerHTML += html;
        }
    });
    


});