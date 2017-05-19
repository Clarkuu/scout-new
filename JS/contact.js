$(document).ready(function(){

  $("#submit").on("click",function(){

    var firstname = $("#first_name").val();
    var number = $("#telephone").val();
    var message = $("#textarea1").val();
    var email = $("#email").val();
    var surname = $("last_name").val();
    var enquiry = $(".selection option:selected").text();

    if(firstname && number && message && email !== ""){

    if( $("#email").hasClass("valid")){
        Materialize.toast("Thank you, " + firstname + "." + " We will be in touch",4000);
        }
        else{ Materialize.toast("please enter a valid email address"); }
    }
    else{
       Materialize.toast("Please fill in all relevant fields",4000);
    }

  });

});
