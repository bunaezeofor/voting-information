/*user interface*/
$(document).ready(function(){

  $("#age-form").submit(function(event){

    var userAge = $('input#age').val();
    console.log(userAge);



    compare(age); //acquire from backend
    var result = compare(userAge);
    if(result === true) {
      $(".content").show(); //show our content to user
      } else {
        alert("Sorry, You May Not Enter.");
      };


    console.log(result);
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
