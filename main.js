$(document).ready(function () {
    console.log("here")
    $("#email").blur(function (event) {
        console.log("blured", $("#email").val());
        var email = $("#email").val()
        var n = email.search("@");
        console.log(n) 
        if(n===-1){
            alert("Please enter a valid email address")
        }
      });      
  $("form").submit(function () {
    event.preventDefault();
  });
});