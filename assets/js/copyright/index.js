var cpr = document.getElementById("myCopyright");

function redirectCU(e) {
  if (e.ctrlKey && 85 == e.which) return window.location.replace(""), !1;
}

function redirectKK(e) {
  if (3 == e.which) return alert("Thank you for visiting my website :)"), !1;
}

cpr || (window.location.href = "https://rw08uks.github.io"), (document.onkeydown = redirectCU), (document.oncontextmenu = redirectKK),

document.addEventListener("keyup", (e) => {
  "PrintScreen" == e.key && (navigator.clipboard.writeText(""), alert("Screenshots disabled!"));
}),

document.addEventListener("keydown", (e) => {
  e.ctrlKey && "p" == e.key && (alert("This section is not allowed to print or export to PDF"), (e.cancelBubble = !0), e.preventDefault(), e.stopImmediatePropagation());
});

const myurl = "rw08uks.github.io";

const d = new Date();
let year = d.getFullYear();
document.getElementById("cpr").innerHTML = year;

if (window.location.hostname == myurl) {
  // alert("Sukses");
} else {
  alert("Buy source");
  window.location.href = "https://api.whatsapp.com/send?phone=6285772757932&text=Hello,%20I%20Need%20Source%20Code%20Hot%20News%20Template.";
}