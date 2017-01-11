$(document).ready(function() {
  $("#info").submit(function(event) {
    (event).preventDefault();
    var nameInput = $("#name").val();
    var streetInput = $("#street").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipcodeInput= $("#zipcode").val();
    var birthdayInput = $("#birthday").val();
    var colorInput = $("#color").val();
    var combinedResults = "Name is: " + nameInput;
    $(".results").text(combinedResults);
  });

  $("#order-info").submit(function(event) {
    (event).preventDefault();
    var nameInput = $("#name").val();
    var streetInput = $("#street").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipcodeInput= $("#zipcode").val();

    var productInput = $("#product").val();
    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".zipcode").text(zipcodeInput);
    $(".product").text(productInput);

  });
});
