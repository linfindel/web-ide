function update(lang) {
  localStorage.setItem(lang, document.getElementById(lang).value);
}

document.getElementById("html").value = localStorage.getItem("html");
document.getElementById("css").value = localStorage.getItem("css");