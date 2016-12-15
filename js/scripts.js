var vowels = ["a", "e", "i", "o", "u"];

var toArray = function (string) {
  return string.split("");
}

$(document).ready(function () {
  $("#input form").submit(function (event) {
    event.preventDefault();
    var phrase = $("#phrase").val();
    console.log(toArray(phrase));
  });
});