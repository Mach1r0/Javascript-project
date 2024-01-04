    const apiKey = "5096d6e527abbe0a0ae35219fd5249a5";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
    
    async function checkWeather(){
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
    }
    checkWeather();