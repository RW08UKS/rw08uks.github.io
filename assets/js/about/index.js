/*
    KSmart JavaScript
    Copyright 2024 by CusMeDroid
    DO NOT REMOVE THIS
    Don't modify or duplicate without our permission, we are law-abiding citizens.
*/
var aboutTitle = firebase.database().ref("about/title");
aboutTitle.on('value', (snapshot) => {
  var dataTitle = snapshot.val();
  if (dataTitle) {
    document.getElementById("title").innerHTML = dataTitle;
    document.getElementById("titlesum").innerHTML = dataTitle;
  }
});
var aboutDesc = firebase.database().ref("about/description");
aboutDesc.on('value', (snapshot) => {
  var dataDesc = snapshot.val();
  if (dataDesc) {
    document.getElementById("desc").innerHTML = dataDesc;
  }
});