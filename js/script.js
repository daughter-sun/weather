let citiesData = {
    tehran : {city:'Tehran', temp:23, weather:'sunny', humidity: 22, windSpeed:32},
    tabriz : {city:'Tabriz', temp:13, weather:'rain', humidity: 22, windSpeed:32},
    mashhad : {city:'Mashhad', temp:27, weather:'normal', humidity: 22, windSpeed:32},
    shiraz : {city:'Shiraz', temp:19, weather:'cloudy', humidity: 22, windSpeed:32},
}
let $ = document
let searchBar = $.querySelector('.search-bar')
let searchBtn = $.getElementById('search')
searchBtn.addEventListener('click', function(){
    let searchbarValue = searchBar.value 
    let mainCityData = citiesData[searchbarValue]
    if(mainCityData){
        $.querySelector('.city').innerHTML = "weather in" + mainCityData.city
        $.querySelector('.temp').innerHTML = mainCityData.temp + "C"
        $.querySelector('.description').innerHTML = mainCityData.weather
        $.querySelector('.humidity').innerHTML = mainCityData.humidity
        $.querySelector('.wind').innerHTML = mainCityData.windSpeed + 'km/h'
        $.querySelector('.weather').classList.remove('loading')
    } else {
        alert("شهر مورد نظر یافت نشد")
    }
})