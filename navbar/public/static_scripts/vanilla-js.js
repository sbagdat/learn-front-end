document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("toggle-btn")
  btn.addEventListener("click", () => {
    document.querySelector(".navbar .nav-links").classList.toggle("hide")
  })
})
