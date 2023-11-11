// --------------index page js-------------------------
localStorage.clear();
const usernametyped = document.getElementById("username");
const nametyped = document.getElementById("name");
const save = document.getElementById("yellowbutton");

save.addEventListener("click", function () {
  event.preventDefault();
  const username = usernametyped.value;
  const name = nametyped.value;
  sessionStorage.setItem("savedUsername", username);         //   -saving username and name of user--
  sessionStorage.setItem("savedName", name);
  document.getElementById("popy").style.visibility='visible' //   --------making visible the play button----
});
nametyped.addEventListener("input", function () {
  if (
    usernametyped.value.trim() !== "" &&                     // checking weather the user input the name and username
    nametyped.value.trim() !== ""
  ) {
    save.style.visibility = "visible";                       // -making visible the play redirect button--
  }
});

//  --------------info-popup-js-------------- 

var popup = document.getElementById("popup");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var leftarrow = document.getElementById("leftarrow");
function openpopup() {
  popup.classList.add("openpopup");
  box1.classList.add("openbox1");
  box2.classList.add("openbox2");
  leftarrow.classList.add("openleftarrow");
}                                                     //popuping both credits and instruction sections
function closepopup() {
  popup.classList.remove("openpopup");
  box1.classList.remove("openbox1");
  box2.classList.remove("openbox2");
  leftarrow.classList.remove("openleftarrow");
} 