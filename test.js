$(document).ready(function() {

  var name = 'Jacob'
  var age = 30

  $(".test").click(function() {
    console.log("Hello " + name)
    $("body").css("background-color", "red")
  })

  $("#test2").click(function() {
    console.log("test 2!")
  })

})