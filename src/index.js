// API KEY 94bb022db166cb23ddcccab435aa0727
const APIKEY = "94bb022db166cb23ddcccab435aa0727";

var city = "Malaga";
const root = document.querySelector("#root");

getData();
//createObjectData()
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}  "https://api.giphy.com/v1/gifs/translate?api_key=2Tds4gFBxYcb2yflSus1WvEd20FGYuMf&s="

function createObjectData(rawData) {
  console.log(typeof ("el tipo es " + rawData));
  console.log(rawData);
  var data = {
    cityname: rawData.name,
    weather: rawData.weather[0].description,
    temp: rawData.main.temp,
    feelLike: rawData.main.feels_like,
    wind: rawData.wind.speed,
  };
  console.table(data);
  makeHTML(data)
}

async function getData() {
  const getclima = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=pekin&appid=94bb022db166cb23ddcccab435aa0727&units=metric&lang=es ",
    { mode: "cors" }
  );
  rawData = await getclima.json();
  console.log(typeof ("el tipo es " + rawData));
  console.log(rawData);
  createObjectData(rawData);
  return rawData;
}
function makeHTML(data) {
  const root =document.querySelector("#textContainer");
  const city = createDomElement("h1", data.cityname, root, "");
  const description = createDomElement("h2", data.weather, root, "");
  const temp = createDomElement("div", data.temp, root, "");
  const fellTemp = createDomElement("div", data.feelLike, root, "");
  const wind = createDomElement("div", data.wind, root, "");
  //const iconcontainer = createDomElement("div", "", root, "icon");
  document.querySelector("#icon").setAttribute("src","http://openweathermap.org/img/wn/10n@4x.png")
}

function createDomElement(tag, inner, parent, clase) {
  var newElement = document.createElement(tag);
  newElement.innerHTML = inner;
  parent.appendChild(newElement);
  if (clase) {
    newElement.classList.add(clase);
  }
  return newElement;
}
