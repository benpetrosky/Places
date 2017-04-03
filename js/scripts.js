function Place(name, landmarks, year, exp) {
   this.placeName = name;
   this.landmark = landmarks;
   this.season = year;
   this.notes = exp;
  }
Place.prototype.outputString = function() {
  return "In " + this.season + " I went to " + this.placeName;
}





$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var landmarkInput = $("#landmark").val();
    var seasonInput = $("#season").val();
    var notesInput = $("#notes").val();

    var newPlace = new Place (nameInput, landmarkInput, seasonInput, notesInput);

    $("#result").append("<li><span class='place'>" + newPlace.outputString() + "</span></li>" )


    $("#name").val(""); //----> clears the form
    $("#landmark").val("");
    $("#season").val("");
    $("#notes").val("");

    $(".place").last().click(function(){
      $("#show-places").show();
      $("#show-places h3").text(newPlace.placeName);
      $("#name-output").text(newPlace.placeName);
      $("#landmark-output").text(newPlace.landmark);
      $("#season-output").text(newPlace.season);
      $("#exp-output").text(newPlace.notes);
    })

  });


});
