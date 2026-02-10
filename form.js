$(function () {

   $("#fname_error_message").hide();
   $("#sname_error_message").hide();
   $("#email_error_message").hide();
   $("#number_error_message").hide();


   var error_fname = false;
   var error_sname = false;
   var error_email = false;
   var error_number = false;

   $("#form_fname").focusout(function () {
      check_fname();
   });
   $("#form_sname").focusout(function () {
      check_sname();
   });
   $("#form_email").focusout(function () {
      check_email();
   });
   $("#form_number").focusout(function () {
      check_number();
   });

   function check_fname() {
      var pattern = /^[a-zA-Z]*$/;
      var fname = $("#form_fname").val();
      if (pattern.test(fname) && fname !== '') {
         $("#fname_error_message").hide();
         $("#form_fname").css("border-bottom", "2px solid #34F458");
      } else {
         $("#fname_error_message").html("Characters Only");
         $("#fname_error_message").show();
         $("#form_fname").css("border-bottom", "2px solid #F90A0A");
         error_fname = true;
      }
   }

   function check_sname() {
      var pattern = /^[a-zA-Z]*$/;
      var sname = $("#form_sname").val()
      if (pattern.test(sname) && sname !== '') {
         $("#sname_error_message").hide();
         $("#form_sname").css("border-bottom", "2px solid #34F458");
      } else {
         $("#sname_error_message").html("Characters Only");
         $("#sname_error_message").show();
         $("#form_sname").css("border-bottom", "2px solid #F90A0A");
         error_fname = true;
      }
   }

   function check_number() {
      var number_length = $("#form_number").val().length;
      if (number_length !== 10) {
         $("#number_error_message").html("Invalid Number Entered");
         $("#number_error_message").show();
         $("#form_number").css("border-bottom", "2px solid #F90A0A");
         error_number = true;
      } else {
         $("#number_error_message").hide();
         $("#form_number").css("border-bottom", "2px solid #34F458");
      }
   }



   function check_email() {
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email = $("#form_email").val();
      if (pattern.test(email) && email !== '') {
         $("#email_error_message").hide();
         $("#form_email").css("border-bottom", "2px solid #34F458");
      } else {
         $("#email_error_message").html("Invalid Email");
         $("#email_error_message").show();
         $("#form_email").css("border-bottom", "2px solid #F90A0A");
         error_email = true;
      }
   }

   $("#registration_form").submit(function () {
      error_fname = false;
      error_sname = false;
      error_email = false;
      error_number = false;

      check_fname();
      check_sname();
      check_email();
      check_number();


      if (error_fname === false && error_sname === false && error_email === false && error_number === false) {
         alert("Registration Successfull");
         return true;
      } else {
         alert("Please Fill the form Correctly");
         return false;
      }


   });
});
