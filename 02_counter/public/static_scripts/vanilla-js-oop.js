class Counter {
    constructor(
        value,
        targetSelector,
        indicatorSelector,
        resetButtonSelector) {
        this.value = parseInt(value)
        const target = document.querySelector(targetSelector)
        this.indicator = target.querySelector(indicatorSelector)
        this.resetButton = target.querySelector(resetButtonSelector)
    }

    get isPositive() { return (this.value > 0) }
    get isNegative() { return (this.value < 0) }
    get isZero() { return (this.value === 0) }

    decrease() {
        this.value--;
        this.adjustIndicator()
    }

    reset() {
        this.value = 0
        this.adjustIndicator()
    }

    increase() {
        this.value++
        this.adjustIndicator()
    }

    adjustIndicator() {
        this.indicator.innerText = Math.abs(this.value)
        this.adjustindicatorCssClasses()
        this.adjustResetButton()
    }

    adjustindicatorCssClasses() {
        this.indicator.classList.toggle("positive", this.isPositive)
        this.indicator.classList.toggle("zero", this.isZero)
        this.indicator.classList.toggle("negative", this.isNegative)
    }

    adjustResetButton() {
        if (this.isZero){
            this.resetButton.setAttribute("disabled", "disabled")
            this.resetButton.style.pointerEvents = "none";
        } else {
            this.resetButton.removeAttribute("disabled")
            this.resetButton.style.pointerEvents = "all";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const appCounter = new Counter(
        0,
        "#counter",
        ".indicator",
        "#reset-btn")

    const decreaseBtn = document.getElementById("decrease-btn")
    const resetBtn = document.getElementById("reset-btn")
    const increaseBtn = document.getElementById("increase-btn")
    decreaseBtn.addEventListener("click", () => { appCounter.decrease() })
    increaseBtn.addEventListener("click", () => { appCounter.increase() })
    resetBtn.addEventListener("click", () => { appCounter.reset() })
})