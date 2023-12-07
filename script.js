const navbar = document.getElementById("navbar");

const cardContainer = document.getElementById("contactCard");

logoBtn.addEventListener("click", () => {
  let result = navbar.classList[0] == "navbar" ? "navbar-active" : "navbar";
  navbar.setAttribute("class", result);
});

const mainContact = document.getElementById("mainContact");
fetch("Contact/contact.html")
  .then((response) => response.text())
  .then((data) => {
    mainContact.innerHTML = data;
  })
  .catch((error) => console.error(error, "yes error"));

// button modal

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Initialize DataTable
$(document).ready(function () {
  $("#dataTable").DataTable();
});
