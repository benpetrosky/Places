function Place(name, landmarks, year, exp) {
   this.placeName = name;
   this.landmark = landmarks;
   this.season = year;
   this.Notes = exp;
}




$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var landmarkInput = $("#landmark").val();
    var seasonInput = $("#season").val();
    var notesInput = $("#notes").val();

    var newPlace = new Place (nameInput, landmarkInput, seasonInput, notesInput);

    $("#result").append("<li><span class='place'>" + newPlace.placeName + "</span></li>" )

    $("#name").val(""); //----> clears the form
    $("#landmark").val("");
    $("#season").val("");
    $("#notes").val("");

  });


});
