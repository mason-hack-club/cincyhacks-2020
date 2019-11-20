function register() {
    if(checkCompletion()){

    if (checkEmail()) {
        var url = "https://jack-margeson-cincyhacks-2020-registration.glitch.me/register" +
            "?array=" + document.getElementById("FirstName").value +
            "&array=" + document.getElementById("LastName").value +
            "&array=" + document.getElementById("PreferredName").value +
            "&array=" + document.getElementById("Email").value +
            "&array=" + document.getElementById("PhoneNumber").value +
            "&array=" + document.getElementById("School").value +
            "&array=" + document.getElementById("Grade").value +
            "&array=" + document.getElementById("Age").value +
            "&array=" + document.getElementById("EEmail").value +
            "&array=" + document.getElementById("EPhoneNumber").value +
            "&array=" + document.getElementById("Pronouns").value +
            "&array=" + document.getElementById("ShirtSize").value +
            "&array=" + document.getElementById("DietaryRestrictions").value +
            "&array=" + document.getElementById("Referral").value +
            "&array=" + document.getElementById("Other").value
        fetch(url).then(function(response) {
            console.log(response.ok);
            if (response.ok) { subscribe(); }
        });
    }
}
  }
  function checkEmail() {
    if (document.getElementById("Email").value == document.getElementById("CheckEmail").value) {
        return true;
    } else {
        alert("The emails that you have entered do not match.")
        return false;
    }
  }
  function subscribe() {
    var url = "https://jack-margeson-cincyhacks-2020-registration.glitch.me/subscribe" +
        "?name=" + document.getElementById("PreferredName").value + " " + document.getElementById("LastName").value +
        "&email=" + document.getElementById("Email").value
    fetch(url).then(function(response) {
        if (response.ok) { redirect(); }
    });
  }
  function redirect() {
    window.location.replace("/complete.html");
  }
  function checkCompletion(){
      if(document.getElementById("FirstName").value && document.getElementById("LastName").value 
      && document.getElementById("PreferredName").value && document.getElementById("Email").value 
      && document.getElementById("PhoneNumber").value && document.getElementById("School").value
      && document.getElementById("Grade").value && document.getElementById("Age").value
      && document.getElementById("EEmail").value && document.getElementById("EPhoneNumber").value
      && document.getElementById("Pronouns").value && document.getElementById("ShirtSize").value
      && document.getElementById("Referral").value){
       return true;   
      }else{
          alert("Please complete all required elements.")
          return false;
      }
  }