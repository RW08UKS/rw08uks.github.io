const q = new URLSearchParams(window.location.search).get("q");
if (!q || q == "") {
    window.location.href = "../";
}

var mTitle = firebase.database().ref("posting/"+ q +"/title");
mTitle.on("value", (snapshot) => {
  var dataTitle = snapshot.val();
  if (dataTitle) {
    document.getElementById("vtitle").innerHTML = "RW 08 UKS | "+dataTitle;
    document.getElementById("title").innerHTML = dataTitle;
    document.getElementById("titlesum").innerHTML = dataTitle;
  }
});

var mImage = firebase.database().ref("posting/"+ q +"/image");
mImage.on("value", (snapshot) => {
  var dataImage = snapshot.val();
  if (dataImage) {
    document.getElementById("image").src = dataImage;
  }
});

var mDesc = firebase.database().ref("posting/"+ q +"/description");
mDesc.on("value", (snapshot) => {
  var dataDesc = snapshot.val();
  if (dataDesc) {
    document.getElementById("desc").innerHTML = dataDesc;
  }
});
