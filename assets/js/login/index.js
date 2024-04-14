if (sessionEmail && sessionUid) {
  window.location.href = "../profile";
}

document.getElementById("btn-login").onclick = function () {
  var mEmail_login = document.getElementById("email-login").value;
  var mPass_login = document.getElementById("pass-login").value;
  if (mEmail_login < 1 || mPass_login < 1) {
    alert("Jangan kosong!");
  } else {
    firebase.auth().signInWithEmailAndPassword(mEmail_login, mPass_login)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      sessionEmail = mEmail_login;
      localStorage.setItem("email", JSON.stringify(sessionEmail));
      sessionUid = user.uid;
      localStorage.setItem("uid", JSON.stringify(sessionUid));
      alert("Selamat datang kembali!");
      window.location.href = "../profile";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error! "+errorMessage);
      document.getElementById("email-login").value="";
      document.getElementById("pass-login").value="";
    });
  }
};