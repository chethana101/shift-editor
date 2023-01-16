/* -------------------------------------
 Title Toggle Actions
------------------------------------- */
const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;
const fs = require("fs");

const close = document.getElementById("close");
const mini = document.getElementById("minimize");
const maximize = document.getElementById("maximize");

close.addEventListener("click", function () {
  // Clear the save states
  ipc.send("close");
});

mini.addEventListener("click", function () {
  ipc.send("minimize");
});

maximize.addEventListener("click", function () {
  ipc.send("maximize");
});

window.addEventListener("load", () => {
  // Clear the save states
});

/* -------------------------------------
 Title Button Dropdown Hide Option
------------------------------------- */
const dropDownButton = document.querySelectorAll(".dropdown-button");
const dropdownContent = document.querySelectorAll(".dropdown-content");
for (let i = 0; i < dropDownButton.length; i++) {
  dropDownButton[i].addEventListener("click", (e) => {
    if (e.target.closest(".dropdown")) {
      const dropDown = e.target.closest(".dropdown").getAttribute("data-id");
      if (i == dropDown) {
        dropdownContent[i].style.display = "block";
      }
      for (let g = 0; g < dropDownButton.length; g++) {
        if (g != i) {
          dropdownContent[g].style.display = "none";
        }
      }
    }
  });
  window.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      for (let g = 0; g < dropDownButton.length; g++) {
        if (g != i) {
          dropdownContent[g].style.display = "none";
        }
      }
    }
  });
}
