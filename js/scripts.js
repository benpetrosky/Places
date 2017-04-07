function Place(name, landmarks, year, exp) {  //--2--> creates an object with parameters referencing each of its properties
   this.placeName = name; //--2--> creates the property (this.placeName) in reference to the (name) parameter to the object
   this.landmark = landmarks; //--2--> creates the property (this.landmark) in reference to the (landmarks) parameter to the object
   this.season = year;    //--2--> creates the property (this.season) in reference to the (year) parameter to the object
   this.notes = exp; //--2--> creates the property (this.notes) in reference to the (exp) parameter to the object
  }
Place.prototype.outputString = function() {  //--4--> creates a outputString function using the properties of the Place function
  return "In " + this.season + " I went to " + this.placeName;  //--4--> defines the outputString as a concatination of properties of the Place function
}





$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();             //--1--> takes input from user and creates a variable
    var landmarkInput = $("#landmark").val();     //--1--> takes input from user and creates a variable
    var seasonInput = $("#season").val();         //--1--> takes input from user and creates a variable
    var notesInput = $("#notes").val();           //--1--> takes input from user and creates a variable
   if(!nameInput || !landmarkInput || !seasonInput || !notesInput)
   {
      alert("Please enter all information");   //--1--> tells user to fill in all inputs if there are any ommisions
   }
   else
   {
      var newPlace = new Place (nameInput, landmarkInput, seasonInput, notesInput); //--3--> creates a variable that runs through the object funtion (Place) in the business logic with variable input parameters that align with (Place) parameters

      $("#result").append("<li><span class='place'>" + newPlace.outputString() + "</span></li>" ) //--5--> calls the new contact utilizing the fullName function.


      $("#name").val(""); //----> clears the input field form
      $("#landmark").val("");//----> clears the input field form
      $("#season").val("");//----> clears the input field form
      $("#notes").val("");//----> clears the input field form

      $(".place").last().click(function(){  //--6--> creates a function that displays all place info upon clicking on specific place outputString.
        $("#show-places").show();
        $("#show-places h3").text(newPlace.placeName);//--6--> uses Place properties to display inputs
        $("#name-output").text(newPlace.placeName);//--6--> uses Place properties to display inputs
        $("#landmark-output").text(newPlace.landmark);//--6--> uses Place properties to display inputs
        $("#season-output").text(newPlace.season);//--6--> uses Place properties to display inputs
        $("#exp-output").text(newPlace.notes);//--6--> uses Place properties to display inputs
      });
    }
  });
});
