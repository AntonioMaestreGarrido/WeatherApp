// API KEY 94bb022db166cb23ddcccab435aa0727
const APIKEY="94bb022db166cb23ddcccab435aa0727"
            
var city="Malaga";
const root=document.querySelector("#root")
getData()
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}  "https://api.giphy.com/v1/gifs/translate?api_key=2Tds4gFBxYcb2yflSus1WvEd20FGYuMf&s="
async function getData() {
    const getclima= await fetch("https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=94bb022db166cb23ddcccab435aa0727",{mode:"cors"})
    //const getclima= await fetch("https://api.giphy.com/v1/gifs/translate?api_key=2Tds4gFBxYcb2yflSus1WvEd20FGYuMf&s=",{mode:"cors"})
    rawData= await getclima.json()
    console.table(rawData)
    console.log(typeof(rawData))
    root.textContent=rawData.name


    
}