//navbar
document.getElementById("go-to-sign-in").addEventListener("click", () => {
  document.getElementById("register").style.display = "none";
  document.getElementById("sign-in").style.display = "block";
});
document.getElementById("go-to-register").addEventListener("click", () => {
  document.getElementById("register").style.display = "block";
  document.getElementById("sign-in").style.display = "none";
});
