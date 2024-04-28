const API_KEY = '91abf67479ec57f47904c41f782f1826';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
}

export default getWeather;