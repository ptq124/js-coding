const API_KEY="4aa7de9255402aac5c02aab89d23536a";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onSucess(position){
 const lat = position.coords.latitude;
 const lon = position.coords.longitude;
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 fetch(url)
    .then((response) => response.json())
    .then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    });
}
function onError(){
    alert("위치를 찾을수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onSucess,onError);