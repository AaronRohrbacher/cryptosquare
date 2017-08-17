// Business Logic

function cryptoMaker(secret) {
  arr1 = [];
  arr2 = [];
  arr3 = [];
  arr4 = [];
  arr5 = [];

  var unencryptedSecret = secret.match(/([A-Za-z])/g);
  alert(unencryptedSecret);
  for(i = 0; i <= secret.length; i += 5) {
    arr1.push(unencryptedSecret[i]);
  }
  for(i = 1; i <= secret.length; i += 5) {
    arr2.push(unencryptedSecret[i]);
  }
  for(i = 2; i <= secret.length; i += 5) {
    arr3.push(unencryptedSecret[i]);
  }
  for(i = 3; i <= secret.length; i += 5) {
    arr4.push(unencryptedSecret[i]);
  }
  for(i = 4; i <= secret.length; i += 5) {
    arr5.push(unencryptedSecret[i]);
  }

  encrypted = arr1.join('') + arr2.join('') + arr2.join('') + arr3.join('') + arr4.join('') + arr5.join('');

  // for(i=0; i <= encrypted.length; i+=5) {
  //   encrypted.charAt(i).push(' ');
  // }

  return encrypted;
  }


// User Interface
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var secret = $("input#input").val();

    $("#result").text(cryptoMaker(secret));
  });
});
