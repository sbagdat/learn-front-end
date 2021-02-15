document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".question-button");
  let openedBox = null;
  plusButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (openedBox !== null && e.currentTarget.parentElement.parentElement !== openedBox) {
        openedBox.classList.remove("question-box-open");
        openedBox.querySelector(".bar:last-child").classList.remove("minus");
      }

      e.currentTarget.querySelector(".bar:last-child").classList.toggle("minus");
      e.currentTarget.parentElement.parentElement.classList.toggle("question-box-open");
      openedBox = e.currentTarget.parentElement.parentElement
    });
  });
});
