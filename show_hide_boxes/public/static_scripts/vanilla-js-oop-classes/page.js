class Page {
    constructor(bgColor) {
        this.bgColor = bgColor
    }

    get backgroundColor() {
        return this.bgColor
    }

    setBackgroundColor() {
        this.bgColor = ColorGenerator.randomHexColor()
        document.querySelector("body").style.backgroundColor = this.bgColor
    }
}