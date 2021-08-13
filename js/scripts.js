//business logic




//User Interface logic

$(document).ready(function(){
  $("form#langTest").submit(function(event){
    event.preventDefault();
    const rain = $("select#rain").val();
    const cof = $("input:radio[name=coffee]:checked").val();
    const speed = document.getElementById("fast").val();
    const snake = $("input:radio[name=snake]:checked").val();
    const cheese = $("select#cheese").val();



  });
});