class Text {
    constructor(selector, text, color) {
        this.selector = selector
        this.text = text
        this.color = color
    }

    get textElement() {
        return document.querySelector(this.selector)
    }

    adjustElement() {
        this.setText()
        this.setColor()
    }

    setText() {
        this.textElement.innerText = this.text
    }

    setColor() {
        this.textElement.style.color = this.color
    }
}