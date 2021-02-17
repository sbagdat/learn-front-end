document.addEventListener("DOMContentLoaded", () => {
    const indicator = document.querySelector(".indicator")
    const decreaseBtn = document.getElementById("decrease-btn")
    const resetBtn = document.getElementById("reset-btn")
    const increaseBtn = document.getElementById("increase-btn")

    decreaseBtn.addEventListener("click", () => {
        let currentIndicatorValue = parseInt(indicator.innerText)
        if (indicator.classList.contains("negative")) {
            currentIndicatorValue = currentIndicatorValue * -1
        }
        currentIndicatorValue -= 1
        indicator.innerText = Math.abs(currentIndicatorValue).toString()
        indicator.classList.toggle("positive", currentIndicatorValue > 0)
        indicator.classList.toggle("zero", currentIndicatorValue === 0)
        indicator.classList.toggle("negative", currentIndicatorValue < 0)

        if (currentIndicatorValue === 0) {
            resetBtn.setAttribute("disabled", "disabled")
            resetBtn.style.pointerEvents = "none"
        } else {
            resetBtn.removeAttribute("disabled")
            resetBtn.style.pointerEvents = "all"
        }
    })

    resetBtn.addEventListener("click", () => {
        indicator.innerText = "0"
        indicator.classList.toggle("zero")
        indicator.classList.remove("positive")
        indicator.classList.remove("negative")
        resetBtn.setAttribute("disabled", "disabled")
        resetBtn.style.pointerEvents = "none"
    })

    increaseBtn.addEventListener("click", () => {
        let currentIndicatorValue = parseInt(indicator.innerText)
        if (indicator.classList.contains("negative")) {
            currentIndicatorValue = currentIndicatorValue * -1
        }
        currentIndicatorValue += 1
        indicator.innerText = Math.abs(currentIndicatorValue).toString()
        indicator.classList.toggle("positive", currentIndicatorValue > 0)
        indicator.classList.toggle("zero", currentIndicatorValue === 0)
        indicator.classList.toggle("negative", currentIndicatorValue < 0)

        if (currentIndicatorValue === 0) {
            resetBtn.setAttribute("disabled", "disabled")
            resetBtn.style.pointerEvents = "none"
        } else {
            resetBtn.removeAttribute("disabled")
            resetBtn.style.pointerEvents = "all"
        }
    })
})