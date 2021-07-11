function attachEvents() {
    const locationInput = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const displayForecastDiv = document.getElementById('forecast');
    const currentWeatherDiv = document.getElementById('current');
    const currentForecastDiv = document.createElement('div');
    currentForecastDiv.className = 'forecasts';
    const upcomingWeatherDiv = document.getElementById('upcoming');
    // testing
    const upcomingForecastDiv = document.createElement('div');
    upcomingForecastDiv.className = 'forecast-info';
    // upcomingWeatherDiv.appendChild(upcomingForecastDiv);
    const locationSpan = document.createElement('span');
    locationSpan.className = 'forecast-data';
    const temperatureSpan = document.createElement('span');
    temperatureSpan.className = 'forecast-data';
    const conditionSpan = document.createElement('span');
    conditionSpan.className = 'condition';
    const conditionTypeSpan = document.createElement('span');
    conditionTypeSpan.className = 'forecast-data';
    const conditionSymbolImage = document.createElement('img');
    conditionSymbolImage.className = 'condition symbol';
    let degreeSymbol = String.fromCharCode(8457);
    
    submitBtn.addEventListener('click', () => {
        displayForecastDiv.style.display = 'block';
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "814ac7cccdmsh65f8029b99df7c3p1a863djsn2f393b9231d1");
        myHeaders.append("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${locationInput.value}&days=4`, requestOptions)
        .then(response => response.json())
        .then(data => {
            // Removes the 3 day forecast images from the previous search
            function removeAllChildren(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            removeAllChildren(upcomingForecastDiv);
            // Retreives info from data object needed to print required content
            locationSpan.textContent = `${data.location.name}, ${data.location.country}`;// { City, Country }
            temperatureSpan.textContent = `${data.forecast.forecastday[0].day.mintemp_f} ${degreeSymbol} / ${data.forecast.forecastday[0].day.maxtemp_f} ${degreeSymbol}`;// { 77.2 ℉ / 82.6 ℉ }
            conditionTypeSpan.textContent = `${data.current.condition.text}`;// { Partly cloudy }
            conditionSymbolImage.src = `https:${data.forecast.forecastday[0].day.condition.icon}`;// uses provided URL in object to retrieve provided image..the "https:" must be added manually
           
            // Append all to condition span
            conditionSpan.appendChild(locationSpan);
            conditionSpan.appendChild(temperatureSpan);
            conditionSpan.appendChild(conditionTypeSpan);
            // Append condition span to forecasts div
            currentForecastDiv.appendChild(conditionSymbolImage);
            currentForecastDiv.appendChild(conditionSpan);
            currentWeatherDiv.appendChild(currentForecastDiv);
            // Create empty array that contains the 3 separate objects for the 3 day forecast
            let threeDayForecastArray = data.forecast.forecastday;
            // Loop through "threeDayForecastArray", creating a new parent-span and its children spans -> append children to parent -> append parent span to parent div 
            threeDayForecastArray.forEach( newDay => {
                let spanUpcoming = document.createElement('span');
                spanUpcoming.className = 'upcoming';
                let image = document.createElement('img');
                image.className = 'symbol';
                image.src = `https:${newDay.day.condition.icon}`;
                let tempHighLow = document.createElement('span');
                tempHighLow.className = 'forecast-data';
                tempHighLow.textContent = `${newDay.day.mintemp_f} ${degreeSymbol} / ${newDay.day.maxtemp_f} ${degreeSymbol}`;
                let conditions = document.createElement('span');
                conditions.className = 'forecast-data';
                conditions.textContent = newDay.day.condition.text;
                spanUpcoming.appendChild(image);
                spanUpcoming.appendChild(tempHighLow);
                spanUpcoming.appendChild(conditions);
                upcomingForecastDiv.appendChild(spanUpcoming);        
            }); 
            upcomingWeatherDiv.appendChild(upcomingForecastDiv);
        })
        .catch(error => console.log('error', error));
    });
}
attachEvents();