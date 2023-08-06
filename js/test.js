$(document).ready(function() {

  var name = 'Jacob'
  var age = 30

  $(".test").click(function() {
    console.log("Hello " + name)
    $("body").css("background-color", "red")
    $(".test").css("color", "blue")
  })

  $("#test2").click(function() {
    console.log("test 2!")
  })

  setInterval(function() {

    setTimeout(function() {
      $("#ball").animate({top: '400px'}, 1000);
    }, 1000)

    setTimeout(function() {
      $("#ball").animate({top: '200px'}, 1000);
    }, 2000)

  }, 3000)

})