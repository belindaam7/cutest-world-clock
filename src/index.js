setInterval(function () {
  let tijuanaElement = document.querySelector("#san-diego");
  if (tijuanaElement) {
    let tijuanaDateElement = tijuanaElement.querySelector(".date");
    let tijuanaTimeElement = tijuanaElement.querySelector(".time");
    let tijuanaTime = moment().tz("America/Tijuana");

    tijuanaDateElement.innerHTML = moment()
      .tz("America/Tijuana")
      .format("MMMM Do, YYYY");
    tijuanaTimeElement.innerHTML = tijuanaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
});

setInterval(function () {
  let timbuktuElement = document.querySelector("#timbuktu");
  if (timbuktuElement) {
    let timbuktuDateElement = timbuktuElement.querySelector(".date");
    let timbuktuTimeElement = timbuktuElement.querySelector(".time");
    let timbuktuTime = moment().tz("Africa/Timbuktu");

    timbuktuDateElement.innerHTML = moment()
      .tz("Africa/Timbuktu")
      .format("MMMM Do, YYYY");
    timbuktuTimeElement.innerHTML = timbuktuTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
});

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  
    <div class="city">
      <div>
        <h2>${cityName}</h2>

        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")}
        <small>${cityTime.format("A")}</small>
      </div>
    </div>`;
}

let citySelectElement = document.querySelector("#city-selector");
citySelectElement.addEventListener("change", updateCity);
