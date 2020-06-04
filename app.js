var g = G$("John", "Doe");

$("#login").click(function () {
  var loginGrtr = g;

  $("logindiv").hide();

  loginGrtr.setLang($("#lang").val()).HTMLGreetings("#greeting", true);
});
