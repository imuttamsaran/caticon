// Search

const searchPlace = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let ul = document.getElementById("box");
  let li = ul.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let textValue = a.textContent || a.innerHTML;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
      document.getElementById("noMatch").style.display = "none";
    } else {
      li[i].style.display = "none";
      document.getElementById("noMatch").style.display = "flex";
    }
  }
};
