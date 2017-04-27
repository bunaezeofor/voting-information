/*user interface*/
$(document).ready(function(){

  $("#age-form").submit(function(event){

    var userAge = $('input#age').val();
    console.log(userAge);



    compare(age); //acquire from backend
    var result = compare(userAge);
    if(result === true) {

      $("#ourButton").click(function() {
        $("#content").show(); //show our content to user
      });

      } else {
        alert("Sorry, you are too young to vote.");
      };


    event.preventDefault();

  });
});

/*business end */

function compare(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  };
};
