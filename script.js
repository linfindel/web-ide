function update(lang) {
  localStorage.setItem(lang, document.getElementById(lang).value);
}

document.getElementById("html").value = localStorage.getItem("html");
document.getElementById("css").value = localStorage.getItem("css");
document.getElementById("js").value = localStorage.getItem("js");

window.onmessage = function(e) {
  if (e.data != "No errors") {
    document.getElementById("title").innerText = e.data;
    document.getElementById("nav").className = "error";
  }

  else {
    document.getElementById("title").innerText = "Web IDE";
    document.getElementById("nav").className = "";
  }
};