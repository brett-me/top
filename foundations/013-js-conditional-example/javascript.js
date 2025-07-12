const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent = "It is nice and sunny outside today. Touch some grass.";
  } else if (choice === "rainy") {
    para.textContent = "Rain is falling, take an umbrella.";
  } else if (choice === "snowing") {
    para.textContent =
      "It is freezing. Stay indoors. Or dress warm and build a snowman.";
  } else if (choice === "overcast") {
    para.textContent = "It's grey and gloomy. Take an umbrella just in case.";
  } else {
    para.textContent = "";
  }
}
