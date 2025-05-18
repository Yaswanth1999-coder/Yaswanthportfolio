function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function showExperience() {
  toggleModal('expModal');
}
function showEducation() {
  toggleModal('eduModal');
}
function toggleModal(id) {
  var modal = document.getElementById(id);
  modal.style.display = (modal.style.display === "block") ? "none" : "block";
}
window.onclick = function(event) {
  ['expModal', 'eduModal'].forEach(id => {
    var modal = document.getElementById(id);
    if (event.target === modal) modal.style.display = "none";
  });
};
