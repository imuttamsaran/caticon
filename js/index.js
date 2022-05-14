// Navbar
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show__links");
});

// Copy to clipboard
const copyMailId = document.querySelectorAll("#code-text");
copyMailId.forEach((copyText) => {
  copyText.addEventListener("click", () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      selection.removeAllRanges();

      const mailId = copyText.textContent;
      copyText.textContent = "Copied!";
      copyText.classList.add("success");
      setTimeout(() => {
        copyText.textContent = mailId;
        copyText.classList.remove("success");
      }, 1000);
    } catch (e) {
      copyText.textContent = "Couldn't copy, hit Ctrl+C!";
      copyText.classList.add("error");

      setTimeout(() => {
        errorMsg.classList.remove("show");
      }, 1200);
    }
  });
});


// code for open popups

var modalparent = document.getElementsByClassName("expand");

var modal_btn_multi = document.getElementsByClassName("expandBtn");

var expandClose = document.getElementsByClassName("expandClose");

function setDataIndex() {

  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute('data-index', i);
    modalparent[i].setAttribute('data-index', i);
    expandClose[i].setAttribute('data-index', i);
  }
}



for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute('data-index');
    modalparent[ElementIndex].style.display = "block";
  };

  expandClose[i].onclick = function () {
    var ElementIndex = this.getAttribute('data-index');
    modalparent[ElementIndex].style.display = "none";
  };

}

window.onload = function () {

  setDataIndex();
};

window.onclick = function (event) {
  if (event.target === modalparent[event.target.getAttribute('data-index')]) {
    modalparent[event.target.getAttribute('data-index')].style.display = "none";
  }

  if (event.target === modal) {
    modal.style.display = "none";
  }
};