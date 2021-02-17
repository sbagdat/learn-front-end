import {Controller} from "stimulus"

export default class CounterController extends Controller {
    static classes = [ "negative", "zero", "positive" ]
    static targets = [ "indicator", "resetButton" ]

    initialize() {
        this.counter = 0
        this.adjustResetButton()
    }

    increase() {
        this.change_counter_by(1)
    }

    decrease() {
        this.change_counter_by(-1)
    }

    reset() {
        this.counter = 0
        this.adjustIndicator()
    }

    change_counter_by(value) {
        this.counter += value
        this.adjustIndicator()
    }

    get isPositive() {
        return this.counter > 0
    }

    get isNegative() {
        return this.counter < 0
    }

    get isZero() {
        return this.counter === 0
    }

    adjustIndicator() {
        this.indicatorTarget.innerText = Math.abs(this.counter)
        this.adjustIndicatorColor()
        this.adjustResetButton()
    }

    adjustIndicatorColor() {
        this.indicatorTarget.classList.toggle(this.negativeClass, this.isNegative)
        this.indicatorTarget.classList.toggle(this.zeroClass, this.isZero)
        this.indicatorTarget.classList.toggle(this.positiveClass, this.isPositive)
    }

    adjustResetButton() {
        if (this.isZero){
            this.resetButtonTarget.setAttribute("disabled", "disabled")
            this.resetButtonTarget.style.pointerEvents = "none";
        } else {
            this.resetButtonTarget.removeAttribute("disabled")
            this.resetButtonTarget.style.pointerEvents = "all";
        }
    }
}