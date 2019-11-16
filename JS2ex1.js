var initialTime = new data();

function stopTime(){
  var currentTime = new Data();
  console.log(initialTime.getTime());
  console.log(currentTime.getTime());

  var timeDifference = (currentTime - initialTime)/600;
  console.log(timeDifference);

  alert("You have been on the page for: " + timeDifference + "seconds");


}
