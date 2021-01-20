//Question 3
var cars = ["BMW", "Volvo", "Toyota", "Honda"];
var i = 0;
var text = "";

function getCars(x) {
  while (x[i]) {
    text += x[i] + "<br>";
    i++;
    return text;
  }
}

getCars(cars);