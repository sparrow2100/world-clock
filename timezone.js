let vancouverElement = document.querySelector("#vancouver-time");
let tokyoElement = document.querySelector("#tokyo-time");

setInterval(function () {
  let vancouverTime = moment().tz("America/Vancouver").format("LTS");
  vancouverElement.innerHTML = vancouverTime;
  let tokyoTime = moment().tz("Asia/Tokyo").format("LTS");
  tokyoElement.innerHTML = tokyoTime;
}, 1000);
