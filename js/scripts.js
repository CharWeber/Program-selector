//business logic




//User Interface logic

$(document).ready(function(){
  $("form#langTest").submit(function(event){
    event.preventDefault();
    const rain = $("select#rain").val();
    const cof = $("input:radio[name=coffee]:checked").val();
    const speed = parseInt(document.getElementById("fast").value);
    const snake = $("input:radio[name=snake]:checked").val();
    const cheese = $("select#cheese").val();
    $("#langMatch").show();

    if (snake === "yesSnake"){
      $("#langName").text("Python!");
    }
    else if (cheese === "sharpCheese"){
      $("#langName").text("C#!");
    }
    else if (speed >= 50){
      if (cof === "water"){
        if (rain === "Y" || rain === "both"){
          $("#langName").text("Rust!");
        }
        else{
          $("#langName").text("Ruby!");
        }
      }
      else  {
        if (rain === "N") {
          $("#langName").text("GO!");
        }
        else {
          $("#langName").text("Javascript!");
        }
      }
    }
    else  {
      if (rain === "Y" || rain === "both"){
        $("#langName").text("Ruby!");
      }
      else {
        $("#langName").text("Swift!");
      }
    }


  });
});