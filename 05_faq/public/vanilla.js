document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".question-button");
  let openedBox = document.createElement("div");

  plusButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetBox = e.currentTarget.closest("article")
      targetBox.classList.toggle("question-box-open")
      if (targetBox !== openedBox)
        openedBox.classList.remove("question-box-open")
      openedBox = targetBox
    });
  });
});
