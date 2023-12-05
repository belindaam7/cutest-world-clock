setInterval(function () {
  let sanDiegoElement = document.querySelector("#san-diego");
  let sanDiegoDateElement = sanDiegoElement.querySelector(".date");
  let sanDiegoTimeElement = sanDiegoElement.querySelector(".time");
  let sanDiegoTime = moment().tz("America/Tijuana");

  sanDiegoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  sanDiegoTimeElement.innerHTML = sanDiegoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let timbuktuElement = document.querySelector("#timbuktu");
  let timbuktuDateElement = timbuktuElement.querySelector(".date");
  let timbuktuTimeElement = timbuktuElement.querySelector(".time");
  let timbuktuTime = moment().tz("Africa/Timbuktu");

  timbuktuDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  timbuktuTimeElement.innerHTML = timbuktuTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
});
