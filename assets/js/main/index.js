/*
    Copyright 2024 by CusMeDroid
    DO NOT REMOVE THIS
    Don't modify or duplicate without our permission, we are law-abiding citizens.
*/
var lcount = 0;

function itemFavPost(title, image, description, date, uniq) {
  const favmain = document.getElementById("myfav");
  const fava = document.createElement("a");
  const favimg = document.createElement("img");
  const favh1 = document.createElement("h1");
  const favh1a = document.createElement("a");
  const favspan = document.createElement("span");
  const favhr = document.createElement("hr");
  const favp = document.createElement("p");

  fava.href = image;
  fava.setAttribute("title", title);
  favimg.src = image;
  favimg.setAttribute("alt", title);
  favh1.setAttribute("class", "x-nowarp");
  favh1a.innerHTML = title;
  favh1a.href = "view/?q="+uniq;
  favspan.innerHTML = date;
  favp.setAttribute("class", "x-nowarp");
  favp.innerHTML = description;

  favmain.appendChild(fava);
  fava.appendChild(favimg);
  favmain.appendChild(favh1);
  favh1.appendChild(favh1a);
  favmain.appendChild(favspan);
  favmain.appendChild(favhr);
  favmain.appendChild(favp);

}

function FetchDataFavPost() {
    /* let randomIndex = Math.floor(Math.random() * 6) + 1; .limitToFirst(randomIndex) */
    firebase.database().ref("posting/").orderByValue().limitToFirst(1).once("value", function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let title = ChildSnapshot.val().title;
                let image = ChildSnapshot.val().image;
                let description = ChildSnapshot.val().description;
                let date = ChildSnapshot.val().date;
                let uniq = ChildSnapshot.val().uniq;
                itemFavPost(title, image, description, date, uniq);
            }
        );
    });
}

FetchDataFavPost();

function itemNextPost(title, image, description, date, uniq) {
  lcount++;
  if (lcount > 1) {
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
    favh1a.href = "view/?q="+uniq;
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
}

function FetchDataNextPost() {
    /* let randomIndex = Math.floor(Math.random() * 6) + 1; .limitToFirst(randomIndex) */
    firebase.database().ref("posting/").once("value", function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let title = ChildSnapshot.val().title;
                let image = ChildSnapshot.val().image;
                let description = ChildSnapshot.val().description;
                let date = ChildSnapshot.val().date;
                let uniq = ChildSnapshot.val().uniq;
                itemNextPost(title, image, description, date, uniq);
            }
        );
    });
}

FetchDataNextPost();