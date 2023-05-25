function calculateAge() {
    var currentYear = 2023;
      var birthYear = parseInt(document.getElementById('birthYear').value);
      var age = currentYear - birthYear;
      var adjustedAge = age - 1;
      var gender = prompt("Please enter your gender:");
        document.getElementById('ageResult').textContent =
          "You may be " + adjustedAge + " or " + age + " years old " + gender;
    }