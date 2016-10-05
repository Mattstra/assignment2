  /* Check to see if the form was submitted properly */
  function check_form() {
    var f1 = document.forms["movie_form"]["moviebox"].value;
    var f2 = document.forms["movie_form"]["whybox"].value;

    if(f1 == null || f1 == "") {
      alert("Name of movie was not entered!");
      return false;
    }
    else if (f2 == null || f2 == "") {
      alert("Didn't enter why movie was your favorite!");
      return false;
    }

    else {
      alert("Thank you for telling us about your favorite movie!");
      var hide = document.getElementById("F1");
      hide.style.display = "none";
      return false;
    }
  }
