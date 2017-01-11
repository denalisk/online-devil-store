//Front-end
$(document).ready(function() {
  $("#info").submit(function(event) {
    (event).preventDefault();
    var genderInput = $("#gender").val();
    var dessertInput = $("#dessert").val();
    var birthdayInput = $("#birthday").val();
    var colorInput = $("#color").val();

    $(".survey-over").show();
    $(".survey-active").hide();
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

    $(".print-receipt").show();
  });
});
//Back-end
