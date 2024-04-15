var mFb = firebase.database().ref("social/fb/url");
mFb.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("sfb").href = dataUrl;
  }
});
var mIg = firebase.database().ref("social/ig/url");
mIg.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("sig").href = dataUrl;
  }
});
var mYt = firebase.database().ref("social/yt/url");
mYt.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("syt").href = dataUrl;
  }
});
var mTw = firebase.database().ref("social/tw/url");
mTw.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("stw").href = dataUrl;
  }
});