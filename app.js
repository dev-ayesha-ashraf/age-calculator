

function calculateAge() {
  var birthdateInput = document.getElementById('birthdate');
  var birthdate = new Date(birthdateInput.value);

  var today = new Date();
  var ageInYears = today.getFullYear() - birthdate.getFullYear();
  var ageInMonths = today.getMonth() - birthdate.getMonth();
  var ageInDays = today.getDate() - birthdate.getDate();

  if (ageInDays < 0) {
    ageInMonths--;
    var daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageInDays += daysInPreviousMonth;
  }

  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  var resultElement = document.getElementById('result');
  resultElement.textContent = "Your age is " + ageInYears + " years, " + ageInMonths + " months, and " + ageInDays + " days.";
}


