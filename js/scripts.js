var vowels = ["a", "e", "i", "o", "u"];

var toArray = function (string) {
  return string.split("");
}

var replaceVowels = function (array) {
  var withDash = [];
  for (var i = 0; i < array.length; i += 1) {
    if (vowels.indexOf(array[i]) >= 0) {
      withDash.push("-");
    } else {
      withDash.push(array[i]);
    }
  }
  return withDash;
}



$(document).ready(function () {
  $("#input form").submit(function (event) {
    event.preventDefault();
    var phrase = $("#phrase").val();
    console.log(replaceVowels(toArray(phrase)));
  });
});