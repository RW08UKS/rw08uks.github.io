/*
    KSmart JavaScript
    Copyright 2024 by CusMeDroid
    DO NOT REMOVE THIS
    Don't modify or duplicate without our permission, we are law-abiding citizens.
*/
var topImage = firebase.database().ref("top/image");
topImage.on('value', (snapshot) => {
  var dataImage = snapshot.val();
  if (dataImage) {
    document.getElementById("topimage").src = dataImage;
    document.getElementById("topimageurl").href = dataImage;
  }
});
var topTitle = firebase.database().ref("top/title");
topTitle.on('value', (snapshot) => {
  var dataTitle = snapshot.val();
  if (dataTitle) {
    document.getElementById("toptitle").innerHTML = dataTitle;
  }
});
var topDate = firebase.database().ref("top/date");
topDate.on('value', (snapshot) => {
  var dataDate = snapshot.val();
  if (dataDate) {
    document.getElementById("topdate").innerHTML = dataDate;
  }
});
var topDesc = firebase.database().ref("top/description");
topDesc.on('value', (snapshot) => {
  var dataDesc = snapshot.val();
  if (dataDesc) {
    document.getElementById("topdesc").innerHTML = dataDesc;
  }
});