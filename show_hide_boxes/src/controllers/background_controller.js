import { Controller } from "stimulus"

class ColorGenerator {
    static randomHexColor() {
        let color = "#"
        for (let i = 0; i < 6; i++)
            color += this.generateHexDigit()
        return color;
    }

    static generateHexDigit() {
        return Math.round(Math.random() * 15).toString(16);
    }
}

export default class BackgroundController extends Controller {
    static targets = [ "bgColorText" ]

    changeColor() {
        this.color = ColorGenerator.randomHexColor()
        this.setBgColor()
        this.setBgTextColor()
    }

    setBgColor() {
        document.querySelector("body").style.backgroundColor = this.color
    }

    setBgTextColor() {
        this.bgColorTextTarget.innerText = this.color
        this.bgColorTextTarget.style.color = this.color
    }
}