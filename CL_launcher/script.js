// === LOADING SCREEN ===
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");
  const launcher = document.getElementById("launcher");
  setTimeout(() => {
    loading.style.display = "none";
    launcher.classList.remove("hidden");
  }, 6000);
});

// === EDITION SWITCHING ===
function showEdition(id){
  document.querySelectorAll(".edition").forEach(sec=>sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
