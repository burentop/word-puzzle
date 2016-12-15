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

var arrayToString = function (array) {
  return array.join("");
}



$(document).ready(function () {
  $("#input form").submit(function (event) {
    event.preventDefault();
    var phrase = $("#phrase").val();
    console.log(arrayToString(replaceVowels(toArray(phrase))));
  });
});