console.log("Year Here!");

var age = window.prompt("what is you age?");
  var currentYear= new date();
  console.log(age.getTime());
  console.log(currentYear.getTime());
  document.getElementById("output").innerHTML=currentYear-age;
  var yearBirth = (age-currentYear);
