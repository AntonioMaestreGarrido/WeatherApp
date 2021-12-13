// API KEY 94bb022db166cb23ddcccab435aa0727
const APIKEY = "94bb022db166cb23ddcccab435aa0727";

const root = document.querySelector("#root");
window.addEventListener("load", changueCity);

function createObjectData(rawData) {
  console.log(typeof ("el tipo es " + rawData));
  console.log(rawData);
  var data = {
    cityname: rawData.name,
    weather: rawData.weather[0].description,
    temp: rawData.main.temp,
    feelLike: rawData.main.feels_like,
    wind: rawData.wind.speed,
    icon: rawData.weather[0].icon,
  };
  console.table(data);
  makeHTML(data);
}

async function getData(city) {
  const getclima = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94bb022db166cb23ddcccab435aa0727&units=metric&lang=es`,
    { mode: "cors" }
  );
  rawData = await getclima.json();
  console.log(typeof ("el tipo es " + rawData));
  console.log(rawData);
  if (!rawData.name) {
    changueCity();
  } else {
    createObjectData(rawData);
  }
  return rawData;
}
function makeHTML(data) {
  document.querySelector("#ciudad").textContent = data.cityname;
  document.querySelector("#ciudad").addEventListener("click", changueCity);

  const c2=createDomElement("div","#c",document.querySelector("#container"))
  
  const root = document.querySelector("#textContainer");
  root.innerHTML = "";
  const description = createDomElement("h2", data.weather, root, "");
  const temp = createDomElement("div", `Temperatura ${data.temp}º`, root, "");
  const fellTemp = createDomElement(
    "div",
    `Sensacion termica ${data.feelLike}º`,
    root,
    ""
  );
  const wind = createDomElement("div", `viento ${data.wind} m/s`, root, "");
  //const iconcontainer = createDomElement("div", "", root, "icon");
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.icon}@4x.png`
    );
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
function changueCity() {
  const form = createDomElement(
    "div",
    "",
    document.querySelector("body"),
    "form"
  );
  const text = createDomElement("textarea", "", form, "");
  const b = createDomElement("button", "enviar", form, "");
  b.addEventListener("click", () => {
    form.innerHTML = "";
    console.log("clcik");
    getData(text.value);
  });
}


