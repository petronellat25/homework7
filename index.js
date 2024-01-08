function search(event) {
  event.preventDefault();
  let SearchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("current-city");
  cityElement.innerHTML = SearchInputElement.Value;
}
function FormatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let searchForm = document.querySelector("search-form");
searchForm.addEventListener("submit", search);
let currentDateElement = document.querySelector("#currentDate");
let currentDate = newDate();
currentDateElement.innerHTMl = formatdate("currentDate");
