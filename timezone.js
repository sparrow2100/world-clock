let vancouverElement = document.querySelector("#vancouver-time");
let tokyoElement = document.querySelector("#tokyo-time");
let cancunElement = document.querySelector("#cancun-time");

setInterval(function () {
  let vancouverTime = moment().tz("America/Vancouver").format("LTS");
  vancouverElement.innerHTML = vancouverTime;
  let tokyoTime = moment().tz("Asia/Tokyo").format("LTS");
  tokyoElement.innerHTML = tokyoTime;
  let cancunTime = moment().tz("America/Cancun").format("LTS");
  cancunElement.innerHTML = cancunTime;
}, 1000);

let vancouverDate = moment()
  .tz("America/Vancouver")
  .format("dddd MMMM Do, YYYY");
let tokyoDate = moment().tz("Asia/Tokyo").format("dddd MMMM Do, YYYY");

let cancunDate = moment().tz("America/Cancun").format("dddd MMMM Do, YYYY");

let vancouverDateElement = document.querySelector("#vancouver-date");
vancouverDateElement.innerHTML = vancouverDate;

let tokyoDateElement = document.querySelector("#tokyo-date");
tokyoDateElement.innerHTML = tokyoDate;

let cancunDateElement = document.querySelector("#cancun-date");
cancunDateElement.innerHTML = cancunDate;

let torontoTime = moment().tz("America/Toronto").format("LT");
let dubaiTime = moment().tz("Asia/Dubai").format("LT");
let dublinTime = moment().tz("Europe/Dublin").format("LT");

let torontoDate = moment().tz("America/Toronto").format("dddd MMMM Do, YYYY");
let dubaiDate = moment().tz("Asia/Dubai").format("dddd MMMM Do, YYYY");
let dublinDate = moment().tz("Europe/Dublin").format("dddd MMMM Do, YYYY");

let select = document.querySelector("#cities");

function displayInfo(event) {
  let value = select.options[select.selectedIndex].value;
  if (value === "America/Toronto") {
    city.innerHTML = `<div class="city-flex">
          <div class="city">
            <h2>Toronto</h2>
            <p class="date">${torontoDate}</p>
          </div>

          <p class="time" >${torontoTime}</p>
        </div>
       <a href ="#">All cities</a> `;
  } else if (value === "Asia/Dubai") {
    city.innerHTML = `<div class="city-flex">
          <div class="city">
            <h2>Dubai</h2>
            <p class="date">${dubaiDate}</p>
          </div>

          <p class="time" >${dubaiTime}</p>
        </div>`;
  } else if (value === "Europe/Dublin") {
    city.innerHTML = `<div class="city-flex">
          <div class="city">
            <h2>Dublin</h2>
            <p class="date">${dublinDate}</p>
          </div>

          <p class="time" >${dublinTime}</p>
        </div>`;
  }
}

let city = document.querySelector("#default-cities");
select.addEventListener("change", displayInfo);
