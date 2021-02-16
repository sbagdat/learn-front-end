document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("toggle-btn")
  btn.addEventListener("click", () => {
    const subMenu = document.querySelector(".sub-menu-container")
    const toggleBtn = document.getElementById("toggle-btn")

    subMenu.classList.toggle("sub-menu-slide-in")
    toggleBtn.classList.toggle("active")
  })
})
