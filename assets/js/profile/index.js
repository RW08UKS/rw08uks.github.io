if (!sessionEmail && !sessionUid) {
  window.location.href = "../login/?#";
}

document.getElementById("logout").onclick = function () {
  firebase.auth().signOut().then(() => {
    localStorage.clear();
    document.cookie = "cookies=;expires=" + new Date(0).toUTCString();
    window.location.href = "../";
  }).catch((error) => {
    // An error happened.
  });
};

var mName = firebase.database().ref("users/" + sessionUid + "/name");
mName.on("value", (snapshot) => {
  var dataName = snapshot.val();
  if (dataName) {
    document.getElementById("mname").innerHTML = dataName;
  }
});

var mEmail = firebase.database().ref("users/" + sessionUid + "/email");
mEmail.on("value", (snapshot) => {
  var dataEmail = snapshot.val();
  if (dataEmail) {
    document.getElementById("memail").innerHTML = dataEmail;
  }
});

document.getElementById("btnsett").onclick = function () {
  document.getElementById("settings").style.display = "block";
  document.getElementById("addpost").style.display = "none";
};

document.getElementById("btnadd").onclick = function () {
  document.getElementById("settings").style.display = "none";
  document.getElementById("addpost").style.display = "block";
};

/* Sett About Main */
var abtName = firebase.database().ref("about/name");
abtName.on("value", (snapshot) => {
  var dataName = snapshot.val();
  if (dataName) {
    document.getElementById("abt_name").value = dataName;
  }
});

var abtDesk = firebase.database().ref("about/description");
abtDesk.on("value", (snapshot) => {
  var dataDesk = snapshot.val();
  if (dataDesk) {
    document.getElementById("abt_desc").value = dataDesk;
  }
});

function updBg() {
  var file = document.getElementById("files_bg").files[0];
  if (!file) {
    alert("Jangan kosong!");
  } else {
    var type = "about";
    var storage = firebase.storage();
    var storageref = storage.ref();
    var thisref = storageref.child(type).child(file.name).put(file);
    thisref.on("state_changed",function(snapshot) {}, function(error) {}, function() {
    thisref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        document.getElementById("url_bg").value=downloadURL;
        alert("Berhasil mengunggah latar!");
        saveLatar(downloadURL);
        window.location.href = "";
      });
    });
  }
}

function saveLatar(downloadURL) {
  firebase.database().ref("about").update({
    image: downloadURL,
  });
}

function mEdtAbout() {
  var mabname = document.getElementById("abt_name").value, mabdesc = document.getElementById("abt_desc").value, mabondate = document.getElementById("abt_ondate").value, mabenddate = document.getElementById("abt_enddate").value;
  if (mabname < 1 || mabdesc < 1 || mabondate < 1 || mabenddate < 1) {
    alert("Jangan kosong!");
  } else {
    firebase.database().ref("about").update({
      name: mabname,
      description: mabdesc,
      ondate: mabondate,
      enddate: mabenddate,
    });
    window.location.href = "";
  }
}
/* Sett About End */

/* Sett Social Main */
var scFb = firebase.database().ref("social/fb/url");
scFb.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("mfb").value = dataUrl;
  }
});
var scIg = firebase.database().ref("social/ig/url");
scIg.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("mig").value = dataUrl;
  }
});
var scYt = firebase.database().ref("social/yt/url");
scYt.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("myt").value = dataUrl;
  }
});
var scTw = firebase.database().ref("social/tw/url");
scTw.on("value", (snapshot) => {
  var dataUrl = snapshot.val();
  if (dataUrl) {
    document.getElementById("mtw").value = dataUrl;
  }
});

function mEdtSocial() {
  var smfb = document.getElementById("mfb").value, smig = document.getElementById("mig").value, smyt = document.getElementById("myt").value, smtw = document.getElementById("mtw").value;
  if (smfb < 1 || smig < 1 || smyt < 1 || smtw < 1) {
    alert("Jangan kosong!");
  } else {
    firebase.database().ref("social/fb").update({
      url: smfb,
    });
    firebase.database().ref("social/ig").update({
      url: smig,
    });
    firebase.database().ref("social/yt").update({
      url: smyt,
    });
    firebase.database().ref("social/tw").update({
      url: smtw,
    });
    window.location.href = "";
  }
}
/* Sett Social End */

var str1, mreslt;
var myoutputlink = document.getElementById("ouput");

function mOutput() {
  str1 = document.getElementById("post_title").value;
  mreslt = str1.replace(/ /g, "-").toLowerCase();
  myoutputlink.value = mreslt;
}

function mAddPost() {
  var filess = document.getElementById("files_pt").files[0];
  var atitle = document.getElementById("post_title").value, adesc = document.getElementById("post_desc").value, adate = document.getElementById("post_date").value;
  if (!filess || !atitle || !adesc || !adate) {
    alert("Jangan kosong!");
  } else {
    var types = "posting/"+myoutputlink.value;
    var storages = firebase.storage();
    var storagerefs = storages.ref();
    var thisrefs = storagerefs.child(types).child(filess.name).put(filess);
    thisrefs.on("state_changed",function(snapshot) {}, function(error) {}, function() {
    thisrefs.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        document.getElementById("url_pt").value = downloadURL;
        alert("Berhasil Menambahkan Posting!");
        savePoto(downloadURL);
        window.location.href = "";
      });
    });
  }
}

function savePoto(downloadURL) {
  var atitle = document.getElementById("post_title").value, adesc = document.getElementById("post_desc").value, adate = document.getElementById("post_date").value;
  firebase.database().ref("posting/"+myoutputlink.value).update({
    title: atitle,
    description: adesc,
    image: downloadURL,
    uniq: myoutputlink.value,
    date: adate,
  });
}


function itemAllPost(title, image, description, date, uniq) {
  const favrow = document.getElementById("postnext");
  const favmain = document.createElement("section");
  const fava = document.createElement("a");
  const favimg = document.createElement("img");
  const favh1 = document.createElement("h1");
  const favh1a = document.createElement("a");
  const favspan = document.createElement("span");
  const favhr = document.createElement("hr");
  const favp = document.createElement("p");

  favmain.setAttribute("class", "column3 mb20 mcard");
  fava.href = image;
  fava.setAttribute("title", title);
  favimg.src = image;
  favimg.setAttribute("alt", title);
  favh1.setAttribute("class", "x-nowarp");
  favh1a.innerHTML = title;
  // favh1a.href = "edit/?q="+uniq;
  favspan.innerHTML = date;
  favp.setAttribute("class", "x-nowarp");
  favp.innerHTML = description;

  favrow.appendChild(favmain);
  favmain.appendChild(fava);
  fava.appendChild(favimg);
  favmain.appendChild(favh1);
  favh1.appendChild(favh1a);
  favmain.appendChild(favspan);
  favmain.appendChild(favhr);
  favmain.appendChild(favp);
}

function FetchDataAllPost() {
    /* let randomIndex = Math.floor(Math.random() * 6) + 1; .limitToFirst(randomIndex) */
    firebase.database().ref("posting/").once("value", function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let title = ChildSnapshot.val().title;
                let image = ChildSnapshot.val().image;
                let description = ChildSnapshot.val().description;
                let date = ChildSnapshot.val().date;
                let uniq = ChildSnapshot.val().uniq;
                itemAllPost(title, image, description, date, uniq);
            }
        );
    });
}

FetchDataAllPost();

