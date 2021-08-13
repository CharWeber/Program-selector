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
    $("#python").hide();
    $("#ruby").hide();
    $("#java").hide();
    $("#cSharp").hide();
    $("#go").hide();
    $("#swift").hide();
    $("rust").hide();

    if (snake === "yesSnake"){
      $("#langName").text("Python!");
      $("#python").show();
    }
    else if (cheese === "sharpCheese"){
      $("#langName").text("C#!");
      $("#cSharp").show();
    }
    else if (speed >= 50){
      if (cof === "water"){
        if (rain === "Y" || rain === "both"){
          $("#langName").text("Rust!");
          $("rust").show();
        }
        else{
          $("#langName").text("Ruby!");
          $("#ruby").show();
        }
      }
      else  {
        if (rain === "N") {
          $("#langName").text("GO!");
          $("#go").show();
        }
        else {
          $("#langName").text("Javascript!");
          $("#java").show();
        }
      }
    }
    else  {
      if (rain === "Y" || rain === "both"){
        $("#langName").text("Ruby!");
        $("#ruby").show();
      }
      else {
        $("#langName").text("Swift!");
        $("#swift").hide();
      }
    }

  });
});